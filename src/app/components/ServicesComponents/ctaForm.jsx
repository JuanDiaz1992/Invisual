import ContactForm from "../ContactForm";
export default function CtaForm() {
  return (
    <section className="text-white relative z-10 mt-[70px] lg:mt-0 px-[24px] lx:px-0">
      <div
        style={{
          boxShadow: "-1px 0px 7px 2px rgba(0,0,0,0.63)",
        }}
        className="lg:max-w-[1300px] px-0 w-full mx-auto "
      >
        <div className="bg-[#505050] lg:pt-10 lg:pb-16 lg:px-16 space-y-2 justify-center px-[24px] py-[40px] lg:py-0">
          <h2 className="uppercase font-bold text-[30px] md:text-[40px] leading-[60px] text-center">
            Ready to start?
          </h2>
          <p className="text-[14px] leading-[25px] text-center">
            Share your contact information and one of our representatives will
            contact you soon.
          </p>
          <ContactForm align="V" />
        </div>
      </div>
    </section>
  );
}
