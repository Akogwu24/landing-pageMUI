import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  makeStyles,
  Zoom,
} from '@material-ui/core';

import ListIcon from '@material-ui/icons/List';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const useStyles = makeStyles({
  appbar: {
    background: 'none',
    position: 'fixed',
  },
  logo: {
    fontSize: '2rem',
    fontFamily: 'pacifico',
    flexGrow: '1',
    fontWeight: 'bold',
  },
  icon: {
    color: 'white',
    fontSize: '3rem',
  },
  toolbar: {
    display: 'flex',
    width: '80%',
    margin: '0 auto',
  },
  colorText: {
    color: '#5Aff3d',
  },
  welcomeText: {
    fontSize: '5rem',
    color: '#fff',
    fontFamily: 'Nunito',
    fontWeight: 'bold',
  },
  bannerTextContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    textAlign: 'center',
    flexDirection: 'column',
  },
  arrowDown: {
    color: '#5Aff3d',
    fontSize: '5rem',
  },
});

const Header = () => {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <Box>
      <AppBar elevation={0} className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <Typography className={classes.logo}>
            Emak<span className={classes.colorText}>Island.</span>
          </Typography>
          <IconButton>
            <ListIcon className={classes.icon} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Zoom in={checked} {...(checked ? { timeout: 4000 } : {})}>
        <Box className={classes.bannerTextContainer}>
          <Typography className={classes.welcomeText}>
            WELCOM TO EMAK
            <br />
            <span className={classes.colorText}>ISLAND</span>
          </Typography>
          <IconButton>
            <ArrowDropDownIcon className={classes.arrowDown} />
          </IconButton>
        </Box>
      </Zoom>
    </Box>
  );
};

export default Header;
