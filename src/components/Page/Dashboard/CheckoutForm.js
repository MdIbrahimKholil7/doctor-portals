import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({ data }) => {
    const [cardError, setCardError] = useState('')
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState('')
    const [success, setSuccess] = useState('')
    const [intent, setIntent] = useState('')
    const { price, patientName, email, _id,treatmentName } = data || {}
    useEffect(() => {
        data?.price && fetch('https://mysterious-plateau-40111.herokuapp.com/create-payment-intent', {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price,data })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data.clientSecret)
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret)
                }
            })
    }, [price])
    // console.log(elements)
    const handleSubmit = async event => {
        event.preventDefault();
        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setCardError(error.message)
        } else {
            setCardError('')
        }

        // confirmm card payment 
        const { paymentIntent, error: paymentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: patientName,
                        email: email
                    },
                },
            },
        );
        console.log(paymentError)
      

        if (paymentError) {
            setCardError(paymentError.message)
            setSuccess('')
           

        } else {
            setCardError('')
            setIntent(paymentError?.id)
            setSuccess('Congrats! you payment is success')
            console.log(paymentIntent)
            const payment={
                transactionId:paymentIntent?.id,
                name:patientName,
                treatment:treatmentName
            }
            fetch(`https://mysterious-plateau-40111.herokuapp.com/update-user/${_id}`,{
                method:"PATCH",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify(payment)
            })
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button type="submit" className='btn btn-accent mt-12' disabled={!stripe || !elements || !clientSecret}>
                    Pay
                </button>
            </form>
            {cardError && <p className='text-red-500 mt-5'>{cardError}</p>}
            {success && <p className='text-green-500 mt-5'>{success} Your transaction id {intent}</p>}
        </>
    );
};

export default CheckoutForm;