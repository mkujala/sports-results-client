import React, { Component } from 'react';
// import { observer, inject } from 'mobx-react';
import { Grid } from '@material-ui/core';

import ReactTable from 'react-table';
import withFixedColumns from 'react-table-hoc-fixed-columns';
import 'react-table/react-table.css';
import './test.css';
const ReactTableFixedColumns = withFixedColumns(ReactTable);

// @inject('standingsStore')
// @observer

let data = [
  {
    firstName: 'james',
    lastName: 'bond',
    gp: 82,
    goals: 47,
    assists: 28,
    points: 75,
    pim: 100
  },
  {
    firstName: 'rocky',
    lastName: 'balboa',
    gp: 82,
    goals: 7,
    assists: 8,
    points: 15,
    pim: 448
  }
];

class TestView extends Component {
  render() {
    return (
      <Grid item xs={12}>
        <ReactTableFixedColumns
          data={data}
          columns={[
            {
              Header: 'First Name',
              accessor: 'firstName',
              fixed: 'left',
              headerClassName: 'left'
            },
            {
              Header: 'Last Name',
              accessor: 'lastName',
              headerClassName: 'left'
            },
            {
              Header: 'GP',
              accessor: 'gp',
              className: 'center',
              headerClassName: 'center'
            },
            {
              Header: 'G',
              accessor: 'goals',
              headerClassName: 'center',
              className: 'center'
            },
            {
              Header: 'A',
              accessor: 'assists',
              headerClassName: 'center',
              className: 'center'
            },
            {
              Header: 'PTS',
              accessor: 'points',
              headerClassName: 'center',
              className: 'center'
            },
            {
              Header: 'PIM',
              accessor: 'pim',
              headerClassName: 'center',
              className: 'center'
            }
          ]}
          style={{ height: 300 }}
          showPagination={false}
          // showPaginationBottom={false}
        />
      </Grid>
    );
  }
}

export default TestView;
