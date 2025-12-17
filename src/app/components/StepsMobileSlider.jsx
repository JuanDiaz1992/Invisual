"use client";
import { useRef } from "react";
import BasicSlider from "./BasicCarousel";

function StepSlide({ data }) {
  const isStep2 = data.id === "2";
  return (
    <div className="flex flex-col">
      <h3 className="w-full text-white text-[25px] font-bold uppercase">
        {data.id} - {data.title}
      </h3>
      <p className="text-white text-[16px] leading-[25px] pt-[7px] pb-[27px] whitespace-pre-line text-sm">
        {data.description}
      </p>
      <div
        className={`min-h-[400px] ${data.bgClass} relative flex ${
          isStep2 ? "flex-col justify-start" : "flex-col justify-end"
        }`}
      ></div>
    </div>
  );
}

export default function StepsMobileSlider({ steps }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="relative">
      <BasicSlider
        info={steps}
        SlideComponent={StepSlide}
        height="auto"
        mobileHeight="606px"
        autoplayEnabled={false}
        prevRef={prevRef}
        nextRef={nextRef}
      />

      <div className="flex gap-x-[58px] justify-center pt-4 z-20">
        <button
          ref={prevRef}
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
          ref={nextRef}
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
    </div>
  );
}
