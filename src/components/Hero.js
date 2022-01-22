import React from 'react';
import { DEFAULTSUBREDDIT } from '../constants';
import {
  Button, DefaultSubreddit, HeroImg, StyledHero, Subtitle, Title,
} from '../styles/Hero.styled';

export default function Hero() {
  return (
    <StyledHero>
      <Title>No reactions to your reddit posts?</Title>
      <Subtitle>
        Great timing, great results! Find the
        best time to post on your subreddit.
      </Subtitle>
      <Button to={`/search/${DEFAULTSUBREDDIT}`}>SHOW ME THE BEST TIME</Button>
      <DefaultSubreddit>
        r/
        {`${DEFAULTSUBREDDIT}`}
      </DefaultSubreddit>
      <HeroImg src="./images/table.png" alt="javascript table" />
    </StyledHero>
  );
}
