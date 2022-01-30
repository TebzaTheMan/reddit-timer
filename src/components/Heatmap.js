import React from 'react';
import {
  useParams,
} from 'react-router-dom';
import { useFetchPosts } from '../hooks/useFetchPosts';
import Spinner from '../assets/loading.gif';
import { LoadingIndicator } from '../styles/Search.elements';

export default function Heatmap() {
  const { subreddit } = useParams();
  const { posts, loading, error } = useFetchPosts(subreddit);

  if (loading) {
    return <LoadingIndicator src={Spinner} alt="loading posts..." />;
  }
  if (error) {
    return <p>{error}</p>;
  }
  if (posts) {
    return (
      <div>
        number of posts:
        {' '}
        {posts.length}
      </div>
    );
  }
}
