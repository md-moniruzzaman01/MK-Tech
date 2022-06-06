import React, { useEffect, useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import '../Home.css'

// import "./styles.css";
import { EffectCoverflow, FreeMode, Navigation, Pagination } from 'swiper';
import TrandingCard from './TrandingCard';

// import required modules
import cardimg1 from '../../../images/trending1.PNG'

const TrandingSection = () => {
  const trandingData=[
      {
        image:cardimg1,
        title:'Title 1',
        discribtion:"Hello, Here will be a text"
      },
      {
        image:cardimg1,
        title:'Title 2',
        discribtion:"Hello here will be another text"
      },
      {
        image:cardimg1,
        title:'Title 3',
        discribtion:"Hello, Here will be a text"
      },
  ]
  

    return (
        
        <div className='container mx-auto pb-44  max-w-7xl'>
            <h1 className='text-2xl text-custom-secondary md:text-3xl mt-20 mb-7 text-center' > What's in trand</h1>
               <Swiper
          loop={true}
          slidesPerView={"auto"}
          spaceBetween={30}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination,Navigation]}
          className="mySwiper"
      >
            {
              trandingData.map( td=>
                 <SwiperSlide className='SwiperSlide'>
                     <TrandingCard td={td}>
                    </TrandingCard>
                </SwiperSlide>

              )  
            }
           
            </Swiper>
        </div>
    );
};

export default TrandingSection;