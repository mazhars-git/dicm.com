import React from 'react';
import Slider from '../../Slider/Slider';
import MainMenu from './../MainMenu/MainMenu';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <MainMenu />
            <Slider />

            <button className="btn-primary">
                Save changes
            </button>
        </div>
    );
};

export default Home;