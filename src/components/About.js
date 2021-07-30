import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import cloudy from '../media/cloudy.svg';
import sunny from '../media/day.svg';
import rainy from '../media/rainy-1.svg';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 0,
    height: 40
   
    
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 40,
    outline: "none",
    boxShadow: "none",
    width: "100%",

  },
}));

export default function Sevenday() {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={3}>
          <Paper className={classes.paper}><GitHubIcon fontSize={"medium"} /></Paper>
          
        </Grid>

        <Grid item xs={3}>
          <Paper className={classes.paper}><MailOutlineIcon /> </Paper>
        </Grid>
        <Grid item xs={3}>
            <Paper className={classes.paper}><AssignmentIndIcon /></Paper>
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
