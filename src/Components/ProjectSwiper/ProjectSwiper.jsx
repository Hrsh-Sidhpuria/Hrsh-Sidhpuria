import React from "react";
import "./ProjectSwiper.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import d1 from "../../image/Projects/demo1.webp";
import d2 from "../../image/Projects/swmo2.webp";

function ProjectSwiper() {
  return (
    <div className="projectswiper">
      <Swiper
        spaceBetween={25}
        slidesPerView={"auto"}
        grabCursor={true}
        className="Project-slider"
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        <SwiperSlide>
          <img src={d1} alt="Demo 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={d2} alt="Demo 2" />
        </SwiperSlide>
        <SwiperSlide>
          <div className="Slider-card">
            <div className="sc-name">test 1</div>
            <img src={d2} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={d2} alt="Demo 4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={d2} alt="Demo 5" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default ProjectSwiper;
