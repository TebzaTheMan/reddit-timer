import axios from 'axios';
import { useState, useEffect } from 'react';

export const fetchPosts = async (subreddit) => {
  const res = await axios.get(`https://reddit.com/r/${subreddit}/top.json?t=year&limit=100`);
  const data = await res.data.data.children;
  return data;
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
