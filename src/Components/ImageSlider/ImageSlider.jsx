import "./ImageSlider.css";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

function ImageSlider({ img }) {
  const [zoomed, setZoomed] = useState(null);

  const handleImageClick = (index) => {
    setZoomed(zoomed === index ? null : index);
  };

  return (
    <div className="image-container">
      <div className="img-container">
        <Swiper
          className="img-swiper"
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={3}
          navigation={
            (true,
            {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            })
          }
          pagination={{ clickable: true }}
          coverflowEffect={{
            rotate: 10,
            stretch: 0,
            depth: 250,
            modifier: 1,
            slideShadows: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
        >
          {img.map((i, index) => (
            <SwiperSlide key={index}>
              <img
                src={i}
                alt={`Project ${index + 1}`}
                className={zoomed === index ? "zoomed" : ""}
                onClick={() => handleImageClick(index)}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="slider-controls">
          <div className="swiper-button-prev"></div>
          <div className="swiper-pagination"></div>
          <div className="swiper-button-next"></div>
        </div>
      </div>

      {zoomed !== null && (
        <div className="zoom-overlay" onClick={() => setZoomed(null)}>
          <img src={img[zoomed]} className="zoomed-img" />
        </div>
      )}
    </div>
  );
}

export default ImageSlider;
