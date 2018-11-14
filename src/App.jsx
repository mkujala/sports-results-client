import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import styles from './App.css';

import Header from 'components/Header/Header';
import ViewStandings from 'views/ViewStandings/ViewStandings';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Grid container spacing={8} style={styles.contentGrid}>
            <Route exact path="/" component={ViewStandings} />
            <Route
              exact
              path="/standings/:league/:season/:venue/:conference"
              component={ViewStandings}
            />
          </Grid>
        </div>
      </BrowserRouter>
    );
  }
}
