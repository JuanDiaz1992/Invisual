import Image from "next/image";
import React from "react";

const BG_LAYOUTS = {
  1: [
    "lg:max-w-[190px] lg:max-h-[439px] lg:me-[-60px]",
    "lg:max-w-[277px] lg:ms-[-30px] lg:me-[-40px] lg:max-h-[439px]",
    "lg:max-w-[209px] lg:ms-[-60px] lg:max-h-[439px]",
  ],
  2: [
    "lg:max-w-[215px] lg:max-h-[393px] lg:me-[-10px] lg:mt-[40px]",
    "lg:max-w-[290px] lg:ms-[-20px] lg:me-[-105px] lg:max-h-[436px]",
    "lg:max-w-[220px] lg:ms-[-20px] lg:max-h-[389px] lg:mt-[60px]",
  ],
  3: [
    "lg:max-w-[215px] lg:max-h-[393px] lg:me-[-10px] lg:mt-[40px]",
    "lg:max-w-[190px] lg:ms-[-20px] lg:me-[-10px] lg:max-h-[436px]",
    "lg:max-w-[200px] lg:ms-[-20px] lg:max-h-[439px] lg:mt-[60px]",
  ],
  4: [
    "max-w-[96.11px] max-h-[204.59px] lg:max-w-[182px] lg:max-h-[388px]",
    "max-w-[145.88px] max-h-[222.5px] lg:max-w-[277px] ms-[-10px] lg:ms-[-27px] lg:me-[-40px] lg:max-h-[422px]",
    "max-w-[110.07px] max-h-[203.54px] ms-[-60px] lg:max-w-[209px] lg:ms-[-70px] lg:max-h-[486px]",
  ],
};
const CENTRAL_STYLES = {
  CARS: "max-w-[300px] lg:max-w-[432px] mt-[-60px] lg:mt-[-150px]",
  TRUCKS: "lg:max-w-[590px] lg:mt-[-110px]",
  VANS: "lg:max-w-[493px] lg:mt-[-120px] lg:max-h-[249px]",
  "FOOD TRUCKS": "lg:max-w-[523px] lg:mt-[-140px]",
  TRAILERS: "lg:max-w-[460px] lg:mt-[-250px]",
  SUV: "lg:max-w-[523px] lg:mt-[-100px]",
  MOTORCYCLE: "lg:max-w-[460px] lg:mt-[-150px]",
  BOAT: "lg:max-w-[523px] lg:mt-[-350px]",
};

const CarTypeCard = ({ title, src, alt, bgImages, type = 1 }) => {
  const bgClasses = BG_LAYOUTS[type] || BG_LAYOUTS[1];
  const centralImageClass = CENTRAL_STYLES[title] || "lg:max-w-[500px]";

  return (
    <article className="justify-center flex flex-wrap flex-col items-center">
      <h3 className="text-center font-black italic text-[30px] md:text-[50px] w-full uppercase">
        {title}
      </h3>

      <div className="flex relative items-start justify-center">
        {bgImages.map((imgSrc, index) => (
          <div key={index} className="relative">
            <Image
              src={`/images/${imgSrc}`}
              alt={`${alt} background ${index + 1}`}
              sizes="(min-width: 1024px) 33vw, 100vw"
              width={277}
              height={425}
              className={`object-contain ${bgClasses[index]}`}
              aria-hidden="true"
            />
          </div>
        ))}
      </div>

      <Image
        src={`/images/${src}`}
        alt={alt}
        sizes="(min-width: 1024px) 600px, (min-width: 768px) 500px, 100vw"
        width={748}
        height={622}
        className={`${centralImageClass} z-10 relative`}
      />
    </article>
  );
};

export default CarTypeCard;
