import Image from "next/image";
import { slidesGraphicDesignServices } from "../../data";
import GraphicDesignSlider from "../graphicDesignSlider";

export default function GraphicDesign() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Custom Vehicle Graphic Design Portfolio",
    "itemListElement": slidesGraphicDesignServices.map((slide, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "CreativeWork",
        "name": slide.title || `Graphic Design Project ${index + 1}`,
        "image": `https://invisualsign.com${slide.car}`,
        "description": "Custom vehicle graphic design and branding."
      }
    }))
  };

  return (
    <section className="relative w-full mt-[70px] lg:mt-[133px]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Image
        src="/images/vehicle-wrapping-services/graphic-design.svg"
        alt="" // Decorativo
        sizes="(min-width: 1024px) 560px, 100vw"
        width={560}
        height={441}
        className="absolute top-[-120px] right-0 min-w-[560px] pointer-events-none"
      />

      <div className="container mx-auto lg:max-w-[1200px] relative z-10 px-[24px] lg:px-0">
        <h2 className="text-[40px] md:text-[60px] lg:text-[70px] font-black lg:pb-6 leading-[45px] md:leading-[55px] lg:leading-[60px] relative z-50 tofinowide uppercase pt-4 md:pt-5 lg:pt-6 text-center md:text-left">
          Graphic Design
        </h2>

        <p className="text-base md:text-lg lg:w-[38rem] text-center md:text-left px-4 md:px-0">
          Bring your ideas to life with our expert graphic design services,
          offering creativity and precision in every project.
        </p>


        
      </div>
              {/* Componente Interactivo (Botones + Slider) */}
        <GraphicDesignSlider slides={slidesGraphicDesignServices} />
    </section>
  );
}