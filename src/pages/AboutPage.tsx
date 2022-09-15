import React from 'react';
import Navbar from '../components/Navbar';

const AboutPage = () => {
    return (
        <div className='AboutPage'>
            <Navbar currentPage='about' />

            <div className='site__blocks--about'>
                <div className='container full-page flex justify-center items-center'>
                    <h1 className='text-light uppercase text-4xl font-semibold'>Qui nous-sommes?</h1>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;