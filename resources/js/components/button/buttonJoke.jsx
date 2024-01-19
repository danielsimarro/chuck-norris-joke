import React from 'react';

/**
 * Buttons for deleting and sorting sessions
 * @param Prop $handleDelete, $handleSort
 * @return html
 */
export default function ButtonJoke({ handleDelete, handleSort }) {


    /**
    * Function deleting the session and notifying the parent component
    */
    const handleFlush = async () => {
        try {
            await axios.post('http://127.0.0.1:8000/deleteJokeSession');
            // Notify the parent of the change
            handleDelete(true);
        } catch (error) {
            console.error('Error to clean jokes', error);

        }
    };

    /**
    * Function that orders the session and notifies the parent component
    */
    const sort = async () => {
        try {
            await axios.post('http://127.0.0.1:8000/sortSession');
            // Notify the parent of the change
            handleSort(true);
        } catch (error) {
            console.error('Error to order jokes', error);
        }
    };


    return (
        <>
            <div className='d-flex my-2'>
                <button className='btn btn-danger me-2' onClick={handleFlush}>Delete</button>
                <button className='btn btn-info' onClick={sort}>Sort</button>
            </div>
        </>
    );
}