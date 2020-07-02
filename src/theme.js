import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@material-ui/core/styles';
import React from 'react';

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

const AppThemeProvider = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default AppThemeProvider;
