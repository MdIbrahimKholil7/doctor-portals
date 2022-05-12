import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Location from '../Location/Location';
import Banner from './Banner/Banner';
import ContactUs from './ContactUs/ContactUs';
import DentalCare from './DentalCare/DentalCare';
import Services from './Services/Services';
import Testimonial from './Testemonial/Testimeonial';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Location/>
            <Services/>
            <DentalCare/>
            <Testimonial/>
            <ContactUs/>
            <Footer/>
        </div>
    );
};

export default Home;