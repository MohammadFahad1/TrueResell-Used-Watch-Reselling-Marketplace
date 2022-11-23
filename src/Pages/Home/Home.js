import React from 'react';
import useTitle from '../../Hooks/useTitle';
import CategoriesSlider from './CategoriesSlider/CategoriesSlider';
import HeroSection from './HeroSection/HeroSection';

const Home = () => {
    useTitle('Home')
    return (
        <section>
            <HeroSection></HeroSection>
            <CategoriesSlider></CategoriesSlider>
        </section>
    );
};

export default Home;