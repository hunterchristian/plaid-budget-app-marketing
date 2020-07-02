import wrapPageElementWithTransition from 'helpers/wrapPageElement';
import React from 'react';
import { renderToString } from 'react-dom/server';
import AppProvider from 'store/provider';
import { ServerStyleSheet } from 'styled-components';
import AppThemeProvider from './src/theme';

export const replaceRenderer = ({
  bodyComponent,
  replaceBodyHTMLString,
  setHeadComponents,
}) => {
  // React Context in SSR/build
  const ConnectedBody = () => (
    <AppThemeProvider>
      <AppProvider>{bodyComponent}</AppProvider>
    </AppThemeProvider>
  );
  replaceBodyHTMLString(renderToString(<ConnectedBody />));

  // Add styled-components in SSR/build
  const sheet = new ServerStyleSheet();
  const bodyHTML = renderToString(sheet.collectStyles(<ConnectedBody />));
  const styleElement = sheet.getStyleElement();
  setHeadComponents(styleElement);
};

// Page Transitions
export const wrapPageElement = wrapPageElementWithTransition;
