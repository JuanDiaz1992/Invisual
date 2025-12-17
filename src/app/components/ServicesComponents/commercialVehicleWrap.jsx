import CommercialWrapServices from "../CommercialWrapServices";

export default function CommercialVehicleWrap() {
  return (
    <section className="relative lg:mb-[100px] pt-[180px] lg:pt-[201px]">
      <div className="xl:container mx-auto lg:max-w-[1300px] lg:-mt-[100px] px-[24px] lx:px-0">
        <CommercialWrapServices />
        <h2 className="text-center md:text-left text-[40px] leading-[45px] md:text-[80px] md:leading-[85px] lg:text-[90px] font-black lg:pb-6 lg:leading-[100px] relative z-20 tofinowide uppercase lg:mt-[-86px]">
          Commercial <span className="text-stroke lg:block">Vehicle Wraps</span>{" "}
        </h2>

        <p className="lg:max-w-[55rem] mt-[38px] lg:pt-0 relative z-20">
          A professionally wrapped vehicle sends a clear message.{" "}
          <strong>
            You are established, reliable, and serious about your business.
          </strong>{" "}
          It is more than just advertising. It is a visual representation of
          your brand that builds trust with every impression.
          <br />
          Whether parked at a job site or navigating busy streets, a branded
          vehicle becomes a mobile billboard that works around the clock. With a
          custom design tailored to your business, your wrap captures attention,
          reinforces brand recognition, and helps you stay top of mind in your
          community.
        </p>
      </div>
    </section>
  );
}
