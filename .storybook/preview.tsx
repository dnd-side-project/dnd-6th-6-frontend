import React from 'react';
import { ThemeProvider } from 'styled-components';
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import { theme } from '../src/styles/theme';
import { GlobalStyle } from '../src/styles/global-style';
import { MemoryRouter } from 'react-router';
export const decorators = [
  (Story) => (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MemoryRouter initialEntries={['/']}>{Story()}</MemoryRouter>
      </ThemeProvider>
    </>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewport: {
    viewports: MINIMAL_VIEWPORTS,
    defaultViewport: 'mobile2',
  },
};
