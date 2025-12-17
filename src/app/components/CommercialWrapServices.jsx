"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function CommercialWrapServices() {
  const mainRef = useRef(null);
  const linesRef = useRef(null);
  const [isVisibleMain, setIsVisibleMain] = useState(false);
  const [isVisibleLines, setIsVisibleLines] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === mainRef.current) setIsVisibleMain(true);
            if (entry.target === linesRef.current) setIsVisibleLines(true);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -150px 0px",
      }
    );

    if (mainRef.current) observer.observe(mainRef.current);
    if (linesRef.current) observer.observe(linesRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={mainRef}
      className="flex items-center w-full overflow-hidden"
    >
      <Image
        src="/images/CommercialWrapServices-Lines.webp"
        alt="Lines"
        width={482}
        height={930}
        className={`z-10 max-h-[930px] object-contain absolute top-0 left-0 transition-all duration-[1200ms] ease-out ${
          isVisibleMain ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-32"
        }`}
        priority
      />

      <div className="relative h-fit z-10 w-full lg:ps-40">
        <Image
          src="/images/commercial-vehicle-wraps-2.webp"
          alt="Premium commercial vehicle wrap design"
          width={998}
          height={564}
          className={`lg:max-w-[998px] z-10 max-h-[564px] object-contain transition-opacity duration-1000 delay-200 ${
            isVisibleMain ? "opacity-100" : "opacity-0"
          }`}
          priority
        />

        <div 
          ref={linesRef} 
          className="absolute right-0 bottom-0 flex"
        >
          <div
            className={`transition-all duration-700 delay-100 ${
              isVisibleLines
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-24"
            }`}
          >
            <Image
              src="/images/CommercialWrapServices-Lines-2.webp"
              alt="Lines step 1"
              width={274}
              height={199}
              className="w-[120px] md:w-[275px] z-10 max-h-[274px] object-contain"
            />
          </div>

          <div
            className={`transition-all duration-700 delay-300 ms-[-55px] md:ms-[-130px] ${
              isVisibleLines
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-24"
            }`}
          >
            <Image
              src="/images/CommercialWrapServices-Lines-2.webp"
              alt="Lines step 2"
              width={274}
              height={199}
              className="w-[120px] md:w-[275px] z-10 max-h-[274px] object-contain"
            />
          </div>

          <div
            className={`transition-all duration-700 delay-500 ms-[-55px] md:ms-[-130px] ${
              isVisibleLines
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-24"
            }`}
          >
            <Image
              src="/images/CommercialWrapServices-Lines-2.webp"
              alt="Lines step 3"
              width={274}
              height={199}
              className="w-[120px] md:w-[275px] z-10 max-h-[274px] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}