import React, { useState, useEffect } from 'react';
import {
  Card,
  Box,
  CardMedia,
  makeStyles,
  CardContent,
  Typography,
  CardActions,
  Button,
  Grow,
} from '@material-ui/core';
import boatsCruise from '../../assets/images/boat_cruise.jpg';

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
    background: 'rgba(0, 0, 0, 0.5)',
    paddingBottom: '2rem',
    boxShadow: '3px 3px 5px rgba(0,0,0,0.5)',
  },
  media: {
    height: 300,
  },
  siteDescHead: {
    fontSize: '2rem',
    color: 'white',
    fontWeight: 'bold',
  },
  siteDescText: {
    fontSize: '1.4rem',
    color: 'white',
    textAlign: 'justify',
  },
  chooseBtn: {
    margin: '0 auto',
    fontSize: '1.1rem',
  },
});
const DestinationCard = ({ image, textContentHead }) => {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setChecked(true);
    });
  }, []);

  return (
    <Box>
      <Grow
        in={checked}
        style={{ transformOrigin: '0 0 0' }}
        {...(checked ? { timeout: 3000 } : {})}
      >
        <Card className={classes.root}>
          <CardMedia
            className={classes.media}
            image={image || boatsCruise}
            title='BOAT CRUISE'
            alt='BOAT CRUISE'
            component='img'
          />
          <CardContent>
            <Typography
              gutterBottom
              variant='h5'
              component='h2'
              className={classes.siteDescHead}
            >
              {textContentHead || 'ELEHUSI BOAT CRUISE'}
            </Typography>
            <Typography
              variant='body2'
              color='textSecondary'
              component='p'
              className={classes.siteDescText}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis
              consequatur a, nemo autem ad deserunt architecto dolorem dolor est
              praesentium magni, voluptatum, eius sint. Unde sit voluptates
              voluptate temporibus doloremque.
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              className={classes.chooseBtn}
              color='primary'
              variant='contained'
            >
              Choose To Explore
            </Button>
          </CardActions>
        </Card>
      </Grow>
    </Box>
  );
};

export default DestinationCard;
