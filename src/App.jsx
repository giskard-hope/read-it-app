import React, {useEffect, Suspense } from 'react';
import {useDispatch } from 'react-redux';

import {fetchPosts } from './features/posts/postsSlice';
import { Header } from './components/Header/Header';
import { PostList } from './components/PostList/PostList';
// import { PostDetailModal } from './components/PostDetailModal/PostDetailModal';
import { FilterBar } from './components/FilterBar/FilterBar';

import './App.css';

const PostDetailModal = React.lazy(() => import('./components/PostDetailModal/PostDetailModal'));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts('hot'));
  }, [dispatch]);

  return (
    <div>
      <Header />
      <FilterBar />
      <PostList />
      <Suspense fallback={<div>Loading...</div>}>
        <PostDetailModal />
      </Suspense>
    </div>
  )
}

export default App;