import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import News from './News';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Sevenday from './Sevenday';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import About from './About';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 224,
    borderRadius: '10px;'
  },
  tabs: {
    
    alignItems: 'center',
    backgroundColor: 'white'

  },
}));

export default function VerticalTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="7 Day Forecast" {...a11yProps(0)} />
        <Tab label="News" {...a11yProps(1)} />
        <Tab label="About" {...a11yProps(2)} />
       
      </Tabs>
      <TabPanel value={value} index={0}>
       <Sevenday        monImg={props.monImg1}
                        tuesImg={props.tuesImg1}
                        wedImg={props.wedImg1}
                        thursImg={props.thursImg1}
                        friImg={props.friImg1}
                        satImg={props.satImg1}
                        sunImg={props.sunImg1}
                monTemp={props.monTemp1}
                tuesTemp={props.tuesTemp1}
                wedTemp={props.wedTemp1}
                thursTemp={props.thursTemp1}
                friTemp={props.friTemp1}
                satTemp={props.satTemp1}
                sunTemp={props.sunTemp1}
               
                
       />
      </TabPanel>
      <TabPanel value={value} index={1}>
      <News image1={props.image} image2={props.image2}
              
             newstitle1={props.newstitlea} newstitle2={props.newstitleb}
             newsalt1={props.newsalta} newsalt2={props.newsaltb}
             newsdescription1={props.newsdescriptiona} newsdescription2={props.newsdescriptionb}
             newslink1={props.newslinka} newslink2={props.newslinkb}

      
      
      
      
      
      />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <About />
        <div className="aboutContainer">
            <div className="aboutText">
            <h1 className="aboutTitle">Luke Short</h1>
            <a href="portfoliolukeshort1.web.app" className="aboutLink">Portfolio</a>
            <a href="https://github.com/kuel321" className="aboutLink">Github</a>
            </div>
        </div>
      </TabPanel>
      
    </div>
  );
}
