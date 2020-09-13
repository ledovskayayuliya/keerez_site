import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom'
const Services = () => {
    return (
    <Hero hero='servicesHero'>
        <Banner title='our services'>
            <Link to='/' className='btn-primary'>
                return home
            </Link>
        </Banner>
    </Hero>
    );
};

export default Services;
