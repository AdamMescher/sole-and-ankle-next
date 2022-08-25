import * as React from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { MantineProvider } from '@mantine/core';
import GlobalStyle from '../components/GlobalStyle';
import theme from '../components/GlobalStyle/theme';
import axeConfig from '../utils/axeConfig';

if (typeof window !== 'undefined' && process.env.NODE_ENV !== 'production') {
  const ReactDOM = require('react-dom');
  const axe = require('@axe-core/react');
  axe(React, ReactDOM, 1000, axeConfig);
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <MantineProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </MantineProvider>
    </ThemeProvider>
  );
}

export default MyApp;
