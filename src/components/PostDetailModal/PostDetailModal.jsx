import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearSelectedPost } from '../../features/posts/postsSlice';

export const PostDetailModal = () => {
    const { selectedPost, comments, commentsIsLoading } = useSelector((state) => state.posts);
    const dispatch = useDispatch();

    if (!selectedPost) {
        return null;
    }

    const handleClose = () => {
        dispatch(clearSelectedPost());
    };

    return (
        <div className="modal-overlay" onClick={handleClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button onClick={handleClose} className="close-button">X</button>
                <h2>{selectedPost.title}</h2>
                <p>by {selectedPost.author}</p><hr />
                <h3>Comments</h3>
                {commentsIsLoading ? (
                    <p> Loading comments...</p>
                ) : (
                    <ul>
                        {comments.map((comment) => (
                            <li key={comment.id}>{comment.body}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};