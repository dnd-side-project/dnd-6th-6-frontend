import React from 'react';
import { ThemeProvider } from 'styled-components';
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import { theme } from '../src/styles/theme';
import { GlobalStyle } from '../src/styles/global-style';

export const decorators = [
  (Story) => (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Story />
      </ThemeProvider>
    </>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewport: {
    viewports: MINIMAL_VIEWPORTS,
  },
};
