import text from 'texts/en';

export default {
  NhlTableCols: [
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
      headerClassName: 'center',
      width: 65
    },
    {
      Header: text.tableCols['gaAvg'],
      accessor: 'gaAvg',
      className: 'center',
      headerClassName: 'center',
      width: 65
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
      headerClassName: 'center',
      width: 70
    }
  ],
  KorisliigaTableCols: [
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
      Header: text.tableCols['win_p'],
      accessor: 'win_p',
      className: 'center',
      headerClassName: 'center'
    },
    {
      Header: text.tableCols['pythagoreanWins'],
      accessor: 'pythagoreanWins',
      className: 'center',
      headerClassName: 'center',
      width: 60
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
      headerClassName: 'center',
      width: 65
    },
    {
      Header: text.tableCols['gaAvg'],
      accessor: 'gaAvg',
      className: 'center',
      headerClassName: 'center',
      width: 65
    }
  ]
};
