"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";

const SliderFleetWrap = ({ services }) => {
  const [current, setCurrent] = useState(0);

  const reviews = services || [];
  const showSlide = (index) => {
    const currentReviewStyle = {
      opacity: "1",
      zIndex: "90",
      transform: "scale(1) translateX(0)",
    };

    const nextReviewStyle = {
      opacity: "0.8",
      zIndex: "80",
      transform: "scale(0.9) translateX(150px)",
    };

    const thirdReviewStyle = {
      opacity: "0.6",
      zIndex: "50",
      transform: "scale(0.8) translateX(300px)",
    };

    // Determina la posición de las revisiones
    const nextIndex = (index + 1) % reviews.length; // Siguiente revisión
    const thirdIndex = (index + 2) % reviews.length; // Tercera revisión (dos pasos adelante)

    return {
      currentReviewStyle,
      nextReviewStyle,
      thirdReviewStyle,
      nextIndex,
      thirdIndex,
    };
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrev(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const {
    currentReviewStyle,
    nextReviewStyle,
    thirdReviewStyle,
    nextIndex,
    thirdIndex,
  } = showSlide(current);

  return (
    <>
      <div
        {...handlers}
        className="relative lg:min-h-[514px] min-h-[800px] lg:max-w-[1000px] lg:min-w-[1000px] w-full min-w-[390px] max-w-screen select-none"
      >
        {reviews.map((review, index) => {
          let style;
          let hidden = true;

          if (index === current) {
            style = currentReviewStyle;
            hidden = false;
          } else if (index === nextIndex) {
            style = nextReviewStyle;
            hidden = true;
          } else if (index === thirdIndex) {
            style = thirdReviewStyle;
            hidden = true;
          } else {
            // Estilo por defecto para las revisiones que no están en las primeras tres posiciones
            style = {
              opacity: "0",
              zIndex: "0",
              transform: "scale(0.9) translateX(30px)",
            };
            hidden = true;
          }

          return (
            <div
              key={index}
              className="absolute top-0 left-0 transition-all ease-linear duration-300 lg:min-h-[514px] h-full w-full min-w-[360px] flex flex-wrap bg-[#676767] content-start cursor-grab"
              style={style}
            >
              <div className="lg:w-7/12">
                <Image
                  src={`/images/${review.img}`}
                  alt={review.title || "Fleet wrap service example"}
                  sizes="(min-width: 1024px) 588px, 100vw"
                  width={588}
                  height={514}
                  className={`lg:w-full lg:min-w-[588px] min-w-[280px] z-10 pointer-events-none object-cover`} // Agregué object-cover por seguridad
                />
              </div>
              <div className="lg:w-5/12 ps-6 lg:pt-10 pt-6 pe-8">
                <p
                  className={`${
                    !hidden ? "opacity-100" : "opacity-0"
                  } italic lg:text-[35px] lg:leading-[35px] text-[28px] leading-[30px] font-bold transition-opacity duration-300 pb-6 lg:pb-0`}
                >
                  {review.title}
                </p>
                <p className={`${!hidden ? "opacity-100" : "opacity-0"}`}>
                  {review.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex gap-8 lg:mt-10 mt-6 w-full justify-center lg:justify-start">
        <a
          id="prev"
          onClick={handlePrev}
          className="cursor-pointer hover:scale-120 transition-all ease-linear"
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
        </a>
        <a
          id="next"
          onClick={handleNext}
          className="cursor-pointer hover:scale-120 transition-all ease-linear"
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
        </a>
      </div>
    </>
  );
};

export default SliderFleetWrap;
