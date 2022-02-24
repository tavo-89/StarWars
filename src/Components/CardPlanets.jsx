import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: 300,
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  button: {
    display:'flex',
    justifyContent:'space-around'
  }
});  

const CardPlanets = ({data}) => {

  const classes = useStyles();

    return (
      <Grid container item lg={3} md={4} sm={12}>
        <Card className={classes.root}> 

              <Typography gutterBottom variant="h3" component="h2">{data.name}</Typography>
              <Typography gutterBottom variant="h5" component="h4"> Clima: {data.climate}</Typography>
              <Typography gutterBottom variant="h5" component="h4"> Diametro: {data.diameter}km</Typography>
              <Typography gutterBottom variant="h5" component="h4"> Poblacion: {data.population}</Typography>
              <Typography gutterBottom variant="h5" component="h4">Terreno: {data.terrain}</Typography>
              
          <CardActions className={classes.button}>

            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>

          </CardActions>

        </Card>
      </Grid>
    );
}

export default CardPlanets;
