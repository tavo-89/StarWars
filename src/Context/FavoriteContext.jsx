import {createContext, useState, useEffect} from 'react'

let myFavoriteInit = JSON.parse(localStorage.getItem('myFavorite')) || []

const FavoriteContext = createContext()

const FavoriteProvider = ({children})=> {
    

    const handles = {
        
    }

    return <FavoriteContext.Provider value={handles}>{children}</FavoriteContext.Provider>
}


export {FavoriteProvider}
export default FavoriteContext