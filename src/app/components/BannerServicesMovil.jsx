"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import React, { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function BannerServicesMovil({ slidesData }) {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [listActive, setListActive] = useState(false);
  const handlePrev = () => {
    const swiper = swiperRef.current.swiper;
    swiper.slidePrev();
  };

  const handleNext = () => {
    const swiper = swiperRef.current.swiper;
    swiper.slideNext();
  };
  const handleSlideChange = (index) => {
    const swiper = swiperRef.current.swiper;
    swiper.slideTo(index);
  };
  return (
    <>
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={false}
        autoplay={true}
        allowTouchMove={false}
        className="h-full"
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full flex flex-col justify-center items-center">
              <img src={slide.image3} alt={slide.title + index} />
              <div className="flex">
                <div className="w-6/12 flex flex-col items-center mb-[38px]">
                  <img src={slide.image1} alt={slide.title + (index + 1)} />
                  <p className="text-[14px] font-medium">Sticker (25%)</p>
                </div>
                <div className="w-6/12 flex flex-col items-center">
                  <img src={slide.image2} alt={slide.title + (index + 1)} />
                  <p className="text-[14px] font-medium">Partial Wrap (75%)</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex gap-x-[58px] justify-center md:justify-start pt-4 md:pt-5 lg:pt-6 ">
        <button
          onClick={handlePrev}
          className="cursor-pointer transition-opacity duration-300 hover:opacity-80 disabled:opacity-30"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="30"
            viewBox="0 0 40 30"
            fill="none"
          >
            <g clipPath="url(#clip0_4603_124)">
              <path
                d="M32.9254 29.9385L0.0612068 29.9385L6.53039 0.0619793L39.3945 0.0619812L32.9254 29.9385Z"
                fill="#D92630"
              />
              <path
                d="M21.9405 7.6669L23.708 9.43315L17.958 15.1831L23.708 20.9244L21.9405 22.6919L14.4268 15.1794L21.9405 7.6669Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_4603_124">
                <rect
                  width="30"
                  height="40"
                  fill="white"
                  transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 40 30)"
                />
              </clipPath>
            </defs>
          </svg>
        </button>

        <button
          onClick={handleNext}
          className="cursor-pointer transition-opacity duration-300 hover:opacity-80 disabled:opacity-30"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="41"
            height="30"
            viewBox="0 0 41 30"
            fill="none"
          >
            <g clipPath="url(#clip0_4603_121)">
              <path
                d="M7.49848 0.0615234L40.3626 0.0615252L33.8934 29.938L1.0293 29.938L7.49848 0.0615234Z"
                fill="#D92630"
              />
              <path
                d="M18.4833 22.3331L16.7158 20.5669L22.4658 14.8169L16.7158 9.07561L18.4833 7.30811L25.9971 14.8206L18.4833 22.3331Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_4603_121">
                <rect
                  width="30"
                  height="40"
                  fill="white"
                  transform="matrix(-4.37114e-08 1 1 4.37114e-08 0.423828 0)"
                />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
      <div className="flex flex-col justify-center items-center z-20 relative drop-shadow-[0_0_21.446px_rgba(0,0,0,0.70)]">
        <button
          onClick={() => setListActive(!listActive)}
          className="flex justify-center items-center py-[27px] px-[20px] gap-[6px] w-full bg-[#1A1A1A] mt-[27px] max-w-[400px] "
        >
          See More Vehicles
          {listActive ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="10"
              viewBox="0 0 15 10"
              fill="none"
            >
              <path
                d="M2.37653e-05 7.4424L1.7495 9.19312L7.44489 3.49773L13.1316 9.19312L14.8823 7.4424L7.44117 1.36767e-05L2.37653e-05 7.4424Z"
                fill="white"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="10"
              viewBox="0 0 15 10"
              fill="none"
            >
              <path
                d="M2.37653e-05 1.75071L1.7495 -5.74054e-07L7.44489 5.69539L13.1316 -7.65261e-08L14.8823 1.75071L7.44117 9.1931L2.37653e-05 1.75071Z"
                fill="white"
              />
            </svg>
          )}
        </button>
        <div
          className={`w-full flex justify-center bg-[#1A1A1A] pb-[36px] max-w-[400px] ${
            !listActive && "hidden"
          }`}
        >
          <div className="w-[307px] flex flex-col">
            <div className="space-y-[20px]">
              {slidesData.map((slide, index) => (
                <button
                  key={slide.id}
                  onClick={() => handleSlideChange(index)}
                  className={`w-full flex items-center justify-end relative h-[87px] cursor-pointer ${activeIndex === index ? "":"opacity-50"}
              `}
                >
                  <div
                    className="absolute left-0 object-contain"
                    style={{
                      width: slide.dot_width,
                      height: slide.dot_height,
                    }}
                  >
                    <img
                      src={slide.dotImage}
                      alt={slide.title}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div
                    className={`w-[233px] h-[59px] ps-[120px] flex items-center transition-all duration-300 ${
                      activeIndex === index ? "bg-[#D92630]" : "bg-white/10"
                    }`}
                  >
                    <span
                      className={`text-[16px] italic uppercase font-normal text-left transition-all duration-300`}
                    >
                      {slide.title}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
