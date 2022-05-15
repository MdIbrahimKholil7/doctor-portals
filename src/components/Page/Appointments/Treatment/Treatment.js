import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../../Shared/Loading/Loading';
import OpenModal from './OpenModal';
import TreatmentCard from './TreatmentCard';

const Treatment = ({ selected }) => {
    // const [services, setServices] = useState([])
    const [treatment, setTreatment] = useState(null)
    const date = format(selected, 'PP')
    const { data: services, loading, refetch } = useQuery(['available',date],()=> fetch(`http://localhost:5000/available?date=${date}`)
        .then(res => res.json()))
    if(loading){
        return <Loading/>
    }
    return (
        <div className='px-5 mt-9 mb-32'>
            <p className='text-center text-xl text-secondary font-bold'>Available Appointment on {format(selected, 'PP')}</p>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mt-12 lg:mt-20'>
                {
                    services?.length && services?.map(service => <TreatmentCard
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
                refetch={refetch}
            />}
        </div>
    );
};

export default Treatment;