"use client";
import { useRef } from "react";
import Image from "next/image"; // ✅ Importar Image
import BasicSlider from "./BasicCarousel";

// Sub-componente del slide
const TypeOfWrapComponent = ({ data }) => {
  return (
    <article className="flex flex-col justify-center items-center h-full">
      {" "}
      <div className="relative w-full h-[365px] mb-4">
        <div>
          <Image
            src={data.src}
            alt={data.alt || `Example of ${data.title}`}
            fill
            className="object-contain relative z-10 max-w-[400px] ms-[30px] md:ms-0 md:max-w-full"
            sizes="(max-width: 768px) 100vw, 500px"
          />
          <Image
            src="/images/types-of-vehicle-wrap-decoration-movil.webp"
            fill
            className="object-contain block md:hidden absolute bottom-[25px] right-0 z-1 w-full"
            sizes="(max-width: 768px) 100vw, 500px"
          />
        </div>
      </div>
      <div className="px-[24px] xl:px-0">
        <h3 className="text-[25px] font-bold text-center lg:pb-10">
          {data.title}
        </h3>
        <p className="text-[14px] text-center leading-[20px] lg:px-6 max-w-[312px] md:max-w-fit">
          {data.desc}
        </p>
      </div>
    </article>
  );
};

export default function TypesOfVehicleWrapCarouseHome({ data }) {
  const prevTVRef = useRef(null);
  const nextTVRef = useRef(null);

  return (
    <>
      <div className="absolute md:relative left-0 bottom-[55px] w-[50%] md:w-[40px] content-end pe-[12px] md:pe-0 flex justify-end items-start lg:pb-12">
        <button
          ref={prevTVRef}
          type="button"
          className="cursor-pointer hover:opacity-80 transition-opacity p-1"
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
      </div>

      <div className="w-full md:max-w-[550px] pb-[65px] md:pb-0">
        <BasicSlider
          SlideComponent={TypeOfWrapComponent}
          info={data}
          prevRef={prevTVRef}
          nextRef={nextTVRef}
          height="520px"
        />
      </div>

      <div className="absolute md:relative right-0 bottom-[55px] w-[50%] md:w-[40px] ps-[12px] md:ps-0 content-end lg:pb-12 flex justify-start">
        <button
          ref={nextTVRef}
          type="button"
          className="cursor-pointer hover:opacity-80 transition-opacity p-1"
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
    </>
  );
}
