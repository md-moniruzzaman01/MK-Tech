import React from 'react';
import popimg from '../../../../images/popup.webp';
import { BiLinkExternal } from "react-icons/bi";

const PopUnder = () => {
    return (
     
           <div className='block md:flex min-h-[50vh]'>
               <div className='w-full md:w-1/2 flex justify-center items-center'>
                   <img className='w-8/12 ' src={popimg} alt="" />
               </div>
              <div className='w-full md:w-1/2 relative'>
              <div className='max-w-xl mt-7 mx-5'>
               <h1 className='text-custom-primary uppercase text-3xl font-semibold'>pop under</h1>
                <p className='text-gray-800 text-xl mt-5'>This is one of the most popular ads. After user’s click, this
                ad opens landing page in behind. So, the user experience is
                not hampered much.</p>
               </div>
               <p className='absolute bottom-[-50px] md:bottom-10 left-3 text-xl flex items-center'>Learn more <span className='ml-2'><BiLinkExternal/></span></p>
              </div>
           </div>
      
    );
};

export default PopUnder;