import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import {useFetch} from '../Hooks/useFetch'
import CardVehicle from '../Components/CardVehicle'
import Loader from '../Components/Loader'
import Message from '../Components/Message'
import ButtonPage from "../Components/ButtonPage";

const Vehicles = () => {

    
    const [page, setPage] = useState(1);
    let url = `https://swapi.dev/api/vehicles/?page=${page}`
    const {data, error, loading} = useFetch(url)
    
    if (!data) {
        return null
    }
    if (error) {
        return <Message msg={`ERROR${error.status}: ${error.statusText}`} bgColor='#dc3545'/>
    }

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
                {data.results.map((vehiculo) => {
                return <CardVehicle key={vehiculo.url} data={vehiculo} />;
                })}

            </Grid>
            
            <ButtonPage setPage={setPage} data={data} page={page} />
        </div>
    );
}

export default Vehicles;
