import React from 'react';
import SubredditForm from '../components/SubredditForm';
import { StyledHero, Title } from '../styles/Hero.elements';

export default function Search() {
  return (
    <StyledHero>
      <Title>Find the best time for a subreddit</Title>
      <SubredditForm />
    </StyledHero>
  );
}
