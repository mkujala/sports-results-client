import React, { Component, Fragment } from 'react';
import { Grid } from '@material-ui/core';
import { observer, inject } from 'mobx-react';
import { CircularProgress, Typography } from '@material-ui/core';
import ReactTable from 'react-table';
import withFixedColumns from 'react-table-hoc-fixed-columns';
import 'react-table/react-table.css';
import './ViewStandings.css';
import text from 'texts/en';
import TableCols from './TableCols/TableCols';
import FormSelect from 'components/FormSelect/FormSelect';
const ReactTableFixedColumns = withFixedColumns(ReactTable);

@inject('standingsStore')
@observer
class ViewStandings extends Component {
  componentDidMount() {
    let { league, venue, season, conference } = this.props.match.params; // url parameters
    this.props.standingsStore.fetchStandings(league, venue, season, conference);
  }
  updateSelect() {
    console.log('updateSelect called!');
  }
  renderData() {
    if (this.props.standingsStore.standingsState !== 'done') {
      return <CircularProgress />; // wait until the fetch is done and the store is updated
    } else {
      const data = this.props.standingsStore.standings;
      let conference = '';
      if (this.props.match.params.conference) {
        conference = this.props.match.params.conference;
      }

      const pageHeader = `${text.header['mainTable']} 
                          ${this.props.match.params.season.substring(0, 4)} 
                          - ${this.props.match.params.season.substring(4, 8)} 
                          ${conference} ${this.props.match.params.venue}`;

      if (true) {
        // Implement -> get parameters from url
        let values = { league: 'nhl', season: 20172018, conference: 'east', venue: 'all' };
        this.props.standingsStore.selectValues = values;
      }

      let tableCols;
      switch (this.props.match.params.league) {
        case 'nhl':
          tableCols = TableCols.NhlTableCols;
          break;
        case 'koris':
          tableCols = TableCols.KorisliigaTableCols;
          break;
        default:
          break;
      }

      return (
        <Fragment>
          <Typography variant="h6" color="inherit">
            {pageHeader}
          </Typography>
          <FormSelect name="Leagues" items={['nhl', 'koris']} onchange={this.updateSelect()} />
          <ReactTableFixedColumns
            data={data}
            columns={tableCols}
            style={{ height: '100%' }}
            showPagination={false}
            minRows={0}
          />
        </Fragment>
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
