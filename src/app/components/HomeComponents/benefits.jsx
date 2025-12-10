import BenefitsClient from '../benefitsClient';
import { BenefitsImages } from "../../data";

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
    <section id="benefits" className="min-h-screen text-white home xl:mt-[-120px] pb-[148px] xl:pb-0">
      <div className="container mx-auto xl:max-w-[1200px] px-[24px] xl:px-0 xl:pb-64">
        <h2 className="text-[38px] leading-[45px] xl:text-[100px] font-black italic xl:pb-20 xl:pt-8 xl:leading-[110px] xl:max-w-[60rem] mb-[36px] xl:mb-0">
          <span className="text-stroke block">BENEFITS OF</span> COMMERCIAL
          VEHICLE WRAPS <span className="text-stroke block text-[40px] xl:text-[100px]">SERVICES</span>
        </h2>
        <p className="text-[14px] xl:w-[39rem] xl:pb-12 mb-[30px] xl:mb-0">
          Vehicle wraps don't just look great, they work around the clock to
          promote your business. With bold, custom-designed graphics, your
          vehicles become mobile billboards that grab attention wherever they go.
          <br /><br />
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