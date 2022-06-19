import React, { useState } from 'react';
import {AddCategory, GifGrid} from './components';

const GifExpertApp = ({ defaultCategory = [] }) => {
    const title = 'GifExpertApp';
    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState( defaultCategory );
    
    /*const handleAddCategory = () => {
        // Forma de agregar las categorias con el operador spreed ...Name
        // const newElement = 'Naruto';
        // setCategories([...categories, newElement]);
        const newElement = ['Naruto'];
        setCategories(categories.concat(newElement));
    }*/

    return (
        <>
            <h2>{ title }</h2>
            <AddCategory setCategories = {setCategories} categories = {categories}/>
            <hr />
            <ol>
                {
                    // El map() para transformar cada uno de los elementos del arreglo
                    // map() recibe dos argumentos el valor del elemento del arreglo y el indice de ese elemento
                    // el key sirve para que React sepa que elemento esta renderizando
                    categories.map((category) => {
                        return (
                            /* Nos traemos el componente GifGrid que va ser el encargado de recibir la entrada
                            de texto mediante el input text y realizar una petición http a una API. */
                            <GifGrid key={category} category = {category}/>
                        )
                    })
                }
            </ol>
            {/*<button onClick={handleAddCategory}>Agregar Serie</button>*/}
        </>
    )
}

export default GifExpertApp;