import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getPosts, searchPosts, getComments  } from '../../api/reddit';

export const fetchComments = createAsyncThunk(
    'posts/fetchComments',
    async (permalink) => {
        const comments = await getComments(permalink);
        return comments;
    }
)

export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async () => {
        const posts = await getPosts();
        return posts;
    }
);

export const performSearch = createAsyncThunk(
    'posts/performSearch',
    async (searchTerm) => {
        const posts = await searchPosts(searchTerm);
        return posts;
    }
)

const initialState = {
    posts: [],
    isLoading: false,
    hasError: false,
    selectedPost: null,
    comments: [],
    commentsIsLoading: false,
    commentsHasError: false,
};

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setSelectedPost: (state, action) => {
            state.selectedPost = action.payload;
        },
        clearSelectedPost: (state) => {
            state.selectedPost = null;
            state.comments = [];
        },
    },
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
            })
            .addCase(performSearch.pending, (state) => {
                state.isLoading = true;
                state.hasError = false;
            })
            .addCase(performSearch.fulfilled, (state, action) => {
                state.isLoading = false;
                state.posts = action.payload;
            })
            .addCase(performSearch.rejected, (state) => {
                state.isLoading = false;
                state.hasError = true;
            })
            .addCase(fetchComments.pending, (state) => {
                state.commentsIsLoading = true;
                state.commentsHasError = false;
            })
            .addCase(fetchComments.fulfilled, (state, action) => {
                state.commentsIsLoading = false;
                state.comments = action.payload;
            })
            .addCase(fetchComments.rejected, (state) => {
                state.commentsISLoading = false;
                state.commentsHasError = true;
            });
     },
});

export default postsSlice.reducer;

export const { setSelectedPost, clearSelectedPost } = postsSlice.actions;