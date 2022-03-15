import React from "react";
import { Grid } from "@material-ui/core";
import {useFetch} from '../Hooks/useFetch'
import Loader from '../Components/Loader'
import Message from '../Components/Message'
import CardPeople from '../Components/CardPeople'

const People = () => {    
    
    const {data, error, loading, handleNext, handlePrev} = useFetch(`https://swapi.dev/api/people/?page=1`)
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
        <h1>Personajes</h1>
            <Grid container spacing={2} direction="row" justifyContent="center" alignItems="stretch">

                    {loading && <Loader/>}

                    {db.results.map((personaje,i) => {
                    return <CardPeople key={i} dato={personaje}/>;
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

export default People;
