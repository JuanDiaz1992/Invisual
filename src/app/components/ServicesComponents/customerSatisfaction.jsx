import Image from "next/image";
import Container from "../Container";
import Reviews from "../reviews";
import ButtonLaid from "../button";
import { reviews } from "../../data";

export default function CustomerSatisfaction() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "InVisual Signs Vehicle Wraps",
    image: "https://invisualsign.com/images/og-image-home.webp",
    review: reviews.map((review) => ({
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "Customer",
      },
      reviewBody: review.text.replace(/"/g, ""),
    })),
  };

  return (
    <section className="relative lg:mt-16 lg:mb-[100px]">
      <div className="absolute top-0 right-0 min-w-[680px] w-[50%] h-[400px] pointer-events-none -z-10">
        <Image
          src="/images/customer-s-top-lines.webp"
          alt=""
          fill
          className="object-contain object-right-top"
          priority={false}
        />
      </div>

      <Container className={"flex flex-wrap !max-w-[1300px] lg:pt-64"}>
        <div className="lg:w-8/12">
          <h2 className="lg:text-[90px] font-black lg:pb-12 lg:pt-8 leading-[90px] relative z-20 tofinowide">
            CUSTOMER{" "}
            <span className="text-stroke lg:text-[100px] block">
              SATISFACTION
            </span>
          </h2>
        </div>

        <div className="lg:w-4/12 flex flex-wrap content-end lg:pb-12 z-20 relative">
          <p className="w-full mb-2 font-bold">Follow Us</p>
          <div className="flex flex-wrap lg:pt-4 lg:gap-x-2 gap-y-2">
            <ButtonLaid
              buttonText={"IN VISUAL SIGNS"}
              width={164}
              type="youtube"
              link="https://youtube.com/..."
            />
            <ButtonLaid
              buttonText={"@invisualsigns"}
              width={164}
              type="instagram"
              link="https://instagram.com/invisualsigns"
            />
          </div>
        </div>

        <Reviews reviews={reviews} />
      </Container>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
