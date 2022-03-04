import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

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

const Cardspecies = ({dato}) => {

    const classes = useStyles();

    return (
        <Grid container item lg={3} md={4} sm={12}>
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
                    nada
                </Button>


            </CardActions>

            </Card>
        </Grid>
    );
}

export default Cardspecies;
