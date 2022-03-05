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
    },
    card: {
        justifyContent: 'center'
    }
});  


const Cardstarships = ({data}) => {
    const classes = useStyles();

    let longitud = new Intl.NumberFormat().format(data.length)
    let carga = new Intl.NumberFormat().format(data.cargo_capacity)
    let velocidad = new Intl.NumberFormat().format(data.max_atmosphering_speed)

    return (
        <Grid className={classes.card} container item lg={3} md={4} sm={12}>
            <Card className={classes.root}> 

                <Typography gutterBottom variant="h3" component="h2">{data.name}</Typography>
                <li> Modelo: {data.model}</li>
                <li> Largo: {longitud}m</li>
                <li> Tripulacion: {data.crew}</li>
                <li> Pasajeros: {data.passengers}</li>
                <li>Capacidad de carga: {carga}kg</li>
                <li>Velocidad maxima en la atmosfera: {velocidad}km/h</li>
                
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

export default Cardstarships;
