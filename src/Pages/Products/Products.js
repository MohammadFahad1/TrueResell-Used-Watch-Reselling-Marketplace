import React from 'react';
import { useParams } from 'react-router-dom';

const Products = () => {
    const { id } = useParams();
    return (
        <div>
            catid: {id}
        </div>
    );
};

export default Products;