import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper";
function Slider() {
  return (
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
      modules={[Autoplay, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide className="rounded-lg relative h-full overflow-hidden">
        <div className="text-sm text-gray-600 hover:text-emerald-dark">
          <span
            style={{
              boxSizing: " border-box",
              display: "block",
              overflow: "hidden",
              width: "initial",
              height: "initial",
              background: "none",
              opacity: "1",
              border: " 0px",
              margin: "0px",
              padding: "0px",
              position: " relative",
            }}
          >
            <span
              style={{
                boxSizing: " border-box",
                display: "block",
                width: "initial",
                height: "initial",
                background: "none",
                opacity: " 1",
                border: "0px",
                margin: "0px",
                padding: "42.1053% 0px 0px",
              }}
            ></span>
            <img
              alt="Quality Freshness Guaranteed!"
              sizes="100vw"
              srcset="/_next/image?url=%2Fslider%2Fslider-3.jpg&amp;w=640&amp;q=75 640w, /_next/image?url=%2Fslider%2Fslider-3.jpg&amp;w=750&amp;q=75 750w, /_next/image?url=%2Fslider%2Fslider-3.jpg&amp;w=828&amp;q=75 828w, /_next/image?url=%2Fslider%2Fslider-3.jpg&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2Fslider%2Fslider-3.jpg&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2Fslider%2Fslider-3.jpg&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2Fslider%2Fslider-3.jpg&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2Fslider%2Fslider-3.jpg&amp;w=3840&amp;q=75 3840w"
              src="/_next/image?url=%2Fslider%2Fslider-3.jpg&amp;w=3840&amp;q=75"
              decoding="async"
              data-nimg="responsive"
              className="object-cover"
              style={{
                position: "absolute",
                inset: "0px",
                boxSizing: " border-box",
                padding: "0px",
                border: "none",
                margin: "auto",
                display: "block",
                width: "0px",
                height: " 0px",
                minWidth: "100%",
                maxWidth: "100%",
                minHeight: "100%",
                maxHeight: "100%",
              }}
            />
          </span>
        </div>
        <div></div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Slider;
