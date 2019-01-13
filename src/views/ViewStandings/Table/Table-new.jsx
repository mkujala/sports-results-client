import React, { Component } from 'react';
// import { observer, inject } from 'mobx-react';
import { Grid } from '@material-ui/core';
import ReactTable from 'react-table';
import withFixedColumns from 'react-table-hoc-fixed-columns';
import 'react-table/react-table.css';
import './test.css';
const ReactTableFixedColumns = withFixedColumns(ReactTable);

class Table extends Component {
  render() {
    return <div>table</div>;
  }
}

export default Table;
