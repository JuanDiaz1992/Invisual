import BrandingCarousel from "../BrandingCarousel";
import Image from "next/image";
export default function HeroBanner() {
  return (
    <section id="home-hero-banner" className="mb-16">
      {/*******  Red line top */}
      <div className="absolute max-h-[65px] h-[65px] rotate-[165deg] overflow-hidden translate-x-[-100px] translate-y-[70px] shadow-[5px_10px_10px_0px_rgba(0,0,0,1)] z-10">
        <div
          className={`lg:w-[1600px] w-full h-[100px] degradado float-up-down`}
        />
      </div>

      {/*******  Inner secion */}
      <div className="container lg:max-w-[1200px] mx-auto pt-50 pb-8 relative">
        <h1 className="text-[22px] font-bold relative z-20">
          Maryland, Virginia, & D.C
          <span className="italic font-black lg:text-[65px] block uppercase lg:leading-[70px] tofinowide relative">
            Commercial Vehicle{" "}
            <span className="block relative z-20">Wraps Services</span>
          </span>
        </h1>

        <div className="flex gap-2 pt-8 w-[41.5%]">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="43"
              height="71"
              viewBox="0 0 43 71"
              fill="none"
            >
              <g filter="url(#filter0_d_4963_404)">
                <path
                  d="M28.1998 3.45453L38.4617 3.45453L25.3518 64.0001L15.0898 64.0001L28.1998 3.45453Z"
                  fill="#D92630"
                />
              </g>
              <g filter="url(#filter1_d_4963_404)">
                <path
                  d="M18.11 3.00012L23.1637 3.00012L10.0537 63.5457L5 63.5457L18.11 3.00012Z"
                  fill="#D92630"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_4963_404"
                  x="11.0535"
                  y="1.43634"
                  width="31.4448"
                  height="68.6183"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="2.01819" />
                  <feGaussianBlur stdDeviation="2.01819" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_4963_404"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_4963_404"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter1_d_4963_404"
                  x="0.963629"
                  y="0.981936"
                  width="26.2368"
                  height="68.6183"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="2.01819" />
                  <feGaussianBlur stdDeviation="2.01819" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_4963_404"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_4963_404"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
          <p className="text-[14px]">
            Turn your vehicles and fleets into rolling billboards. We deliver
            custom vehicle wraps that drive nonstop brand exposure with expert
            design, premium materials, and trusted professional installation.
          </p>
        </div>

        <div className="flex justify-end relative">
          <Image
            src="/images/invisual-car-banner-home.webp"
            alt="Commercial fleet wrap in Glen Burnie"
            sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
            srcSet="/images/commercial-fleet-wrap.webp 768w, /images/commercial-fleet-wrap.webp 1024w"
            width={860}
            height={343}
            className="z-10 relative lg:w-[860px] lg:min-w-[400px] me-[-130px] mt-[-210px]"
          />
        </div>
      </div>
      <div className="relative z-20">
        <BrandingCarousel />
      </div>
      {/*******  Red line bottom */}
      <div className="absolute lg:bottom-[290px] right-0 max-h-[65px] h-[65px] rotate-[165deg] overflow-hidden translate-x-[150px] translate-y-[70px] shadow-[-20px_-15px_20px_-12px_rgba(0,0,0,0.5)] z-10">
        <div className={`lg:w-[1300px] w-full h-[100px] degradado-inverse `} />
      </div>
    </section>
  );
}
