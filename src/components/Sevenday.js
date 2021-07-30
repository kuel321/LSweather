import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import cloudy from '../media/cloudy.svg';
import sunny from '../media/day.svg';
import rainy from '../media/rainy-1.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 0,
    
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 85,
    outline: "none",
    boxShadow: "none"
  },
}));

export default function Sevenday(props) {
  const classes = useStyles();
  const tempRow =  <Paper className={classes.paper}><div className="tomorrow"><h1 className="cloudss">Monday</h1><img className="tomorrowImg" src={props.monImg}></img><h1 className="tmrwTemp">{props.monTemp}</h1></div></Paper>
  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={3}>
          {tempRow}
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}><div className="tomorrow"><h1 className="cloudss">Tuesday</h1><img className="tomorrowImg" src={props.tuesImg}></img><h1 className="tmrwTemp">{props.tuesTemp}</h1></div></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}> <div className="tomorrow"><h1 className="cloudss">Wednesday</h1><img className="tomorrowImg" src={props.wedImg}></img><h1 className="tmrwTemp">{props.wedTemp}</h1></div></Paper>
        </Grid>
        <Grid item xs={3}>
            <Paper className={classes.paper}><div className="tomorrow"><h1 className="cloudss">Thursday</h1><img className="tomorrowImg" src={props.thursImg}></img><h1 className="tmrwTemp">{props.thursTemp}</h1></div></Paper>
        </Grid>
        <Grid item xs={3}>
            <Paper className={classes.paper}><div className="tomorrow"><h1 className="cloudss">Friday</h1><img className="tomorrowImg" src={props.friImg}></img><h1 className="tmrwTemp">{props.friTemp}</h1></div></Paper>
        </Grid>
        <Grid item xs={3}>
            <Paper className={classes.paper}><div className="tomorrow"><h1 className="cloudss">Saturday</h1><img className="tomorrowImg" src={props.satImg}></img><h1 className="tmrwTemp">{props.satTemp}</h1></div></Paper>
        </Grid>
        <Grid item xs={3}>
            <Paper className={classes.paper}><div className="tomorrow"><h1 className="cloudss">Sunday</h1><img className="tomorrowImg" src={props.sunImg}></img><h1 className="tmrwTemp">{props.sunTemp}</h1></div></Paper>
        </Grid>
        <Grid item xs={3}>
            <Paper className={classes.paper}><div className="tomorrow"><img className="tomorrowImg2" src={sunny}></img></div></Paper>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={5} spacing={1}>
          <FormRow />
         
        </Grid>
        
      </Grid>
    </div>
  );
}
