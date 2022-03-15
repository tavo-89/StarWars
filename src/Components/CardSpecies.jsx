import React from 'react';
import {makeStyles, Card, CardActions, Button, Typography, Grid } from '@material-ui/core'

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

const Cardspecies = ({dato}) => {

    const classes = useStyles();

    return (
        <Grid className={classes.card} container item lg={3} md={4} sm={12}>
            <Card className={classes.root}> 

                <Typography gutterBottom variant="h3" component="h2">{dato.name}</Typography>
                    <ul>
                        <li>Altura Promedio: {dato.average_height}m</li>
                        <li> edad maxima promedio: {dato.average_lifespan} años</li>
                        <li> Idioma: {dato.language}</li>
                        <li>Clasificación: {dato.classification}</li>
                        <li>Designación: {dato.designation}</li>
                    </ul>
                
            <CardActions className={classes.button}>

                <Button size="small" color="primary">
                    Agregar a Favoritos
                </Button>

                <Button size="small" color="primary">
                    learn more
                </Button>


            </CardActions>

            </Card>
        </Grid>
    );
}

export default Cardspecies;
