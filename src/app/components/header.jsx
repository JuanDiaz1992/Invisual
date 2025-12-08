import React from "react";
import Image from "next/image";
import Link from "next/link";
import ButtonLaid from "./button";
import MobileMenu from "./mobileMenu";

const Header = () => {
  const width = 539;
  const height = 54;
  const angleDeg = -12.5;

  const angleRad = (Math.abs(angleDeg) * Math.PI) / 180;
  const offsetX = Math.tan(angleRad) * height;
  const xOffsetNormalized = offsetX / width;

  const pathData = `
    M ${xOffsetNormalized} 0
    L 0 1
    L ${1 - xOffsetNormalized} 1
    L 1 0
    Z
  `.trim();

  const clipPathId = "header-nav-clip-path";

  return (
    <header>
      <div className="hidden lg:flex container mx-auto lg:max-w-[1200px] lg:pt-12 justify-between z-90 relative">
        <Link href="/" aria-label="InVisual Signs Home">
          <Image
            src="/images/LOGOS_INVISUALSIGNS.svg"
            alt="InVisual Signs Logo"
            width={218}
            height={60}
            className="w-[218px] h-auto"
            priority
          />
        </Link>

        <div className="flex relative" style={{ width: `${width}px` }}>
          <svg width="0" height="0" className="absolute">
            <defs>
              <clipPath id={clipPathId} clipPathUnits="objectBoundingBox">
                <path d={pathData} />
              </clipPath>
            </defs>
          </svg>

          <nav
            className="bg-[#ffffff4d] content-center"
            style={{
              width: `${width}px`,
              height: `${height}px`,
              clipPath: `url(#${clipPathId})`,
              color: "white",
            }}
          >
            <ul className="flex gap-8 justify-center h-full items-center">
              <li>
                <Link href="/" className="hover:text-red-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/vehicle-wrapping-services"
                  className="hover:text-red-600 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-red-600 transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-red-600 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <span className="cursor-pointer hover:text-red-600 transition-colors">
                  Shop
                </span>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex items-center gap-1">
          <div className="relative w-[41px] h-[41px]">
            <a
              href="https://www.google.com/maps/place/15129+Marlboro+Pike,+Upper+Marlboro,+MD+20772,+EE.+UU./@38.8195844,-76.742915,19z/data=!3m1!4b1!4m6!3m5!1s0x89b79405a7fa99f5:0x7457416d17ebaa5c!8m2!3d38.8195844!4d-76.7422713!16s%2Fg%2F11fk2pbkzb?entry=tts"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Find us on Google Maps"
              title="View location on Google Maps"
              className="relative w-[40px] h-[40px] block"
            >
              <Image
                src="/images/map-icon.svg"
                alt=""
                fill
                className="object-contain"
              />
            </a>
          </div>
          <ButtonLaid
            buttonText={"240-664-1629"}
            link={"tel:2406641629"}
            width={150}
          />
        </div>
      </div>

      <MobileMenu />
    </header>
  );
};

export default Header;
