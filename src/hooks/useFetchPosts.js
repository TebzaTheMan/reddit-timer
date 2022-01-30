import axios from 'axios';
import { useState, useEffect } from 'react';

export const fetchPosts = async (subreddit, previousPosts = [], after = null) => {
  let url = `https://reddit.com/r/${subreddit}/top.json?t=year&limit=100`;

  if (after) {
    url += `&after=${after}`;
  }
  const res = await axios.get(url);
  const { data } = res.data;
  const newPosts = data.children;
  const allPosts = previousPosts.concat(newPosts);

  const noMorePosts = data && data.dist < 100;
  const limitReached = allPosts.length >= 500;
  if (noMorePosts || limitReached) {
    return allPosts;
  }

  return fetchPosts(subreddit, allPosts, data.after);
};
export const useFetchPosts = (subreddit) => {
  const [posts, setPosts] = useState(null);
  const [isloading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetchPosts(subreddit).then((newPosts) => {
      setPosts(newPosts);
      setLoading(false);
    }).catch((err) => {
      setError(err.message);
      setLoading(false);
    });
  }, [subreddit]);
  return {
    posts, loading: isloading, error,
  };
};
