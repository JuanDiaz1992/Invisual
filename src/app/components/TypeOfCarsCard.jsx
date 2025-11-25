import Image from "next/image";
import React from "react";

const CarTypeCard = ({ title, src, alt, bgData, className, ...props }) => {
  return (
    <article className="justify-center flex flex-wrap flex-col items-center">
      <h3 className="text-center font-black italic text-[50px] w-full">
        {title}
      </h3>

      <div className="flex relative">
        {bgData.map((data, index) => {
          return (
            <div key={index} className="relative">
              <Image
                src={`/images/${data.src}`}
                alt={data.alt}
                sizes="(min-width: 1024px) 33vw, 100vw"
                width={277}
                height={425}
                className={`${data.className}`}
                aria-hidden={!data.alt}
              />
            </div>
          );
        })}
      </div>

      <Image
        src={`/images/${src}`}
        alt={alt}
        sizes="(min-width: 1024px) 600px, (min-width: 768px) 500px, 100vw"
        width={748}
        height={622}
        className={`${className} z-3` }
      />
    </article>
  );
};

export default CarTypeCard;