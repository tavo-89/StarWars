import React from 'react';
import { useParams } from 'react-router-dom';
import Message from '../Components/Message';
import { useFetch } from '../Hooks/useFetch';

const Person = () => {

    const {id} = useParams()

    const {data, error} = useFetch(`https://swapi.dev/api/people/${id}`)

    if (!data) {
        return null
    }
    if (error) {
        return <Message msg={`ERROR${error.status}: ${error.statusText}`} bgColor='#dc3545'/>
    }

    return (
        <div>
            <h1>{data.name}</h1>
            <ul>
                <li>Genero: {data.gender}</li>
                <li>Altura: {data.height} M</li>
                <li>Peso: {data.mass} Kg</li>
                
            </ul>
        </div>
    );
}

export default Person;
