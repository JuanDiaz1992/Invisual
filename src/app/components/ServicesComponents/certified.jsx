import Image from "next/image";

export default function Certified() {
  return (
    <section>
      <div className="container mx-auto lg:max-w-[1300px] relative flex">
        <div className="lg:w-5/12 content-center lg:pt-16">
          <h2 className="font-bold lg:text-[40px] uppercase">
            Certified Technicians
          </h2>

          <p className="">
            At InVisual Signs, expertise matters, and our team of Certified
            Technicians brings unparalleled skill and knowledge to every
            project. Holding certifications with 3M and Avery Dennison, our
            technicians are equipped to handle even the most complex
            installations and designs.
            <br />
            These specific certifications demonstrate a commitment to ongoing
            education and adherence to the utmost industry standards, employing
            top-of-the-line equipment and products from renowned brands such as
            Roland, 3M, and Avery Dennison.
          </p>

          <div className="flex flex-wrap gap-x-6 lg:pt-16 items-center">
            <h3 className="lg:max-w-[18rem] font-bold text-[28px] italic leading-[28px]">
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
