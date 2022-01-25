import React, { useEffect, useState } from 'react';
import {
  useParams, useNavigate,
} from 'react-router-dom';
import { Button } from '../styles/Global';
import { Subtitle } from '../styles/Hero.elements';
import { Input, SubredditForm as SubForm } from '../styles/Search.elements';

export default function SubredditForm() {
  const { subreddit: defaultSubreddit } = useParams();
  const [subreddit, setSubreddit] = useState(defaultSubreddit);
  const navigate = useNavigate();

  useEffect(() => {
    setSubreddit(defaultSubreddit);
  }, [defaultSubreddit]);

  const handleChange = (e) => {
    setSubreddit(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${subreddit}`);
  };
  return (
    <SubForm name="subreddit-form" data-testid="subreddit-form">
      <Subtitle>
        r /
      </Subtitle>
      <Input
        type="text"
        placeholder="subreddit"
        value={subreddit}
        onChange={handleChange}
        name="subreddit"
        data-testid="subreddit-input"
      />
      <Button as="button" onClick={handleSubmit}>SEARCH</Button>
    </SubForm>
  );
}
