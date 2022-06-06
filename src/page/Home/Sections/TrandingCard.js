import React from 'react';

const TrandingCard = ({ td}) => {
    const {image,title,discribtion}= td
    return (
        <div className='  shadow-xl  rounded-xl p-5 bg-white'>
           <div className='border border-dotted border-custom-primary rounded-lg flex '>
           <div className='w-1/3 mx-auto'>
                <img className='w-11/12 h-60 p-3  rounded-xl' src={image} alt="" />
            </div>
            <div className='w-2/3 flex pl-11 items-center text-custom-secondary'>
               <div className='space-y-2'>
               <h1 className='font-bold text-2xl'>{title}</h1>
                
                
                <p className=' text-xl'>{discribtion}</p>
                
               </div>

            </div>
           </div>

        </div>
    );
};

export default TrandingCard;