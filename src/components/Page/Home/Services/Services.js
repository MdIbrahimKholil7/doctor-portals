import React from 'react';
import ServiceCard from './ServiceCard/ServiceCard';
import fluoride from '../../../../img/images/fluoride.png'
import cavity from '../../../../img/images/cavity.png'
import teeth from '../../../../img/images/whitening.png'
const Services = () => {
    const services=[
        {
            icon:`${fluoride}`,
            service:'Fluoride Treatment',
            desc:'We provide fluoride treatment.After fluoride treatment your teeth will be very strong ',
            id:1
        },
        {
            icon:`${cavity}`,
            service:'Cavity Filling',
            desc:'Our one of the best service is cavity filing .Cavity is very painful for your teeth',
            id:2
        },
        {
            icon:`${teeth}`,
            service:'Teeth Whitening',
            desc:'We provide wash teeth service.Our wash teeth service is one of the best service',
            id:3
        }
    ]
    return (
        <div className='mt-[120px] px-4'>
            <div className='text-center '>
                <h1 className='uppercase text-secondary text-xl font-bold'>Our Services</h1>
                <h1 className='text-3xl'>Services We Provide</h1>
            </div>
            <div className='grid lg:grid-cols-3 gap-5 mt-12'>
                {
                    services.map(service => <ServiceCard key={service.id} services={service}/>)
                }
            </div>
        </div>
    );
};

export default Services;