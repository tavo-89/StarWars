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

const Cardvehicle = ({data}) => {

    const classes = useStyles();

    let largo = new Intl.NumberFormat().format(data.length)

    return (
        <Grid className={classes.card} container item lg={3} md={4} sm={12}>
            <Card className={classes.root}> 

                <Typography gutterBottom variant="h3" component="h2">{data.name}</Typography>
                <li> Cantidad de tripulantes: {data.crew}</li>
                <li> Largo: {largo}m</li>
                <li> Modelo: {data.model}</li>
                <li> pasajeros: {data.passengers}</li>
                
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

export default Cardvehicle;
