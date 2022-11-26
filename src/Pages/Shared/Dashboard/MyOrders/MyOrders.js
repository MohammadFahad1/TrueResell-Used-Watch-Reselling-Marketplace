import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../contexts/AuthProvider';

const MyOrders = () => {
    const [myorders, setMyorders] = useState([]);
    const { user, loading } = useContext(AuthContext);

    useEffect(() => {
        fetch(`http://localhost:5000/myorders/${user?.uid}`)
            .then(res => res.json())
            .then(data => setMyorders(data))
    }, [user?.uid])

    if (loading && myorders === []) {
        return <div className='min-h-screen relative bg-yellow-400'>
            <div className="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2">
                <div className="border-t-transparent border-solid animate-spin  rounded-full border-blue-400 border-8 h-64 w-64"></div>
            </div>
        </div>
    }

    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                                Sl
                            </th>
                            <th>Product Image & Name</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myorders?.map((order, i) =>
                                <tr key={order._id}>
                                    <th>
                                        {i + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-24 h-24">
                                                    <img src={order.image} alt={order.productName} />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{order.productName}</div>
                                                <div className="text-sm opacity-50">{order.location}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{order.sellingPrice}</td>
                                    <th>
                                        <Link to={`/dashboard/payment/${order._id}`}>
                                            <button className="btn btn-secondary bg-red-600 btn-xs">Pay Now</button>
                                        </Link>
                                    </th>
                                </tr>
                            )
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Sl</th>
                            <th>Product Image & Name</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;