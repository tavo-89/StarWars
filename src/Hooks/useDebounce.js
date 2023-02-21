import { useState, useEffect } from 'react'

const useDebounce = (val) => {
    const [debounceVal, setDebounceVal] = useState(val);

    useEffect(() => {
        const handler = setTimeout(()=> { //cantidad de tiempo requerida entre pulsaciones de teclas para que se envíe la solicitud
            setDebounceVal(val)
        }, 500)

        return () => {
            clearTimeout(handler)
        }
    }, [val])

    return debounceVal
}

export default useDebounce