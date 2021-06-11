import React from 'react';
import Card from './utils/Card';
import { Box, Grid, makeStyles } from '@material-ui/core';
import places from '../places';
const useStyles = makeStyles({
  root: {
    // height: '100vh',
    maxWidth: '80%',
    margin: '0 auto',
  },
  gridContainer: {},
  gridItem: {
    flexGrow: 1,
  },
});

const PlaceToVisit = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Grid container spacing={10} className={classes.gridContainer}>
        {places.map((place, index) => (
          <Grid
            className={classes.gridItem}
            key={index}
            item
            xs={12}
            sm={6}
            lg={4}
          >
            <Card image={place.image} textContentHead={place.head} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PlaceToVisit;
