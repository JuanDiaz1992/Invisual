import GrowNumber from "../GrowNumber";
import ContactForm from "../ContactForm";
import Image from "next/image";
export default function CtaContactForm() {
  return (
    <section id="cta" className="mt-[100px] lg:mt-[200px] pb-[143px] lg:pb-[96px]  home relative">
      <Image
        src="/images/graphic-design-bars.webp"
        alt="bars"
        sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
        srcSet="/images/graphic-design-bars.webp 768w, /images/graphic-design-bars.webp 1024w"
        width={959}
        height={550}
        className="absolute top-[150px] lg:top-[-80px] max-w-[959px] w-[60%] lg:w-full z-1"
      />
      <div className="lg:container mx-auto lg:max-w-[1200px] px-[24px] xl:px-0 flex flex-wrap justify-between lg:justify-center items-center lg:items-start z-2 relative ">
        <div className="w-full lg:w-8/12 pt-[52px] lg:pt-[38px] relative lg:pb-[58px] min-h-[200px] lg:min-h-fit">
          <h2 className="text-[40px] md:text-[80px] md:leading-[85px]  font-black italic leading-[45px] lg:pb-12 ps-[28px] lg:ps-0 pt-[2px] ">
            <span className="text-stroke ps-0 lg:ps-[55px]">
              READY TO <br></br>
            </span>{" "}
            <span className="ps-0 lg:ps-[92px]">STAND OUT?</span>
            <div className="absolute top-0 left-0 max-w-[315px] w-full h-[200px] lg:h-[306px] border-l-1 border-l-white border-t-1 border-t-white transform rotate-[-10.894deg]"></div>
          </h2>
        </div>

        <div className="w-5/12 md:w-6/12 lg:w-5/12 flex flex-wrap lg:ms-[-120px] justify-center lg:mt-[-152px] order-1 mt-0">
          <div className="w-full justify-end md:justify-center flex lg:pe-16 me-[54px] md:me-0">
            <div className="border border-[#ffffff] md:-rotate-15 w-fit">
              <div className="md:rotate-15 flex lg:px-4 px-[6px] py-[20px] lg:py-14">
                <GrowNumber
                  endValue={10}
                  duration={2000}
                  classname={
                    "text-[40px] md:text-[80px] font-bold text-effect lg:leading-[80px] lg:pe-2"
                  }
                />
                <p className="text-[7.1px] md:text-[14px]">
                  <span className="text-[40px] font-bold text-effect block leading-[30px] ">
                    +
                  </span>
                  <span className="block">Years</span> of experience
                </p>
              </div>
            </div>
          </div>

          <div className="w-full justify-end md:justify-center flex lg:ps-58 md:me-[0px] mt-[-15px] lg:mt-[-58px]">
            <div className="border border-[#ffffff] md:-rotate-15">
              <div className="md:rotate-15 flex lg:ps-2 lg:pe-8 px-[6px] py-[25px] lg:py-14">
                <GrowNumber
                  endValue={80}
                  duration={2000}
                  classname={
                    "text-[40px] md:text-[80px] font-bold text-effect lg:leading-[80px] lg:pe-2"
                  }
                />
                <p className="text-[7.1px] md:text-[14px]">
                  <span className="text-[40px] font-bold text-effect block leading-[30px] ">
                    +
                  </span>
                  <span className="block">Satisfied</span> Clients
                </p>
              </div>
            </div>
          </div>

          <div className="w-full justify-end md:justify-center flex">
            <div className="border border-[#ffffff] md:-rotate-15 mt-[-21px] lg:mt-0 me-[54px] md:me-0 ">
              <div className="md:rotate-15 flex lg:px-2 px-[6px] py-[18px] lg:py-12">
                <GrowNumber
                  endValue={100}
                  duration={2000}
                  classname={
                    "text-[38px] md:text-[80px] font-bold text-effect lg:leading-[80px] lg:pe-2"
                  }
                />
                <p className="text-[7.1px] md:text-[14px]">
                  <span className="text-[40px] font-bold text-effect block leading-[30px] ">
                    +
                  </span>
                  <span className="block">Projects</span>Completed
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-6/12 md:mt-[-85px] lg:px-16 lg:pb-24 order-1 lx:order-3 mt-[45px] ">
          <ContactForm />
        </div>

        <div className="max-w-[220px] md:max-w-[300px] lg:max-w-fit w-6/12 lg:w-6/12 lg:ps-8 lg:pt-5 lg:order-2 mt-[44px] lg:mt-[24px] ">
          <p className="font-bold text-[20px] leading-[25px] mb-[5px]">
            Turn your vehicles into 24/7 mobile advertising.
          </p>
          <p className="">
            Grab attention, build trust, and grow your brand with bold, custom
            graphics. Reach out today and make sure your business gets noticed!
          </p>
        </div>
      </div>
    </section>
  );
}
