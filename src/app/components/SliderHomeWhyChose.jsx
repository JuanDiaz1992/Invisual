"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
export default function SliderHomeWhyChose() {
  const grandes = [
    "/images/dc-police-union-big.webp",
    "/images/favor-big.webp",
    "/images/hiatus-big.webp",
    "/images/epoxy-big.webp",
    "/images/tu-casa-big.webp",
    "/images/comander-big.webp",
    "/images/cofee-big.webp",
    "/images/blackrock-big.webp",
    "/images/Deportivo-big.webp",
    "/images/capitol-big.webp",
  ];

  const miniaturas = [
    "/images/dc-police-union-mini.webp",
    "/images/favor-mini.webp",
    "/images/hiatus-mini.webp",
    "/images/epoxy-mini.webp",
    "/images/tu-casa-mini.webp",
    "/images/comanders-mini.webp",
    "/images/cofee-mini.webp",
    "/images/blackrock-mini.webp",
    "/images/Deportivo-mini.webp",
    "/images/capitol-mini.webp",
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [mainSwiper, setMainSwiper] = useState(null);

  const len = Math.max(0, Math.min(grandes.length, miniaturas.length));

  const handleThumbClick = (index) => {
    if (mainSwiper) {
      mainSwiper.slideTo(index);
    }
    setActiveIndex(index);
  };

  const handleMainSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
    if (thumbsSwiper && thumbsSwiper.activeIndex !== swiper.activeIndex) {
      thumbsSwiper.slideTo(swiper.activeIndex);
    }
  };

  const handleThumbSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
    if (mainSwiper && mainSwiper.activeIndex !== swiper.activeIndex) {
      mainSwiper.slideTo(swiper.activeIndex);
    }
  };

  if (len === 0) {
    return (
      <div className="w-full rounded-lg border border-gray-200 p-6 text-center text-gray-500">
        Sin imágenes para mostrar.
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col lg:flex-row">
      <div className="w-full lg:w-4/12 h-[140px] lg:h-fit order-3 lg:order-1">
        {/************* Seccion de Miniaturas con Swiper *************/}
        <div className="relative mx-auto mt-4">
          <div className="relative overflow-hidden w-full h-[137px] select-none">
            <div className="w-full absolute ">
              <div className="pointer-events-none absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-[#1d1d1d] to-transparent z-20 rounded-l-lg" />
              <div className="pointer-events-none absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-[#1d1d1d] to-transparent z-20 rounded-r-lg" />
              <Swiper
                onSwiper={setThumbsSwiper}
                onSlideChange={handleThumbSlideChange}
                spaceBetween={19}
                slidesPerView={4}
                centeredSlides={true}
                initialSlide={activeIndex}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: true,
                }}
                modules={[Autoplay]}
                className="thumbnail-swiper h-fit pb-[20px] w-[120%] absolute left-[-87px]"
              >
                {miniaturas.map((src, index) => (
                  <SwiperSlide
                    key={`thumb-${index}`}
                    className="flex items-center justify-center"
                  >
                    <button
                      type="button"
                      onClick={() => handleThumbClick(index)}
                      className={`
                          w-full h-32 rounded-2xl overflow-hidden transition-all cursor-pointer duration-300
                          
                          ${
                            activeIndex === index
                              ? "scale-110 shadow-x"
                              : "scale-95 opacity-70 hover:opacity-100 hover:scale-100"
                          }
                        `}
                    >
                      <img
                        src={src}
                        alt={`Miniatura ${index + 1}`}
                        className={`
                            w-full h-[137px] object-contain transition-all duration-300
                            ${
                              activeIndex === index
                                ? "grayscale-0"
                                : "grayscale hover:grayscale-0"
                            }
                          `}
                      />
                    </button>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>

        <div className="lg:pt-8 flex-wrap gap-x-[15px] hidden lg:flex">
          <p className="lg:text-[25px] mb-[33px] ">
            <span className="font-black tofinowide">Woman-Owned</span> Business{" "}
            <span className="block font-bold">Certifications and Tools</span>
          </p>
          <img
            src="/images/avery-dennison-logo.webp"
            alt="Avery dennison logo"
            className="w-6/12 max-w-[165.8px] object-contain"
          />
          <img
            src="/images/treemlog.webp"
            alt="3M logo"
            className="w-6/12 max-w-[120.04px] object-contain"
          />
        </div>
      </div>

      <div className="w-full lg:w-8/12 lg:min-h-[620px] lg:mt-[-180px] order-1 lg:order-3">
        {/************* Seccion de Fotos Grandes *************/}
        <Swiper
          onSwiper={setMainSwiper}
          onSlideChange={handleMainSlideChange}
          initialSlide={activeIndex}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
          modules={[Autoplay]}
          className="h-full rounded-2xl overflow-hidden"
        >
          {grandes.map((src, index) => (
            <SwiperSlide key={`main-${index}`}>
              <div className="relative w-full h-full overflow-hidden rounded-2xl">
                <img
                  src={src}
                  alt={`Imagen grande ${index + 1} de ${len}`}
                  className="w-full h-full object-contain rounded-2xl"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
