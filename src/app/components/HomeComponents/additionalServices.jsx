import AdditionalServicesHome from "../AdditionalServicesHome";
import { AdditionalServicesData } from "../../data";
import Image from "next/image";

export default function AditionalServices() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: AdditionalServicesData.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.name,
        description: service.desc,
        image: `https://invisualsign.com${service.src}`,
        url: `https://invisualsign.com${service.link}`,
      },
    })),
  };
  return (
    <section className="mt-[170px] relative pb-[160px]" id="additional">
      <div className="w-full z-2">
        <h2 className="lg:text-[110px] font-black italic lg:pt-8 leading-[110px] text-center lg:pb-12">
          <span className="text-stroke me-[350px]">ADDITIONAL</span> <br />
          <span className="ms-[350px]">SERVICES</span>
        </h2>
      </div>
      <AdditionalServicesHome slides={AdditionalServicesData} />
      <div className="absolute w-full h-full bottom-0 left-0 z-1 select-none pointer-events-none">
        <Image
          src="/images/aditional-services-home-bg.webp"
          alt=""
          fill
          className="object-contain object-bottom"
          quality={90}
        />
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
