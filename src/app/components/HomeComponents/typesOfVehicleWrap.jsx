"use client";
import { TypesOfWrapImages, TypesOfWrapText } from "../../data";
import React, { useRef, useState } from "react";
import ButtonLaid from "../button";
import BasicSlider from "../BasicCarousel";

export default function TypesOfVehicleWrap() {
  const prevTVRef = useRef(null);
  const nextTVRef = useRef(null);

  const TypeOfWrapComponent = ({ data }) => {
    return (
      <>
        <p className="text-[25px] font-bold text-center lg:pb-10">
          {data.title}
        </p>
        <p className="text-[14px] text-center leading-[20px] lg:px-6">
          {data.desc}
        </p>
      </>
    );
  };

  const [tvTextSwiper, setTvTextSwiper] = useState(null);
  const [tvImageSwiper, setTvImageSwiper] = useState(null);
  return (
    <section id="types" className="home">
      <div className="container mx-auto lg:max-w-[1200px] flex flex-wrap">
        <div className="lg:w-[47%] lg:pt-40">
          <h2 className="lg:text-[110px] font-black italic leading-[110px] lg:pb-8">
            <span className="text-stroke block">TYPES OF</span>{" "}
            <span className="">VEHICLE WRAP</span>
          </h2>
          <ButtonLaid
            width={145}
            buttonText={"240-664-1629"}
            link="tel:+12406641629"
          />
        </div>

        <div className="lg:w-[53%] flex flex-wrap lg:pt-20">
          <div className="flex w-full justify-center">
            <div className="w-[40px] content-end lg:pb-12">
              <a ref={prevTVRef} className="cursor-pointer">
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
              </a>
            </div>

            <div className="lg:w-[540px]">
              <BasicSlider
                info={TypesOfWrapImages}
                prevRef={prevTVRef}
                nextRef={nextTVRef}
                allowSwipe={true}
                height="340px"
                setSwiperInstance={setTvImageSwiper}
              />
            </div>

            <div className="w-[40px] content-end lg:pb-12">
              <a ref={nextTVRef} className="cursor-pointer">
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
              </a>
            </div>
          </div>

          <div className="w-full">
            <BasicSlider
              SlideComponent={TypeOfWrapComponent}
              info={TypesOfWrapText}
              prevRef={prevTVRef}
              nextRef={nextTVRef}
              allowSwipe={false}
              setSwiperInstance={setTvTextSwiper}
              height="170px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
