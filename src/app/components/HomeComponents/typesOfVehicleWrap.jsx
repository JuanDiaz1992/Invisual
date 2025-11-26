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
    <section id="types" className="home">
      <div className="container mx-auto lg:max-w-[1200px] flex flex-wrap justify-between">
        <div className="lg:w-[47%] lg:pt-40">
          <h2 className="lg:text-[110px] font-black italic leading-[110px] lg:pb-8">
            <span className="text-stroke block">TYPES OF</span>{" "}
            <span className="">VEHICLE WRAP</span>
          </h2>
          <ButtonLaid
            width={145}
            buttonText={"240-664-1629"}
            link="tel:+12406641629"
          />
        </div>

        <div className="lg:w-[53%] flex flex-row justify-center items-center lg:pt-20 mr-[-20px]">
          <TypesOfVehicleWrapCarouseHome
            data={TypesOfWrapsComplete}
          />
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
