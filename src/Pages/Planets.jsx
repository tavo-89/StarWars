import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import {useFetch} from '../Hooks/useFetch'
import Loader from '../Components/Loader'
import Message from '../Components/Message'
import CardPlanets from "../Components/CardPlanets";
import ButtonPage from "../Components/ButtonPage";

const Planets = () => {

    const [page, setPage] = useState(1);

    let url = `https://swapi.dev/api/planets/?page=${page}`
    const {data, error, loading} = useFetch(url)
    

    /* si la api no recive nada mando null y si hay errores en la api mando un mensaje de error */
    if (!data) {
        return null
    }
    if (error) {
        return <Message msg={`ERROR${error.status}: ${error.statusText}`} bgColor='#dc3545'/>
    }

    return (
        <div>
        <h1>Planetas</h1>
        
            <Grid
                container
                spacing={2}
                direction="row"
                justifyContent="center"
                alignItems="stretch"
                >

                    {loading && <Loader/>}
                {data.results.map((planeta, i) => {
                return <CardPlanets key={planeta.url} data={planeta} />   
            })}
                

            </Grid>


            <ButtonPage setPage={setPage} data={data} page={page} />
        </div>
    );
};

export default Planets;
