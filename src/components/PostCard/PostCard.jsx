import React from 'react';
import { useDispatch } from 'react-redux';
import { setSelectedPost, fetchComments } from '../../features/posts/postsSlice';

export const PostCard = ({ post }) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        console.log("Clicked post object:", post)
        dispatch(setSelectedPost(post));
        dispatch(fetchComments(post.permalink));
    };

    return (
        <article onClick={handleClick} style={{ cursor: 'pointer' }}>
            <h2>{post.title}</h2>

            <p>Posted by {post.author}</p>
            <span>{post.score} votes</span>
            <br></br>
            {post.thumbnail && post.thumbnail.startsWith('http') && (
                <img src={post.thumbnail} alt="" />
            )}
        </article>
    );
};