import React from 'react';
import {useFetch} from '../Hooks/useFetch'
import {makeStyles, Card, CardActions, Button, Typography, Grid } from '@material-ui/core'
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
    const {data: homeWorld} = useFetch(dato.homeworld)
        
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
                        <li> Planeta de Origen: <Link to={`/planet/${id}`}>{homeWorld != null ? homeWorld.name : planeta}</Link> </li>
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

export default CardPeoples;
