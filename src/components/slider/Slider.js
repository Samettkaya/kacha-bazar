import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { SliderData } from "../../fakeData/Slider";
import { Link } from "react-router-dom";
function Slider() {
  return (
    <Swiper
      spaceBetween={30}
      loop={true}
      centeredSlides={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
      className="mySwiper"
    >
      {SliderData.map((data, index) => {
        return (
          <SwiperSlide
            key={index}
            className="rounded-lg relative h-full overflow-hidden"
          >
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
                  src={data.img}
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
            <div className="absolute top-0 left-0 z-10 p-r-16 flex-col flex w-full h-full place-items-start justify-center">
              <div className="pl-4 pr-12 sm:pl-10 sm:pr-16 w-10/12 lg:w-8/12 xl:w-7/12">
                <h1 className="mb-2 truncate text-xl sm:text-lg md:text-2xl line-clamp-1 md:line-clamp-none lg:line-clamp-none lg:text-3xl font-bold text-gray-800">
                  {data.name}
                </h1>
                <p className="truncate text-base leading-6 text-gray-600  line-clamp-1 md:line-clamp-none lg:line-clamp-none">
                  {data.description}
                </p>
                <Link
                  className="hidden sm:inline-block lg:inline-block text-sm leading-6 !no-underline  font-normal mt-6 px-6 py-2 !bg-emerald-500 text-center rounded-md !text-white hover:!bg-emerald-600"
                  to={"/search?Category="+data.path}
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default Slider;
