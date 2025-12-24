import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./HeroSlider.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

function HeroSlider() {
  return (
    <>
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
        className="mySwiper hero__slider"
      >
        <SwiperSlide>
          <img
            src="https://cdn.mos.cms.futurecdn.net/v2/t:0,l:747,cw:1921,ch:1921,q:80,w:1921/yDn3ZSXu9eSBxmXQDZ4PCF.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://static0.xdaimages.com/wordpress/wp-content/uploads/2023/09/iphone-15-plus-black.png?q=50&fit=contain&w=420&dpr=1.5"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://helios-i.mashable.com/imagery/articles/01gpvJd8LBmnqTtecVIevCQ/hero-image.fill.size_1248x702.v1726074631.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.androidauthority.com/wp-content/uploads/2025/09/Apple-iPhone-17-iPhone-Air-and-iPhone-17-Pro-scaled.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaKyZx576HYiCtLykWr9PTATBctNqqU9xgFQ&s"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default HeroSlider;
