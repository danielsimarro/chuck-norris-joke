import React from 'react';

// Get Categories and return it to the parent
export default function ButtonJoke({ handleDelete, handleSort }) {


    const handleFlush = async () => {
        try {
            await axios.post('http://127.0.0.1:8000/deleteJokeSession');
            // Aquí puedes manejar la respuesta, como mostrar un mensaje al usuario
            handleDelete(true);
        } catch (error) {
            console.error('Error al limpiar la sesión de chistes', error);
            // Manejar aquí el error
        }
    };

    const sort = async () => {
        try {
            await axios.post('http://127.0.0.1:8000/sortSession');
            // Aquí puedes manejar la respuesta, como mostrar un mensaje al usuario
            handleSort(true);
        } catch (error) {
            console.error('Error al ordenar la sesion de chistes', error);
            // Manejar aquí el error
        }
    };


    return (
        <>
            <div className='d-flex'>
                    <button className='btn btn-danger me-2' onClick={handleFlush}>Delete</button>
                    <button className='btn btn-info' onClick={sort}>Sort</button>
            </div>
        </>
    );
}