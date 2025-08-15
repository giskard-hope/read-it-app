import {describe, it, expect } from 'vitest';
import postsReducer, { setSelectedPost } from './postsSlice';

describe('posts slice', () => {
    const initialState = {
        posts: [],
        isLoading: false,
        hasError: false,
        selectedPost: null,
        comments: [],
        commentsIsLoading: false,
        commentsHasError: false,
        activeFilter: 'hot',
    };

    it('should handle setSelectedPost', () => {
        const mockPost = {id: '123', title: 'Test Post' };
        const action = setSelectedPost(mockPost);
        const newState = postsReducer(initialState, action);

        expect(newState.selectedPost).toEqual(mockPost);
    });
});