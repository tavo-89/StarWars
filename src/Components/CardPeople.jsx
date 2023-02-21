import React from 'react';
import {useFetch} from '../Hooks/useFetch'
import {makeStyles, Card, CardActions, Button, Typography, Grid, Modal, Fade, Backdrop } from '@material-ui/core'
import { Link } from 'react-router-dom';



const useStyles = makeStyles((theme) => ({
    root: {
        width: 300,
        maxWidth: 345,
        boxShadow: '6px 5px 21px 0px #DBA90D'
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
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
})); 

    const CardPeople = ({dato}) => {

    const {data: homeWorld} = useFetch(dato.homeworld)
    
    let planeta = dato.homeworld

    const classes = useStyles();
    
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    let id= planeta.match(/[0-9]+/)
    
    return (
        <Grid className={classes.card} container item lg={3} md={4} sm={12}>
            <Card className={classes.root}> 

                <Typography gutterBottom variant="h3" component="h2">{dato.name}</Typography>
                    
                
            <CardActions className={classes.button}>

                <Button size="small" color="primary">
                    Agregar a Favoritos
                </Button>

                <Button size="small" color="primary"  onClick={handleOpen}>
                    learn more
                </Button>


            </CardActions>

            </Card>

            {/* MODAL */}
            <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                    timeout: 500,
                    }}
                >
                    <Fade in={open}>

                        <div className={classes.paper}>
                            <ul>
                                <li>Edad: {dato.birth_year}</li>
                                <li> Genero: {dato.gender}</li>
                                <li> Altura: {dato.height}cm</li>
                                <li> Planeta de Origen: <Link to={`/planet/${id}`}>{homeWorld != null ? homeWorld.name : planeta}</Link> </li>
                            </ul>
                        </div>

                    </Fade>

                </Modal>

        </Grid>
        );
}

export default CardPeople;
