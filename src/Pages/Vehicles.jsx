import { Grid } from "@material-ui/core";
import React from "react";
import {useFetch} from '../Hooks/useFetch'
import CardVehicle from '../Components/CardVehicle'
import Loader from '../Components/Loader'
import Message from '../Components/Message'

const Vehicles = () => {

    const {data, error, loading, handleNext, handlePrev} = useFetch('https://swapi.dev/api/vehicles/?page=1')

    let db = data
    console.log(db)

    if (!db) {
        return null
    }
    if (error) {
        return <Message msg={`ERROR${error.status}: ${error.statusText}`} bgColor='#dc3545'/>
    }

    let page = db.next.match(/[0-9]+/) - 1

    return (
        <div>
        <h1>Vehículos</h1>
            <Grid
                container
                spacing={2}
                direction="row"
                justifyContent="center"
                alignItems="stretch"
                >

                    {loading && <Loader/>}
                {db.results.map((vehiculo) => {
                return <CardVehicle key={vehiculo.url} data={vehiculo} />;
                })}

            </Grid>
            <nav>
                <button onClick={handlePrev} disabled={!db.previous}>Previusly</button>
                {page}
                <button onClick={handleNext} disabled={!db.next}>Next</button>
            </nav>
        </div>
    );
}

export default Vehicles;
