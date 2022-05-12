import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import OpenModal from './OpenModal';
import TreatmentCard from './TreatmentCard';

const Treatment = ({ selected }) => {
    const [services, setServices] = useState([])
    const [treatment, setTreatment] = useState(null)
    useEffect(() => {
     
           fetch('http://localhost:5000/service')
                .then(res => res.json())
                .then(data => setServices(data))
    }, [])
    // console.log(services)
    return (
        <div className='px-5 mt-9 mb-32'>
            <p className='text-center text-xl text-secondary font-bold'>Available Appointment on {format(selected, 'PP')}</p>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mt-12 lg:mt-20'>
                {
                   services.length && services.map(service => <TreatmentCard
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    />)
                }
            </div>
            {treatment && <OpenModal
                treatment={treatment}
                setTreatment={setTreatment}
                selected={selected}
            />}
        </div>
    );
};

export default Treatment;