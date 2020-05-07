import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
  media: {
    height: 200,
  },

});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <div style={{display: 'flex', flexDirection: "column"}}>
    <Card className={classes.root} style={{margin: '10px'}}>
      <CardActionArea>
        <img src={props.image} alt="poster"/>
      
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {props.overview}
          
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={props.clicked}>
         View
        </Button>
        
      </CardActions>
    </Card>
    </div>
  );
}