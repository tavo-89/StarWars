import React, { useState} from "react";
import { Grid } from "@material-ui/core";
import {useFetch} from '../Hooks/useFetch'
import Loader from '../Components/Loader'
import Message from '../Components/Message'
import CardPeople from "../Components/CardPeople";
import ButtonPage from "../Components/ButtonPage";

const People = () => {    


    /* seteo el endpoint en la pagina 1 */
    const [page, setPage] = useState(1);
    /* hago el fetch */
    let url = `https://swapi.dev/api/people/?page=${page}`
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
        <h1>Personajes</h1>
            <Grid container spacing={2} direction="row" justifyContent="center" alignItems="stretch">

                    {loading && <Loader/>}

                    {data.results.map((personaje,i) => {
                    return <CardPeople key={i} dato={personaje}/>;
                    })}

            </Grid>
            
            <ButtonPage setPage={setPage} data={data} page={page} />
        </div>
    );
};

export default People;
