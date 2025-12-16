"use client";

import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { reviews } from "../data";
import ReviewsMovile from "./reviewsMovile";

const HomeReviews = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [showText, setShowText] = useState(false);

  const [isMuted, setIsMuted] = useState(true);

  const intervalRef = useRef(null);
  const swiperRef = useRef(null);
  const mobileSwiperRef = useRef(null);

  const handleSlideChange = (swiper) => {
    const newIndex = swiper.activeIndex;
    setActiveIndex(newIndex);
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
    setShowText(false);
    setIsMuted(true);

    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const handleMobileSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
    setIsMuted(true);
  };

  useEffect(() => {
    if (activeIndex !== null) {
      const timer = setTimeout(() => {
        setShowText(true);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [activeIndex]);
  const toggleAudio = () => setIsMuted(!isMuted);

  const handlePrev = () => {
    if (swiperRef.current && !swiperRef.current.isBeginning) {
      swiperRef.current.slidePrev();
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
  };

  const handleNext = () => {
    if (swiperRef.current && !swiperRef.current.isEnd) {
      swiperRef.current.slideNext();
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
  };

  const VideoControls = ({ youtubeLink }) => (
    <div className="absolute top-4 right-4 z-30 flex gap-2 items-center">
      {youtubeLink && (
        <a
          href={youtubeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black/40 hover:bg-[#FF0000] backdrop-blur-sm text-white p-2 rounded-full transition-all duration-300 group"
          title="Ver en YouTube"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="group-hover:scale-110 transition-transform"
          >
            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
          </svg>
        </a>
      )}
      <button
        onClick={(e) => {
          e.stopPropagation();
          toggleAudio();
        }}
        className="bg-black/40 hover:bg-white/20 backdrop-blur-sm text-white p-2 rounded-full transition-all duration-300 cursor-pointer"
        title={isMuted ? "Activar sonido" : "Silenciar"}
      >
        {isMuted ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M11 5L6 9H2v6h4l5 4V5z" />
            <line x1="23" y1="9" x2="17" y2="15" />
            <line x1="17" y1="9" x2="23" y2="15" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
          </svg>
        )}
      </button>
    </div>
  );

  return (
    <>
      <div className="hidden lg:flex gap-[21px] ps-[24px] xl:ps-0">
        <div className="flex flex-col items-center justify-end mb-[56px] max-w-[342px] relative">
          <div className=" w-full">
            <p className="text-sm mt-2 pointer-events-none select-none hidden lg:block">
              We do more than just car wrapping; we focus on understanding our
              clients needs, creating their branding and ensuring their absolute
              satisfaction. <br /> <br /> We invite you to see what some of our
              clients have to say about our service and to learn more about our
              work.
            </p>
          </div>
          <div className="flex gap-x-4 justify-start pt-4 md:pt-5 lg:pt-6 w-full">
            <button
              className={`cursor-pointer ${
                isBeginning
                  ? "opacity-40 cursor-not-allowed"
                  : "hover:opacity-80"
              }`}
              onClick={handlePrev}
              disabled={isBeginning}
            >
              {/* SVG Left Arrow */}
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
              className={`cursor-pointer ${
                isEnd ? "opacity-40 cursor-not-allowed" : "hover:opacity-80"
              }`}
              onClick={handleNext}
              disabled={isEnd}
            >
              {/* SVG Right Arrow */}
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
        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={38}
          slidesPerView={1.3}
          centeredSlides={false}
          speed={500}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          onSlideChange={handleSlideChange}
          onSlideChangeTransitionEnd={(swiper) => {
            if (intervalRef.current) clearInterval(intervalRef.current);
          }}
          className="reviews-swiper"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="h-full transition-all duration-700  flex relative w-full max-h-[500px]">
                <p
                  className={`text-[20px] font-bold absolute z-90 lg:w-[10rem] transition-all duration-700 leading-[24px]  ${
                    activeIndex === index
                      ? "text-[#1b1b1b] bottom-[220px] xl:bottom-[180px] left-[30px]"
                      : isEnd
                      ? "right-0 bottom-[30px] text-center"
                      : "text-white bottom-[30px] left-[30px]"
                  }`}
                >
                  {review.title}
                </p>
                <div
                  className={`relative z-0 w-5/12 bg-white h-[500px] p-6 content-end transition-all duration-500`}
                >
                  <div className="lg:max-w-[15rem] relative">
                    <p
                      className={`text-[#1b1b1b] text-[14px] transition-all duration-500 ${
                        activeIndex === index && showText
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-4"
                      }`}
                    >
                      {review.text}
                    </p>
                  </div>
                </div>

                <div
                  className={`absolute top-0 h-[500px] transition-all duration-500 bg-cover bg-center right-0  ${
                    activeIndex === index ? "w-7/12" : "w-full"
                  }`}
                  style={{ backgroundImage: `url(${review.img})` }}
                >
                  {activeIndex === index && review.video ? (
                    <>
                      <VideoControls youtubeLink={review.youtubeLink} />
                      <video
                        src={review.video}
                        autoPlay
                        muted={isMuted} // Controlado por el estado
                        loop
                        className="absolute top-0 left-0 w-full h-full object-cover"
                      />
                    </>
                  ) : (
                    activeIndex !== index && (
                      <div className="absolute inset-0 bg-black/30"></div>
                    )
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="block md:hidden w-full mb-[-92px]">
        <ReviewsMovile reviews={reviews} />
      </div>
    </>
  );
};

export default HomeReviews;
