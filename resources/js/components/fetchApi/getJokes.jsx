import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ButtonJoke from '../button/buttonJoke';

/**
 * We get all the jokes, store them in session, sort them and delete them.
 * @param Prop $selectValue, $trigger
 * @return html
 */
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

                    // Call function and send data
                    saveJokeSession(selectValue + " - " +(response.data.value));
                    
                })
                .catch(error => {
                    // If there's an error in fetching data, it's logged to the console.
                    console.error('Error to get data:', error);
                });
        }
    }, [selectValue, trigger]);

    // Function stores the data we pass it in the session
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

    // Store the session joke
    const [jokeSession, setJokeSession] = useState([]);

    // We obtain the session and store it in a useState 
    const getJokeSession = () => {
        axios.get('http://127.0.0.1:8000/getJokes')
            .then(response => {
                // Change value of jokeSession
                setJokeSession(response.data);
            })
            .catch(error => {
                console.error('Error al obtener datos:', error);
            });
    }

    // Get the joke sessions only when the component is loaded
    useEffect(() => {
        getJokeSession();
    }, []);

    // We control when in the child component the 
    // session is deleted to load it again.
    const handleDelete = (value) => {
        if(value){
            getJokeSession();
        }
    };

    // We control when in the child component the 
    // session is sort to load it again.
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

