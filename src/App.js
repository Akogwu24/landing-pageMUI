import './App.css';
import { CssBaseline, makeStyles } from '@material-ui/core';
import bg from './assets/images/resort.jpg';
import Header from './components/Header';
import PlaceToVisit from './components/PlaceToVisit';

const useStyles = makeStyles({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${bg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
});

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <PlaceToVisit />
    </div>
  );
}

export default App;
