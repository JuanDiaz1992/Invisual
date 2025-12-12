import GrowNumber from "../GrowNumber";
import ContactForm from "../ContactForm";
export default function CtaContactForm() {
  return (
    <section id="cta" className="mt-[70px]  home">
      <div className="lg:container mx-auto lg:max-w-[1200px] px-[24px] xl:px-0 flex flex-wrap items-start">
        <div className="lg:w-8/12 lg:pt-[38px] relative lg:pb-[58px]">
          <h2 className="text-[40px] lg:text-[100px] font-black italic leading-[45px] lg:leading-[110px] lg:pb-12 ps-[28px] lg:ps-0 pt-[2px] ">
            <span className="text-stroke ps-0 lg:ps-[55px]">
              READY TO <br></br>
            </span>{" "}
            <span className="ps-0 lg:ps-[92px]">STAND OUT?</span>
            <div className="absolute top-0 left-0 max-w-[315px] w-full h-[200px] lg:h-[306px] border-l-1 border-l-white border-t-1 border-t-white transform rotate-[-10.894deg]"></div>
          </h2>
        </div>


        <div className="lg:w-6/12 lg:mt-[-50px] lg:px-16 lg:pb-24">
          <ContactForm />
        </div>
                <div className="lg:w-5/12 flex flex-wrap lg:ms-[-120px] justify-center">
          <div className="w-full justify-center flex lg:pe-16">
            <div className="border border-[#ffffff] -rotate-15 w-fit">
              <div className="rotate-15 flex lg:px-4 lg:py-14">
                <GrowNumber
                  endValue={10}
                  duration={2000}
                  classname={
                    "text-[80px] font-bold text-effect leading-[80px] lg:pe-2"
                  }
                />
                <p>
                  <span className="text-[40px] font-bold text-effect block leading-[30px] ">
                    +
                  </span>
                  <span className="block">Years</span> of experience
                </p>
              </div>
            </div>
          </div>

          <div className="w-full justify-center flex lg:ps-58 lg:mt-[-60px]">
            <div className="border border-[#ffffff] -rotate-15">
              <div className="rotate-15 flex lg:ps-2 lg:pe-8 lg:py-14">
                <GrowNumber
                  endValue={80}
                  duration={2000}
                  classname={
                    "text-[80px] font-bold text-effect leading-[80px] lg:pe-2"
                  }
                />
                <p>
                  <span className="text-[40px] font-bold text-effect block leading-[30px] ">
                    +
                  </span>
                  <span className="block">Satisfied</span> Clients
                </p>
              </div>
            </div>
          </div>

          <div className="w-full justify-center flex">
            <div className="border border-[#ffffff] -rotate-15">
              <div className="rotate-15 flex lg:px-2 lg:py-16">
                <GrowNumber
                  endValue={100}
                  duration={2000}
                  classname={
                    "text-[80px] font-bold text-effect leading-[80px] lg:pe-2"
                  }
                />
                <p>
                  <span className="text-[40px] font-bold text-effect block leading-[30px] ">
                    +
                  </span>
                  <span className="block">Projects</span>Completed
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-6/12 lg:ps-8 lg:pt-20">
          <p className="font-bold text-[20px]">
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
