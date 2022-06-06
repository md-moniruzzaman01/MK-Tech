import React from 'react';
import bannerimg from '../../../../images/banneradd.jpg';
import { BiLinkExternal } from "react-icons/bi";
const BannerAd = () => {
    return (
        <div className='block md:flex min-h-[50vh] pb-20'>
            <div className='w-full md:w-1/2 flex justify-center items-center'>
                <img className='w-8/12 ' src={bannerimg} alt="" />
            </div>
            <div className='w-full md:w-1/2  relative '>
                <div className='max-w-xl mt-7 mx-5'>
                    <h1 className='text-custom-primary uppercase text-3xl font-semibold'>BANNER AD</h1>
                    <p className='text-gray-800 text-xl mt-5'>Choose between the available banner formats. Highly effective ad for visibility..</p>
                </div>
                <p className='absolute bottom-[-100px] md:bottom-10 left-3 text-xl flex items-center'>Learn more <span className='ml-2'><BiLinkExternal /></span></p>
            </div>
        </div>
    );
};

export default BannerAd;