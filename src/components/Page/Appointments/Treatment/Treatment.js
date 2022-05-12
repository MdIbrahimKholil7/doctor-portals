import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import TreatmentCard from './TreatmentCard';

const Treatment = ({ selected }) => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='px-5 mt-9'>
            <p className='text-center text-xl text-secondary font-bold'>Available Appointment on {format(selected, 'PP')}</p>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mt-12 lg:mt-20'>

                {
                    services.map(service => <TreatmentCard
                        key={service._id}
                        service={service}
                    />)
                }
            </div>
        </div>
    );
};

export default Treatment;