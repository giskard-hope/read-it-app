import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getPosts } from '../../api/reddit';

export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async () => {
        const posts = await getPosts();
        return posts;
    }
);

const initialState = {
    posts: [],
    isLoading: false,
    hasError: false,
};

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.isLoading = true;
                state.hasError = false;
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.posts = action.payload;
            })
            .addCase(fetchPosts.rejected, (state) => {
                state.isLoading = false;
                state.hasError = true;
            });
     },
});

export default postsSlice.reducer;