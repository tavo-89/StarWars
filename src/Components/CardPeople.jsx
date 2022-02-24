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

    const CardPeoples = ({dato}) => {

    const classes = useStyles();
    
    let planeta = dato.homeworld
    let id= planeta.match(/[0-9]+/)
    
    return (
        <Grid container item lg={3} md={4} sm={12}>
            <Card className={classes.root}> 

                <Typography gutterBottom variant="h3" component="h2">{dato.name}</Typography>
                <Typography gutterBottom variant="h5" component="h4">Edad: {dato.birth_year}</Typography>
                <Typography gutterBottom variant="h5" component="h4"> Genero: {dato.gender}</Typography>
                <Typography gutterBottom variant="h5" component="h4"> Altura: {dato.height}M</Typography>
                
            <CardActions className={classes.button}>

                <Button size="small" color="primary">
                    <Link to={`/planeta/${id}`}>planeta de origen</Link>
                </Button>
                <Button size="small" color="primary">
                Learn More
                </Button>

            </CardActions>

            </Card>
        </Grid>
        );
}

export default CardPeoples;
