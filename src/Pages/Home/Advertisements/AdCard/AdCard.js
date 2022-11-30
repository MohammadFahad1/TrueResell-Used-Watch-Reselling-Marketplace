import React, { useState } from 'react';
import BookModal from '../../../Products/BookModal/BookModal';

const AdCard = ({ ad }) => {
    const [success, setSuccess] = useState(false);

    return (
        <div className="card card-compact bg-base-100 shadow-lg">
            {success === false && <BookModal product={ad} setSuccess={setSuccess}></BookModal>}
            <figure><img src={ad.image} alt="Shoes" /></figure>
            <div className="card-body">
                <div className="px-5 pb-5">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white card-title">{ad.productName}</h5>
                    <div className='flex items-center justify-between gap-2 mb-2'>
                        <span className='text-sm'>{ad.location}</span>
                        <span className='text-sm'>Used {new Date().getFullYear() - ad.yearOfPurchase} years</span>
                    </div>
                    <div className='flex items-center justify-between gap-2 mb-2'>
                        <span className='text-sm'>Posted at <b>{new Date(ad?.timestamp).toDateString()}</b></span>
                        <span className='text-sm'>Seller <b>{ad.sellerName}</b> {
                            ad.sellerStatus && <span className="inline-flex items-center p-1 mr-2 text-sm font-semibold text-blue-800 bg-blue-100 rounded-full dark:bg-blue-200 dark:text-blue-800">
                                <svg aria-hidden="true" className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                <span className="sr-only">Icon description</span>
                            </span>
                        }</span>
                    </div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-sm font-bold text-gray-900 dark:text-white">Original Price: <del>${ad.originalPrice}</del></span>
                        <span className="text-md font-bold text-gray-900 dark:text-white">Resale Price: ${ad.sellingPrice}</span>
                    </div>

                    <div className="card-actions justify-end">
                        <label htmlFor={ad._id} className="btn text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full">
                            Book Now
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdCard;