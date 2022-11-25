import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { image, productName } = product;
    return (

        <div className="w-full max-w-sm bg-white rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
            <img className="p-8 rounded-t-lg" src={image} alt={productName} />
            <div className="px-5 pb-5">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{productName}</h5>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                    <Link to='/' className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Book Now</Link>
                </div>
            </div>
        </div>

    );
};

export default Product;