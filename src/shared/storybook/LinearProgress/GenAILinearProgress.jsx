import React from 'react';
import { LinearProgress } from '@mui/material';
import { makeStyles } from '@mui/styles';
import variables from '../../commonStyles/colors.scss';

const useStyles = makeStyles({
  root: {
    height: 10,
    borderRadius: '4px',
    margin: '8px 0',
    '& .MuiLinearProgress-barColorPrimary': {
      backgroundColor: variables.blue3,
    },
    '&.MuiLinearProgress-root': {
      backgroundColor: `${variables.grey2} !important`,
    },
  },
});
const GenAILinearProgress = ({ progress }) => {
  const classes = useStyles();
  return (
    <LinearProgress
      variant="determinate"
      value={progress}
      className={classes.root}
    />
  );
};

export default GenAILinearProgress;
