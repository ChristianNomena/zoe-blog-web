import React from 'react';
import { useParams } from 'react-router-dom';

const TestimonyPage = () => {
    const { testimonyId } = useParams();

    return (
        <div className='TestimonyPage'>
            <h1>Hello I'm the testimony number {testimonyId} !!! Yeah</h1>
        </div>
    );
};

export default TestimonyPage;