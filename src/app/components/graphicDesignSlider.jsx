"use client";
import { useState } from "react";
import Image from "next/image";

export default function GraphicDesignSlider({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <>
      <div className="flex gap-x-4 justify-center md:justify-start pt-4 md:pt-5 lg:pt-6 container mx-auto lg:max-w-[1200px] ">
        <button
          className="cursor-pointer hover:opacity-70 transition-opacity"
          onClick={prevSlide}
          aria-label="Previous Design"
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
          className="cursor-pointer hover:opacity-70 transition-opacity"
          onClick={nextSlide}
          aria-label="Next Design"
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

      <div className="w-full max-w-full overflow-hidden mt-6 md:mt-0">
        <div className="relative min-h-[500px] md:min-h-[600px] lg:min-h-[869px] lg:max-h-[869px] ">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all pb-10 md:pb-0 duration-700 ease-in-out ${
                index === currentSlide
                  ? "translate-x-0 opacity-100 z-10"
                  : index < currentSlide
                  ? "-translate-x-full opacity-0 z-0"
                  : "translate-x-full opacity-0 z-0"
              }`}
            >
              <div
                className={`absolute inset-0 transition-transform duration-1000 ${
                  index === currentSlide
                    ? "translate-x-0 scale-100"
                    : index < currentSlide
                    ? "-translate-x-1/4 scale-90"
                    : "translate-x-1/4 scale-90"
                }`}
              >
                <Image
                  src={slide.bg}
                  alt="" // Decorativo
                  fill
                  className="object-cover object-top"
                  sizes="100vw"
                  priority={index === 0}
                />
              </div>

              <div className="container mx-auto h-full lg:max-w-[1200px] relative z-20">
                <div className="h-full flex flex-col md:flex-row items-center justify-center px-4 lg:px-0 gap-4 md:gap-0">
                  <div className="order-2 md:order-1 w-full md:w-auto flex justify-center">
                    <Image
                      src={slide.logo}
                      alt="Brand Logo"
                      width={slide.logoWidth}
                      height={slide.logoHeight}
                      style={slide.logoStyle}
                      className="h-auto max-h-[152px] object-contain md:max-h-none md:object-cover"
                    />
                  </div>
                  <div
                    className={`transform transition-all duration-700 order-1 md:order-2 ${
                      index === currentSlide
                        ? "translate-x-0 scale-100 opacity-100"
                        : index < currentSlide
                        ? "-translate-x-20 scale-90 opacity-70"
                        : "translate-x-20 scale-90 opacity-70"
                    }`}
                  >
                    <Image
                      src={slide.car}
                      alt={`Custom graphic design on vehicle ${index + 1}`} // Alt descriptivo
                      width={slide.carWidth}
                      height={slide.carHeight}
                      style={slide.carStyle}
                      className="h-auto max-h-[229px] object-contain md:max-h-none md:object-cover"
                      priority={index === 0}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
