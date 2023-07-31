import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import GenAIBox from '../Box/GenAIBox';

const GenAITabPanel = (props) => {
  const { children, value, index, ...other } = props;
  return (
    <GenAIBox
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <GenAIBox sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </GenAIBox>
      )}
    </GenAIBox>
  );
};

GenAITabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default GenAITabPanel;
