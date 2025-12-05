"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ButtonLaid from "./button";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden w-full flex justify-between items-center bg-white/10 p-4 shadow-sm relative z-50">
      <Link href="/" aria-label="InVisual Signs Home">
        <Image
          src="/images/LOGOS_INVISUALSIGNS.svg"
          alt="InVisual Signs Logo"
          width={150}
          height={40}
          className="w-[150px] h-auto"
          priority
        />
      </Link>

      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
        className="p-2 focus:outline-none z-60"
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        )}
      </button>

      <div
        className={`fixed top-0 left-0 w-full h-screen bg-black/95 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } z-[55]`}
        style={{ backdropFilter: "blur(5px)" }}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8 pb-20">
          <Link
            href="/"
            className="text-2xl text-white hover:text-red-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/vehicle-wrapping-services"
            className="text-2xl text-white hover:text-red-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/blog"
            className="text-2xl text-white hover:text-red-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Blog
          </Link>
          <Link
            href="/about"
            className="text-2xl text-white hover:text-red-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>
          <span className="text-2xl text-white cursor-pointer hover:text-red-600 transition-colors">
            Shop
          </span>

          <div className="mt-4">
            <ButtonLaid
              buttonText={"240-664-1629"}
              link={"tel:2406641629"}
              width={180}
            />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
