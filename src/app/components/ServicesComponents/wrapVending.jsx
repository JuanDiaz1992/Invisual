import Image from "next/image";

export default function WrapVending() {
  return (
    <section className="lg:py-32 relative">
      <div className="bg-[#1A1A1A] shadow-[0_0_22px_0_rgba(0,0,0,0.70)] lg:py-16">
        <div className="container mx-auto lg:max-w-[1300px] flex flex-wrap">
          <div className="lg:w-7/12">
            <h2 className="lg:text-[75px] font-black lg:pb-6 lg:leading-[80px] relative z-50 tofinowide uppercase">
              WRAP <span className="text-stroke lg:block">YOUR VENDING</span>{" "}
            </h2>

            <div className="flex gap-6">
              <p>
                Our vending machine wraps are fully customizable, allowing you
                to display logos, product visuals, promotions, or bold designs
                that match your business identity. The wrap also acts as a
                protective layer, keeping the surface clean and scratch
                resistant.
                <br />
                <br />
                Ideal for business owners, property managers, or product
                distributors, vending machine wraps are a cost-effective way to
                stand out and create a professional, cohesive image in any
                location.
              </p>

              <div className="shrink-0">
                <Image
                  src="/images/red-arrows.svg"
                  alt=""
                  width={188}
                  height={108}
                  className="lg:w-[188px] z-10 h-auto"
                />
              </div>
            </div>
          </div>

          <div className="lg:w-5/12 relative">
            <Image
              src="/images/wrap-vending.webp"
              alt="Custom branded vending machine wrap design example"
              sizes="(min-width: 1024px) 742px, 100vw"
              width={742}
              height={791}
              className="lg:-my-44 lg:max-w-[742px] z-10 lg:absolute -right-20 top-0 w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
