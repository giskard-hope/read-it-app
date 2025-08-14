import React from 'react';

export const PostCard = ({ post }) => {
    return (
        <article>
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