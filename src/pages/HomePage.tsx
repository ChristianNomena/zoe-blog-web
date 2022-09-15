import React from 'react';
import Navbar from '../components/Navbar';
import Testimony from '../components/Testimony';

const HomePage = () => {
    return (
        <div className='HomePage'>
            <Navbar />

            <div className='site__blocks--home'>
                <div className='container full-page flex justify-center items-center'>
                    <h1 className='text-light uppercase text-4xl font-semibold'>Dieu nous aime tous</h1>
                </div>
            </div>

            <div className='container container-lg py-16 px-6 lg:px-0'>
                <h1 className='text-4xl font-semibold text-center text-gray-700'>Témoignages récents</h1>
                <div className='pt-16'>
                    <Testimony title='Titre du témoignage' />
                </div>
            </div>
        </div>
    );
};

export default HomePage;