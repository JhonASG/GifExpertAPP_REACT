import React from 'react'
import useFetchGifs from '../hooks/useFetchGifs'
import {GifGridItem} from './GifGridItem';
import PropTypes from 'prop-types';

export const GifGrid = ({ category }) => {
	/*const [images, setImages] = useState([]);

	// el segundo parametro indica las dependencias, solo se ejecuta el useEffect cuando surge la dependencia
	useEffect( () => {
		getGifs(category).then(imgs => setImages(imgs));
	}, [category]);*/

	// Custom Hook que al final es una función que return un estado
	const {data:images, loading} = useFetchGifs(category);

	return (
		<>
			<h3 className='animate__animated animate__bounce'>{ category }</h3>
			{loading && <p data-testid='carga' className='animate__animated animate__flash'>Loading ...</p>}
			<div className='card-grid'>
				{
					images.map(imgs => {
						// Si paso el parametro con el spread {... img} estoy enviando por separada cada una de las propiedades de la imagen (id, title, url)
						return <GifGridItem key={imgs.id} {... imgs} />
					})
				}
			</div>
			{/*
				Al presionar el boton lo que esta ocasionando es un cambio en el hook useState()
				por tal motivo al React detectar un cambio va a renderizar de nuevo la petición
				http, lo que puede ocasionar un ciclo infinito que provoque un fallo en la app
				por tal motivo se utiliza useEffect

				useEffect -> condicionamos que un código se ejecuta siempre y cuando se cumpla una
				condición dada.

				const {count, setCount} = useState(0);
				<button onClick={() => {setCount(count + 1)}}>Contador</button>
			*/}
		</>
	)
}

GifGrid.propTypes = {
	category: PropTypes.string.isRequired 
}