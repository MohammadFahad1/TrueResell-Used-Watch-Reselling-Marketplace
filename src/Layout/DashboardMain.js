import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const DashboardMain = () => {
    return (
        <div className='my-24 px-5'>
            <div className="drawer drawer-mobile h-auto">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open Menubar</label>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 flex flex-col gap-2 text-red-600">
                        <li className='shadow-md'><NavLink to='/dashboard/my-orders'>My Orders</NavLink></li>
                        <li className='shadow-md'><NavLink to='/'>Add A Product</NavLink></li>
                        <li className='shadow-md'><NavLink to='/'>My Products</NavLink></li>
                        <li className='shadow-md'><NavLink to='/'>My Buyers</NavLink></li>
                        <li className='shadow-md'><NavLink to='/'>All Buyers</NavLink></li>
                        <li className='shadow-md'><NavLink to='/'>All Sellers</NavLink></li>
                        <li className='shadow-md'><NavLink to='/'>Reported Items</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardMain;