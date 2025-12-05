import Image from "next/image";

export default function HowItWorks() {
const steps = [
    {
      id: "1",
      title: "Consultation & Quote",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderi.",
      bgClass: "step-1-bg",
    },
    {
      id: "2",
      title: "Design & Approval",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderi.",
      bgClass: "step-2-bg",
    },
    {
      id: "3",
      title: "Installation & Delivery",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderi.",
      bgClass: "step-3-bg",
    }
  ]

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How Our Vehicle Wrapping Process Works",
    step: steps.map((step) => ({
      "@type": "HowToStep",
      position: step.id,
      name: step.title,
      text: step.description,
    })),
  };

  return (
    <section className="relative lg:mb-[100px]">
      <Image
        src="/images/how-it-works-vw.webp"
        alt=""
        sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
        srcSet="/images/how-it-works-vw.webp 768w, /images/how-it-works-vw.webp 1024w"
        width={1500}
        height={400}
        className={`absolute top-0 right-0 min-w-[680px] -z-10`}
      />

      <div className="lg:max-w-[1300px] mx-auto px-6 lg:px-0">
        <h2 className="lg:text-[90px] font-black lg:pb-12 lg:pt-8 leading-[100px] relative z-50 tofinowide">
          HOW{" "}
          <span className="text-stroke lg:text-[120px] lg:block">IT WORKS</span>{" "}
        </h2>

        <ol className="flex lg:mt-20 list-none p-0 m-0">
          <li className="lg:w-[461px]">
            <div>
              <div className="min-h-[444px] process-bg-modifier step-1-bg content-end relative">
                <div className="absolute bg-[#980000] opacity-80 pointer-events-none h-[65px] bottom-0 w-full"></div>
                <div className="text-black flex">
                  <span
                    className="lg:min-w-[92px] lg:min-h-[83px] text-center text-white content-center lg:text-[70px] leading-[70px] font-black bg-[linear-gradient(346deg,#1A1A1A_13%,#444242_72.49%)] opcity-100 z-10"
                    style={{ transform: "skew(-12deg)" }}
                  >
                    1
                  </span>
                  <h3 className="w-full z-0 lg:-ms-[30px] lg:ps-12 lg:pt-6 content-center text-white lg:text-[25px] font-bold">
                    {steps[0].title}
                  </h3>
                </div>
              </div>
            </div>
            <p className="text-white lg:pt-8 lg:max-w-[395px]">
              {steps[0].description}
            </p>
          </li>

          <li className="lg:w-[461px] lg:-ms-20">
            <p className="text-white lg:pt-32 lg:ps-20 lg:pb-8 lg:max-w-[450px]">
              {steps[1].description}
            </p>
            <div>
              <div className="min-h-[444px] process-bg-modifier step-2-bg content-top relative lg:ps-16">
                <div className="absolute bg-[#980000] opacity-80 pointer-events-none h-[65px] top-0 w-full"></div>
                <div className="text-black flex">
                  <span
                    className="lg:min-w-[92px] lg:min-h-[83px] text-center text-white lg:text-[70px] leading-[70px] font-black bg-[linear-gradient(346deg,#1A1A1A_13%,#444242_72.49%)] opcity-100 z-10"
                    style={{ transform: "skew(-12deg)" }}
                  >
                    2
                  </span>
                  <h3 className="w-full z-0 lg:-ms-[30px] lg:ps-12 lg:pb-4 content-center text-white lg:text-[25px] font-bold">
                    {steps[1].title}
                  </h3>
                </div>
              </div>
            </div>
          </li>

          <li className="lg:w-[461px] lg:ms-4">
            <div>
              <div className="min-h-[444px] process-bg-modifier step-3-bg content-end relative">
                <div className="absolute bg-[#980000] opacity-80 pointer-events-none h-[65px] bottom-0 w-full"></div>
                <div className="text-black flex">
                  <span
                    className="lg:min-w-[92px] lg:min-h-[83px] text-center text-white content-center lg:text-[70px] leading-[70px] font-black bg-[linear-gradient(346deg,#1A1A1A_13%,#444242_72.49%)] opcity-100 z-10"
                    style={{ transform: "skew(-12deg)" }}
                  >
                    3
                  </span>
                  <h3 className="w-full z-0 lg:-ms-[30px] lg:ps-[35px] lg:pt-6 content-center text-white lg:text-[25px] font-bold">
                    {steps[2].title}
                  </h3>
                </div>
              </div>
            </div>
            <p className="text-white lg:pt-8 lg:max-w-[395px]">
              {steps[2].description}
            </p>
          </li>
        </ol>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
