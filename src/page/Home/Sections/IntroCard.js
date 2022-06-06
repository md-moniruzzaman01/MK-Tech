import React from 'react';
import { HiSpeakerphone } from "react-icons/hi";
import { FaTelegramPlane } from "react-icons/fa";
import customericon from '../../../images/customer.PNG'
const IntroCard = () => {
  
    return (
        <div className=' max-w-7xl mx-auto mt-28 mb-44 grid grid-cols-1 md:grid-cols-3'>
            
            
            <div className=' mt-5'>
                <div className='w-64 h-64 mt-5 mx-auto bg-white rounded-full flex justify-center items-center'>
                    <h2 className='text-9xl text-custom-icon'><HiSpeakerphone/> </h2>
                </div>
                <h3 className='text-center text-4xl mt-11'>Text 1</h3>
                <div className='w-10/12 mx-auto mt-5'>
                    <button className='btn w-full btn-primary bg-custom-secondary border-0 text-xl'>Hello 1</button>
                </div>
            </div>
            <div className=' mt-5'>
                <div className='w-64 h-64 mt-5 mx-auto bg-white rounded-full flex justify-center items-center'>
                    <h2 className='text-9xl text-custom-icon'><FaTelegramPlane/> </h2>
                </div>
                <h3 className='text-center text-4xl mt-11'>Text 1</h3>
                <div className='w-10/12 mx-auto mt-5'>
                    <button className='btn w-full btn-primary bg-custom-secondary border-0 text-xl'>Hello 1</button>
                </div>
            </div>
            <div className=' mt-5'>
                <div className='w-64 h-64 mt-5 mx-auto bg-white rounded-full flex justify-center items-center'>
                    <div className='w-[8rem] flex justify-center items-center'><img className='w-full' src={customericon} alt="" /> </div>
                </div>
                <h3 className='text-center text-2xl mt-11'>Text 1</h3>
                <div className='w-10/12 mx-auto mt-5'>
                    <button className='btn w-full btn-primary bg-custom-secondary border-0 text-xl'>Hello 1</button>
                </div>
            </div>
            
        </div>
    );
};

export default IntroCard;