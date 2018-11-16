import React from 'react';
// import { Link } from 'react-router-dom';
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  Typography,
  Paper
} from '@material-ui/core';
import TableCell from 'components/Table/TableCell';
import componentStyles from 'components/Table/Table.css';

export default props => {
  return (
    <Paper style={componentStyles.root}>
      <Typography variant="h6" color="inherit">
        {props.pageHeader}
      </Typography>
      <Table style={componentStyles.table}>
        <TableHead>
          <TableRow>
            {/* Create Table Head Row with col names */}
            {props.tableCols.map(n => {
              return <TableCell key={n.name} cellContent={n.name} />;
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map(n => {
            return (
              <TableRow key={n.team}>
                <TableCell component="th" scope="row" cellContent={n.team} />
                <TableCell cellContent={n.venue} />
                <TableCell cellContent={n.pts} />
                <TableCell cellContent={n.ptsAvg} />
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
};
