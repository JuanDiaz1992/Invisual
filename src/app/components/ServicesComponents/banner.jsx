import BannerServices from "../BannerServices";
import BannerServicesMovil from "../BannerServicesMovil";
import Container from "../Container";
import { BannerSlidesData } from "../../data";


export default function Banner() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Vehicle Wrapping Visualizer Options",
    "description": "Visualize how your vehicle looks with our Full Wrap and Spot Graphic services.",
    "itemListElement": BannerSlidesData.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Service",
        "name": `${item.title} Wrapping`,
        "image": `https://invisualsign.com${item.imagebase}`,
        "description": `Professional wrapping services for ${item.title}, including Full Wrap and Spot Graphics.`,
        "offers": {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Full Wrap & Spot Graphics"
          }
        }
      }
    }))
  };
  return (
    <section className="mt-[48px] lg:mt-0">
      <div className="absolute w-[120%] h-[65px] rotate-[165deg] overflow-hidden md:top-[180px] left-[-30px] md:left-[-130px] shadow-[5px_10px_10px_0px_rgba(0,0,0,1)] z-10">
        <div
          className={`w-full h-[100px] degradado float-up-down`}
        />
      </div>
      <Container className={"z-50"}>
        <h1 className="text-[47px] leading-[50px] md:text-[80px] md:leading-[85px] lg:text-[100px] font-black italic lg:pt-8 lg:leading-[110px] lg:pb-[15px] text-center relative z-50">
          {" "}
          FULL <span className="text-stroke ">WRAP</span>{" "}
        </h1>
        <h2 className="text-[25px] capitalize lg:pb-20 font-bold text-center">
          Unleash <span className="text-[#D92630]">your</span> creativity.
        </h2>
        <div className="flex md:hidden justify-center">
          <p className="text-center mt-[14px] mb-[23px] text-[14px] leading-[22px] max-w-[284px]">Watch your vehicle go from bare to bold with our full wrap transformation tool that brings your brand to life.</p>
        </div>

        <div className="hidden md:block">
          <BannerServices slidesData={BannerSlidesData} />
        </div>
        <div className="block md:hidden">
          <BannerServicesMovil slidesData={BannerSlidesData} />
        </div>

      </Container>
      <div className="absolute lg:bottom-[290px] right-0 max-h-[65px] h-[65px] rotate-[165deg] overflow-hidden translate-x-[150px] translate-y-[70px] shadow-[-20px_-15px_20px_-12px_rgba(0,0,0,0.5)] z-10">
        <div className={`lg:w-[1300px] w-full h-[100px] degradado-inverse `} />
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
