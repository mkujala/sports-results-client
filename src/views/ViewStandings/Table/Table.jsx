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
      <Table
        style={componentStyles.table}
        fixedHeader={false}
        // style={{ width: 'auto', tableLayout: 'auto' }}
      >
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
                <TableCell cellContent={n.team} />
                <TableCell cellContent={n.gp} />
                <TableCell cellContent={n.wins} />
                <TableCell cellContent={n.loses} />
                <TableCell cellContent={n.otWins} />
                <TableCell cellContent={n.otLoses} />
                <TableCell cellContent={n.strWin_p} />
                <TableCell cellContent={n.win_p} />
                <TableCell cellContent={n.ot_p} />
                <TableCell cellContent={n.gf} />
                <TableCell cellContent={n.ga} />
                <TableCell cellContent={n.gfAvg} />
                <TableCell cellContent={n.gaAvg} />
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
