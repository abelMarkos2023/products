import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "./Slider.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {SliderProducts} from '../../data/products'

const Slider = () => {
  return (
    <div className='container'>
      <Swiper 
            loopFillGroupWithBlank={true}
            modules={[Navigation,Pagination]}
            className='mySwiper'
            navigation={true}
            slidesPerView={3} 
            slidesPerGroup={1} 
            loop={true} 
            spaceBetween={30}>
        {SliderProducts.map((slider, i) => {
          return (
            <SwiperSlide>
              <div className='left'>
                <div className='name'>
                  <span>{slider.name}</span>
                  <span>{slider.detail}</span>
                </div>
                <span className="price">{slider.price}$</span>
                <div className="more">Shop Now</div>
              </div>
              <img src={slider.img} alt="" 
              className="swiper-img"/>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slider;
