/* todos los hooks por defecto empiezan con un use, esto es un estandar en react */
/* primer custom hook */
/* Me va a permitir saber cuando estoy cargando y cuando termino la cargada de la solicitud http */
import { useEffect, useState } from "react"
import { getGifs } from '../helpers/getGifs.js'

export const useFecthGifs = (category) =>{
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getGifs(category).then(imgs => {
            setState({
                data: imgs,
                loading: false
            });
        });
    }, [category]);

    return state; // regresa el objeto que tiene como parametros la data y el loading.
}