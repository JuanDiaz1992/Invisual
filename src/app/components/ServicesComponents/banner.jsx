import BannerServices from "../BannerServices";
import BannerServicesMovil from "../BannerServicesMovil";
import Container from "../Container";
import { BannerSlidesData, sectionsServices } from "../../data";
import ButtonLaid from "../button";
import Link from "next/link";

export default function Banner() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Vehicle Wrapping Visualizer Options",
    description:
      "Visualize how your vehicle looks with our Full Wrap and Spot Graphic services.",
    itemListElement: BannerSlidesData.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: `${item.title} Wrapping`,
        image: `https://invisualsign.com${item.imagebase}`,
        description: `Professional wrapping services for ${item.title}, including Full Wrap and Spot Graphics.`,
        offers: {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Full Wrap & Spot Graphics",
          },
        },
      },
    })),
  };
  return (
    <section className="mt-[48px] lg:mt-0 relative">
      <div className="absolute w-[120%] h-[65px] rotate-[165deg] overflow-hidden md:top-[20px] left-[-30px] md:left-[-130px] shadow-[5px_10px_10px_0px_rgba(0,0,0,1)] z-10">
        <div className={`w-full h-[100px] degradado float-up-down`} />
      </div>
      <Container className={"z-20"}>
        <h1 className="text-[47px] leading-[50px] md:text-[80px] md:leading-[85px] lg:text-[100px] font-black italic lg:pt-8 lg:leading-[110px] lg:pb-[15px] text-center relative z-50">
          {" "}
          FULL <span className="text-stroke ">WRAP</span>{" "}
        </h1>
        <h2 className="text-[25px] capitalize lg:pb-[49px] font-bold text-center">
          Unleash <span className="text-[#D92630]">your</span> creativity.
        </h2>
        <div className="flex md:hidden justify-center">
          <p className="text-center mt-[14px] mb-[23px] text-[14px] leading-[22px] max-w-[284px]">
            Watch your vehicle go from bare to bold with our full wrap
            transformation tool that brings your brand to life.
          </p>
        </div>

        <div className="hidden md:block relative z-20">
          <BannerServices slidesData={BannerSlidesData} />
        </div>
        <div className="block md:hidden relative z-20">
          <BannerServicesMovil slidesData={BannerSlidesData} />
        </div>
      </Container>
      <div className="absolute bottom-[400px] lg:bottom-[80px] right-0 max-h-[65px] h-[65px] rotate-[165deg] overflow-hidden translate-x-[150px] translate-y-[70px] shadow-[-20px_-15px_20px_-12px_rgba(0,0,0,0.5)] z-1">
        <div
          className={`w-[1300px] h-[100px] degradado-inverse `}
        />
      </div>
      {/******* Links de Movil */}
      <nav
        className="w-full flex lg:hidden flex-col px-[24px] items-center z-10 relative"
        aria-label="Mobile service navigation"
      >
        <div className="w-full flex justify-end pt-[20px]">
          <ButtonLaid link="#quote" buttonText="Get a quote now!" width={150} />
        </div>
        <div className="w-full flex flex-wrap gap-[19px] items-center justify-center mt-[24px] max-w-[350px]">
          <Link
            href={"#" + sectionsServices[0].id}
            className="max-w-[76px] text-[15px] text-center"
          >
            {sectionsServices[0].label}
          </Link>
          <div className="h-[40px] w-[3px] bg-[#414040]"></div>

          <Link
            href={"#" + sectionsServices[1].id}
            className="max-w-[85px] text-[15px] text-center"
          >
            {sectionsServices[1].label}
          </Link>
          <div className="h-[40px] w-[3px] bg-[#414040]"></div>

          <Link
            href={"#" + sectionsServices[2].id}
            className="max-w-[94px] text-[15px] text-center"
          >
            {sectionsServices[2].label}
          </Link>

          <Link
            href={"#" + sectionsServices[3].id}
            className="max-w-[68px] text-[15px] text-center"
          >
            {sectionsServices[3].label}
          </Link>
          <div className="h-[40px] w-[3px] bg-[#414040]"></div>

          <Link
            href={"#" + sectionsServices[4].id}
            className="max-w-[108px] text-[15px] text-center"
          >
            {sectionsServices[4].label}
          </Link>
          <div className="h-[40px] w-[3px] bg-[#414040]"></div>

          <Link
            href={"#" + sectionsServices[5].id}
            className="max-w-[87px] text-[15px] text-center"
          >
            {sectionsServices[5].label}
          </Link>
        </div>
      </nav>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
