import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/authentication/LoginPage';
import RegisterPage from './pages/authentication/RegisterPage';
import BlogPage from './pages/BlogPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import TestimonyPage from './pages/TestimonyPage';

const App = () => {
    return (
        <div className='App'>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/blog' element={<BlogPage />} />
                    <Route path='/about' element={<AboutPage />} />
                    <Route path='/login' element={<LoginPage />} />
                    <Route path='/register' element={<RegisterPage />} />
                    <Route path='/testimony/:testimonyId' element={<TestimonyPage />} />
                    <Route path='*' element={<NotFoundPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;