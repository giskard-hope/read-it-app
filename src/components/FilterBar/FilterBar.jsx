import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchPosts } from '../../features/posts/postsSlice';

export const FilterBar = () => {
    const dispatch = useDispatch();

    return (
        <div className="filter-bar">
            <button onClick={() => dispatch(fetchPosts('hot'))}>Hot</button> 
            <button onClick={() => dispatch(fetchPosts('new'))}>New</button> 
            <button onClick={() => dispatch(fetchPosts('top'))}>Top</button> 
        </div>
    );
};
