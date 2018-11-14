import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
// import { observer, inject } from 'mobx-react';
// import text from 'texts/en';

// import Table from './Table/Table';

// @inject('customerCaseStore')
// @observer
export default class MainPage extends Component {
  render() {
    return (
      <Grid item xs={12}>
        <p>Hello from StandingsView</p>
      </Grid>
    );
  }
}
