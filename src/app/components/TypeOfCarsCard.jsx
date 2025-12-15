import Image from "next/image";
import React from "react";

const BG_LAYOUTS = {
  1: [
    "max-w-[100px] lg:max-w-[190px] max-h-[231px] lg:max-h-[439px] lg:me-[-60px]",
    "max-w-[125px] lg:max-w-[277px] max-h-[231px] ms-[-49px] lg:ms-[-30px] lg:me-[-40px] lg:max-h-[439px]",
    "max-w-[100px] lg:max-w-[209px] max-h-[231px] ms-[-45px] lg:ms-[-60px] lg:max-h-[439px]",
  ],
  2: [
    "max-w-[100px] lg:max-w-[215px] lg:max-h-[393px] lg:me-[-10px] lg:mt-[40px]",
    "max-w-[100px] lg:max-w-[290px] lg:ms-[-20px] lg:me-[-105px] lg:max-h-[436px]",
    "max-w-[100px] lg:max-w-[220px] lg:ms-[-20px] lg:max-h-[389px] lg:mt-[60px]",
  ],
  3: [
    "max-w-[100px] lg:max-w-[207px] max-h-[231px] lg:max-h-[393px] lg:me-[-10px] lg:mt-[40px]",
    "max-w-[141px] lg:max-w-[229px] max-h-[231px] ms-[-35px] lg:ms-[-20px] lg:me-[-10px] mt-[-23px] lg:mt-[8px] lg:max-h-[436px]",
    "max-w-[100px] lg:max-w-[207px] max-h-[231px] ms-[-38px] lg:ms-[-20px] lg:max-h-[439px] lg:mt-[60px]",
  ],
  4: [
    "max-w-[96.11px] max-h-[204.59px] lg:max-w-[182px] lg:max-h-[388px]",
    "max-w-[145.88px] max-h-[222.5px] lg:max-w-[277px] ms-[-10px] lg:ms-[-27px] lg:me-[-40px] lg:max-h-[422px] mt-[-10px] lg:mt-[-23px]",
    "max-w-[110.07px] max-h-[203.54px] ms-[-60px] lg:max-w-[209px] lg:ms-[-70px] lg:max-h-[486px]",
  ],
};
const CENTRAL_STYLES = {
  CARS: "max-w-[200px] lg:max-w-[432px] mt-[-60px] lg:mt-[-150px]",
  TRUCKS: "max-w-[300px] lg:max-w-[590px] mt-[-69px] lg:mt-[-110px]",
  VANS: "max-w-[300px] lg:max-w-[493px] mt-[-129px] lg:mt-[-206px] lg:max-h-[249px]",
  "FOOD TRUCKS": "max-w-[300px] lg:max-w-[523px] lg:mt-[-291px] mt-[-135px]",
  TRAILERS: "max-w-[250px] lg:max-w-[460px] lg:mt-[-308px] mt-[-105px]",
  SUV: "max-w-[300px] lg:max-w-[523px] lg:mt-[-140px] mt-[-67px]",
  MOTORCYCLE: "max-w-[250px] lg:max-w-[460px] lg:mt-[-200px] mt-[-81px]",
  BOAT: "max-w-[200px] lg:max-w-[523px] lg:mt-[-350px] md:mt[-139px] mt-[-163px]",
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
