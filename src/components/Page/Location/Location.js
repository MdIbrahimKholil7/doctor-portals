import React from 'react';
import clock from '../../../img/icons/clock.svg'
import marker from '../../../img/icons/marker.svg'
import phone from '../../../img/icons/phone.svg'
import LocationCard from './LocationCard/LocationCard';
const Location = () => {
    /* const bg='bg-gradient-to-r from-secondary to-primary' */
    return (
        <div className='grid lg:grid-cols-3 gap-5 my-8 px-4'>
             <LocationCard icon={clock} title="Opening Hours" desc='Lorem ipsum dolor sit amet ' bgColor='bgGradient' />
            <LocationCard icon={marker} title="Visit Our Location" bgColor='bg-accent' desc="Brooklyn, NY 10036, United States"/>
            <LocationCard icon={phone} title="Opening Hours" desc='+000 123 456789' bgColor='bgGradient'/>
        </div>
    );
};

export default Location;