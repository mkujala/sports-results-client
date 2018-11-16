import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import { observer, inject } from 'mobx-react';
import { CircularProgress } from '@material-ui/core';

import text from 'texts/en';

import Table from './Table/Table';

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
      const data = this.props.standingsStore.standings;
      console.log(data);
      const pageHeader = `${text.header['mainTable']} ${
        this.props.match.params.season
      }`;
      const tableCols = [
        { name: text.tableCols['team'], value: 'team' },
        { name: text.tableCols['venue'], value: 'venue' },
        { name: text.tableCols['pts'], value: 'pts' },
        { name: text.tableCols['ptsAvg'], value: 'ptsAvg' }
      ];
      return (
        <Table pageHeader={pageHeader} data={data} tableCols={tableCols} />
      );
    }
  }
  render() {
    return (
      <Grid item xs={12}>
        {this.renderData()}
      </Grid>
    );
  }
}

export default ViewStandings;
