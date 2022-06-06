import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const AdsBanner = () => {
    return (

        <div className='mb-20'>
            <ul className='flex md:justify-between max-w-3xl mx-auto  text-gray-800 font-semibold my-5 flex-wrap'>
                <li><Link className='btn btn-ghost mt-2 mx-2 w-40 md:w-44 flex items-center justify-center text-base md:text-xl text-center rounded-3xl py-2 bg-white' to="/">POP-UNDER</Link></li>
                <li><Link className='btn btn-ghost  mt-2 mx-2 w-40 md:w-44 text-center bg-white text-base md:text-xl rounded-3xl py-2' to="banner">BANNER AD</Link></li>
                <li> <Link className='btn btn-ghost  mt-2 mx-2 w-40 md:w-44 text-center bg-white text-base md:text-xl rounded-3xl py-2' to="native">NATIVE</Link></li>
                <li> <Link className='btn btn-ghost  mt-2 mx-2 w-40 md:w-44 text-center bg-white text-base md:text-xl rounded-3xl py-2' to="skim">SKIM</Link></li>
            </ul>
            
            
           
           
            <div>
            <Outlet />
            </div>
        </div>
    );
};

export default AdsBanner;