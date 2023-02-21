import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import {useFetch} from '../Hooks/useFetch'
import Loader from '../Components/Loader'
import Message from '../Components/Message'
import Cardstarships from "../Components/cardStarships";
import ButtonPage from "../Components/ButtonPage";

const Starships = () => {

    const [page, setPage] = useState(1);

    let url = `https://swapi.dev/api/starships/?page=${page}`
    const {data, error, loading} = useFetch(url)
    
    if (!data) {
        return null
    }
    if (error) {
        return <Message msg={`ERROR${error.status}: ${error.statusText}`} bgColor='#dc3545'/>
    }


    return (
        <div>
        <h1>Naves Estelares</h1>
            <Grid
                container
                spacing={2}
                direction="row"
                justifyContent="center"
                alignItems="stretch"
                >

                    {loading && <Loader/>}
                {data.results.map((vehiculo) => {
                return <Cardstarships key={vehiculo.url} data={vehiculo} />;
                })}

            </Grid>
            <ButtonPage setPage={setPage} data={data} page={page} />
        </div>
    );
}

export default Starships;
