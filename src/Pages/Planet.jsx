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

    let poblacion = new Intl.NumberFormat().format(data.population)
    let Diametro = new Intl.NumberFormat().format(data.diameter)
    
    return (
        <div>
            
            <h1>Planeta {data.name}</h1>
            <ul>
                <li>Periodo de Rotacion: {data.rotation_period} Hs</li>
                <li>Periodo de orbita: {data.orbital_period} Dias</li>
                <li>Diametro: {Diametro} Km</li>
                <li>Población: {poblacion} habitantes</li>
            </ul>
        </div>
    );
}

export default Planet;
