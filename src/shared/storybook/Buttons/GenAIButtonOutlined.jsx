import * as React from 'react';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import variables from '../../commonStyles/colors.scss';

const useStyles = makeStyles({
  root: {
    minWidth: 154,
    height: 40,
    background: variables.white1,
    border: `1px solid ${variables.blue1}`,
    color: variables.blue1,
    borderRadius: 6,
    textTransform: 'none',
    fontSize: 16,
    fontFamily: 'Inter',
    fontWeight: 600,
    '&:hover': {
      backgroundColor: variables.white1,
      border: `1px solid ${variables.blue1}`,
    },
    '&:disabled': {
      border: `1px solid ${variables.textfieldborder}`,
    },
  },
});

export const GenAIButtonOutlined = (props) => {
  const { children } = props;
  const classes = useStyles();
  return (
    <Button {...props} className={classes.root}>
      {children}
    </Button>
  );
};
