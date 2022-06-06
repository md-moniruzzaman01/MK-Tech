import React from 'react';

const CarousolCard = ({info}) => {
    const {headerText,normaltext,img}=info;
    return (
        <div className='min-h-[85vh] flex justify-between'>
            <div className='flex justify-center items-center w-1/2'>
                <div className='ml-20 mr-11 space-y-5'>
                <h1 className='text-6xl font-primary font-bold leading-tight'>{headerText}</h1>
                <p className='text-xl '>{normaltext}</p>
                </div>
            </div>
            <div className='w-1/2 flex justify-center items-center'>
                <img className='w-11/12 ' src={img} alt="" />
            </div>
        </div>
    );
};

export default CarousolCard;