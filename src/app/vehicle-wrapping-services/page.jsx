"use client";

import React, { useEffect, useRef, useState } from "react";

import AdditionalServicesSection from "../components/ServiceList";

import Image from "next/image";

import ButtonLaid from "../components/button";
import AditionalServicesServices from "../components/AditionalServicesServices";
import Banner from "../components/ServicesComponents/banner";
import CtaForm from "../components/ServicesComponents/ctaForm";
import CustomerSatisfaction from "../components/ServicesComponents/customerSatisfaction";
import HowItWorks from "../components/ServicesComponents/howItWorks";
import Warranty from "../components/ServicesComponents/warranty";
import Certified from "../components/ServicesComponents/certified";

import {
  BenefitsFleetWrap,
  ProcessInclude,
  TypesOfWrapImages,
  TypesOfWrapText,
} from "../data";
import SliderFleetWrap from "../components/SliderFleetWrap";
import BasicSlider from "../components/BasicCarousel";

const TypeOfWrapComponent = ({ data }) => {
  return (
    <>
      <p className="text-[25px] font-bold text-center lg:pb-10">{data.title}</p>
      <p className="text-[14px] text-center leading-[20px] lg:px-6">
        {data.desc}
      </p>
    </>
  );
};
const VehicleWrappingServicesPage = (props) => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [visible4, setVisible4] = useState(false);

  const prevTVRef = useRef(null);
  const nextTVRef = useRef(null);

  const [tvTextSwiper, setTvTextSwiper] = useState(null);
  const [tvImageSwiper, setTvImageSwiper] = useState(null);

  useEffect(() => {
    const syncControllers = (swiperA, swiperB) => {
      if (swiperA && swiperB) {
        swiperA.controller.control = swiperB;
        swiperB.controller.control = swiperA;
      }
    };

    syncControllers(tvTextSwiper, tvImageSwiper);
  }, [tvTextSwiper, tvImageSwiper]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === ref1.current) setVisible1(true);
            if (entry.target === ref2.current) setVisible2(true);
            if (entry.target === ref3.current) setVisible3(true);
            if (entry.target === ref4.current) setVisible4(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (ref1.current) observer.observe(ref1.current);
    if (ref2.current) observer.observe(ref2.current);
    if (ref3.current) observer.observe(ref3.current);
    if (ref4.current) observer.observe(ref4.current);

    return () => observer.disconnect();
  }, []);

  // Slider Graphic Design Section
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
    <>
      <Banner/>

      <AdditionalServicesSection />

      <CtaForm />

      <CustomerSatisfaction />

      <HowItWorks />

      <Warranty />

      <Certified />


      {/*************************************** Commercial Vehicle Wrap ***********************/}
      <section className="relative lg:mb-[100px]">
        <div className="relative">
          <div className="absolute top-0 left-20 lg:max-w-[550px] w-full lg:h-[520px] -skew-x-25 z-50 bg-gradient-to-tl from-[#ffffff4d] from-25% to-transparent to-65%"></div>
          <Image
            src="/images/commercial-vehicle-wraps.webp"
            alt=" "
            sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
            srcSet="/images/commercial-vehicle-wraps.webp 768w, /images/commercial-vehicle-wraps.webp 1024w"
            width={1500}
            height={717}
            className={`lg:w-full z-10`}
          />
          <div className="absolute top-80 -right-10 lg:max-w-[550px] w-full lg:h-[520px] -skew-x-25 z-70 bg-gradient-to-t from-[#ffffff4d] to-transparent"></div>
        </div>

        <div className="container mx-auto lg:max-w-[1300px] lg:-mt-[100px]">
          <h2 className="lg:text-[90px] font-black lg:pb-6 lg:pt-8 leading-[100px] relative z-50 tofinowide uppercase">
            Commercial{" "}
            <span className="text-stroke lg:block">Vehicle Wraps</span>{" "}
          </h2>
          <p className="lg:max-w-[55rem]">
            A professionally wrapped vehicle sends a clear message.{" "}
            <b>
              You are established, reliable, and serious about your business.
            </b>{" "}
            It is more than just advertising. It is a visual representation of
            your brand that builds trust with every impression.
            <br />
            Whether parked at a job site or navigating busy streets, a branded
            vehicle becomes a mobile billboard that works around the clock. With
            a custom design tailored to your business, your wrap captures
            attention, reinforces brand recognition, and helps you stay top of
            mind in your community.
          </p>
        </div>
      </section>

      {/*************************************** Fleet Wrap ***********************/}
      <section className="lg:mb-[100px]">
        <div className="">
          <div
            ref={ref3}
            className={`${visible3 ? "degradado-left" : ``}`}
          ></div>
          <Image
            src="/images/fleet-wrap-top-lines.svg"
            alt=" "
            sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
            srcSet="/images/fleet-wrap-top-lines.svg 768w, /images/fleet-wrap-top-lines.svgp 1024w"
            width={1500}
            height={670}
            className={`lg:w-full z-10`}
          />
        </div>
        <div className="container mx-auto lg:max-w-[1300px] lg:-mt-64 flex flex-wrap w-full">
          <h2 className="italic lg:text-[310px] lg:leading-[280px] font-bold text-transparent w-full lg:pb-24">
            <span className="">FLEET</span>
            <Image
              src="/images/fleet-image-overlay.webp"
              alt=" "
              sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
              srcSet="/images/fleet-image-overlay.webp 768w, /images/fleet-image-overlay.webp.svg 1024w"
              width={1015}
              height={248}
              className={`lg:max-w-[1015px] z-10 lg:-mt-[220px]`}
            />
            <span className="text-stroke">WRAP</span>
          </h2>

          <div className="lg:w-5/12 pe-6 content-center">
            <p>
              Fleet wraps unify your brand presence and maximize exposure on the
              road. Whether you have five or fifty vehicles, our fleet wrap
              service ensures consistency and impact.
              <br />
              <br />
              At InVisual Signs, we design wraps that fit seamlessly across all
              vehicle types, vans, pickups, sedans, and box trucks, keeping
              logos, colors, and messaging consistent. The result is a strong,
              unified visual identity for your entire fleet.
            </p>
          </div>

          <div className="lg:w-6/12">
            <Image
              src="/images/invisual-car-banner-home.webp"
              alt=" "
              sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
              srcSet="/images/invisual-car-banner-home.webp 768w, /images/invisual-car-banner-home.webp 1024w"
              width={782}
              height={340}
              className={`lg:min-w-[782px] w-full z-10`}
            />
          </div>

          <div className="lg:w-1/2 lg:pt-6">
            <p className="lg:text-[30px] font-bold lg:pb-4">
              Benefits For your Business
            </p>
            {BenefitsFleetWrap.map((data, index) => (
              <div key={index} className="flex lg:pb-4">
                <img
                  src="/images/list-icon.svg"
                  alt="Decoración"
                  className="w-full lg:max-w-[19px] max-w-[24px]"
                />
                <span className="ps-2 text-[20px] ">{data}</span>
              </div>
            ))}
          </div>

          <div className="lg:w-1/2 lg:pt-6">
            <p className="lg:text-[30px] font-bold lg:pb-4">
              Our process includes
            </p>
            {ProcessInclude.map((data, index) => (
              <div key={index} className="flex lg:pb-4">
                <img
                  src="/images/list-icon.svg"
                  alt="Decoración"
                  className="w-full lg:max-w-[19px] max-w-[24px]"
                />
                <span className="ps-2 text-[20px] ">{data}</span>
              </div>
            ))}
          </div>

          <div className="w-full lg:py-16 py-8 px-6">
            <SliderFleetWrap />
          </div>
        </div>
        <div className="z-0 relative lg:-mt-76">
          {/*<div ref={ref4} className={`${visible4 ? 'degradado-left': ``}`}></div> */}
          <Image
            src="/images/fleet-wrap-bottom-lines.svg"
            alt=" "
            sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
            srcSet="/images/fleet-wrap-bottom-lines.svg 768w, /images/fleet-wrap-bottom-lines.svgp 1024w"
            width={1500}
            height={670}
            className={`lg:w-full z-10`}
          />
        </div>
      </section>

      {/*************************************** Wrap vending ***********************/}
      <section className="lg:py-32 relative">
        <div className="bg-[#1A1A1A] shadow-[0_0_22px_0_rgba(0,0,0,0.70)] lg:py-16">
          <div className="container mx-auto lg:max-w-[1300px] flex flex-wrap">
            <div className="lg:w-7/12">
              <h2 className="lg:text-[75px] font-black lg:pb-6 lg:leading-[80px] relative z-50 tofinowide uppercase">
                WRAP <span className="text-stroke lg:block">YOUR VENDING</span>{" "}
              </h2>
              <div className="flex gap-6">
                <p>
                  Our vending machine wraps are fully customizable, allowing you
                  to display logos, product visuals, promotions, or bold designs
                  that match your business identity. The wrap also acts as a
                  protective layer, keeping the surface clean and scratch
                  resistant.
                  <br />
                  <br />
                  Ideal for business owners, property managers, or product
                  distributors, vending machine wraps are a cost-effective way
                  to stand out and create a professional, cohesive image in any
                  location.
                </p>
                <Image
                  src="/images/red-arrows.svg"
                  alt=" "
                  sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
                  srcSet="/images/red-arrows.svg 768w, /images/red-arrows.svg 1024w"
                  width={188}
                  height={108}
                  className={`lg:w-[188px] z-10`}
                />
              </div>
            </div>

            <div className="lg:w-5/12">
              <Image
                src="/images/wrap-vending.webp"
                alt=" "
                sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
                srcSet="/images/wrap-vending.webp 768w, /images/wrap-vending.webp 1024w"
                width={742}
                height={791}
                className={`lg:-my-44 lg:max-w-[742px] z-10 -right-20 top-0`}
              />
            </div>
          </div>
        </div>
      </section>

      {/*************************************** Types of Vehicle ***********************/}
      <section id="types" className="home lg:mb-[150px]">
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
              buttonColor={"#D92630"}
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

      {/*************************************** CTA ***********************/}
      <section className="cta-servicepage h-[586px]">
        <div className="container mx-auto lg:max-w-[1300px] flex">
          <div className="lg:w-5/12"></div>
          <div className="lg:w-7/12">
            <h2 className="lg:text-[55px] font-black lg:pb-6 lg:leading-[60px] relative z-50 tofinowide uppercase lg:ps-20 lg:pt-6">
              Ready to Take Your{" "}
              <span className="text-stroke lg:block lg:text-[65px] lg:leading-[70px]">
                Branding Even Further?
              </span>{" "}
            </h2>
            <div className="justify-end flex">
              <div className="lg:w-[420px] lg:pt-8">
                <p>
                  You’ve seen what professional vehicle wraps can do. Now
                  explore how you can extend that same visual impact across your
                  business. From wall graphics to window vinyl, we’ve got you
                  covered.{" "}
                </p>
                <div className="flex gap-2 lg:pt-4">
                  <ButtonLaid
                    width={196}
                    buttonText={"I want vehicle wraps"}
                    link="tel:+12406641629"
                    buttonColor={"#fff"}
                    textColor={"#D92630"}
                  />
                  <ButtonLaid
                    width={196}
                    buttonText={"I want vehicle wraps"}
                    link="tel:+12406641629"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*************************************** Additional Services ***********************/}
      <section className="mt-[70px] md:mt-[100px] lg:mt-[150px] pt-[60px] lg:pt-[255px] z-3 relative">
        <Image
          src="/images/vehicle-wrapping-services/additional-services-line.svg"
          alt=" "
          sizes="(min-width: 1024px) 450px, (min-width: 768px) 450px, 100vw"
          srcSet="/images/how-it-works-vw.webp 768w, /images/how-it-works-vw.webp 1024w"
          width={450}
          height={413}
          className={`absolute top-[56px] left-0 min-w-[450px]`}
        />
        <div className="container mx-auto lg:max-w-[1200px]">
          <h2 className="lg:text-[90px] font-black lg:pb-6 lg:leading-[60px] relative z-50 tofinowide uppercase lg:ps-2 lg:pt-6 mb-[90px]">
            ADDITIONAL{" "}
            <span className="text-stroke lg:text-[90px] lg:leading-[70px]">
              SERVICES
            </span>{" "}
          </h2>
          <AditionalServicesServices />
        </div>
      </section>

      {/*************************************** Graphic Design ***********************/}
      <section className="relative w-full mt-[70px] lg:mt-[133px]">
        <Image
          src="/images/vehicle-wrapping-services/graphic-design.svg"
          alt="Graphic Design Background"
          sizes="(min-width: 1024px) 560px, (min-width: 768px) 768px, 100vw"
          srcSet="/images/how-it-works-vw.webp 768w, /images/how-it-works-vw.webp 1024w"
          width={560}
          height={441}
          className={`absolute top-[-120px] right-0 min-w-[560px]`}
        />

        <div className="container mx-auto lg:max-w-[1200px] relative z-10 px-[24px] lg:px-0">
          <h2 className="text-[40px] md:text-[60px] lg:text-[70px] font-black lg:pb-6 leading-[45px] md:leading-[55px] lg:leading-[60px] relative z-50 tofinowide uppercase pt-4 md:pt-5 lg:pt-6 text-center md:text-left">
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
                    alt={`Background slide ${index + 1}`}
                    fill
                    className="object-cover object-top"
                    sizes="100vw"
                    priority={index === 0}
                  />
                </div>

                {/* responsive */}
                <div className="container mx-auto h-full lg:max-w-[1200px] relative z-20">
                  <div className="h-full flex flex-col md:flex-row items-center justify-center px-4 lg:px-0 gap-4 md:gap-0">
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

      {/*************************************** Results ***********************/}
      <section className="results-services relative z-40 py-10 lg:px-0 lg:mt-[-176px] mt-[-65px]">
        <div className="container mx-auto lg:max-w-[1300px] lg:py-40">
          <h2 className="lg:text-[70px] font-black lg:pb-6 lg:leading-[75px] relative z-50 tofinowide uppercase lg:pt-6 lg:w-[37rem]">
            Want to see
            <span className="text-stroke lg:block lg:text-[60px] lg:leading-[70px]">
              the results for yourself?
            </span>{" "}
          </h2>
          <p className="lg:w-[30rem]">
            Check out our gallery or call now to get started on your custom
            wrap. Your brand deserves to stand out.
          </p>

          <div className="flex gap-2 lg:pt-12">
            <ButtonLaid
              width={196}
              buttonText={"Call Bow"}
              link="tel:+12406641629"
              buttonColor={"#fff"}
              textColor={"#D92630"}
            />
            <ButtonLaid width={196} buttonText={"Gallery"} link="/gallery" />
          </div>
        </div>
      </section>
    </>
  );
};

export default VehicleWrappingServicesPage;
