// src/components/GraphicDesignServer.jsx
// NO contiene "use client" y NO usa React Hooks.

import React from "react";
import Image from "next/image";
import { GraphicDesignServices, GraphicDesignExamplesComplete } from "../../data";
import GraphicDesignClient from "../graphicDesignClient"; // Asegúrate de que la ruta sea correcta

export default function GraphicDesignServer() {
  // ❌ Eliminamos: const prevBARef = useRef(null);
  // ❌ Eliminamos: const nextBARef = useRef(null);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Graphic Design Services - Vehicle Wraps",
    numberOfItems: GraphicDesignServices.length,
    itemListElement: GraphicDesignServices.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.title,
        description: service.desc,
        image: [
          `https://invisualsign.com${service.beforeSrc}`,
          `https://invisualsign.com${service.afterSrc}`,
        ],
      },
    })),
  };

  return (
    <section id="graphic" className="h-fit text-white home lg:mt-[-100px]">
      <div className="container mx-auto lg:max-w-[1200px] flex flex-wrap">
        <div className="w-full">
          <h2 className="lg:text-[110px] font-black italic lg:pt-8 leading-[110px] text-center lg:pb-12">
            <span className="text-stroke">GRAPHIC</span> DESIGN
          </h2>
          <p className="text-[45px] text-center font-bold">
            Branding & Consultation Services
          </p>
        </div>
        <div className="w-full grid lg:grid-cols-2 grid-cols-1 lg:pt-20 lg:gap-16 lg:pb-32">
          {GraphicDesignServices.map((data, index) => (
            <div key={index}>
              <Image
                src="/images/red-line-top-GD.png"
                alt="Commercial fleet wrap in Glen Burnie"
                sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
                srcSet="/images/red-line-top-GD.png 768w, /images/red-line-top-GD.png 1024w"
                width={588}
                height={6}
                className="z-20 relative lg:pb-6"
              />
              <div className="lg:min-h-[130px]">
                <p className="lg:text-[25px] font-bold pb-4">{data.title}</p>
                <p className="text-[14px] lg:pe-8">{data.desc}</p>
              </div>
              <Image
                src="/images/red-line-bottom-GD.png"
                alt="Commercial fleet wrap in Glen Burnie"
                sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
                srcSet="/images/red-line-top-GD.png 768w, /images/red-line-top-GD.png 1024w"
                width={588}
                height={6}
                className="z-20 relative lg:pt-6"
              />
            </div>
          ))}
        </div>

        {/* 🚀 Renderiza el componente cliente para hidratar la interactividad 🚀 */}
        <GraphicDesignClient 
            GraphicDesignExamplesComplete={GraphicDesignExamplesComplete}
        />
        
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}