import React from 'react';
import Stack from '@mui/material/Stack';

import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const GenAIDropDown = (props) => (
  <Stack sx={{ minWidth: props.minWidth, maxWidth: props.maxWidth }}>
    <Autocomplete
      multiple={props.multiple}
      id="size-small-filled-multi"
      size="small"
      value={props.value}
      onChange={props.onChange}
      options={props.options}
      getOptionLabel={props.getOptionLabel}
      renderTags={(value, getTagProps) =>
        value.map((option, index) => (
          <Chip
            variant="outlined"
            label={option.name}
            size="small"
            {...getTagProps({ index })}
          />
        ))
      }
      renderInput={(params) => (
        <TextField {...params} placeholder={props.placeholder} />
      )}
    />
  </Stack>
);

export default GenAIDropDown;
