import Image from "next/image";
import React from "react";
import WarrantyImages from "../warrantyImages";

export default function Warranty() {
  return (
    <section className="relative lg:mb-[100px] px-[24px] lx:px-0 mt-[50px] lg:mt-0 flex flex-col">
      <div className="order-1 lg:order-0 relative">
        <WarrantyImages />
      </div>


      <div className="lg:container lg:mx-auto lg:max-w-[1300px] relative flex z-20">
        <div className="flex flex-wrap lg:w-full">
          <h2 className="text-[45px] leading-[45px] md:text-[80px] md:leading-[85px] lg:text-[90px] font-black lg:pb-12 lg:pt-8 lg:leading-[100px] relative z-50 tofinowide uppercase text-start lg:text-end w-full mb-[10px] lg:mb-0">
            Warranty{" "}
          </h2>
          <div className="lg:w-full justify-end hidden lg:flex lg:pt-12 pointer-events-none">
            <Image
              src="/images/star-logo-icon.svg"
              alt=""
              width={483}
              height={410}
              className={`w-[280px] lg:w-[483px]`}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap z-50 relative lg:ps-[10%]">
        <div className="lg:w-5/12">
          <p className="text-[16px] leading-[25px] lg:max-w-[487px] lg:ps-16 lg:font-bold lg:mt-[25px]">
            Your peace of mind is our priority, so we back our services with a
            robust 3-month Warranty. We stand behind our work, offering
            warranties that cover any problems with the installation, such as
            bubbles, lifting, or cracking of the vinyl.<br className="block lg:hidden"></br><br className="block lg:hidden"></br>
          </p>
        </div>

        <div className="lg:w-7/12 lg:bg-[#1A1A1A] lg:-skew-x-12 relative overflow-hidden">
          <div className="opacity-70 lg:min-h-[44px] bg-gradient-to-b from-[#761010] from-[15%] to-transparent to-[80%]"></div>

          <p className="lg:ps-24 lg:py-4 lg:skew-x-12 lg:max-w-[42rem] text-white">
            Our team is more than happy to address and resolve any issues that
            may arise. In the unlikely event of a defect or problem with the
            installation, our team is committed to resolving it promptly and to
            your complete satisfaction. Our warranty is a testament to our
            confidence in the quality of our work and our dedication to your
            success. Trust in our expertise, and rest assured that your project
            is in capable hands.
          </p>
          <div className="opacity-70 lg:min-h-[44px] bg-gradient-to-t from-[#761010] from-[15%] to-transparent to-[80%]"></div>
        </div>
      </div>
    </section>
  );
}
