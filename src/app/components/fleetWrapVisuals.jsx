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
            setVisible3(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (ref3.current) observer.observe(ref3.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative w-full">
      <div
        ref={ref3}
        className={`absolute inset-0 w-full h-full z-0 pointer-events-none transition-opacity duration-700 ${
          visible3 ? "degradado-left opacity-100" : "opacity-0"
        }`}
      ></div>

      <Image
        src="/images/fleet-wrap-top-lines.svg"
        alt=""
        sizes="100vw"
        width={1500}
        height={670}
        className="lg:w-full z-10 relative"
      />
    </div>
  );
}
