import React, { Component, Fragment } from 'react';
import { Grid } from '@material-ui/core';
import { observer, inject } from 'mobx-react';
import { CircularProgress, Typography } from '@material-ui/core';
import ReactTable from 'react-table';
import withFixedColumns from 'react-table-hoc-fixed-columns';
import 'react-table/react-table.css';
import './ViewStandings.css';
import text from 'texts/en';
const ReactTableFixedColumns = withFixedColumns(ReactTable);

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
      let conference = '';
      if (this.props.match.params.conference) {
        conference = this.props.match.params.conference;
      }

      const pageHeader = `${text.header['mainTable']} 
                          ${this.props.match.params.season.substring(0, 4)} 
                          - ${this.props.match.params.season.substring(4, 8)} 
                          ${conference} ${this.props.match.params.venue}`;

      const tableCols = [
        {
          Header: text.tableCols['team'],
          accessor: 'team',
          fixed: 'left',
          className: 'left',
          headerClassName: 'left'
        },
        {
          Header: text.tableCols['gp'],
          accessor: 'gp',
          className: 'center',
          headerClassName: 'center'
        },
        {
          Header: text.tableCols['wins'],
          accessor: 'wins',
          className: 'center',
          headerClassName: 'center'
        },
        {
          Header: text.tableCols['loses'],
          accessor: 'loses',
          className: 'center',
          headerClassName: 'center'
        },
        {
          Header: text.tableCols['otWins'],
          accessor: 'otWins',
          className: 'center',
          headerClassName: 'center'
        },
        {
          Header: text.tableCols['otLoses'],
          accessor: 'otLoses',
          className: 'center',
          headerClassName: 'center'
        },
        {
          Header: text.tableCols['strWin_p'],
          accessor: 'strWin_p',
          className: 'center',
          headerClassName: 'center'
        },
        {
          Header: text.tableCols['win_p'],
          accessor: 'win_p',
          className: 'center',
          headerClassName: 'center'
        },
        {
          Header: text.tableCols['ot_p'],
          accessor: 'ot_p',
          className: 'center',
          headerClassName: 'center'
        },
        {
          Header: text.tableCols['gf'],
          accessor: 'gf',
          className: 'center',
          headerClassName: 'center'
        },
        {
          Header: text.tableCols['ga'],
          accessor: 'ga',
          className: 'center',
          headerClassName: 'center'
        },
        {
          Header: text.tableCols['gfAvg'],
          accessor: 'gfAvg',
          className: 'center',
          headerClassName: 'center'
        },
        {
          Header: text.tableCols['gaAvg'],
          accessor: 'gaAvg',
          className: 'center',
          headerClassName: 'center'
        },
        {
          Header: text.tableCols['pts'],
          accessor: 'pts',
          className: 'center',
          headerClassName: 'center'
        },
        {
          Header: text.tableCols['ptsAvg'],
          accessor: 'ptsAvg',
          className: 'center',
          headerClassName: 'center'
        }
      ];

      return (
        <Fragment>
          <Typography variant="h6" color="inherit">
            {pageHeader}
          </Typography>
          <ReactTableFixedColumns
            data={data}
            columns={tableCols}
            style={{ height: 500 }}
            showPagination={false}
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
