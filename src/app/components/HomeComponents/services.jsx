import Carousel3Dv2 from "../carousel3Dv2";
import { ServiceSlidesHome } from "../../data";
import AnimatedLine from "../animatedLine";

export default function Services() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: ServiceSlidesHome.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.title,
        description: service.description,
        image: `https://invisualsign.com${service.src}`,
        url: `https://invisualsign.com${service.link}`,
      },
    })),
  };
  return (
    <section id="services" className="text-white relative">
      <AnimatedLine />
      <div className="absolute max-h-[600px] h-[400px] rotate-[-163.5deg] overflow-hidden translate-x-[-300px] translate-y-[-30px] shadow-[5px_10px_16px_0px_rgba(0,0,0,0.7)] z-0 bg-[#1A1A1A]">
        <div className={`lg:w-[2500px] w-full h-[100px] bg-[#1A1A1A]`} />
      </div>
      <div className="container mx-auto lg:max-w-[1200px] relative z-20">
        <h2 className="lg:text-[100px] font-black italic lg:pb-8 lg:ps-20">
          OUR <span className="text-stroke">SERVICES</span>
        </h2>
        <Carousel3Dv2 slides={ServiceSlidesHome} />
      </div>

      <div className="absolute lg:bottom-[150px] max-h-[400px] h-[400px] rotate-[-163.5deg] overflow-hidden translate-x-[-300px] translate-y-[-30px] shadow-[-20px_-15px_20px_-12px_rgba(0,0,0,1)] z-0 bg-[#1A1A1A]">
        <div className={`lg:w-[2500px] w-full h-[100px] bg-[#1A1A1A]`} />
      </div>

      <AnimatedLine classes={"justify-self-end -rotate-180 mt-20"} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
