import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { CategoriesData } from "../../fakeData/CategoriesData";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchAction } from "../../store/reducers/searchSlice";
function SliceCategory() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = (value) => {
    navigate("/search?Category=" + value);

    dispatch(searchAction({ value: value, path: "Category" }));
  };
  return (
    <div className="relative">
      <Swiper
        slidesPerView={1}
        spaceBetween={8}
        navigation={true}
        slidesPerGroup={1}
        loop={true}
        breakpoints={{
          375: {
            slidesPerView: 2,
            spaceBetween: 8,
            slidesPerGroup: 1,
            loop: true,
          },
          425: {
            slidesPerView: 3,
            spaceBetween: 8,
            slidesPerGroup: 1,
            loop: true,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 8,
            slidesPerGroup: 1,
            loop: true,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 8,
            slidesPerGroup: 1,
            loop: true,
          },
          1024: {
            slidesPerView: 8,
            spaceBetween: 8,
            slidesPerGroup: 1,
            loop: true,
          },
          1440: {
            slidesPerView: 10,
            spaceBetween: 8,
            slidesPerGroup: 1,
            loop: true,
          },
        }}
        modules={[Navigation]}
        className="mySwiper category-slider my-10"
      >
        {CategoriesData.map((category, index) => {
          return (
            <SwiperSlide key={index} className="group">
              <div
                onClick={() => handleClick(category.path)}
                className="text-center cursor-pointer p-3 bg-white rounded-lg"
              >
                <div className="bg-white p-2 mx-auto w-10 h-10 rounded-full shadow-md">
                  <span
                    style={{
                      boxSizing: "border-box",
                      display: "inline-block",
                      overflow: "hidden",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: "1",
                      border: "0px",
                      margin: "0px",
                      padding: "0px",
                      position: "relative",
                      maxWidth: "100%",
                    }}
                  >
                    <img src={category.icon} />
                  </span>
                </div>
                <h3 className="text-xs text-gray-600 mt-2  group-hover:text-emerald-500">
                  {category.name}
                </h3>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default SliceCategory;
