import React from 'react';
import MainMenu from './../MainMenu/MainMenu';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <MainMenu />

            <button className="btn-primary">
                Save changes
            </button>
        </div>
    );
};

export default Home;