import BrandingCarousel from "../BrandingCarousel";
import Image from "next/image";
import Link from "next/link";
import { sections } from "../../data";
import ButtonLaid from "../button";

export default function HeroBanner() {
  return (
    <section id="home-hero-banner" className="md:mb-16 relative">
      {/******* Red line top (Decorativo) */}
      <div className="hidden md:flex absolute max-h-[65px] h-[65px] rotate-[165deg] overflow-hidden translate-x-[-100px] translate-y-[70px] shadow-[5px_10px_10px_0px_rgba(0,0,0,1)] z-10">
        <div
          className={`xl:w-[1600px] w-full h-[100px] degradado float-up-down`}
        />
      </div>

      <Image
        src="/images/bg-banner-movil.webp"
        alt="InVisual Signs mobile background texture"
        className="absolute right-0 w-full top-[-160px] z-4 md:hidden object-cover"
        width={360}
        height={797}
        priority
      />

      {/******* Inner section */}
      <div className="container xl:max-w-[1200px] mx-auto px-[24px] xl:px-0 pt-[45px] xl:pt-50 pb-8 relative">
        <h1 className="text-[22px] font-bold relative z-20 md:text-left text-center">
          Maryland, Virginia, & D.C
          <span className="italic font-black text-[30px] md:text-[38px] xl:text-[65px] block uppercase xl:leading-[70px] tofinowide relative">
            <span className="block relative z-10">Commercial Vehicle <span className="md:hidden"> Wraps</span></span>
            <span className="hidden md:inline"> Wraps Services</span>
          </span>
        </h1>

        <div className="flex gap-2 pt-8 w-full md:w-[41.5%]">
          {/* SVG Decorativo */}
          <div className="hidden xl:block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="43"
              height="71"
              viewBox="0 0 43 71"
              fill="none"
              aria-hidden="true" // ✅ Ignorado por lectores de pantalla
            >
              {/* ... contenido del svg ... */}
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
                {/* ... tus filtros ... */}
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

        {/* Imagen Principal Desktop */}
        <div className="flex justify-end relative">
          <Image
            src="/images/invisual-car-banner-home.webp"
            alt="Commercial fleet wrap in Glen Burnie"
            sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
            srcSet="/images/commercial-fleet-wrap.webp 768w, /images/commercial-fleet-wrap.webp 1024w"
            width={860}
            height={343}
            className="z-10 relative xl:w-[860px] xl:min-w-[400px] xl:me-[-190px] mt-5 xl:mt-[-250px] object-contain"
          />
        </div>
      </div>

      <div className="relative z-50">
        <BrandingCarousel />
      </div>

      {/******* Red line bottom */}
      <div className="absolute xl:bottom-[290px] right-0 max-h-[65px] h-[65px] rotate-[165deg] overflow-hidden translate-x-[150px] translate-y-[70px] shadow-[-20px_-15px_20px_-12px_rgba(0,0,0,0.5)] z-10">
        <div className={`xl:w-[1300px] w-full h-[100px] degradado-inverse `} />
      </div>

      {/******* Links de Movil */}
      <nav
        className="w-full flex xl:hidden flex-col px-[24px] items-center z-10 relative"
        aria-label="Mobile service navigation"
      >
        <div className="w-full flex justify-end pt-[20px]">
          <ButtonLaid link="#quote" buttonText="Get a quote now!" width={150}/>
        </div>
        <div className="w-full flex flex-wrap gap-[19px] items-center justify-center mt-[85px] max-w-[350px]">
          <Link
            href={"#" + sections[0].id}
            className="max-w-[85px] text-[15px] text-center"
          >
            {sections[0].label}
          </Link>
          <div className="h-[40px] w-[3px] bg-[#414040]"></div>

          <Link
            href={"#" + sections[1].id}
            className="max-w-[85px] text-[15px] text-center"
          >
            {sections[1].label}
          </Link>
          <div className="h-[40px] w-[3px] bg-[#414040]"></div>

          <Link
            href={"#" + sections[2].id}
            className="max-w-[85px] text-[15px] text-center"
          >
            {sections[2].label}
          </Link>

          <Link
            href={"#" + sections[3].id}
            className="max-w-[85px] text-[15px] text-center"
          >
            Types of Vehicles Wrapped
          </Link>
          <div className="h-[40px] w-[3px] bg-[#414040]"></div>

          <Link
            href={"#" + sections[4].id}
            className="max-w-[85px] text-[15px] text-center"
          >
            {sections[4].label}
          </Link>
          <div className="h-[40px] w-[3px] bg-[#414040]"></div>

          <Link
            href={"#" + sections[5].id}
            className="max-w-[85px] text-[15px] text-center"
          >
            {sections[5].label}
          </Link>

          <Link
            href={"#" + sections[6].id}
            className="w-full text-[15px] text-center"
          >
            {sections[6].label}
          </Link>
        </div>
      </nav>
    </section>
  );
}
