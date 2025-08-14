import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { performSearch } from '../../features/posts/postsSlice';

export const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(performSearch(searchTerm));
    }; 

    return (
    <form onSubmit={handleSubmit}>
        <input 
            type="search" 
            placeholder="Search Reddit" 
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)} 
        />
    </form>
    );
};