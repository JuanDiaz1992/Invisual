"use client";

import React, { useRef } from "react";
import ReactCompareImage from "react-compare-image";
import BasicSlider from "./BasicCarousel";
const CustomHandle = () => (
  <div
    style={{
      width: "60px",
      height: "60px",
      borderRadius: "50%",
      backgroundColor: "#ffffffB3",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "ew-resize",
      boxShadow: "0 0 5px rgba(0,0,0,0.4)",
    }}
  >
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
      }}
    >
      <img
        src="/icons/arrow-left.svg"
        alt="Left Arrow"
        width={13}
        height={20}
      />
      <img
        src="/icons/arrow-right.svg"
        alt="Right Arrow"
        width={13}
        height={20}
      />
    </div>
  </div>
);

const CompareComponent = ({ data }) => {
  const imageContainStyle = {
    objectFit: 'contain',
  };
  return (
    <div className="flex w-full flex-col-reverse md:flex-row">
      <div className="lg:w-3/12 w-full flex items-start lg:pt-[104px]">
        <p>{data.desc}</p>
      </div>
      <div className="lg:w-9/12 w-full py-12 lg:py-0">
        <ReactCompareImage
          leftImage={data.beforeSrc}
          rightImage={data.afterSrc}
          sliderLineWidth="1"
          handle={<CustomHandle />}
          leftImageCss={imageContainStyle}
          rightImageCss={imageContainStyle}
        />
      </div>
    </div>
  );
};

export default function GraphicDesignClient({ GraphicDesignExamplesComplete }) {
  const prevBARef = useRef(null);
  const nextBARef = useRef(null);

  return (
    <>
      <BasicSlider
        SlideComponent={CompareComponent}
        info={GraphicDesignExamplesComplete}
        prevRef={prevBARef}
        nextRef={nextBARef}
        height="500px"
        allowSwipe={false}
        autoplayEnabled={false}
      />
      <div className="lg:w-3/12 w-full relative z-4">
        <div className="flex gap-x-6 lg:pt-6 absolute bottom-[160px]">
          <button
            ref={prevBARef}
            type="button"
            className="cursor-pointer hover:opacity-80 transition-opacity"
            aria-label="Previous slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="30"
              viewBox="0 0 40 30"
              fill="none"
              aria-hidden="true"
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
            ref={nextBARef}
            type="button"
            className="cursor-pointer hover:opacity-80 transition-opacity"
            aria-label="Next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="41"
              height="30"
              viewBox="0 0 41 30"
              fill="none"
              aria-hidden="true"
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
    </>
  );
}
