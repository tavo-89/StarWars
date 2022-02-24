import { useState, useEffect } from 'react'


export const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {

    const abortController = new AbortController()
    const signal = abortController.signal

    const fetchData = async () => {

        setLoading(true)
        
        try {
            const res = await fetch(url)

            if (!res.ok) {
                let err = new Error('ERROR EN LA PETICION FETCH')

                err.status = res.status || "00"
                err.statusText = res.statusText || 'ERROR'
                //throw es como un return q captura errores y lo arroja al catch... ponele
                throw err
            }

            const json = await res.json()

            if (!signal.aborted) {
                setData(json);
                setError(null);
                }

        } catch (error) {

            if (!signal.aborted) {
                setData(null)
                setError(error)
            }
        }
        
        finally{

            if (!signal.aborted) {
                setLoading(false)    
            }

        }


        return ()=> abortController.abort()
    }

    fetchData()

    }, [url])//este useEffect se va a actualizar cuando se haga una peticion a la url

    return { data, loading, error }
}