"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

export default function WarrantyImages() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === ref1.current) setVisible1(true);
            if (entry.target === ref2.current) setVisible2(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (ref1.current) observer.observe(ref1.current);
    if (ref2.current) observer.observe(ref2.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="absolute top-10 left-20 z-0">
        <Image
          ref={ref1}
          src="/images/warranty-truck.webp"
          alt="Commercial fleet wrap warranty coverage"
          sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
          width={1040}
          height={840}
          className={`lg:mb-[-110px] ${
            visible1 ? `face-in-left` : `opacity-0`
          }`}
        />
      </div>

      <div className="absolute top-[115px] left-0 z-10 pointer-events-none">
        <Image
          ref={ref2}
          src="/images/warranty-red-arrow.webp"
          alt=""
          sizes="(min-width: 1024px) 660px, 100vw"
          width={660}
          height={662}
          className={`lg:mb-[-110px] w-[280px] lg:w-[660px] ${
            visible2 ? `face-in-left-delay-500` : `opacity-0`
          }`}
        />
      </div>
    </>
  );
}