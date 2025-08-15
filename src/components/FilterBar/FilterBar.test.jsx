import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import {configureStore } from '@reduxjs/toolkit';
import { FilterBar } from './FilterBar';
import postsReducer from '../../features/posts/postsSlice';

const createMockStore = (preloadedState) => {
    return configureStore({
        reducer: { posts: postsReducer },
        preloadedState,
    });
};

describe('FilterBar component', () => {
    it('renders all filter buttons', () => {
        const store = createMockStore({
            posts: {activeFilter: 'hot' },
        });

        render(
            <Provider store={store}>
                <FilterBar />
            </Provider>
        );

        expect(screen.getByText('Hot')).toBeInTheDocument();
        expect(screen.getByText('New')).toBeInTheDocument();
        expect(screen.getByText('Top')).toBeInTheDocument();
    });
});