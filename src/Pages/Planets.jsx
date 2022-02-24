import { Grid } from "@material-ui/core";
import React from "react";
import {useFetch} from '../Hooks/useFetch'
import CardPlanets from "../Components/CardPlanets";
import Loader from '../Components/Loader'
import Message from '../Components/Message'

const Planets = () => {
    const {data, error, loading} = useFetch('https://swapi.dev/api/planets/')

    let db = data
    console.log(db)

    if (!db) {
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
                {db.results.map((planeta) => {
                return <CardPlanets key={planeta.url} data={planeta} />;
                })}

            </Grid>
        </div>
    );
};

export default Planets;
