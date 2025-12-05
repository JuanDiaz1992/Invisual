import {
  BenefitsFleetWrap,
  ProcessInclude,
  FleetWrapServicesData,
} from "../../data";
import SliderFleetWrap from "../SliderFleetWrap";
import Image from "next/image";
import FleetWrapVisuals from "../fleetWrapVisuals";

export default function FleetWrap() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Fleet Wrap Services & Processes",
    itemListElement: FleetWrapServicesData.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: item.title,
        description: item.desc,
        image: `https://invisualsign.com/images/${item.img}`,
      },
    })),
  };
  return (
    <section className="lg:mb-[100px]">
      <FleetWrapVisuals />

      <div className="container mx-auto lg:max-w-[1300px] lg:-mt-64 flex flex-wrap w-full relative z-20">
        <h2 className="italic lg:text-[310px] lg:leading-[280px] font-bold text-transparent w-full lg:pb-24 relative">
          <span className="">FLEET</span>
          <Image
            src="/images/fleet-image-overlay.webp"
            alt="Fleet branding texture"
            sizes="(min-width: 1024px) 1015px, 100vw"
            width={1015}
            height={248}
            className={`lg:max-w-[1015px] z-10 lg:-mt-[220px] h-auto`}
          />
          <span className="text-stroke">WRAP</span>
        </h2>

        <div className="lg:w-5/12 pe-6 content-center">
          <p>
            Fleet wraps unify your brand presence and maximize exposure on the
            road. Whether you have five or fifty vehicles, our fleet wrap
            service ensures consistency and impact.
            <br />
            <br />
            At InVisual Signs, we design wraps that fit seamlessly across all
            vehicle types, vans, pickups, sedans, and box trucks, keeping logos,
            colors, and messaging consistent. The result is a strong, unified
            visual identity for your entire fleet.
          </p>
        </div>

        <div className="lg:w-6/12">
          <Image
            src="/images/invisual-car-banner-home.webp"
            alt="InVisual Signs custom fleet branding example"
            sizes="(min-width: 1024px) 782px, 100vw"
            width={782}
            height={340}
            className={`lg:min-w-[782px] w-full z-10 h-auto`}
          />
        </div>
        <div className="lg:w-1/2 lg:pt-6">
          <h3 className="lg:text-[30px] font-bold lg:pb-4 uppercase">
            Benefits For your Business
          </h3>

          <ul className="list-none p-0 m-0">
            {BenefitsFleetWrap.map((data, index) => (
              <li key={index} className="flex lg:pb-4 items-start">
                <div className="relative w-[19px] h-[24px] me-2 mt-1 shrink-0">
                  <Image
                    src="/images/list-icon.svg"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-[20px]">{data}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:w-1/2 lg:pt-6">
          <h3 className="lg:text-[30px] font-bold lg:pb-4 uppercase">
            Our process includes
          </h3>

          <ul className="list-none p-0 m-0">
            {ProcessInclude.map((data, index) => (
              <li key={index} className="flex lg:pb-4 items-start">
                <div className="relative w-[19px] h-[24px] me-2 mt-1 shrink-0">
                  <Image
                    src="/images/list-icon.svg"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-[20px]">{data}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full lg:py-16 py-8 px-6">
          <SliderFleetWrap services={FleetWrapServicesData} />
        </div>
      </div>

      <div className="z-0 relative lg:-mt-76 pointer-events-none">
        <Image
          src="/images/fleet-wrap-bottom-lines.svg"
          alt=""
          sizes="100vw"
          width={1500}
          height={670}
          className={`lg:w-full z-10 h-auto`}
        />
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
