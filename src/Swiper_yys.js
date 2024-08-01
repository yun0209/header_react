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
       <div id="yswiper" className="swiper-container">
        <div className="main_caver">
            <div className="swiper ov mySwiper">
                
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={73}
                        slidesPerView={1.35}
                        centeredSlides={true}
                        loop={true}
                        autoplay={{
                        delay: 6500000,
                        disableOnInteraction: false,
                        }}
                        breakpoints={{
                            400: {
                                slidesPerView: 1,
                                spaceBetween: 0,
                            },
                            600: {
                                slidesPerView: 1,
                                spaceBetween: 0,
                            },
                            800: {
                                slidesPerView: 1,
                                spaceBetween: 0,
                            },
                            900: {
                                slidesPerView: 1,
                                spaceBetween: 0,
                            },
                            1500: {
                                slidesPerView: 1.3,
                                spaceBetween: 35,
                            },
                            1800: {
                                slidesPerView: 1.35,
                                spaceBetween: 73,
                            }
                        }}
                        pagination={{
                        clickable: true,
                        
                    }}
                    >
                    {slides.map((v, i) => (
                        <SwiperSlide key={i}>
                            <div className={v.cls} style={{ "background":`url(${v.b_img}) center/ cover`}}>
                                <Link to={v.href} className='w-100 h-100'>
                                   
                                    
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
