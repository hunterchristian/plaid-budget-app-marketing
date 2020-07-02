import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@material-ui/core/styles';
import wrapPageElementWithTransition from 'helpers/wrapPageElement';
import React from 'react';
import AppProvider from 'store/provider';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);
theme.typography.h1 = {
  fontSize: '5rem',
  [theme.breakpoints.up('sm')]: {
    fontSize: '10rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '15rem',
  },
};

// React Context in Browser
// eslint-disable-next-line react/prop-types
export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={theme}>
      <AppProvider>{element}</AppProvider>
    </ThemeProvider>
  );
};

// Page Transitions
export const wrapPageElement = wrapPageElementWithTransition;
