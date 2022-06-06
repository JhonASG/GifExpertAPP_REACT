import React, {useState} from "react";
import PropsTypes from 'prop-types';

const AddCategory = ({setCategories}) =>{
    // Obtener el valor del input y voy a modificarle el mismo
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            setCategories(cat => [inputValue, ...cat]);
            setInputValue('');
        }
    }

    return (
        /*En este caso no se necesita un fragment <></> porque con el <form></form> 
        agrupamos todos los elementos.*/
        <form onSubmit={handleSubmit}>
            <input type="text" value={inputValue} onChange={handleInputChange}/>
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropsTypes.func.isRequired
}

export default AddCategory;