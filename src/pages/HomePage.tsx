import React from 'react';
import Navbar from '../components/Navbar';

const HomePage = () => {
    return (
        <div className='HomePage'>
            <Navbar />

            <div className='site__blocks--home'>
                <div className='container full-page flex justify-center items-center'>
                    <h1 className='text-light uppercase text-4xl font-semibold'>Dieu nous aime tous</h1>
                </div>
            </div>

            <div className='container py-64'>
                <p>Hey there !!!</p>
            </div>
        </div>
    );
};

export default HomePage;