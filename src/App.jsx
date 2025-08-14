import React, {useEffect } from 'react';
import {useDispatch } from 'react-redux';
import {fetchPosts } from './features/posts/postsSlice';

import { Header } from './components/Header/Header';
import { PostList } from './components/PostList/PostList';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <PostList />
    </div>
  )
}

export default App;