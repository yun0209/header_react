import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import './css/header.css';
import { Pagination, Autoplay } from 'swiper/modules';
import swiperdb from './swiper_data.json';
import { Link } from 'react-router-dom';

const Swiper_yys = (props) => {
  const { slides } = swiperdb;

  return (
    <>
       <div id={props.keynm} className="swiper-container">
        <div class="main_caver">
            <div class="swiper ov mySwiper">
                
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={73}
                        slidesPerView={1.35}
                        centeredSlides={true}
                        loop={true}
                        autoplay={{
                        delay: 6500,
                        disableOnInteraction: false,
                        }}
                        pagination={{
                        clickable: true,
                    }}
                    >
                    {slides.map((v, i) => (
                        <SwiperSlide key={i}>
                            <div className="bs">
                                <Link to={v.href}>
                                    <img src={v.img} alt=""  className='bs'/>
                                    {v.text}
                                </Link>
                            </div>
                        </SwiperSlide>
                    ))}
                    </Swiper>
                    
                
            </div>
        </div>
    </div>
    </>
    
  );
};

export default Swiper_yys;
