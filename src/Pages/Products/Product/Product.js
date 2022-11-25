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
                <div className='flex justify-between'>
                    <p className='text-sm'>{product.location}</p>
                    <p className='text-sm'>Used {product.yearOfPurchase - new Date().getFullYear()} years</p>
                </div>
                <div className='flex justify-between'>
                    <p className='text-sm'>Posted at <b>{new Date(product?.timestamp).toDateString()}</b></p>
                    <p className='text-sm'>Seller {new Date(product?.timestamp).getDay()}/{new Date(product?.timestamp).getMonth()}/{new Date(product?.timestamp).getFullYear()}</p>
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