import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
//import Menu from 'components/Menu/Menu';
import text from 'texts/en';

const theme = createMuiTheme({
  palette: {
    primary: blue
  },
  typography: {
    useNextVariants: true
  }
});

export default () => {
  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              {text['header.mainPage']}
            </Typography>
          </Toolbar>
        </AppBar>
      </MuiThemeProvider>
    </div>
  );
};
