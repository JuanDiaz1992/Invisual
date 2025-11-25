import GrowNumber from "../GrowNumber";
import ContactForm from "../ContactForm";
export default function CtaContactForm() {
  return (
    <section id="cta" className="mt-[70px]  home">
      <div className="container mx-auto lg:max-w-[1200px] flex flex-wrap items-start">
        <div className="lg:w-8/12 lg:pt-48">
          <h2 className="lg:text-[110px] font-black italic lg:pt-8 leading-[110px] lg:pb-12">
            <span className="text-stroke">READY TO</span>{" "}
            <span className="lg:ps-6">STAND OUT?</span>
          </h2>
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

        <div className="lg:w-6/12 lg:mt-[-50px] lg:px-16 lg:pb-24">
          <ContactForm />
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
