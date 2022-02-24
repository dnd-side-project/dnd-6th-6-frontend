import React from 'react';
import { ThemeProvider } from 'styled-components';
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import { theme } from '../src/styles/theme';
import { GlobalStyle } from '../src/styles/global-style';
import { MemoryRouter } from 'react-router';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();
export const decorators = [
  (Story) => (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <MemoryRouter initialEntries={['/']}>{Story()}</MemoryRouter>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  ),
];

export const parameters = {
  layout: 'fullscreen',
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewport: {
    viewports: MINIMAL_VIEWPORTS,
    defaultViewport: 'mobile2',
  },
};
