
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ButtonJoke from '../button/buttonJoke';

export default function GetJokes({ selectValue, trigger }) {

    // Store the joke
    const [jokes, setJoke] = useState([]);

    // This useEffect runs every time 'selectValue' or 'trigger' changes.
    useEffect(() => {

        // We control that if the 'selectValue' is not assigned, it does nothing.
        if (selectValue != undefined) {

            const url = 'http://127.0.0.1:8000/joke/' + selectValue;
            // axios is used for making HTTP requests. Here, it's fetching data from a local server.
            axios.get(url)
                .then(response => {
                    // On successful response, setCategories is called with the response data.
                    setJoke([...jokes, response.data.value]);
                    
                    saveJokeSession(response.data.value);
                    
                })
                .catch(error => {
                    // If there's an error in fetching data, it's logged to the console.
                    console.error('Error to get data:', error);
                });
        }
    }, [selectValue, trigger]);

    const saveJokeSession = async (joke) => {
        await axios.post('/saveJokeSession', {joke})
            .then(response => {
                console.log(response.data.message);
                getJokeSession();
            })
            .catch(error => {
                console.error(error);
            });
    };


    const [jokeSession, setJokeSession] = useState([]);

    const getJokeSession = () => {
        // axios is used for making HTTP requests. Here, it's fetching data from a local server.
        axios.get('http://127.0.0.1:8000/getJokes')
            .then(response => {
                // On successful response, setCategories is called with the response data.
                setJokeSession(response.data);
            })
            .catch(error => {
                // If there's an error in fetching data, it's logged to the console.
                console.error('Error al obtener datos:', error);
            });
    }

    useEffect(() => {
        console.log('solo se mostrara una vez');
        getJokeSession();
    }, []);

    // Function to handle selection in the parent component
    const handleDelete = (value) => {
        if(value){
            getJokeSession();
        }
    };

    // Function to handle selection in the parent component
    const handleSort = (value) => {
        if(value){
            getJokeSession();
        }
    };


    return (
        <>
            {jokeSession.length > 0 ? (
                <ul className='list-group list-group-flush'>
                    {jokeSession.map((joke, index) => (
                        <li className='list-group-item' key={index}>{joke}</li>
                    ))}
                </ul>
            ) : (
                <p>List is empty</p>
            )}
            <ButtonJoke handleDelete={handleDelete} handleSort={handleSort}/>
        </>
    );
}

