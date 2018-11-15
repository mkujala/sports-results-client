import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import { Provider } from 'mobx-react';
import store from 'store';

import Header from 'components/Header/Header';
import ViewStandings from 'views/ViewStandings/ViewStandings';
import styles from './App.css';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Provider {...store}>
          <div>
            <Header />
            <Grid container spacing={8} style={styles.contentGrid}>
              <Route exact path="/" component={ViewStandings} />
              <Route
                exact
                path="/standings/:league/:season/:venue/:conference?"
                component={ViewStandings}
              />
            </Grid>
          </div>
        </Provider>
      </BrowserRouter>
    );
  }
}
