import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import slide1 from '../../../images/slide-img-.png'
import slide2 from '../../../images/slide-img2.svg'
import slide3 from '../../../images/slide-img3.svg'
import { Autoplay, Pagination, Navigation } from "swiper";
import CarousolCard from './CarousolCard';

const Carousol = () => {
    const carousolInfo= [
        {
            headerText:'Right Social Networking for Marketing',
            normaltext:'Consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua quis nostrud exerc.',
            img:slide1
        },
        {
            headerText:'Global Creative Production Company',
            normaltext:'Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
            img:slide2
        },
        {
            headerText:'The Next Generation of the Marketing',
            normaltext:'We will take everything you hate about social platforms, crossed it out in red ink and wrote down everything your customers would like to see.',
            img:slide3
        },
    ]
    return (
        <div className=''>
            <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
       
  
        {
            carousolInfo.map(info=>
                <SwiperSlide className='SwiperSlide'>
                    <CarousolCard info={info}/>
                </SwiperSlide>)
        }
      </Swiper>
        </div>
    );
};

export default Carousol;