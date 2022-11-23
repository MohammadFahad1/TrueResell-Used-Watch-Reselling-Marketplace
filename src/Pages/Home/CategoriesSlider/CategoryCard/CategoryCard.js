import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
    const { _id, name, description } = category;
    return (
        <Link to={`/category/${_id}`} class="group flex flex-col justify-between rounded-sm bg-white p-8 shadow-xl transition-shadow hover:shadow-lg"
        >
            <div>
                <h3 class="text-3xl font-bold text-indigo-600">{name}</h3>
                <div class="mt-4 border-t-2 border-indigo-100 pt-2">
                    <p class="text-sm font-medium uppercase tracking-widest text-gray-500">
                        {description.slice(0, 100)}...
                    </p>
                </div>
            </div>

            <div class="mt-16 inline-flex items-center text-indigo-600">
                <Link to={`/category/${_id}`}><p class="text-lg font-medium">Show Products</p></Link>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="ml-3 h-6 w-6 transform transition-transform group-hover:translate-x-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                </svg>
            </div>
        </Link>

    );
};

export default CategoryCard;