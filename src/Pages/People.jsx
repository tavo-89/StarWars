import React, { useState} from "react";
import { Grid } from "@material-ui/core";
import {useFetch} from '../Hooks/useFetch'
import Loader from '../Components/Loader'
import Message from '../Components/Message'
import CardPeople from "../Components/CardPeople";

const People = () => {    


    /* seteo el endpoint en la pagina 1 */
    const [page, setPage] = useState(1);
    /* hago el fetch */
    let url = `https://swapi.dev/api/people/?page=${page}`
    const {data, error, loading} = useFetch(url)

    let db = data
    /* si la api no recive nada mando null y si hay errores en la api mando un mensaje de error */
    if (!db) {
        return null
    }
    if (error) {
        return <Message msg={`ERROR${error.status}: ${error.statusText}`} bgColor='#dc3545'/>
    }

    /* para hacer la paginación ingreso a la cantidad total de elementos del endpoint */
    /* y lo redondeo a un nuemero de 10 en 10 (cada pagina devuelve 10 elementos) */
    const totalCount = Math.ceil(db.count / 10) * 10
    
    //manejo el button del paguinado
    //si previus y el numero de pag es menor o igual a cero corto
    //si el next y el numero de pag es mayor o igual al total de elementos corto
    //sino seteo la pagina  
    const handlePage = (number)=>{

        if (!db.previous && page + number <= 0) return;
        if (!db.next && page + number >= totalCount) return;

        setPage(page + number);

    }


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
                <button onClick={()=> handlePage(-1)} disabled={!db.previous}>Previusly</button>
                {page}
                <button onClick={()=> handlePage(+1)} disabled={!db.next}>Next</button>
            </nav>
        </div>
    );
};

export default People;
