import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import Allservices from '../components/Allservices';
import FeaturedServices from '../components/FeaturedServices';
export default function Home() {
    return (
    <>
    <Hero>
        <Banner title='training services' subtitle='training advices, meal planes and other for everyone of you'>
            <Link to='/services' className='btn-primary'>
                our services
            </Link>
        </Banner>
    </Hero>
    <Allservices/>
    <FeaturedServices/>
    </>
    );
}
