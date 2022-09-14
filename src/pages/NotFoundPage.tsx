import React from 'react';

const NotFoundPage = () => {
    return (
        <div className='NotFoundPage'>
            <div className='container full-page flex flex-col justify-center items-center space-y-4'>
                <h1 className='text-6xl font-semibold'>Error 404</h1>
                <h4 className='text-xl'>This page doesn't exist</h4>
            </div>
        </div>
    );
};

export default NotFoundPage;