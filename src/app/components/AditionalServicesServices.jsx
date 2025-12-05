"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function AditionalServicesServices({ defaultServices }) {
  const [activeService, setActiveService] = useState(1);
  const [closingService, setClosingService] = useState(null);

  const toggleService = (id) => {
    if (activeService === id) {
      setClosingService(id);
      setTimeout(() => {
        setActiveService(null);
        setClosingService(null);
      }, 300);
    } else {
      setActiveService(id);
      setClosingService(null);
    }
  };

  const handleKeyDown = (e, id) => {
    if (e.key === "Enter" || e.key === " ") {
      toggleService(id);
    }
  };

  return (
    <div>
      {defaultServices.map((service) => {
        const isActive = activeService === service.id;
        const isClosing = closingService === service.id;
        const isOdd = service.id % 2 !== 0; // Impar

        return (
          <article
            key={service.id}
            className={`w-full flex flex-col md:flex-row text-center transition-all duration-500 overflow-hidden ${
              isActive ? "max-h-[2000px]" : "max-h-[400px] md:max-h-[248px]"
            }`}
          >
            <div
              className={`w-12/12 md:w-5/12 h-[287px] md:h-auto cursor-pointer relative ${
                isOdd ? "" : "order-1 md:order-2"
              }`}
              onClick={() => toggleService(service.id)}
              onKeyDown={(e) => handleKeyDown(e, service.id)}
              role="button"
              tabIndex={0}
              aria-expanded={isActive}
            >
              <Image
                src={service.img1}
                alt={service.title}
                fill
                className={`object-cover transition-all duration-500 ${
                  isActive ? "grayscale-0" : "grayscale"
                }`}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div
              className={`w-12/12 md:w-7/12 bg-white/10 shadow-[200px_-200px_200px_0_rgba(194,194,194,0.10)_inset,_-200px_200px_200px_0_rgba(255,255,255,0.10)_inset] backdrop-blur-[200px] flex flex-wrap cursor-pointer ${
                isOdd ? "" : "order-2 md:order-1"
              }`}
              onClick={() => toggleService(service.id)}
              onKeyDown={(e) => handleKeyDown(e, service.id)}
              role="button"
              tabIndex={0}
            >
              <div
                className={`w-full px-[24px] pt-[30px] pb-[33px] lg:pb-0 lg:pt-[75px] flex flex-col justify-start transition-all duration-500 ${
                  isOdd
                    ? "lg:ps-[125px] lg:pe-[50px]"
                    : "lg:ps-[72px] lg:pe-[30px]"
                } ${isActive ? "max-h-[388px]" : "max-h-[248px]"}`}
              >
                <h3 className="text-[25px] md:text-[40px] lg:text-[50px] font-bold italic uppercase md:text-left leading-[40px] lg:leading-[50px]">
                  {service.title}
                </h3>
                <p
                  className={`text-[16px] text-left transition-all duration-300 whitespace-pre-line max-w-[541px] ${
                    isActive && !isClosing
                      ? "opacity-100 max-h-[500px] mt-4"
                      : "opacity-0 max-h-0 overflow-hidden"
                  }`}
                >
                  {service.description}
                </p>
              </div>

              <div
                className={`w-full md:w-6/12 min-h-[254px] md:min-h-[242px] relative flex flex-col justify-center items-center px-[60px] transition-all duration-300 overflow-hidden ${
                  isActive && !isClosing
                    ? "pt-[89px] pb-[84px] opacity-100 translate-y-0"
                    : "pt-0 pb-0 opacity-0 translate-y-4 h-0"
                }`}
              >
                <Image
                  src={service.img2}
                  alt=""
                  fill
                  className="object-cover -z-10"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/40 -z-10"></div>{" "}
                <h4 className="text-xl font-bold">
                  {service.aditionalInfoTitle1}
                </h4>
                <p className="text-[12px]">{service.aditionalInfoText1}</p>
              </div>

              <div
                className={`w-full md:w-6/12 min-h-[254px] md:min-h-[242px] relative flex flex-col justify-center items-center px-[60px] transition-all duration-300 overflow-hidden ${
                  isActive && !isClosing
                    ? "pt-[89px] pb-[84px] opacity-100 translate-y-0"
                    : "pt-0 pb-0 opacity-0 translate-y-4 h-0"
                }`}
              >
                <Image
                  src={service.img3}
                  alt=""
                  fill
                  className="object-cover -z-10"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/40 -z-10"></div>

                <h4 className="text-xl font-bold">
                  {service.aditionalInfoTitle2}
                </h4>
                <p className="text-[12px]">{service.aditionalInfoText2}</p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
