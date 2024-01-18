
import React, { useState, useEffect } from 'react';

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
                })
                .catch(error => {
                    // If there's an error in fetching data, it's logged to the console.
                    console.error('Error to get data:', error);
                });
        }
    }, [selectValue, trigger]);


    return (
        <div>
            {jokes.length > 0 ? (
                <ul>
                    {jokes.map((joke, index) => (
                        <li key={index}>{joke}</li>
                    ))}
                </ul>
            ) : (
                <p>List is empty</p>
            )}
        </div>
    );
}

