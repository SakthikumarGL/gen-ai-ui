import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './genAIDropDownSelect.scss';
import FormHelperText from '@material-ui/core/FormHelperText';

const GenAIDropDownSelect = (props) => (
  <FormControl sx={{ m: 1, minWidth: 120, margin: 0 }} size="small" fullWidth>
    <Select
      value={props.value}
      onChange={props.onChange}
      displayEmpty
      inputProps={{ 'aria-label': 'Without label' }}
      {...props}
    >
      <MenuItem disabled value="">
        <em>{props.placeholder}</em>
      </MenuItem>
      {props.menuItems.map((menuItem, id) => (
        // eslint-disable-next-line react/no-array-index-key
        <MenuItem key={id} value={menuItem.value} className="menuItem">
          {menuItem.label}
        </MenuItem>
      ))}
    </Select>
    <FormHelperText>{props.dropdownTitle}</FormHelperText>
  </FormControl>
);

export default GenAIDropDownSelect;
