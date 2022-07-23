import { format } from 'date-fns';
import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../../../_firebase_init';
import Loading from '../../../Shared/Loading/Loading';
import OpenModal from './OpenModal';
import TreatmentCard from './TreatmentCard';

const Treatment = ({ selected }) => {
    const [user]=useAuthState(auth)
    const navigate=useNavigate()
    const [treatment, setTreatment] = useState(null)
    const date = format(selected, 'PP')
    const { data: services, loading, refetch } = useQuery(['available', date], () => fetch(`https://mysterious-plateau-40111.herokuapp.com/available?date=${date}&email=${user.email}`,{
        method:"GET",
        headers:{
            authorization:`Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => {
            console.log(res)
            if(res.status === 401 || res.status === 403){
                signOut(auth)
                localStorage.removeItem('accessToken')
                navigate('/')
            }
           return res.json()
        }))
    if (loading) {
        return <Loading />
    }
    console.log(services)
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