import { Checkbox } from '@mui/material';
import React from 'react';

const GenAICheckbox = (props) => {
  const { checked, handleChange } = props;
  return (
    <Checkbox
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
  );
};

export default GenAICheckbox;
