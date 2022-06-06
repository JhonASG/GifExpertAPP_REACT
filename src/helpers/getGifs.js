// En esta función se va a realizar la petición http a la API.
// Entramos a la API vamos a buscar Search Enpoint y copiamos la Gif URL en este caso: api.giphy.com/v1/gifs/search
// Luego se abre Postman para generar el Enpoint al cual vamos acceder en la API
// Esta función va estar en la carpeta helpers que almacena funciones que realizan una tarea en especifico
export const getGifs = async(category) => {
    // La URL Enpoint que es con la cual vamos a realizar una petición http a la API
    const URL = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=s8pfdcu3bvzLYMHyudHP7MXQbG4lV6k2`;
    // Se realiza una espera de respuesta de la API mediante el fetch al pasarle el URLL
    const response = await fetch ( URL );
    // Y Obtenemos los datos que nos devuelve la API, los cuales son enviados en formato Json.
    /* De la data solo se va requerir cierta información importante para la comunicación
        -> id -> que va hacer el key
        -> images -> de las cuales solo me interesa una.
        -> user
    */
    const {data} = await response.json();

    const gifs = data.map( img => {
        // se va a retornar el id, title y url de la imagen a mostrar, la cual se solicita mediante una solicitud http.
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })

    return gifs;
}