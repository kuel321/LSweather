import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Carousel } from 'react-responsive-carousel';


const useStyles = makeStyles({
  root: {
    maxWidth: 200,
    maxHeight: 210,
    minHeight: 210,
    
  },
});



export default function ImgMediaCard(props) {
  const classes = useStyles();
  function newsLink1(){
    const url = props.newslink1;
    window.open(url, '_blank');
}
function newsLink2(){
    const url = props.newslink2;
    window.open(url, '_blank');
}
  return (
      <div>
      <Carousel autoPlay={false} className="newsSmall">
   <div>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="30"
          
          image={props.image1}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Senate Dems settle on $3.5...
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          A group of Senate Democrats announced late Tuesday they had reached a tentative agreement...
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    </div>
    <div>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="30"
          image={props.image2}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" font-size="10px">
            Four Iranians charged...
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          The former Democratic senator deviated from the network's fawning coverage...
           
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    </div>
    </Carousel>
    <div className="newsBig">
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={props.alt2}
          height="30"
          
          image={props.image1}
          title={props.newstitle1}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {props.newstitle1}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
         {props.newsdescription1}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary" onClick={newsLink1}>
          Learn More
        </Button>
      </CardActions>
    </Card>
    
    
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={props.alt2}
          height="30"
          image={props.image2}
          title={props.newstitle2}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" font-size="10px">
            {props.newstitle2}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
         {props.newsdescription2}
           
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary" onClick={newsLink2}>
          Learn More
        </Button>
      </CardActions>
    </Card>
    <Card className={classes.root}>
      <CardActionArea>
       
        <CardContent>
          
        </CardContent>
      </CardActionArea>
    
    </Card>
    </div>
    </div>
    
  );
}
