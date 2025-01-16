import React from 'react';
import Header from './header and footer/Header';
import Footer from './header and footer/Footer';
import { Outlet } from 'react-router-dom';
const Root = () => {
    return (
        <div className='max-w-6xl mx-auto font-laato'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;