import React, { Fragment, useState } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { NavLink } from 'react-router-dom';

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

type props = {
    user?: {},
    currentPage: String
}

const Navbar = (props: props) => {
    const navigation = [
        { name: 'Accueil', href: '/', current: props.currentPage === 'home' ? true : false },
        { name: 'Blog', href: '/blog', current: props.currentPage === 'blog' ? true : false },
        { name: 'A propos', href: '/about', current: props.currentPage === 'about' ? true : false }
    ];

    const [navbarOnTop, setNavbarPosition] = useState(true);
    
    const handleChangeBackground = () => {
        if (window.scrollY >= 40) {
            setNavbarPosition(false);
        } else {
            setNavbarPosition(true);
        }
    }

    window.addEventListener('scroll', handleChangeBackground);

    return (
        <div className='*Navbar fixed w-full'>
            <Disclosure as="nav" className={navbarOnTop ? 'bg-light-fade sm:bg-transparent' : 'bg-light-fade'}>
                {({ open }) => (
                    <>
                        <div className="container px-2 sm:px-0">
                            <div className="relative flex h-16 items-center justify-between">
                                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                    {/* Mobile menu button*/}
                                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Ouvrir le menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6 text-gray-800" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6 text-gray-800" aria-hidden="true" />
                                    )}
                                    </Disclosure.Button>
                                </div>
                                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                    <div className={classNames(navbarOnTop ? "text-gray-900 sm:text-gray-300" : "text-gray-900" , "flex flex-shrink-0 items-center font-bold text-lg")}>
                                        <NavLink to="/">
                                            <div className='flex h-8 w-auto lg:hidden items-center mt-1'>
                                                Zoe Blog
                                            </div>
                                        </NavLink>
                                        <NavLink to="/">
                                            <div className='hidden h-8 w-auto lg:flex items-center'>
                                                Zoe Blog
                                            </div>
                                        </NavLink>
                                    </div>
                                </div>
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className={classNames(
                                            item.current ? (
                                                !navbarOnTop ? 'text-gray-900 border-b border-gray-900' : 'text-gray-100 border-b border-gray-100'
                                            ) : (
                                                !navbarOnTop ? 'text-gray-600 hover:text-gray-900' : 'text-gray-400 hover:text-gray-100'
                                            ), 'px-3 py-2 text-base font-medium'
                                            )}
                                            aria-current={item.current ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </a>
                                        ))}
                                        <a href='/login' className={'text-dark font-medium border rounded bg-gray-100 hover:bg-primary hover:border-primary hover:text-white flex items-center px-4 transition ease-linear duration-200'}>
                                            Connexion
                                        </a>
                                    </div>
                                </div>
                                { props.user && (
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                        <button
                                            type="button"
                                            className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                        >
                                            <span className="sr-only">View notifications</span>
                                            <BellIcon className="h-6 w-6" aria-hidden="true" />
                                        </button>

                                        {/* Profile dropdown */}
                                        <Menu as="div" className="relative ml-3">
                                        <div>
                                            <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                            <span className="sr-only">Open user menu</span>
                                            <img
                                                className="h-8 w-8 rounded-full"
                                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                alt=""
                                            />
                                            </Menu.Button>
                                        </div>
                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-100"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >
                                            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <Menu.Item>
                                                {({ active }) => (
                                                <a
                                                    href="/"
                                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                >
                                                    Your Profile
                                                </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                <a
                                                    href="/"
                                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                >
                                                    Settings
                                                </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                <a
                                                    href="/"
                                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                >
                                                    Sign out
                                                </a>
                                                )}
                                            </Menu.Item>
                                            </Menu.Items>
                                        </Transition>
                                        </Menu>
                                    </div>
                                )}
                            </div>
                        </div>

                        <Disclosure.Panel className="sm:hidden">
                            <div className="space-y-1 px-2 pt-2 pb-3">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current ? ' text-gray-900 border-gray-900' : 'border-transparent text-gray-600 hover:text-gray-900',
                                        'block px-3 py-2 text-base font-medium border-l-2'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </div>
    );
};

export default Navbar;