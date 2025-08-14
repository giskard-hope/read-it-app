import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../../features/posts/postsSlice';

export const FilterBar = () => {
    const dispatch = useDispatch();
    const activeFilter = useSelector((state) => state.posts.activeFilter);
    const filters = ['hot', 'new', 'top'];

    return (
        <div className="filter-bar">
            {filters.map((filter) => (
                <button
                    key={filter}
                    onClick={() => dispatch(fetchPosts(filter))}
                    className={activeFilter === filter ? 'active' : ''}
                >
                    {filter.charAt(0).toUpperCase() + filter.slice(1)}

                </button>
            ))}
        </div>
    );
};
