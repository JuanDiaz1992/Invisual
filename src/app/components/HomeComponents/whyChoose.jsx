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
    <section id="why" className="min-h-screen text-white px-20 home">
      <div className="container lg:max-w-[1200px] mx-auto">
        <h2 className="lg:text-[100px] font-black italic lg:pb-20 lg:pt-8 leading-[110px] text-center">
          <span className="text-stroke block">WHY CHOOSE</span> INVISUAL SINGS?
        </h2>
        <p className="text-[14px] lg:w-[31rem] lg:pb-12">
          At InVisual Signs, we're more than just a wrap provider, we're your
          branding partner. With years of experience in commercial vehicle
          wrapping and custom brand design, we help businesses across industries
          stand out and connect with their audience through powerful visual
          impact.
        </p>
        <div className="pb-4">
          <ButtonLaid
            buttonText={"240-664-1629"}
            link={"tel:2406641629"}
            width={150}
          />
        </div>
        <div className="flex flex-wrap">
          <SliderHomeWhyChose />
        </div>

        <div className="w-full lg:pb-[260px]">
          <h3 className="text-center tofinowide text-[40px] uppercase lg:pb-8">
            What Sets Us Apart
          </h3>
          <div className="flex lg:flex-nowrap w-full">
            <div className="grid grid-cols-2 gap-6" role="list">
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
