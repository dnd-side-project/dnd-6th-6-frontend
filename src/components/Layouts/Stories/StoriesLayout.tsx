import React from 'react';
import { StyledStoriesLayout } from './StoriesLayoutStyled';

const StoriesLayout: React.FC = (props) => {
  return <StyledStoriesLayout>{props.children}</StyledStoriesLayout>;
};

export default StoriesLayout;
