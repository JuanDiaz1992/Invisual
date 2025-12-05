import ButtonLaid from "../button";
export default function Results() {
  return (
    <section className="results-services relative z-40 py-10 lg:px-0 lg:mt-[-176px] mt-[-65px]">
      <div className="container mx-auto lg:max-w-[1300px] lg:py-40">
        <h2 className="lg:text-[70px] font-black lg:pb-6 lg:leading-[75px] relative z-50 tofinowide uppercase lg:pt-6 lg:w-[37rem]">
          Want to see
          <span className="text-stroke lg:block lg:text-[60px] lg:leading-[70px]">
            the results for yourself?
          </span>{" "}
        </h2>
        <p className="lg:w-[30rem]">
          Check out our gallery or call now to get started on your custom wrap.
          Your brand deserves to stand out.
        </p>

        <div className="flex gap-2 lg:pt-12">
          <ButtonLaid
            width={196}
            buttonText={"Call Bow"}
            link="tel:+12406641629"
            buttonColor={"#fff"}
            textColor={"#D92630"}
          />
          <ButtonLaid width={196} buttonText={"Gallery"} link="/gallery" />
        </div>
      </div>
    </section>
  );
}
