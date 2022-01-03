import React from 'react';
import logo from './../../../images/Logo.jpg';
import MainMenu from './../MainMenu/MainMenu';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <MainMenu />
            <img className='w-16' src={logo}/>
            <h1 className='text-center'>Hello</h1>

            <button className="btn-primary">
                Save changes
            </button>
        </div>
    );
};

export default Home;