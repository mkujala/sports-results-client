import React, { Component } from 'react';
// import { observer, inject } from 'mobx-react';
import { Grid } from '@material-ui/core';

import ReactTable from 'react-table';
import withFixedColumns from 'react-table-hoc-fixed-columns';
import 'react-table/react-table.css';
const ReactTableFixedColumns = withFixedColumns(ReactTable);

// @inject('standingsStore')
// @observer

let data = [
  { firstName: 'james', lastName: 'bond', gender: 'male', age: 47 },
  { firstName: 'rocky', lastName: 'balboa', gender: 'male', age: 38 }
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
              fixed: 'left'
            },
            {
              Header: 'Last Name',
              accessor: 'lastName'
            },
            {
              Header: 'Gender',
              accessor: 'gender'
            },
            {
              Header: 'Last Name',
              accessor: 'lastName'
            },
            {
              Header: 'Gender',
              accessor: 'gender'
            },
            {
              Header: 'age',
              accessor: 'age'
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
