import React from 'react';

const Impressions = () => {
    return (
        <div className='min-h-[70vh] bg-custom-secondary pb-11'>
            <h1 className='text-4xl font-semibold text-center mb-20 pt-11 text-white'>Impressions</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto'>
                {/* 1st one */}
                <div className='flex justify-center items-center'>
                <div className='w-72 h-72 bg-transparent border border-dashed rounded-full flex justify-center items-center'>
                    <div className='text-center text-white'>
                    <h1 className='text-6xl '>1 BN+</h1>
                    <p className='text-3xl mt-7'> Daily Impressions</p>
                    </div>
                </div>
                </div>
                {/* 2nd one */}
                <div className='flex justify-center items-center mt-5'>
                <div className='w-72 h-72 bg-white  rounded-full flex justify-center items-center'>
                    <div className='text-center text-custom-secondary'>
                    <h1 className='text-6xl '>$500K+</h1>
                    <p className='text-3xl mt-7'> Paid</p>
                    </div>
                </div>
                </div>

                {/* 3rd one */}
                <div className='flex justify-center items-center mt-5'>
                <div className='w-72 h-72 bg-custom-primary  rounded-full flex justify-center items-center'>
                    <div className='text-center text-white'>
                    <h1 className='text-6xl '>8K+</h1>
                    <p className='text-3xl mt-7'>Global Publishers</p>
                    </div>
                </div>
                </div>

            </div>
        </div>
    );
};

export default Impressions;