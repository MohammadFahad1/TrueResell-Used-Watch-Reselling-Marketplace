import React, { useEffect, useState } from 'react';
import {
    CardElement,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';
import toast from 'react-hot-toast';

const CheckOutForm = ({ order }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('')

    useEffect(() => {
        fetch('http://localhost:5000/create-payment-intent', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ price: order.sellingPrice })
        })
            .then(res => res.json())
            .then(data => setClientSecret(data.clientSecret))
    }, [order?.sellingPrice])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: card,
            billing_details: {
                name: order.bookedByName,
                email: order.bookedByEmail
            }
        })

        if (error) {
            setCardError(error)
            toast.error(<><b>{error.type}: </b> {error.message}</>);
        } else {
            setCardError('')
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: order.bookedByName,
                        email: order.bookedByEmail
                    },
                },
            },
        );

        if (confirmError) {
            setCardError(confirmError.message)
            return
        }
        console.log('paymentIntent', paymentIntent)
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement />
                <button className='btn btn-primary mt-2' type="submit" disabled={!stripe || !elements || !clientSecret}>
                    Pay
                </button>
            </form>
            <p className="text-red-600">{cardError.message}</p>
        </>
    );
};

export default CheckOutForm;