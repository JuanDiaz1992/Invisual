import Image from "next/image";
import AditionalServicesServices from "../AditionalServicesServices";
import { DefaultServices } from "../../data";

export default function AdditionalServices() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Additional Branding & Printing Services",
    itemListElement: DefaultServices.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.title,
        description: service.description,
        image: `https://invisualsign.com/${service.img1}`,
        offers: {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.aditionalInfoTitle1,
          },
        },
      },
    })),
  };

  return (
    <section className="mt-[70px] md:mt-[100px] lg:mt-[150px] pt-[60px] lg:pt-[255px] z-3 relative">
      <Image
        src="/images/vehicle-wrapping-services/additional-services-line.svg"
        alt=""
        sizes="(min-width: 1024px) 450px, (min-width: 768px) 450px, 100vw"
        width={450}
        height={413}
        className={`absolute top-[56px] left-0 min-w-[450px] pointer-events-none -z-10`}
      />

      <div className="container mx-auto lg:max-w-[1200px]">
        <h2 className="lg:text-[90px] font-black lg:pb-6 lg:leading-[60px] relative z-50 tofinowide uppercase lg:ps-2 lg:pt-6 mb-[90px]">
          ADDITIONAL{" "}
          <span className="text-stroke lg:text-[90px] lg:leading-[70px] block">
            SERVICES
          </span>{" "}
        </h2>
        <AditionalServicesServices defaultServices={DefaultServices} />
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
