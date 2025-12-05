import ButtonLaid from "../button";

export default function Cta() {
  return (
    <section className="cta-servicepage h-[586px] lg:mt-[150px] flex items-center relative">
      <div className="container mx-auto lg:max-w-[1300px] flex">
        <div className="lg:w-5/12"></div>

        <div className="lg:w-7/12 text-white">
          <h2 className="lg:text-[55px] font-black lg:pb-6 lg:leading-[60px] relative z-50 tofinowide uppercase lg:ps-20 lg:pt-6">
            Ready to Take Your{" "}
            <span className="text-stroke lg:block lg:text-[65px] lg:leading-[70px]">
              Branding Even Further?
            </span>{" "}
          </h2>

          <div className="justify-end flex">
            <div className="lg:w-[420px] lg:pt-8">
              <p className="mb-6 font-medium">
                You’ve seen what professional vehicle wraps can do. Now explore
                how you can extend that same visual impact across your business.
                From wall graphics to window vinyl, we’ve got you covered.{" "}
              </p>
              <div className="flex gap-2 lg:pt-4 flex-wrap">
                <ButtonLaid
                  width={196}
                  buttonText={"Call Us Now"}
                  link="tel:+12406641629"
                  buttonColor={"#fff"}
                  textColor={"#D92630"}
                />
                <ButtonLaid
                  width={196}
                  buttonText={"See More Services"}
                  link="/services/additional-services"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
