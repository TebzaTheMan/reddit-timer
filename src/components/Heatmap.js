import React from 'react';
import {
  useParams,
} from 'react-router-dom';
import { useFetchPosts } from '../hooks/useFetchPosts';
import Spinner from '../assets/loading.gif';
// eslint-disable-next-line no-unused-vars
import { ErrorText, LoadingIndicator } from '../styles/Heatmap.elements';

export default function Heatmap() {
  const { subreddit } = useParams();
  const { posts, loading, error } = useFetchPosts(subreddit);

  if (loading) {
    return <LoadingIndicator src={Spinner} alt="loading posts..." />;
  }
  if (error) {
    return (
      <ErrorText>
        {error}
      </ErrorText>
    );
  }
  return (
    <div>
      number of posts:
      {' '}
      {posts.length}
    </div>
  );
}
