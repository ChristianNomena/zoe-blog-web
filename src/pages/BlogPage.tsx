import React from 'react';
import Navbar from '../components/Navbar';
import Testimony from '../components/Testimony';

const BlogPage = () => {
    return (
        <div className='BlogPage'>
            <Navbar currentPage='blog' />

            <div className='site__blocks--blog'>
                <div className='container full-page flex justify-center items-center'>
                    <h1 className='text-light uppercase text-4xl font-semibold'>Parcourez les témoignages ici</h1>
                </div>
            </div>

            <div className='container container-lg py-16 px-6 lg:px-0'>
                <h1 className='text-4xl font-semibold text-center text-gray-700'>Tous les témoignages</h1>
                <div className='pt-16'>
                    <Testimony title='Titre du témoignage' id={2} />
                </div>
            </div>
        </div>
    );
};

export default BlogPage;