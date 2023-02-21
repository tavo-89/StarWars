import React from 'react';
import { useParams } from 'react-router-dom';
import Message from '../Components/Message';
import { useFetch } from '../Hooks/useFetch';

const Specimen = () => {

    const {id} = useParams()

    const {data, error} = useFetch(`https://swapi.dev/api/species/${id}`)

    if (!data) {
        return null
    }
    if (error) {
        return <Message msg={`ERROR${error.status}: ${error.statusText}`} bgColor='#dc3545'/>
    }

    return (
        <div>
            <h1>especimen: {data.name}</h1>
            <ul>
                <li>Esperanza de vida: {data.average_lifespan} Años</li>
                <li>Clasificación: {data.classification} </li>
                <li>Idioma: {data.language}</li>
                <li>Altura Promedio: {data.average_height}</li>                
            </ul>
        </div>
    );
}

export default Specimen;
