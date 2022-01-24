import React, { useEffect, useState } from 'react';
import {
  useParams,
} from 'react-router-dom';
import { Button } from '../styles/Global';
import { Subtitle } from '../styles/Hero.elements';
import { Input, SubredditForm as SubForm } from '../styles/Search.elements';

export default function SubredditForm() {
  const { subreddit: defaultSubreddit } = useParams();
  const [subreddit, setSubreddit] = useState(defaultSubreddit);

  useEffect(() => {
    setSubreddit(defaultSubreddit);
  }, [defaultSubreddit]);

  const handleChange = (e) => {
    setSubreddit(e.target.value);
  };
  return (
    <SubForm>
      <Subtitle>
        r /
      </Subtitle>
      <Input
        type="text"
        placeholder="subreddit"
        value={subreddit}
        onChange={handleChange}
        name="subreddit"
        id="subreddit"
        htmlFor="subreddit"
      />
      <Button to={`/search/${subreddit}`}>SEARCH</Button>
    </SubForm>
  );
}
