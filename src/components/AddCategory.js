import React, { useState } from 'react';
import PropTypes from 'prop-types';

//Usualmente casi no se usan los props pero sino solo seria 
//const AddCategory = (props) => 
//props.setCategories
//De esta forma es para desestructurar los datos
const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 2) {
            //Es un callback con el listado anterior
            setCategories(cats => [inputValue, ...cats]);
            setInputValue('');
        }
    }

    //Para prevenir el refresh completo se usa el handleSubmit
    return (
        <form onSubmit={handleSubmit}>
            <h1>{ inputValue}</h1>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange }
            />
        </form>
    );
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;