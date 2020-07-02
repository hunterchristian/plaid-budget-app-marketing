import wrapPageElementWithTransition from 'helpers/wrapPageElement';
import React from 'react';
import AppProvider from 'store/provider';
import AppThemeProvider from './src/theme';

// React Context in Browser
// eslint-disable-next-line react/prop-types
export const wrapRootElement = ({ element }) => {
  return (
    <AppThemeProvider>
      <AppProvider>{element}</AppProvider>
    </AppThemeProvider>
  );
};

// Page Transitions
export const wrapPageElement = wrapPageElementWithTransition;
