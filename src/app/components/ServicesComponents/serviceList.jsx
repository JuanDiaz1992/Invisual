import Image from "next/image";
import Link from "next/link";
import Container from "../Container";

const LearnMore = ({ href = "/", title }) => (
  <Link
    href={href}
    className="font-semibold text-[20px] self-start leading-[20px]
        underline underline-offset-3 decoration-white/60
        transition-colors duration-300
        pb-4 mt-5
        hover:text-[#D92630] hover:decoration-[#D92630]"
    aria-label={`Learn more about ${title}`}
  >
    Learn more <span className="sr-only">about {title}</span>
  </Link>
);

const Title = ({ children, className }) => (
  <h3 className={`uppercase text-[20px] leading-[25px] md:text-[40px] md:leading-[45px] font-black italic ${className}`}>
    {children}
  </h3>
);

const Description = ({ children, className }) => (
  <p className={`text-[16px] leading-[25px] ${className}`}>{children}</p>
);

const Card = ({ className, children }) => {
  return (
    <article
      className={`h-full min-h-[410px] md:min-h-[306px] p-6 relative overflow-hidden border border-black/30 text-white shadow-[-1px_0px_7px_2px_rgba(0,0,0,0.63)] ${className}`}
    >
      <Image
        src="/images/bg-service-card.webp"
        alt=""
        fill
        className="object-cover -z-10"
        quality={80}
      />

      <div className="z-10 w-full h-full flex flex-col">{children}</div>

      <div
        className="absolute bottom-0 left-0 w-full h-1/2 pointer-events-none z-0"
        style={{
          background: "linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))",
        }}
      />
    </article>
  );
};

const ServicesList = () => {
  return (
    <ul className="flex flex-col sm:flex-row sm:grid md:grid-cols-2 lg:grid-cols-3 gap-6 list-none p-0">
      <li className="sm:col-span-2 lg:row-span-2 lg:col-span-1 mt-0 md:mt-[61px]">
        <Card className="items-center h-full pt-[60px]">
          <div className="space-y-2 max-lg:flex-1 relative z-20 min-h-[360px] md:min-h-fit">
            <Title>Commercial wraps</Title>
            <Description>
              From food trucks to service vans, your vehicle is a powerful
              branding tool. InVisual Signs designs custom commercial wraps that
              grab attention and make your business unforgettable wherever it
              goes.
            </Description>
          </div>
          <div className="mt-4 relative z-20">
            <LearnMore
              href="/services/commercial-wraps"
              title="Commercial Wraps"
            />
          </div>
          <div className="absolute inset-0 z-10 w-full h-full bg-[linear-gradient(200deg,rgba(12,12,12,0.20)_61.72%,#0C0C0C_90.27%)] mix-blend-multiply"></div>

          <div className="absolute -bottom-40 lg:-bottom-[110px] -left-[80px] w-full min-w-[500px] max-w-[800px] h-[450px] z-1">
            <Image
              alt="Truck commercial wrap branding example"
              src="/images/truck-orange.webp"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </Card>
      </li>

      <li className="sm:col-span-2">
        <Card className="flex justify-end">
          <div className="sm:max-w-[50%] flex flex-col relative z-20 ml-auto">
            <div className="flex-1 space-y-1 min-h-[360px] md:min-h-fit">
              <Title className="text-[20px]">Fleet wraps</Title>
              <Description>
                Fleet wraps bring <strong>unity</strong> to your vehicles and
                amplify brand visibility. InVisual Signs ensures every wrap
                aligns with your identity,{" "}
                <strong>building recognition through numbers</strong>.
              </Description>
            </div>
            <LearnMore href="/services/fleet-wraps" title="Fleet Wraps" />
          </div>
          <div className="absolute inset-0 z-10 w-full h-full bg-[linear-gradient(200deg,rgba(12,12,12,0.20)_61.72%,#0C0C0C_90.27%)] mix-blend-multiply"></div>
          <div className="absolute bottom-0 -left-[25px] w-full h-full max-w-[450px] z-1">
            <Image
              alt="Red truck fleet wrap example"
              src="/images/truck-red.webp"
              fill
              className="object-contain object-left-bottom"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </Card>
      </li>

      <li>
        <Card>
          <div className="flex-1 space-y-1 relative z-20 min-h-[360px] md:min-h-fit">
            <Title className="!text-[25px]">Color change</Title>
            <Description className="sm:max-w-[80%]">
              Transform your vehicle with a complete color change in stunning
              finishes like gloss, matte, satin, or metallic.
            </Description>
          </div>
          <div className="relative z-20 mt-4">
            <LearnMore
              href="/services/color-change"
              title="Color Change Services"
            />
          </div>
          <div className="absolute inset-0 z-10 w-full h-full bg-[linear-gradient(200deg,rgba(12,12,12,0.20)_61.72%,#0C0C0C_90.27%)] mix-blend-multiply"></div>
          <div className="absolute top-0 -right-20 w-full max-w-[500px] h-full z-1">
            <Image
              alt="Gray car color change wrap"
              src="/images/gray-car.webp"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </Card>
      </li>

      <li>
        <Card>
          <div className="flex-1 space-y-1 relative z-20 min-h-[360px] md:min-h-fit">
            <Title className="!text-[25px]">Specialty Vehicles</Title>
            <Description className="sm:max-w-[80%]">
              Not all vehicles are created equal and neither are our wraps.
              Whether it’s a motorcycle, boat, or ATV, specialty wraps deliver
              custom looks.
            </Description>
          </div>
          <div className="relative z-20 mt-4">
            <LearnMore
              href="/services/specialty-wraps"
              title="Specialty Vehicle Wraps"
            />
          </div>
          <div className="absolute inset-0 z-10 w-full h-full bg-[linear-gradient(200deg,rgba(12,12,12,0.20)_61.72%,#0C0C0C_90.27%)] mix-blend-multiply"></div>
          <div className="absolute bottom-0 -right-[40px] w-full h-[65%] z-1">
            <Image
              alt="Specialty vehicle wrap example"
              src="/images/truck-t.webp"
              fill
              className="object-contain object-bottom-right"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </Card>
      </li>

      <li className="col-span-2">
        <Card className="flex justify-end">
          <div className="sm:max-w-[50%] flex flex-col relative z-20 ml-auto min-h-[380px] md:min-h-fit">
            <div className="flex-1 space-y-1">
              <Title className="!text-[30px] !leading-[35px] max-w-[330px]">
                Vinyl Installation & Removal
              </Title>
              <Description>
                Upgrade or reset with confidence. Our vinyl installation
                delivers crisp, clean results on any surface.
              </Description>
            </div>
            <LearnMore
              href="/services/vinyl-installation"
              title="Vinyl Installation and Removal"
            />
          </div>
          <div className="absolute inset-0 z-10 w-full h-full bg-[linear-gradient(200deg,rgba(12,12,12,0.20)_61.72%,#0C0C0C_90.27%)] mix-blend-multiply"></div>
          <div className="absolute bottom-0 left-0 w-full md:w-[450px] h-full z-1">
            <Image
              alt="Professional vinyl installation service"
              src="/images/workingperson.webp"
              fill
              className="object-contain md:object-cover object-bottom-left"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </Card>
      </li>
    </ul>
  );
};

export default function AdditionalServicesSection() {
  return (
    <section className="overflow-x-clip relative lg:mb-[150px]]">
      <div
        className="w-[120%] lg:w-[200%] absolute h-[78%] rotate-17 origin-top-left overflow-hidden z-0"
        style={{ boxShadow: "0 0 21.45px 0px #000000B2" }}
      />

      <div className="h-[320px] overflow-hidden rotate-17 origin-top-left flex flex-col gap-5 translate-y-14 relative z-10">
        <div className="h-[2px] w-full max-w-[600px] rounded bg-gradient-to-r from-white to-transparent" />
        <div
          style={{
            background:
              "radial-gradient(60% 60% at 30% 90%,#D92630 10%, #D92630 50%, #1D1D1D 100%)",
            backgroundBlendMode: "screen",
          }}
          className="h-7 max-w-[600px]"
        />
      </div>

      <Container className="p-2 relative z-20 mt-[-150px] lg:mt-[-95px]">
        <div className="leading-[40px] transform translate-y-8 max-h-min font-extrabold pb-[48px] md:pb-0">
          <h2 className="uppercase flex flex-col text-[#D92630] text-[34px]">
            Wraps
            <span className="uppercase text-white text-[28px]">
              Additional services
            </span>
          </h2>
        </div>

        <ServicesList />

        <div className="absolute bottom-0 right-0 w-[500px] h-[450px] max-md:hidden -z-20 pointer-events-none">
          <Image
            src="/images/bg-decoration.webp"
            alt=""
            fill
            className="object-contain"
          />
        </div>
      </Container>
    </section>
  );
}
