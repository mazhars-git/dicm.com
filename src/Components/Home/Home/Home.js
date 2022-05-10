import React from 'react';
import Slider from '../../Slider/Slider';
import MainMenu from './../MainMenu/MainMenu';
import Footer from './../Footer/Footer';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <MainMenu />
            <Slider />
            
            <button className="btn-primary">
                Save changes
            </button>
            <Footer />
        </div>
    );
};

export default Home;