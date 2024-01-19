import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import GetCategories from './fetchApi/getCategories';
import GetJokes from './fetchApi/getJokes';

/**
 * Father of all components
 * @param nothing
 * @return html
 */
export default function Codea() {

    // Store the selected value of the child component
    const [selectValue, setSelectValue] = useState();

    // We are going to check that if the value doesn't change and the same category is received,
    // we will change the value of the trigger. This way, in the child component, 
    // we can call the useEffect.
    const [trigger, setTrigger] = useState(false);

    // Function to handle selection in the parent component
    const onHandleSelect = (value) => {
        if (value != selectValue) {
            setSelectValue(value);
        } else {
            setTrigger((trigger) => !trigger);
        }
    };

    return (
        <div className='container'>
            <h1 className='my-2'>Welcome to Chuck Norris</h1>
            <div className='row align-items-start'>
                    <GetCategories onHandleSelect={onHandleSelect} />
                    <GetJokes selectValue={selectValue} trigger={trigger} />
            </div>
        </div>
    );
}


// Conditional rendering based on the existence of an element with ID 'codeareact'.
if (document.getElementById('reactsComponents')) {
    // Using createRoot to create a root for a React component tree and rendering the <Codea/> component.
    // createRoot is part of the new ReactDOM client and server renderer in React 18.
    createRoot(document.getElementById('reactsComponents')).render(<Codea />);
}