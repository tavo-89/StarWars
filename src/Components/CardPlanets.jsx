import React from 'react';
import {makeStyles, Card, CardActions, Button, Typography, Grid, Modal, Fade, Backdrop } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
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

const CardPlanets = ({data}) => {

    
    let diametro = new Intl.NumberFormat().format(data.diameter)
    let poblacion = new Intl.NumberFormat().format(data.population)

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <Grid className={classes.card} container item lg={3} md={4} sm={12}>
            <Card className={classes.root}> 

                <Typography gutterBottom variant="h3" component="h2">{data.name}</Typography>
                
            <CardActions className={classes.button}>

                <Button size="small" color="primary">
                Agregar a favoritos
                </Button>
                <Button size="small" color="primary" onClick={handleOpen}>
                Learn More
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
                                <li> Clima: {data.climate}</li>
                                <li> Diametro: {diametro}km</li>
                                <li> Poblacion: {poblacion} habitantes</li>
                                <li>Terreno: {data.terrain}</li>
                            </ul>
                        </div>

                    </Fade>

                </Modal>

        </Grid>
    );
}

export default CardPlanets;