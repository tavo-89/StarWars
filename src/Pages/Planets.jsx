import { Grid } from "@material-ui/core";
import React from "react";
import {useFetch} from '../Hooks/useFetch'
import Loader from '../Components/Loader'
import Message from '../Components/Message'
import CardItem from "../Components/CardItem";




const Planets = () => {

    let url = 'https://swapi.dev/api/planets/?page=1'
    const {data, error, loading, handleNext, handlePrev} = useFetch(url)
    

    let db = data

    if (!db) {
        return null
    }
    if (error) {
        return <Message msg={`ERROR${error.status}: ${error.statusText}`} bgColor='#dc3545'/>
    }
    let page = db.next.match(/[0-9]+/) - 1

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
                {db.results.map((planeta, i) => {
                return <CardItem key={planeta.url} data={planeta} />   
            })}
                

            </Grid>


            <nav>
                <button onClick={handlePrev} disabled={!db.previous}>Previusly</button>
                {page}
                <button onClick={handleNext} disabled={!db.next}>Next</button>
            </nav>
        </div>
    );
};

export default Planets;
