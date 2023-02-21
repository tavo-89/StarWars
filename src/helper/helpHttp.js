const helpHttp = ()=>{
    //fetch recibe un objeto de opciones donde establecemos el metodo, las cabeceras, etc.. y eso es el parametro options 
    const customFetch = (endpoint, options)=>{
        /* cabecera por defecto */
        const defaultHeader = {
            accept:"aplication/json"
        }

        //cuando desde la peticion fetch no hay respuesta del servidor, aborta la peticion
        const controller = new AbortController()
        //el objeto q me esta pasando el usuario de las opciones de la peticion fetch
        //agrego una peticion signal q lo  hace es agregar el objeto controller una 
        //propiedad q tiene abortController q se llama .signal
        options.signal = controller.signal
        //si el usuario en objeto opciones trae metodo entonces deja el metodo sino por default es get
        options.method = options.method || "GET"

        //si la propiedad headers de las opciones viene entonces mezclo las opciones q tiene las defaultHeader
        //con las opciones q traiga el usuario en sus propios paramentros dentro de headers sino paso el header por defecto
        options.headers = options.headers ? {...defaultHeader, ...options.headers} : defaultHeader

        //stringifico lo q llega al body sino elimino body
        options.body = JSON.stringify(options.body) || false
        if (!options.body) delete options.body
        //si en 3 seg no llega la peticion aborta la ejecucion
        setTimeout(() => controller.abort(), 3000);

        
        return fetch(endpoint, options) 
        //si la respuesta es ok parseo a json sino rechazo
        .then((res) => res.ok ? res.json() : Promise.reject({ //paso un objeto con la respuesta error
            err:true,
            status:res.status || '00',
            statusText:res.statusText ||"error"
        }))
        .catch(err=>err)
    }
    //si no llegan opciones le paso un objeto vacio
    const get = (url, options = {})=> customFetch(url,options)

    return{
        get,
    }
}
export default helpHttp;