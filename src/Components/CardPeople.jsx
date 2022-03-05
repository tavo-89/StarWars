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
    },
    card: {
        justifyContent: 'center'
    }
    });  

    const CardPeoples = ({dato}) => {

    const classes = useStyles();
    
    let planeta = dato.homeworld
    let id= planeta.match(/[0-9]+/)
    
    
    return (
        <Grid className={classes.card} container item lg={3} md={4} sm={12}>
            <Card className={classes.root}> 

                <Typography gutterBottom variant="h3" component="h2">{dato.name}</Typography>
                    <ul>
                        <li>Edad: {dato.birth_year}</li>
                        <li> Genero: {dato.gender}</li>
                        <li> Altura: {dato.height}cm</li>
                    </ul>
                
            <CardActions className={classes.button}>

                <Button size="small" color="primary">
                    <Link to={`/planet/${id}`}>planeta de origen</Link>
                </Button>


            </CardActions>

            </Card>
        </Grid>
        );
}

export default CardPeoples;
