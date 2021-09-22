import React from 'react';
import Banner from '../Components/Banner';
import Benefits from '../Components/Benefits';
import MiniCompanyBio from '../Components/MiniCompanyBio/MiniCompanyBio';
import TopProducts from '../Components/TopProduct/TopProducts';

const Home = () => {
    return (
        <div>
            <Banner />
            <TopProducts />
            <MiniCompanyBio />
            <Benefits />
        </div>
        );
};

export default Home;
