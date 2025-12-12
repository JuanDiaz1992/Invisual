"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import RuedaDeTitulos from "./RuedaDeTitulos";
import ButtonLaid from "./button";

const AdditionalServicesHome = ({ slides }) => {
  const swiperRef = useRef(null);
  const totalTitulos = 5;
  const initialSlide = Math.floor(slides.length / 2);
  const [activeIndex, setActiveIndex] = useState(initialSlide % totalTitulos);

  const handleNext = () => {
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <>
      <section
        className="swiperespecifico overflow-hidden z-2"
        aria-label="Additional Services Carousel"
      >
        <Swiper
          ref={swiperRef}
          modules={[Autoplay]}
          slidesPerView={5}
          centeredSlides={true}
          spaceBetween={30}
          grabCursor={true}
          initialSlide={initialSlide}
          autoplay={{
            delay: 2000,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.activeIndex % totalTitulos);
          }}
          breakpoints={{
            0: { slidesPerView: 1.3, spaceBetween: 16 },
            640: { slidesPerView: 3, spaceBetween: 12 },
            1024: { slidesPerView: 5, spaceBetween: 30 },
          }}
          watchOverflow={true}
        >
          {slides.map((item, idx) => {
            const isActive = idx === activeIndex;

            return (
              <SwiperSlide key={idx}>
                <div className="w-full h-[400px] flex items-end p-x-[24px] relative">
                  <Image
                    src={item.src}
                    alt={item.desc || "Service image"}
                    fill
                    className="object-cover z-0"
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 20vw"
                  />

                  {isActive && (
                    <div
                      className="absolute inset-0 z-10"
                      style={{
                        background:
                          "linear-gradient(0deg, #D92630 -33.59%, rgba(217, 38, 48, 0.00) 127%)",
                      }}
                    ></div>
                  )}

                  <div
                    aria-hidden={!isActive}
                    className={`
                    w-full flex flex-col items-center justify-end text-center text-white relative z-20 transition-all duration-300 pb-[104px]
                    ${
                      isActive
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4 pointer-events-none"
                    }
                  `}
                  >
                    <p className="text-[14px] max-w-[232px] mb-[24px]">{item.desc}</p>

                    {isActive && (
                      <div className="flex flex-col gap-[10px]">
                        <ButtonLaid
                          buttonColor={"#fff"}
                          textColor={"#D92630"}
                          buttonText={
                              <>
                                Learn More
                                {" "}
                                <span className="sr-only">
                                  about {item.desc}
                                </span>
                              </>
                            }                          link="/vehicle-wrapping-services"
                          width={145}
                        />
                        <ButtonLaid
                          buttonColor={"#fff"}
                          textColor={"#D92630"}
                          buttonText={"240-664-1629"}
                          link="tel:+12406641629"
                          width={145}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>

      <div className="w-full inline-flex relative justify-center items-center z-2">
        <div className="w-[40px] content-end lg:pt-24 hidden lg:block">
          <button
            type="button"
            onClick={handlePrev}
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
              <path
                d="M32.9 29.9H0.06L6.53 0.06H39.4L32.9 29.9Z"
                fill="#D92630"
              />
              <path
                d="M21.94 7.66L23.7 9.43L17.95 15.18L23.7 20.92L21.94 22.69L14.43 15.18L21.94 7.66Z"
                fill="white"
              />
            </svg>
          </button>
        </div>

        <div
          className="lg:w-[35rem] lg:min-h-[195px] overflow-y-hidden select-none mt-[50px]"
          aria-hidden="true"
        >
          <RuedaDeTitulos activeIndex={activeIndex} />
        </div>

        <div className="w-[40px] content-end lg:pt-24 hidden lg:block">
          <button
            type="button"
            onClick={handleNext}
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
              <path
                d="M7.49 0.06H40.36L33.89 29.93H1.02L7.49 0.06Z"
                fill="#D92630"
              />
              <path
                d="M18.48 22.33L16.71 20.56L22.46 14.81L16.71 9.07L18.48 7.3L26 14.82L18.48 22.33Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
  //   return (
  //   <>
  //     {/* Carrusel */}
  //     <div className="swiperespecifico overflow-hidden">
  //       <Swiper
  //         ref={swiperRef}
  //         modules={[EffectCoverflow, Autoplay]}
  //         slidesPerView={5}
  //         centeredSlides={true}
  //         spaceBetween={30}
  //         grabCursor={true}
  //         effect="coverflow"
  //         coverflowEffect={{
  //           rotate: 5,
  //           depth: 80,
  //           modifier: -1.8,
  //           stretch: 1,
  //           slideShadows: true,
  //         }}
  //         autoplay={{
  //           delay: 2000,
  //           pauseOnMouseEnter: true,
  //           disableOnInteraction: false,
  //         }}
  //         onSlideChange={(swiper) => {
  //           // sincroniza el índice cuando cambia automáticamente
  //           setActiveIndex(swiper.realIndex % totalTitulos);
  //         }}
  //         breakpoints={{
  //           0: { slidesPerView: 1.1, spaceBetween: 16 },
  //           640: { slidesPerView: 2, spaceBetween: 24 },
  //           1024: { slidesPerView: 5, spaceBetween: 30 },
  //         }}
  //         watchOverflow={true}
  //       >
  //         {slides.map((item, idx) => (
  //           <SwiperSlide key={idx}>
  //             <div
  //               className="w-full h-[400px] bg-cover bg-center flex items-end p-6"
  //               style={{ backgroundImage: `url(${item.bgImage})` }}
  //             >
  //               <div className="text-left text-white">
  //                 <p style={{ fontSize: "14px" }}>{item.desc}</p>
  //               </div>
  //             </div>
  //           </SwiperSlide>
  //         ))}
  //       </Swiper>
  //     </div>

  //     {/* Contenedor inferior */}
  //     <div className="w-full inline-flex relative justify-center items-center">
  //       {/* Botón anterior */}
  //       <div className="w-[40px] content-end lg:pt-24">
  //         <a onClick={handlePrev} className="cursor-pointer">
  //           <svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" viewBox="0 0 40 30" fill="none">
  //             <path d="M32.9 29.9H0.06L6.53 0.06H39.4L32.9 29.9Z" fill="#D92630" />
  //             <path d="M21.94 7.66L23.7 9.43L17.95 15.18L23.7 20.92L21.94 22.69L14.43 15.18L21.94 7.66Z" fill="white" />
  //           </svg>
  //         </a>
  //       </div>

  //       {/* Rueda giratoria sincronizada */}
  //       <div className="lg:w-[35rem] lg:min-h-[195px] overflow-y-hidden">
  //         <RuedaDeTitulos activeIndex={activeIndex} />
  //       </div>

  //       {/* Botón siguiente */}
  //       <div className="w-[40px] content-end lg:pt-24">
  //         <a onClick={handleNext} className="cursor-pointer">
  //           <svg xmlns="http://www.w3.org/2000/svg" width="41" height="30" viewBox="0 0 41 30" fill="none">
  //             <path d="M7.49 0.06H40.36L33.89 29.93H1.02L7.49 0.06Z" fill="#D92630" />
  //             <path d="M18.48 22.33L16.71 20.56L22.46 14.81L16.71 9.07L18.48 7.3L26 14.82L18.48 22.33Z" fill="white" />
  //           </svg>
  //         </a>
  //       </div>
  //     </div>
  //   </>
  // );
};

export default AdditionalServicesHome;
