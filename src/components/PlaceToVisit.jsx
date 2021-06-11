import React from 'react';
import Card from './utils/Card';
import { Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    height: '100vh',
  },
});

const PlaceToVisit = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Box>
  );
};

export default PlaceToVisit;
