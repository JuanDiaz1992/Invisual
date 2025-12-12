"use client";
import BasicSlider from "./BasicCarousel";
import ButtonLaid from "./button";
import React, { useRef } from "react";
import Image from "next/image";

const prepareImages = ({data}) => {
  return (
      <Image
        src={data.src}
        alt={data.alt}
        fill
        className="object-contain w-full h-full"
      />
  );
};
export default function BenefitsClient({ benefits, benefitsImages }) {
  const prevBenefitsRef = useRef(null);
  const nextBenefitsRef = useRef(null);
  return (
    <div className="flex flex-col lg:flex-row">
      <ul className="w-full lg:w-[26%] lg:pt-8">
        {benefits.map((option, index) => {
          return (
            <li key={index} className="flex pb-4">
              <div className="relative w-full lg:max-w-[19px] max-w-[24px] h-[24px] shrink-0">
                <Image
                  src="/images/list-icon.svg"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
              <span className="ps-2 text-[20px] font-bold">{option}</span>
            </li>
          );
        })}
        <div className="flex gap-x-2 pt-[58px] xl:pt-6 pb-[45px] xl:pb-0">
          <ButtonLaid buttonText={"Learn More"} width={145} />
          <button
            ref={prevBenefitsRef}
            className="cursor-pointer hover:opacity-80 transition-opacity "
            type="button"
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
            ref={nextBenefitsRef}
            className="cursor-pointer hover:opacity-80 transition-opacity "
            type="button"
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
      </ul>

      <div className="lg:w-[80%] lg:mt-[-30px] lg:me-[-90px] benefit-slider-bg">
        <BasicSlider
          SlideComponent={prepareImages}
          info={benefitsImages}
          prevRef={prevBenefitsRef}
          nextRef={nextBenefitsRef}
          height="544px"
          mobileHeight="400px"
        />
      </div>
    </div>
  );
}
