import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

export default function Codea() {

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

    return (
        <div>
            <h1>Categorías de Chuck Norris</h1>
            <select>
                {categories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                ))}
            </select>
        </div>
    );
};


// Conditional rendering based on the existence of an element with ID 'codeareact'.
if(document.getElementById('codeareact')){
    // Using createRoot to create a root for a React component tree and rendering the <Codea/> component.
    // createRoot is part of the new ReactDOM client and server renderer in React 18.
    createRoot(document.getElementById('codeareact')).render(<Codea/>);
}