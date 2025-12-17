"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

export default function WarrantyImages() {
  const ref1Desktop = useRef(null);
  const ref1Mobile = useRef(null);
  const ref2Desktop = useRef(null);
  const ref2Mobile = useRef(null);

  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === ref1Desktop.current || entry.target === ref1Mobile.current) {
              setVisible1(true);
            }
            if (entry.target === ref2Desktop.current || entry.target === ref2Mobile.current) {
              setVisible2(true);
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    [ref1Desktop, ref1Mobile, ref2Desktop, ref2Mobile].forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* --- DESKTOP --- */}
      <div className="hidden lg:flex relative">
        <div className="absolute top-10 left-20 z-1">
          <Image
            ref={ref1Desktop}
            src="/images/warranty-truck.webp"
            alt="Commercial fleet wrap warranty coverage"
            width={1040}
            height={840}
            className={`lg:mb-[-110px] ${visible1 ? `face-in-left` : `opacity-0`}`}
          />
        </div>

        <div className="absolute top-[115px] left-0 z-10 pointer-events-none">
          <Image
            ref={ref2Desktop}
            src="/images/warranty-red-arrow.webp"
            alt=""
            width={660}
            height={662}
            className={`lg:mb-[-110px] w-[280px] lg:w-[660px] ${visible2 ? `face-in-left-delay-500` : `opacity-0`}`}
          />
        </div>
      </div>

      {/* --- MOBILE --- */}
      <div className="flex justify-end items-center lg:hidden relative min-h-[466px] w-[120%] ml-[-45px]">
        <div className="z-0 w-[80%]">
          <Image
            ref={ref1Mobile}
            src="/images/vehicle-wrapping-services/warranty-truck-movil.webp"
            alt="Commercial fleet wrap warranty coverage"
            width={355}
            height={387}
            className={`w-full object-contain ${visible1 ? `face-in-left` : `opacity-0`}`}
          />
        </div>

        <div className="absolute left-0 z-10 pointer-events-none w-[80%]">
          <Image
            ref={ref2Mobile}
            src="/images/vehicle-wrapping-services/warranty-red-arrow-movil.webp"
            alt=""
            width={391.93}
            height={406.03}
            className={`w-full ${visible2 ? `face-in-left-delay-500` : `opacity-0`}`}
          />
        </div>
      </div>
    </>
  );
}