import BenefitsClient from "../benefitsClient";
import { BenefitsImages } from "../../data";
import Image from "next/image";

export default function Benefits() {
  const benefits = [
    "Mobile Advertising",
    "Branding and Identity",
    "Protection for Vehicle's Paint",
    "Customizable Designs",
    "Cost-Effective Marketing",
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    associatedMedia: BenefitsImages.map((image, index) => ({
      "@type": "ImageObject",
      position: index + 1,
      name: image.alt,
      description: image.alt,
      contentUrl: `https://invisualsign.com${image.src}`,
      thumbnailUrl: `https://invisualsign.com${image.src}`,
    })),
  };

  return (
    <section
      id="benefits"
      className="min-h-screen text-white home lg:mt-[-120px] pb-[145px] lg:pb-0 relative "
    >
      <Image
        src="/images/home-benefits-lines.webp"
        alt="bars"
        sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
        srcSet="/images/home-benefits-lines.webp 768w, /images/home-benefits-lines.webp 1024w"
        width={385}
        height={332}
        className="absolute bottom-0 lg:bottom-0 max-w-[400px] w-[60%] lg:w-full z-1"
      />
      <div className="container mx-auto lg:max-w-[1200px] px-[24px] xl:px-0 lg:pb-64 relative Z-10">
        <h2 className="text-[38px] leading-[45px] md:text-[80px] md:leading-[85px]  lg:text-[100px] font-black italic lg:pb-20 lg:pt-8 lg:leading-[110px] lg:max-w-[60rem] mb-[36px] lg:mb-0">
          <span className="text-stroke block">BENEFITS OF</span> COMMERCIAL
          VEHICLE WRAPS{" "}
          <span className="text-stroke block text-[40px] md:text-[80px] lg:text-[100px]">
            SERVICES
          </span>
        </h2>
        <p className="text-[14px] lg:w-[39rem] lg:pb-12 mb-[30px] lg:mb-0">
          Vehicle wraps don't just look great, they work around the clock to
          promote your business. With bold, custom-designed graphics, your
          vehicles become mobile billboards that grab attention wherever they
          go.
          <br />
          <br />
          Unlike traditional ads, wraps deliver non-stop exposure, even when
          parked. It's one of the most cost-effective ways to boost visibility,
          build trust, and stay top-of-mind.
        </p>

        <BenefitsClient benefits={benefits} benefitsImages={BenefitsImages} />
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
