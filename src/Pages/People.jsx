import { Grid } from "@material-ui/core";
import React from "react";
import {useFetch} from '../Hooks/useFetch'
import Loader from '../Components/Loader'
import Message from '../Components/Message'
import CardPeople from '../Components/CardPeople'

const People = () => {
    const {data, error, loading} = useFetch('https://swapi.dev/api/people/')
    
    let db = data
    
    if (!db) {
        return null
    }
    if (error) {
        return <Message msg={`ERROR${error.status}: ${error.statusText}`} bgColor='#dc3545'/>
    }

    return (
        <div>
        <h1>Personajes</h1>
            <Grid
                container
                spacing={2}
                direction="row"
                justifyContent="center"
                alignItems="stretch"
                >

                    {loading && <Loader/>}
                {db.results.map((personaje,i) => {
                return <CardPeople key={i} dato={personaje}/>;
                })}

            </Grid>
        </div>
    );
};

export default People;
