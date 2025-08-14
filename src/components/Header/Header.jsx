import React from 'react';
import { SearchBar } from '../SearchBar/SearchBar';

export const Header = () => {
    return (
        <header>
            <h1>Read-it</h1>
            <SearchBar />   
        </header>
    );
};