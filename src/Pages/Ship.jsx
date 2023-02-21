import React from 'react';
import {useFetch} from '../Hooks/useFetch'
import { useParams } from 'react-router-dom';
import Message from '../Components/Message'


const Ship = () => {

    const {id} = useParams()

    const {data, error} = useFetch(`https://swapi.dev/api/starships/${id}`)

    if (!data) {
        return null
    }
    if (error) {
        return <Message msg={`ERROR${error.status}: ${error.statusText}`} bgColor='#dc3545'/>
    }

    let carga = new Intl.NumberFormat().format(data.cargo_capacity)
    let precio = new Intl.NumberFormat().format(data.cost_in_credits)
    let tripulantes = new Intl.NumberFormat().format(data.crew)
    let pasajeros = new Intl.NumberFormat().format(data.passengers)
    let largo = new Intl.NumberFormat().format(data.length)
    let velocidad = new Intl.NumberFormat().format(data.max_atmosphering_speed)

    return (
        <div>
            <h1>Nave: {data.name}</h1>
            <ul>
                <li>Megaluz: {data.MGLT} </li>
                <li>Capacidad de carga: {carga} Kg</li>
                <li>Duración maxima del combustible: {data.consumables}</li>
                <li>Costo en creditos:{precio} Creditos</li>
                <li>Tripulación: {tripulantes} tripulantes</li>
                <li>Pasajeros: {pasajeros}</li>
                <li>calificación de hiperimpulsor: {data.hyperdrive_rating}</li>
                <li>Largo: {largo} Mt</li>
                <li>Fabricante: {data.manufacturer}</li>
                <li>Velocidad maxima en atmosfera: {velocidad} Km/h</li>
                <li>Modelo: {data.model}</li>
            </ul>

            <h3>Megaluz o MGLT (Megalights)</h3>
            <p>el número máximo de megaluces que esta nave espacial puede viajar en una hora estándar.
                Un "megaluz" es una unidad estándar de distancia y nunca antes se había definido dentro del universo de Star Wars.
                Esta cifra solo es realmente útil para medir la diferencia de velocidad de las naves estelares.
                Podemos suponer que es similar a AU, la distancia entre nuestro Sol (Sol) y la Tierra.</p>
        </div>
    );
}

export default Ship;
