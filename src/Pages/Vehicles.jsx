import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import {useFetch} from '../Hooks/useFetch'
import CardVehicle from '../Components/CardVehicle'
import Loader from '../Components/Loader'
import Message from '../Components/Message'

const Vehicles = () => {

    const [page, setPage] = useState(1);

    let url = `https://swapi.dev/api/vehicles/?page=${page}`
    const {data, error, loading} = useFetch(url)
    

    let db = data

    if (!db) {
        return null
    }
    if (error) {
        return <Message msg={`ERROR${error.status}: ${error.statusText}`} bgColor='#dc3545'/>
    }
    const totalCount = Math.ceil(db.count / 10) * 10

    const handlePage = (number)=>{

        if (!db.previous && page + number <= 0) return;
        if (!db.next && page + number >= totalCount) return;

        setPage(page + number);

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
                {db.results.map((vehiculo) => {
                return <CardVehicle key={vehiculo.url} data={vehiculo} />;
                })}

            </Grid>
            <nav>
                <button onClick={()=> handlePage(-1)} disabled={!db.previous}>Previusly</button>
                {page}
                <button onClick={()=> handlePage(+1)} disabled={!db.next}>Next</button>
            </nav>
        </div>
    );
}

export default Vehicles;
