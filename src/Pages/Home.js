import React, { Fragment } from 'react';
import { Form } from '../Components/Form';
import { Notes } from '../Components/Notes';

export const Home = () => {
    const notes = new Array(3).fill('').map((_, index) => ({ id: index, title: `Note ${index + 1}` }));
    
    return <Fragment>
        <Form />
        <hr />
        <Notes notes={notes} />
    </Fragment>
}