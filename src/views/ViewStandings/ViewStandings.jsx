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
  updateSelect(event) {
    // console.log('updateSelect called with value:', event.target);
    this.props.standingsStore.updateSelectState(
      event.target.name.toLowerCase(),
      event.target.value
    );
  }
  renderData() {
    if (this.props.standingsStore.standingsState !== 'done') {
      return <CircularProgress />; // wait until the fetch is done and the store is updated
    } else {
      if (!this.props.standingsStore.selectStates.league) {
        // Implement -> get parameters from url
        let values = { league: 'nhl', season: 20172018, conference: 'east', venue: 'all' };
        this.props.standingsStore.selectStates = values;
      }
      const data = this.props.standingsStore.standings;
      let conference = '';
      if (this.props.match.params.conference) {
        conference = this.props.match.params.conference;
      }

      const pageHeader = `${text.header['mainTable']} 
                          ${this.props.match.params.season.substring(0, 4)} 
                          - ${this.props.match.params.season.substring(4, 8)} 
                          ${conference} ${this.props.match.params.venue}`;

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
          <FormSelect
            name="League"
            items={['nhl', 'koris']}
            value={this.props.standingsStore.selectStates.league}
            onchange={this.updateSelect.bind(this)}
          />
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
