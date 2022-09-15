import React from 'react';
import Navbar from '../../components/Navbar';

const LoginPage = () => {
    return (
        <div className='LoginPage'>
            <Navbar currentPage='login' />

            <div className='site__blocks--login'>
                <div className='container full-page flex justify-center items-center'>
                    <h1 className='text-light uppercase text-4xl font-semibold'>Authentification</h1>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;