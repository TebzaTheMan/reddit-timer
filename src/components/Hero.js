import React from 'react';
import { DEFAULTSUBREDDIT } from '../constants';
import { Button } from '../styles/Global';
import {
  DefaultSubreddit, HeroImg, StyledHero, Subtitle, Title,
} from '../styles/Hero.elements';

export default function Hero() {
  return (
    <StyledHero>
      <Title>No reactions to your reddit posts?</Title>
      <Subtitle mb="2.813rem">
        Great timing, great results! Find the
        best time to post on your subreddit.
      </Subtitle>
      <Button to={`/search/${DEFAULTSUBREDDIT}`} mb="2.875rem">SHOW ME THE BEST TIME</Button>
      <DefaultSubreddit>
        r/
        {`${DEFAULTSUBREDDIT}`}
      </DefaultSubreddit>
      <HeroImg src="./images/table.png" alt="javascript table" />
    </StyledHero>
  );
}
