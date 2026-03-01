import React from "react";

const Hero = () => {
  return (
    <div className="bg-[#FBF8F5]">
      <section class=" pt-10 ">
        <div class="grid max-w-7xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-7">
            <h1 className="font-roboto text-[64px] leading-[76px] font-normal text-black transition-all duration-300 hover:text-blue-600 hover:scale-105 hover:tracking-wide">
              Curated and <br /> Convenient
            </h1>
            <p class="font-roboto mt-[18px] text-[18px] leading-[28px] font-normal text-black transition-all duration-300 hover:text-blue-600 hover:tracking-wide">
              We've built our offerings on the principle that everyone deserves
              high-quality design without the high cost. We offer elevated
              rental inventory, to transform your space. Reuse and recycle - we
              make the decision as light as a “feather”
            </p>
            <a
              href="#"
              class="inline-flex bg-[#E9672B] items-center justify-center px-[32px] py-[16px] mt-[62px] text-base font-medium text-center  rounded-[50px] bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Get started
            </a>
          </div>
          <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img
              src="./src/assets/images/img/img5.png"
              alt="mockup"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
