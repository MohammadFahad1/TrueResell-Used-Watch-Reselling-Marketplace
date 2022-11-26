import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CheckOutForm from './CheckOutForm/CheckOutForm';

const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_pk}`);

const Payment = () => {
    const { id } = useParams();

    const [order, setOrder] = useState({});


    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetch(`http://localhost:5000/orders/${id}`)
            .then(res => res.json())
            .then(data => {
                setOrder(data)
                setIsLoading(false)
            })
    }, [id])
    if (isLoading) {
        return <div className='min-h-screen relative bg-yellow-400'>
            <div className="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2">
                <div className="border-t-transparent border-solid animate-spin rounded-full border-blue-400 border-8 h-64 w-64"></div>
            </div>
        </div>
    }

    return (
        <div className="w-full h-auto bg-white rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
            <img className="p-8 rounded-t-lg" src={order?.image} alt={order?.productName} />
            <div className="px-5 pb-5">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{order?.productName}</h5>
                <div className='flex justify-between'>
                    <p className='text-sm'>{order?.location}</p>
                    <p className='text-sm'>Used {new Date().getFullYear() - order?.yearOfPurchase} years</p>
                </div>
                <div className='flex justify-between'>
                    <p className='text-sm'>Posted at <b>{new Date(order?.timestamp).toDateString()}</b></p>
                    <p className='text-sm'>Seller <b>{order?.sellerName}</b></p>
                </div>
                <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-sm font-bold text-gray-900 dark:text-white">Original Price: <del>${order?.originalPrice}</del></span>
                    <span className="text-md font-bold text-gray-900 dark:text-white">Resale Price: ${order?.sellingPrice}</span>
                </div>
            </div>
            <div className='max-w-md'>
                <Elements stripe={stripePromise}>
                    <CheckOutForm order={order}></CheckOutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;