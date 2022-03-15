import React from 'react';
import {makeStyles, Card, CardActions, Button, Typography, Grid } from '@material-ui/core'
import ModalItem from './ModalItem'

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

const CardItem = ({data}) => {

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
            <ModalItem handleClose={handleClose} open={open} classes={classes} data={data} />
        </Grid>
    );
}

export default CardItem;