import React, { Component } from 'react';
import { Grid, Paper } from '@material-ui/core';
import { observer, inject } from 'mobx-react';
import { CircularProgress } from '@material-ui/core';

// import text from 'texts/en';

// import Table from './Table/Table';

@inject('standingsStore')
@observer
class ViewStandings extends Component {
  componentDidMount() {
    let { league, venue, season, conference } = this.props.match.params; // url parameters
    this.props.standingsStore.fetchStandings(league, venue, season, conference);
  }
  renderData() {
    if (this.props.standingsStore.standingsState !== 'done') {
      return <CircularProgress />; // wait until the fetch is done and the store is updated
    } else {
      return (
        <Grid item xs={12}>
          <p>Hello from StandingsView</p>
        </Grid>
      );
    }
  }
  render() {
    return (
      <Grid item xs={12}>
        <Paper>{this.renderData()}</Paper>
      </Grid>
    );
  }
}

export default ViewStandings;
