import Image from "next/image";

export default function Certified() {
  return (
    <section>
      <div className="xl:container mx-auto lg:max-w-[1300px] relative flex flex-col lg:flex-row px-[24px] lx:px-0">
        <div className="lg:w-5/12 lg:pt-[154px]">
          <h2 className="text-end md:text-left text-[40px] leading-[45px] md:text-[80px] md:leading-[85px] lg:text-[70px] font-black lg:leading-[80px] relative z-50 tofinowide uppercase mb-[27px]">
            Certified <br></br> <span className="text-stroke lg:text-[90px] uppercase">Technicians</span>
          </h2>

          <p className="text-end md:text-start md:max-w-[476px]">
            At InVisual Signs, expertise matters, and our team of Certified
            Technicians brings unparalleled skill and knowledge to every
            project. Holding certifications with 3M and Avery Dennison, our
            technicians are equipped to handle even the most complex
            installations and designs.
            <br></br><br></br>
            These specific certifications demonstrate a commitment to ongoing
            education and adherence to the utmost industry standards, employing
            top-of-the-line equipment and products from renowned brands such as
            Roland, 3M, and Avery Dennison.
          </p>

          <div className="flex flex-col md:flex-row gap-x-6 pt-[39px] lg:pt-16 items-center mb-[52px] md:bm-0">
            <h3 className="lg:max-w-[211px] font-bold text-[30px] md:text-[24px] text-center md:text-start italic leading-[25px] pb-[6px] md:pb-0">
              CERTIFICATIONS AND TOOLS
            </h3>

            <div className="flex items-center gap-4">
              <Image
                src="/images/avery-dennison-logo-bw.svg"
                alt="Avery Dennison Certified Installer Logo"
                width={150}
                height={53}
                className="object-contain"
              />
              <Image
                src="/images/3M_wordmark.svg"
                alt="3M Certified Installer Logo"
                width={102}
                height={53}
                className="object-contain"
              />
            </div>
          </div>
        </div>

        <div className="lg:w-7/12">
          <Image
            src="/images/certified-technicians-in-carwrap.webp"
            alt="InVisual Signs certified technician applying a complex vehicle wrap"
            sizes="(min-width: 1024px) 910px, 100vw"
            width={910}
            height={894}
            className={`lg:-ms-10 lg:max-w-[910px] lg:w-[910px] w-full object-cover`}
            priority={false}
          />
        </div>
      </div>
    </section>
  );
}
