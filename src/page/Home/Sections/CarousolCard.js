import React from 'react';

const CarousolCard = ({info}) => {
    const {headerText,normaltext,img}=info;
    return (
        <div className='min-h-[50vh] md:min-h-[85vh] block md:flex justify-between'>
            <div className='block md:flex order-2 md:order-1 justify-center items-center w-full md:w-1/2 my-5'>
                <div className='ml-5 mr-5 md:ml-20 md:mr-11 space-y-5'>
                <h1 className='text-2xl md:text-6xl font-primary font-bold leading-tight text-custom-secondary'>{headerText}</h1>
                <p className='text-xl '>{normaltext}</p>
                </div>
            </div>
            <div className='w-full order-1 md:order-2 md:w-1/2 flex justify-center items-center'>
                <img className='w-11/12 ' src={img} alt="" />
            </div>
        </div>
    );
};

export default CarousolCard;