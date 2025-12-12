import { FaqsHome } from "../../data";
import SliderHomeWhyChose from "../SliderHomeWhyChose";
import ButtonLaid from "../button";
import { AccordionItem } from "../accordionItem";
export default function WhyChose() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FaqsHome.map((faq) => ({
      "@type": "Question",
      name: faq.title,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.ans,
      },
    })),
  };
  return (
    <section
      id="why"
      className="min-h-screen text-white px-[24px] xl:px-20 home pt-[145px] md:pt-0 mt-[145px] xl:mt-0 pb-[200px] lg:pb-0 "
    >
      <div className="lg:container lg:max-w-[1200px] mx-auto">
        <h2 className="text-[50px] lg:text-[100px] md:text-[80px] md:leading-[85px]  font-black italic lg:pb-20 lg:pt-8 leading-[50px] lg:leading-[110px] text-center">
          <span className="text-stroke block text-[40px] lg:text-[100px] leading-[45px] lg:leading-[110px]">
            WHY CHOOSE
          </span>{" "}
          INVISUAL SINGS?
        </h2>
        <p className="md:text-[20px] mb-[33px] block md:hidden text-center mt-[28px]">
          <span className="font-black tofinowide">Woman-Owned</span> Business{" "}
        </p>
        <div className="w-full flex justify-center lg:justify-start">
          <p className="max-w-[490px] text-center lg:text-left mb-[28px] lg:mb-0 mt-[15px] lg:mt-0 text-[14px] lg:w-[31rem] lg:pb-12">
            At InVisual Signs, we're more than just a wrap provider, we're your
            branding partner. With years of experience in commercial vehicle
            wrapping and custom brand design, we help businesses across
            industries stand out and connect with their audience through
            powerful visual impact.
          </p>
        </div>

        <div className="mb-[20px] lg:pb-4 flex justify-center lg:justify-start">
          <ButtonLaid
            buttonText={"240-664-1629"}
            link={"tel:2406641629"}
            width={150}
          />
        </div>
        <div className="flex flex-wrap">
          <SliderHomeWhyChose />
          <div className="pt-[42px] mb-[64px] flex-wrap justify-center gap-x-[15px] flex md:hidden w-full">
            <span className="block font-bold w-full text-center mb-[24px]">
              Certifications and Tools
            </span>

            <img
              src="/images/avery-dennison-logo.webp"
              alt="Avery dennison logo"
              className="w-6/12 max-w-[165.8px] object-contain"
            />
            <img
              src="/images/treemlog.webp"
              alt="3M logo"
              className="w-6/12 max-w-[120.04px] object-contain"
            />
          </div>
        </div>

        <div className="w-full mt-[25px] md:pb-[260px]">
          <h3 className="text-center tofinowide text-[40px] uppercase pb-[63px] lg:pb-8 ">
            What Sets Us Apart
          </h3>
          <div className="flex lg:flex-nowrap w-full ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" role="list">
              {FaqsHome.map((datos, index) => {
                return (
                  <AccordionItem
                    key={index}
                    {...datos}
                    isFirst={index === 0}
                    id={`faq-${index}`}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
