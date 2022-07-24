import React from 'react';
import Slider from '../../Slider/Slider';
import MainMenu from './../MainMenu/MainMenu';
import Footer from './../Footer/Footer';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <MainMenu />
            <Slider />
            
            <Footer />
        </div>
    );
};

export default Home;