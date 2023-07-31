import React from 'react';
import TextField from '@mui/material/TextField';

export default function GenAITextArea(props) {
  return (
    <div>
      <TextField
        id="outlined-textarea"
        placeholder="Placeholder"
        multiline
        rows={props.rows}
        variant="outlined"
        sx={{ width: props.width, marginLeft: props.marginLeft }}
        {...props}
      />
    </div>
  );
}
