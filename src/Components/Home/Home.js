import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Pricing from '../Pricing/Pricing';
import Reviews from '../Reviews/Reviews';
import ThreeService from '../ThreeService/ThreeService';
const Home = () => {
    return (
        <div>
            <Banner />
            <About />
            <ThreeService />
            <Reviews />
            <Pricing />
        </div>
    );
};

export default Home;