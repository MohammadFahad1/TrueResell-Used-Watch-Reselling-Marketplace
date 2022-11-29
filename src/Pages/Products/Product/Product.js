import React from 'react';
import BookModal from '../BookModal/BookModal';

const Product = ({ product }) => {
    const { image, productName } = product;

    return (
        <div className="w-full max-w-sm bg-white rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
            <BookModal product={product}></BookModal>
            <img className="p-8 rounded-t-lg" src={image} alt={productName} />
            <div className="px-5 pb-5">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{productName}</h5>
                <div className='flex items-center justify-between gap-2 mb-2'>
                    <p className='text-sm'>{product.location}</p>
                    <p className='text-sm'>Used {new Date().getFullYear() - product.yearOfPurchase} years</p>
                </div>
                <div className='flex items-center justify-between gap-2 mb-2'>
                    <p className='text-sm'>Posted at <b>{new Date(product?.timestamp).toDateString()}</b></p>
                    <p className='text-sm inline-flex'>Seller <b>{product.sellerName}</b> {
                        product.sellerStatus && <span class="inline-flex items-center p-1 mr-2 text-sm font-semibold text-blue-800 bg-blue-100 rounded-full dark:bg-blue-200 dark:text-blue-800">
                            <svg aria-hidden="true" class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            <span class="sr-only">Icon description</span>
                        </span>
                    }</p>
                </div>
                <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-sm font-bold text-gray-900 dark:text-white">Original Price: <del>${product.originalPrice}</del></span>
                    <span className="text-md font-bold text-gray-900 dark:text-white">Resale Price: ${product.sellingPrice}</span>
                </div>
                <label htmlFor={product._id} className="btn text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full">
                    Book Now
                </label>
            </div>
        </div>

    );
};

export default Product;