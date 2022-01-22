import React from 'react';
import {
  List, ListItem, SecHeading, ExtLink,
} from '../styles/Global';
import {
  About, HowItWorks, InfoSection, Text,
} from '../styles/InfoSection.elements';

export default function Info() {
  return (
    <InfoSection>
      <HowItWorks id="how-it-works">
        <SecHeading mb="0.75rem">How it works</SecHeading>
        <List>
          <ListItem> We find the 500 top posts from the past year for a subreddit.</ListItem>
          <ListItem>
            The data is visualized in a heatmap grouped by weekday
            and hour of the day.
          </ListItem>
          <ListItem>See immediately when to submit your reddit post.</ListItem>
        </List>
      </HowItWorks>

      <About id="about">
        <SecHeading mb="0.813rem">About</SecHeading>
        <Text>
          This app was created during a course on
          {' '}
          <ExtLink href="https://profy.dev">profy.dev</ExtLink>
          {' '}
          with the goal to implement a pixel-perfect real-world
          application with professional workflows and tools like
          Kanban, Clickup, Figma, GitHub, pull requests and
          code reviews.
          {' '}
          <ExtLink href="https://profy.dev/employers">Click here for more information.</ExtLink>
        </Text>
      </About>
    </InfoSection>
  );
}
