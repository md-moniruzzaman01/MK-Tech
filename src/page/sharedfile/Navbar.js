import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/1649055898301.jfif'
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
        <div className='flex justify-between md:block bg-transparent'>
        <div className='flex justify-between container items-center mx-auto  order-2 md:order-1 pt-2'>
            <a href="/" className='flex justify-center items-center text-lg md:text-xl'><span className=' font-semibold text-gray-700 ml-5'>Masterkey Technologies</span></a>
            <p className='pr-5'><span className='text-green-600'>BN</span> / <span>EN</span> </p>
            </div>
        <div className="navbar bg-transparent container mx-auto order-1 w-16 md:order-2 md:w-full">
            <div className="">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden mt-5">
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
                <ul className="menu menu-horizontal p-0 text-xl  text-custom-secondary uppercase font-primaryCaption">
                    {navItem}
                </ul>
                <div className='bg-gray-50 shadow p-2 rounded-3xl'>

                    
                    <Link to='/login'><button className="px-5 py-2 mr-2  font-medium text-base uppercase">login</button></Link>
                    <Link to='/singup'><button className="px-5 py-2 text-base font-medium rounded-3xl bg-custom-primary uppercase shadow-lg text-white">sign up</button></Link>
                </div>

            </div>

        </div>
        </div>
    );
};

export default Navbar;