import HomeReviews from "../HomeReviews";
import ButtonLaid from "../button";
export default function CustomerSatisfaction() {
  return (
    <section
      id="satisfaction"
      className="min-h-screen text-white satisfaction xl:mt-[-120px] xl:pb-[400px] pt-[150px] mt-[-224px] xl:pt-0"
    >
      <div className="container mx-auto xl:max-w-[1200px] px-[24px] xl:px-0 mt-[40px] xl:mt-0">
        <h2 className="text-[40px] leading-[40px] xl:text-[90px] font-black italic pb-8 xl:leading-[95px] ">
          CUSTOMER{" "}
          <span className="text-stroke block xl:text-[110px]">
            SATISFACTION
          </span>
        </h2>
        <p className="text-sm pointer-events-none select-none block max-w-[312px] md:max-w-[500px] xl:hidden leading-[22px] mb-[27px]">
          We do more than just car wrapping; we focus on understanding our
          clients needs, creating their branding and ensuring their absolute
          satisfaction. <br /> <br /> We invite you to see what some of our
          clients have to say about our service and to learn more about our
          work.
        </p>
        <div className="w-full flex xl:justify-end">
          <div className="flex flex-wrap content-end xl:pt-[67px] max-w-[370px] xl:max-w-full xl:w-4/12 mb-[53px] xl:mb-0">
            <p className="text-[22px] font-bold relative w-full xl:w-fit mb-[17px] xl:mb-0">Follow Us</p>
            <div className="flex flex-wrap gap-y-4 xl:pt-4 xl:gap-x-2">
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
      <div className="xl:mt-[44px] container mx-auto xl:max-w-[1200px] xl:pb-0">
        <HomeReviews />
      </div>
    </section>
  );
}
