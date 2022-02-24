import React from 'react';
import {useFetch} from '../Hooks/useFetch'
import { useParams } from 'react-router-dom';
import Message from '../Components/Message'

const Planet = () => {
    const {id} = useParams()

    const {data, error} = useFetch(`https://swapi.dev/api/planets/${id}`)

    if (!data) {
        return null
    }
    if (error) {
        return <Message msg={`ERROR${error.status}: ${error.statusText}`} bgColor='#dc3545'/>
    }
    
    return (
        <div>
            <h1>Planeta {data.name}</h1>
        </div>
    );
}

export default Planet;
