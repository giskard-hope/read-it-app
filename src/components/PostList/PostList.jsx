import React from 'react';
import {useSelector } from 'react-redux';
import { PostCard } from '../PostCard/PostCard';

export const PostList = () => {
    const { posts, isLoading, hasError } = useSelector((state) => state.posts);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (hasError) {
        return <p>Error loading posts. Please Try again</p>;
    }

    if (posts.length === 0) {
        return <p>No posts found.</p>
    }

    return (
        <main>
            {posts.map((post) => (
                <PostCard key={post.id} post={post} />
            ))}
        </main>
    );
};