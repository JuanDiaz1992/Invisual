import { TypeImagesLast } from "../../data";
import CarTypeCard from "../TypeOfCarsCard";

export default function VehiclesThatCanBeWrappe() {
  return (
    <section id="types2" className="home">
      <div className="container mx-auto lg:max-w-[1200px] lg:pt-40 flex flex-wrap">
        <h2 className="lg:text-[110px] font-black italic leading-[110px] lg:pb-8 text-end lg:ps-[35%] w-full">
          <span className="text-stroke block">VEHICLES THAT CAN</span>{" "}
          <span className="">BE WRAPPED</span>
        </h2>

        <ul className="grid lg:grid-cols-2 gap-y-12 w-full list-none p-0 m-0">
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