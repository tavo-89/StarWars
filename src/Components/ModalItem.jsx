import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';



export default function ModalItem({data, handleClose, open, classes}) {

    let diametro = new Intl.NumberFormat().format(data.diameter)
    let poblacion = new Intl.NumberFormat().format(data.population)

    return (
        <div>

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

        </div>
    );
}