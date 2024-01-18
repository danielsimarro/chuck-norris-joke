import React, { useState, useEffect } from 'react';

// Get Categories and return it to the parent
export default function GetCategories({ onSeleccion }) {

    // Is a Hook that allows you to have state variables in functional components.
    const [categories, setCategories] = useState([]);

    // Using the useEffect Hook from React to perform side effects in your component.
    useEffect(() => {
        // axios is used for making HTTP requests. Here, it's fetching data from a local server.
        axios.get('http://127.0.0.1:8000/categories')
            .then(response => {
                // On successful response, setCategories is called with the response data.
                setCategories(response.data);
            })
            .catch(error => {
                // If there's an error in fetching data, it's logged to the console.
                console.error('Error al obtener datos:', error);
            });
        // The empty dependency array [] means this effect runs once when the component mounts.
    }, []);

    const handleButtonSelect = () => {
        
        // Get the value of the select 
        var selectElement = document.getElementById('selectCategory').value;
        // Return the value to the parent component
        onSeleccion(selectElement);
    }

    return (
        <>
        <select id='selectCategory'>
            {categories.map((category) => (
                <option key={category} value={category}>{category}</option>
            ))}
        </select>
        <button onClick={handleButtonSelect}>Select</button>
        </>
    );
}

