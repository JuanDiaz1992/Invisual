import { TypesOfWrapsComplete } from "../../data";
import TypesOfVehicleWrapCarouseHome from "../typesOfVehicleWrapCarouseHome";
import ButtonLaid from "../button";

export default function TypesOfVehicleWrap() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: TypesOfWrapsComplete.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.title,
        description: service.desc,
        image: `https://invisualsign.com${service.src}`,
      },
    })),
  };

  return (
    <section id="types" className="home relative pt-[45px]">
      <div className="lg:container mx-auto lg:max-w-[1200px] flex flex-wrap justify-center md:justify-between">
        <div className="px-[24px] xl:px-0 w-full lg:w-[47%] lg:pt-40">
          <h2 className="text-center md:text-start text-[40px] leading-[45px] md:text-[80px] md:leading-[85px] lg:text-[110px] font-black italic lg:leading-[110px] md:pb-[38px] lg:pb-8">
            <span className="text-stroke block">TYPES OF</span>{" "}
            <span className="">VEHICLE WRAP</span>
          </h2>
          <div className="hidden md:block">
            <ButtonLaid
              width={145}
              buttonText={"240-664-1629"}
              link="tel:+12406641629"
            />
          </div>
        </div>

        <div className="w-full lg:w-[53%] flex flex-row justify-center items-center lg:pt-20 mr-[-20px]">
          <TypesOfVehicleWrapCarouseHome data={TypesOfWrapsComplete} />
        </div>
      </div>
      <div className="w-full flex md:hidden justify-center mt-[25px]">
        <ButtonLaid
          width={145}
          buttonText={"240-664-1629"}
          link="tel:+12406641629"
        />
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
