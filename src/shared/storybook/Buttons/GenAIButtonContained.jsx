import * as React from 'react';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import variables from '../../commonStyles/colors.scss';

const useStyles = makeStyles({
  root: {
    minWidth: 154,
    height: 40,
    background: variables.blue1,
    color: variables.white2,
    borderRadius: 6,
    textTransform: 'none',
    fontSize: 16,
    fontFamily: 'Inter',
    fontWeight: 600,
    '&:hover': {
      backgroundColor: variables.blue2,
    },
    '&:disabled': {
      color: variables.buttondisabletextcolor,
      background: variables.textfieldborder,
    },
  },
});

export const GenAIButtonContained = (props) => {
  const classes = useStyles();
  return (
    <Button className={classes.root} {...props}>
      {props.children}
    </Button>
  );
};
