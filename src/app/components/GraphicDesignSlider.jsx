"use client";

import { useState } from "react";
import Image from "next/image";

const GraphicDesignSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      bg: "/images/vehicle-wrapping-services/graphic-design-slide1-bg.webp",
      car: "/images/vehicle-wrapping-services/graphic-design-slide1-car.webp",
      carStyle: { width: "100%", maxWidth: "1180px" },
      carWidth: 1180,
      carHeight: 787,
      logo: "/images/vehicle-wrapping-services/graphic-design-slide1-logo.webp",
      logoStyle: { width: "100%", maxWidth: "286px" },
      logoWidth: 286,
      logoHeight: 109,
    },
    {
      bg: "/images/vehicle-wrapping-services/graphic-design-slide2-bg.webp",
      car: "/images/vehicle-wrapping-services/graphic-design-slide2-car.webp",
      carStyle: { width: "100%", maxWidth: "1066px" },
      carWidth: 1066,
      carHeight: 587,
      logo: "/images/vehicle-wrapping-services/graphic-design-slide2-logo.webp",
      logoStyle: { width: "100%", maxWidth: "483px" },
      logoWidth: 483,
      logoHeight: 175,
    },
    {
      bg: "/images/vehicle-wrapping-services/graphic-design-slide3-bg.webp",
      car: "/images/vehicle-wrapping-services/graphic-design-slide3-car.webp",
      carStyle: { width: "100%", maxWidth: "1286px" },
      carWidth: 1286,
      carHeight: 715,
      logo: "/images/vehicle-wrapping-services/graphic-design-slide3-logo.webp",
      logoStyle: { width: "100%", maxWidth: "314px" },
      logoWidth: 314,
      logoHeight: 380,
    },
    {
      bg: "/images/vehicle-wrapping-services/graphic-design-slide4-bg.webp",
      car: "/images/vehicle-wrapping-services/graphic-design-slide4-car.webp",
      carStyle: { width: "100%", maxWidth: "969px" },
      carWidth: 969,
      carHeight: 771,
      logo: "/images/vehicle-wrapping-services/graphic-design-slide4-logo.webp",
      logoStyle: { width: "100%", maxWidth: "396px" },
      logoWidth: 396,
      logoHeight: 640,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative w-full">
      <Image
        src="/images/vehicle-wrapping-services/graphic-design.webp"
        alt="Graphic Design Background"
        sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
        srcSet="/images/how-it-works-vw.webp 768w, /images/how-it-works-vw.webp 1024w"
        width={560}
        height={441}
        className={`absolute top-0 right-0 min-w-[680px]`}
      />

      <div className="container mx-auto lg:max-w-[1200px] relative z-10 px-[24px] lg:px-0">

        <h2 className="text-[40px] md:text-[60px] lg:text-[90px] font-black lg:pb-6 leading-[45px] md:leading-[55px] lg:leading-[60px] relative z-50 tofinowide uppercase pt-4 md:pt-5 lg:pt-6 text-center md:text-left">
          Graphic Design
        </h2>

        <p className="text-base md:text-lg lg:w-[38rem] text-center md:text-left px-4 md:px-0">
          Bring your ideas to life with our expert graphic design services,
          offering creativity and precision in every project.
        </p>


        <div className="flex gap-x-4 justify-center md:justify-start pt-4 md:pt-5 lg:pt-6">
          <button className="cursor-pointer" onClick={prevSlide}>
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

          <button className="cursor-pointer" onClick={nextSlide}>
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

      <div className="w-full max-w-full overflow-hidden mt-6 md:mt-8">
        <div className="relative min-h-[400px] md:min-h-[600px] lg:min-h-[1000px]">
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
                    ? "translate-x-0 scale-105"
                    : index < currentSlide
                    ? "-translate-x-1/4 scale-100"
                    : "translate-x-1/4 scale-100"
                }`}
              >
                <Image
                  src={slide.bg}
                  alt={`Background slide ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority={index === 0}
                />
              </div>

              {/* responsive */}
              <div className="container mx-auto lg:max-w-[1200px] relative z-20 h-full">
                <div className="h-full flex flex-col md:flex-row items-center justify-between px-4 lg:px-8 gap-4 md:gap-0">
                  {/* Logo responsive */}
                  <div className="order-2 md:order-1 w-full md:w-auto flex justify-center">
                    <Image
                      src={slide.logo}
                      alt={`Logo slide ${index + 1}`}
                      width={slide.logoWidth}
                      height={slide.logoHeight}
                      style={slide.logoStyle}
                      className="h-auto max-h-[152px] object-contain md:max-h-none md:object-cover"
                    />
                  </div>

                  {/* responsive */}
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
                      alt={`Car slide ${index + 1}`}
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
    </section>
  );
};

export default GraphicDesignSlider;