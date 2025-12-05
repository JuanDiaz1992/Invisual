import BannerServices from "../BannerServices";
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
    <section>
      <div className="absolute max-h-[65px] h-[65px] rotate-[165deg] overflow-hidden translate-x-[-100px] translate-y-[70px] shadow-[5px_10px_10px_0px_rgba(0,0,0,1)] z-10">
        <div
          className={`lg:w-[1600px] w-full h-[100px] degradado float-up-down`}
        />
      </div>
      <Container>
        <h1 className="lg:text-[100px] font-black italic lg:pt-8 leading-[110px] lg:pb-[15px] text-center relative z-50">
          {" "}
          FULL <span className="text-stroke ">WRAP</span>{" "}
        </h1>
        <h2 className="text-[25px] capitalize lg:pb-20 font-bold text-center">
          Unleash <span className="text-[#D92630]">your</span> creativity.
        </h2>
        <BannerServices slidesData={BannerSlidesData} />
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
