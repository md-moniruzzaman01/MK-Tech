import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const navItem = <>
        <li className='mr-1'><Link to="/">Home</Link></li>
        <li className='mr-1'><Link to="/advertisers">Advertisers</Link></li>
        <li className='mr-1'><Link to="/publishers">publishers</Link></li>
        <li className='mr-1'><Link to="/influencers">influencers</Link></li>
        <li className='mr-1'><Link to="/blog">blog</Link></li>
        <li className='mr-1'><Link to="/contact">contact us</Link></li>
    </>
    return (
        <div className='flex justify-between md:block'>
        <div className='flex justify-between container items-center mx-auto  order-2 md:order-1 mt-2'>
            <a href="/" className='font-primaryCaption font-bold text-4xl'>LOGO</a>
            <p className='px-2'><span className='text-green-600'>BN</span> / <span>EN</span> </p>
            </div>
        <div className="navbar bg-base-100 container mx-auto  order-1 w-20 md:order-2 md:w-full">
            <div className="">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                        {navItem}
                        <div className="flex justify-around">
                            <Link to='/login'><button className="btn  border-0 bg-custom-primary">login</button></Link>

                        </div>

                    </ul>
                </div>

            </div>

            <div className=" hidden lg:flex justify-between  w-full ">
                <ul className="menu menu-horizontal p-0 text-xl text-custom-secondary uppercase font-primaryCaption">
                    {navItem}
                </ul>
                <div className='ml-5'>
                    <Link to='/login'><button className="btn  border-0 bg-custom-primary">login</button></Link>
                </div>

            </div>

        </div>
        </div>
    );
};

export default Navbar;