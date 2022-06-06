import React from 'react';
import skimimg from '../../../../images/skim.jpg';
import { BiLinkExternal } from "react-icons/bi";
const Skim = () => {
    return (
        <div className='block md:flex min-h-[50vh]'>
        <div className='w-full md:w-1/2 flex justify-center items-center'>
            <img className='w-8/12 ' src={skimimg} alt="" />
        </div>
       <div className='w-full md:w-1/2  relative'>
       <div className='max-w-xl mt-7 mx-5'>
        <h1 className='text-custom-primary uppercase text-3xl font-semibold'>SKIM</h1>
         <p className='text-gray-800 text-xl mt-5'>SKIM" is a link that a publisher inserts on a specific site
element, and after clicking on it, an advertisement appears
to the user.
<span className='block'>SKIM gives 100% control of your sold traffic amount, higher
CR to advertisers and CPM rates to publishers.</span>
</p>
        </div>
        <p className='absolute bottom-[-50px] md:bottom-10 left-3 text-xl flex items-center'>Learn more <span className='ml-2'><BiLinkExternal/></span></p>
       </div>
    </div>
    );
};

export default Skim;