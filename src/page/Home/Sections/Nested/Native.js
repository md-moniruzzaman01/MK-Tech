import React from 'react';
import nativeimg from '../../../../images/vs-native.webp';
import { BiLinkExternal } from "react-icons/bi";
const Native = () => {
    return (
        <div className='block md:flex min-h-[50vh]'>
               <div className='w-full md:w-1/2 flex justify-center items-center'>
                   <img className='w-8/12 ' src={nativeimg} alt="" />
               </div>
              <div className='w-full md:w-1/2  relative'>
              <div className='max-w-xl mt-7 mx-5'>
                    <h1 className='text-custom-primary uppercase text-3xl font-semibold'>NATIVE</h1>
                    <p className='text-gray-800 text-xl mt-5'>Ad format with the image and the title, that perfectly fits into the content of the site.Native ads are placed in the most visible areas of the page and, thus, this format shows good results and the level of interaction.</p>
                </div>
               <p className='absolute bottom-[-50px] md:bottom-10 left-3 text-xl flex items-center'>Learn more <span className='ml-2'><BiLinkExternal/></span></p>
              </div>
           </div>
    );
};

export default Native;