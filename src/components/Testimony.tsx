import React from 'react';

type props = {
    title: string
}

const Testimony = (props: props) => {
    return (
        <div className='Testimony shadow-md'>

            <figure className='xl:col-span-2 w-full'>
                <img className='object-cover lg:mt-1.5 w-full h-128' src='./img/temoignage1.jpg' alt='testimony' />
            </figure>

            <div className='px-8 pt-4 pb-6'>
                <h2 className='text-2xl font-medium mb-4 text-gray-700'>{props.title}</h2>

                <p className='xl:col-span-3 text-justify text-gray-500'>
                    Ex reprehenderit aliquip occaecat dolor velit dolor pariatur. Commodo exercitation et aliquip consequat ipsum est aliqua. Dolore duis ex ullamco in anim excepteur tempor sunt aliqua adipisicing. Sint quis ex sunt id occaecat amet minim culpa enim est dolor.

                    Officia excepteur exercitation minim ut ullamco cupidatat. Nulla tempor non est aliquip anim. Officia tempor tempor excepteur reprehenderit nostrud voluptate nostrud qui id enim. Ad proident aliquip aliquip ut et dolor aute sunt anim elit. Sit mollit duis qui amet incididunt consectetur ullamco consequat

                    ...
                </p>

                <hr className='my-4' />
                <button className='bg-primary hover:bg-primary-fade px-4 py-2 rounded text-white'>Lire en entier</button>
            </div>

        </div>
    );
};

export default Testimony;