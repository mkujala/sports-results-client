import React, { Fragment } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

export default ({ name, items, value, onchange }) => {
  const listItems = items.map(item => {
    return (
      <MenuItem key={item} value={item}>
        {item}
      </MenuItem>
    );
  });

  return (
    <Fragment>
      <InputLabel htmlFor={name}>{name}</InputLabel>
      <Select
        value={value}
        onChange={onchange}
        inputProps={{
          name: name,
          id: name
        }}
      >
        {listItems}
      </Select>
    </Fragment>
  );
};
