import { TypeImagesLast } from "../../data";
import CarTypeCard from "../TypeOfCarsCard";

export default function VehiclesThatCanBeWrappe() {
  return (
    <section id="types2" className="home pt-[235PX] lg:pt-0 pb-[45px]">
      <div className="lg:container px-[24px] xl:px-0 mx-auto lg:max-w-[1200px] lg:pt-40 flex flex-wrap">
        <h2 className="text-[40px] leading-[45px] md:text-[80px] md:leading-[85px] lg:text-[110px] font-black italic lg:leading-[110px] lg:pb-8 text-end w-full flex flex-col items-end mb-[57px] lg:mb-0">
          <span className="text-stroke block max-w-[287px] md:max-w-[603px]">VEHICLES THAT CAN</span>{" "}
          <span className="">BE WRAPPED</span>
        </h2>

        <ul className="grid md:grid-cols-2 gap-y-[71px] lg:gap-y-12 w-full list-none p-0 m-0 items-start">
          {TypeImagesLast.map((data, index) => {
            return (
              <li key={index} className="flex justify-center">
                <CarTypeCard {...data} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}