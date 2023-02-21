import React from 'react';
import { useParams } from 'react-router-dom';
import Message from '../Components/Message';
import { useFetch } from '../Hooks/useFetch';

const Vehicle = () => {

    const {id} = useParams()

    const {data, error} = useFetch(`https://swapi.dev/api/vehicles/${id}`)

    if (!data) {
        return null
    }
    if (error) {
        return <Message msg={`ERROR${error.status}: ${error.statusText}`} bgColor='#dc3545'/>
    }

    let carga = new Intl.NumberFormat().format(data.cargo_capacity)
    let costo = new Intl.NumberFormat().format(data.cost_in_credits)
    let pasajeros = new Intl.NumberFormat().format(data.passengers)

    return (
        <div>
            <h1>{data.name}</h1>
            <ul>
                <li>Capacidad de carga: {carga} Kg</li>
                <li>Costo en creditos: {costo} Creditos</li>
                <li>Tiempo maximo de duracion del combustible: {data.consumables}</li>
                <li>Cantidad de tripulantes: {data.crew} </li>
                <li>cantidad de pasajeros: {pasajeros}</li>
                <li>Largo: {data.length} Mt</li>
                <li>Maxima velocidad en atmosfera:{data.max_atmosphering_speed} Km/h</li>
                <li>Modelo: {data.model}</li>
                <li>Fabricante: {data.manufacturer}</li>
            </ul>
        </div>
    );
}

export default Vehicle;
