import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import GetCategories from './fetchApi/getCategories';

export default function Codea() {

    // Store the selected value of the child component
    const [valorSeleccionado, setValorSeleccionado] = useState('');

    // Function to handle selection in the parent component
    const handleSeleccion = (valor) => {
        setValorSeleccionado(valor);
    };


    return (
        <div>
            <h1>Categorías de Chuck Norris</h1>
            <GetCategories onSeleccion={handleSeleccion} />
            <p>Valor seleccionado en el padre: {valorSeleccionado}</p>
        </div>
    );
}


// Conditional rendering based on the existence of an element with ID 'codeareact'.
if (document.getElementById('codeareact')) {
    // Using createRoot to create a root for a React component tree and rendering the <Codea/> component.
    // createRoot is part of the new ReactDOM client and server renderer in React 18.
    createRoot(document.getElementById('codeareact')).render(<Codea />);
}