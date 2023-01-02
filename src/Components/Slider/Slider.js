import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import banar from "../../images/banar-1.jpeg";
import banar00 from "../../images/banar-2.jpeg";
import banar01 from "../../images/banar-3.jpeg";
import banar02 from "../../images/banar-4.jpeg";
import banar03 from "../../images/banar-5.jpeg";
import banar04 from "../../images/banar-6.jpeg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import '../Css/Slider.css';

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

const Slider = () => {
    return (
        <div>
            <>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                <img src={banar} />
                </SwiperSlide>
                <SwiperSlide>
                <img src={banar00}/>
                </SwiperSlide>
                <SwiperSlide>
                <img src={banar01}/>
                </SwiperSlide>
                <SwiperSlide>
                <img src={banar02}/>
                </SwiperSlide>
                <SwiperSlide>
                <img src={banar03}/>
                </SwiperSlide>
                <SwiperSlide>
                <img src={banar04}/>
                </SwiperSlide>
            </Swiper>
            </>
        </div>
    );
};

export default Slider;