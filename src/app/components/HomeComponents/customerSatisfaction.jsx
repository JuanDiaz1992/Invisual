import HomeReviews from "../HomeReviews";
import ButtonLaid from "../button";
export default function CustomerSatisfaction() {
  return (
    <section
      id="satisfaction"
      className="min-h-screen text-white satisfaction lg:mt-[-120px]"
    >
      <div className="container mx-auto lg:max-w-[1200px] lg:pt-24 px-[24px] xl:px-0">
        <h2 className="lg:text-[90px] font-black italic lg:pb-8 lg:leading-[95px] ">
          CUSTOMER{" "}
          <span className="text-stroke block lg:text-[110px]">
            SATISFACTION
          </span>
        </h2>
        <div className="w-full flex justify-end">
          <div className="lg:w-4/12 flex flex-wrap content-end lg:pt-[67px]">
            <p className="text-[22px] font-bold relative ml-4">Follow Us</p>
            <div className="flex flex-wrap lg:pt-4 lg:gap-x-2">
              <ButtonLaid
                buttonText={"IN VISUAL SIGNS"}
                width={164}
                type="youtube"
              />
              <ButtonLaid
                buttonText={"@invisualsigns"}
                width={164}
                type="instagram"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="lg:mt-[44px] container mx-auto lg:max-w-[1200px] lg:pb-24">
        <HomeReviews />
      </div>
    </section>
  );
}
