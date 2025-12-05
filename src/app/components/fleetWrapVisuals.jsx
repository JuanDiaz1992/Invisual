"use client";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";

export default function FleetWrapVisuals() {
  const [visible3, setVisible3] = useState(false);
  const ref3 = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === ref3.current) setVisible3(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (ref3.current) observer.observe(ref3.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative">
      <div className="">
        <div ref={ref3} className={`${visible3 ? "degradado-left" : ``}`}></div>
        <Image
          src="/images/fleet-wrap-top-lines.svg"
          alt=" "
          sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
          srcSet="/images/fleet-wrap-top-lines.svg 768w, /images/fleet-wrap-top-lines.svgp 1024w"
          width={1500}
          height={670}
          className={`lg:w-full z-10 ${visible3 ? "opacity-100" : "opacity-0"}`}
        />
      </div>
    </div>
  );
}