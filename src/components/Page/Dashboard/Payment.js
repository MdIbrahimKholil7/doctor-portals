import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51L112oK2utpV7xigcFIcuFnon2vNEB0eQwcI7J442nztYrIDEJ3jvmsJha3EYcHg59WmS9KraF05Gq47eVdvNgfq00NknqMYsQ');

const Payment = () => {
    const { id } = useParams()
    const { data, loading } = useQuery(['payment', id], () => fetch(`https://mysterious-plateau-40111.herokuapp.com/payment/${id}`).then(res => res.json()))
    if (loading) {
        return <Loading />
    }
    const { patientName, treatmentName, price, date, slot } = data || {}
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl my-12">
                <div class="card-body ">
                    <h2 class="card-title text-indigo-900" >Hello {patientName}</h2>
                    <p className='font-bold'>Please pay for {treatmentName}</p>
                    <p>Your appointment on {date} at {slot}</p>
                    <p>Price:${price}</p>
                </div>
            </div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body ">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm 
                        data={data}
                        />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;