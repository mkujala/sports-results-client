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
      // console.log('props', this.props);
      let conference = '';
      if (this.props.match.params.conference) {
        conference = this.props.match.params.conference;
      }

      const pageHeader = `${text.header['mainTable']} ${
        this.props.match.params.season
      } ${conference} ${this.props.match.params.venue}`;

      const tableCols = [
        { name: text.tableCols['team'], value: 'team' },
        { name: text.tableCols['gp'], value: 'gp' },
        { name: text.tableCols['wins'], value: 'wins' },
        { name: text.tableCols['loses'], value: 'loses' },
        { name: text.tableCols['otWins'], value: 'otWins' },
        { name: text.tableCols['otLoses'], value: 'otLoses' },
        { name: text.tableCols['strWin_p'], value: 'strWin_p' },
        { name: text.tableCols['win_p'], value: 'win_p' },
        { name: text.tableCols['ot_p'], value: 'ot_p' },
        { name: text.tableCols['gf'], value: 'gf' },
        { name: text.tableCols['ga'], value: 'ga' },
        { name: text.tableCols['gfAvg'], value: 'gfAvg' },
        { name: text.tableCols['gaAvg'], value: 'gaAvg' },
        { name: text.tableCols['pts'], value: 'pts' },
        { name: text.tableCols['ptsAvg'], value: 'ptsAvg' }
      ];

      return (
        <Table pageHeader={pageHeader} data={data} tableCols={tableCols} />
      );
    }
  }
  // renderTableCells(data) {
  //   let tableCells = [];
  //   data.map(team => {
  //     console.log('team', team);
  //     // team.map(item => {
  //     // tableCells.push(`<TableCell cellContent=${item} />`);
  //     // });
  //   });
  //   console.log('rows', tableCells);
  //   return tableCells;
  // }

  render() {
    return (
      <Grid item xs={12}>
        {this.renderData()}
      </Grid>
    );
  }
}

export default ViewStandings;
