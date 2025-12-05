import Image from "next/image";

export default function CommercialVehicleWrap() {
  return (
    <section className="relative lg:mb-[100px]">
      <div className="relative">
        <div className="absolute top-0 left-20 lg:max-w-[550px] w-full lg:h-[520px] -skew-x-25 z-50 bg-gradient-to-tl from-[#ffffff4d] from-25% to-transparent to-65%"></div>
        <Image
          src="/images/commercial-vehicle-wraps.webp"
          alt="Premium commercial vehicle wrap branding design example"
          sizes="100vw"
          width={1500}
          height={717}
          className={`lg:w-full z-10 h-auto object-cover`}
          priority
        />
        <div className="absolute top-80 -right-10 lg:max-w-[550px] w-full lg:h-[520px] -skew-x-25 z-70 bg-gradient-to-t from-[#ffffff4d] to-transparent"></div>
      </div>

      <div className="container mx-auto lg:max-w-[1300px] lg:-mt-[100px]">
        <h2 className="lg:text-[90px] font-black lg:pb-6 lg:pt-8 leading-[100px] relative z-50 tofinowide uppercase">
          Commercial <span className="text-stroke lg:block">Vehicle Wraps</span>{" "}
        </h2>

        <p className="lg:max-w-[55rem]">
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
