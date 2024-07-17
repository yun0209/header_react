import React, { useRef, useState } from 'react';
import './css/header.css';
import { Link, Route, Routes } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import yys_swiper from './swiper_data.json';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


function Swiper_yys() {
    const {slides} = yys_swiper
    return (
        <>
           
            <section id="yswiper">
                <div class="main_caver">
                    <div class="swiper ov mySwiper">
                        <div class="swiper-wrapper">
                            {
                                slides.map((v,i)=>{
                                   <div class="swiper-slide">
                                       {/* <div class={v.cls}><a href={v.href}></a>{v.text}</div> */}
                                   </div>

                                })
                            }
                            
                        </div>
                        <div class="swiper-pagination"></div>
                    </div>

                </div>
    

           </section>
                
         
           
        </>
    )
}

export default Swiper_yys
