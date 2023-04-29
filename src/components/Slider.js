import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import React, { useRef, useState, MouseWheel } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import Swiper core and required modules
import SwiperCore, { Mousewheel } from 'swiper';

// install Swiper modules
SwiperCore.use([Mousewheel]);

export default function Slider() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        direction={'vertical'}
        className='mySwiper'
        loop={true}
        freeMode={true}
        mousewheel={true}>
        <SwiperSlide>
          <p className='link'>people</p>
        </SwiperSlide>
        <SwiperSlide>
          <p className='link'>cases</p>
        </SwiperSlide>
        <SwiperSlide>
          <p className='link'>personal brand</p>
        </SwiperSlide>
        <SwiperSlide>
          <p className='link'>people</p>
        </SwiperSlide>
        <SwiperSlide>
          <p className='link'>cases</p>
        </SwiperSlide>
        <SwiperSlide>
          <p className='link'>personal brand</p>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
