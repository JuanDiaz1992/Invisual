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
    <section className="relative pt-[133px] lg:pt-0 lg:mt-16 lg:mb-[100px] satisfaction-services">
      <div className="absolute hidden md:block top-0 right-0 min-w-[680px] w-[50%] h-[400px] pointer-events-none -z-10">
        <Image
          src="/images/customer-s-top-lines.webp"
          alt=""
          fill
          className="object-contain object-right-top"
          priority={false}
        />
      </div>

      <Container className={"flex flex-wrap !max-w-[1300px] lg:pt-[0]"}>
        <div className="xl:w-8/12">
          <h2 className="text-[40px] leading-[45px] md:text-[80px] md:leading-[85px] lg:text-[90px] font-black md:pb-[24px] lg:pt-8 lg:leading-[90px] relative z-20 tofinowide">
            CUSTOMER{" "}
            <span className="text-stroke lg:text-[100px] block">
              SATISFACTION
            </span>
          </h2>
          <p className="block md:hidden text-[14px] mt-[30px] mb-[27px]">
            We do more than just car wrapping; we focus on understanding our
            clients' needs, creating their branding and ensuring their absolute
            satisfaction. <br/><br/> We invite you to see what some of our clients have to
            say about our service and to learn more about our work.
          </p>
        </div>

        <div className="xl:w-4/12 flex flex-wrap content-end lg:pb-12 z-20 relative mb-[53px] lg:mb-0">
          <p className="text-[22px] w-full mb-2 font-bold">Follow Us</p>
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
