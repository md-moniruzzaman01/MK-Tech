import React from 'react';
import { HiSpeakerphone } from "react-icons/hi";
import { FaTelegramPlane } from "react-icons/fa";
import customericon from '../../../images/customer.PNG'
const IntroCard = () => {
  
    return (
        <div className='max-w-7xl mx-auto mt-11'>
            <div className='text-center'>
                <h2 className='text-xl md:text-4xl text-custom-secondary divider'>AVAILABLE FOR EVERYONE</h2>
                <p className='text-xl md: mt-5'>Here will be a text</p>
            </div>
        <div className='mt-20 mb-44 grid grid-cols-1 md:grid-cols-3'>
            
            
            <div className=' mt-5'>
                <div className='w-64 h-64 mt-5 mx-auto bg-white rounded-full flex justify-center items-center'>
                    <h2 className='text-9xl text-custom-icon'><HiSpeakerphone/> </h2>
                </div>
                <h3 className='text-center text-xl mt-11 mx-11'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat .</h3>
                <div className='w-10/12 mx-auto mt-5'>
                    <button className='btn w-full btn-primary bg-custom-secondary border-0 text-xl'>Marketing</button>
                </div>
            </div>
            <div className=' mt-5'>
                <div className='w-64 h-64 mt-5 mx-auto bg-white rounded-full flex justify-center items-center'>
                    <h2 className='text-9xl text-custom-icon'><FaTelegramPlane/> </h2>
                </div>
                <h3 className='text-center text-xl mt-11'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat .</h3>
                <div className='w-10/12 mx-auto mt-5'>
                    <button className='btn w-full btn-primary bg-custom-secondary border-0 text-xl'>Boost</button>
                </div>
            </div>
            <div className=' mt-5'>
                <div className='w-64 h-64 mt-5 mx-auto bg-white rounded-full flex justify-center items-center'>
                    <div className='w-[8rem] flex justify-center items-center'><img className='w-full' src={customericon} alt="" /> </div>
                </div>
                <h3 className='text-center text-xl mt-11'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat .</h3>
                <div className='w-10/12 mx-auto mt-5'>
                    <button className='btn w-full btn-primary bg-custom-secondary border-0 text-xl'>Support</button>
                </div>
            </div>
            
        </div>
        </div>
    );
};

export default IntroCard;