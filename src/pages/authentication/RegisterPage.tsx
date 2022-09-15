import React from 'react';
import Navbar from '../../components/Navbar';

const RegisterPage = () => {
    return (
        <div className='RegisterPage'>
            <Navbar currentPage='register' />

            <div className='site__blocks--register'>
                <div className='container full-page flex justify-center items-center'>
                    <h1 className='text-light uppercase text-4xl font-semibold'>Enregistrement</h1>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;