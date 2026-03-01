import React from "react";

const Header = () => {
  return (
    <div className="bg-[#FBF8F5]">
      <nav className="container mx-auto flex justify-between items-center py-[31px]">
        <ul className="flex gap-[36px]">
          <li>
            <a
              className="font-roboto text-[16px] leading-[20px] font-normal text-black transition-all duration-300 hover:text-blue-600 hover:tracking-wide"
              href="#"
            >
              Furniture
            </a>
          </li>
          <li>
            <a
              className="font-roboto text-[16px] leading-[20px] font-normal text-black transition-all duration-300 hover:text-blue-600 hover:tracking-wide"
              href="#"
            >
              Why Feather
            </a>
          </li>
          <li>
            <a
              className="font-roboto text-[16px] leading-[20px] font-normal text-black transition-all duration-300 hover:text-blue-600 hover:tracking-wide"
              href="#"
            >
              Feather for Business
            </a>
          </li>
        </ul>

        <div>
          <img src="./src/assets/images/svg/logo.svg" alt="Sayt Logo" />
        </div>

        <ul className="flex gap-[36px]">
          <li>
            <a
              className="font-roboto text-[16px] leading-[20px] font-normal text-black transition-all duration-300 hover:text-blue-600 hover:tracking-wide"
              href="#"
            >
              Check if We Deliver
            </a>
          </li>
          <li>
            <a
              className="font-roboto text-[16px] leading-[20px] font-normal text-black transition-all duration-300 hover:text-blue-600 hover:tracking-wide"
              href="#"
            >
              Search
            </a>
          </li>
          <li>
            <a
              className="font-roboto text-[16px] leading-[20px] font-normal text-black transition-all duration-300 hover:text-blue-600 hover:tracking-wide"
              href="#"
            >
              Account
            </a>
          </li>
          <li>
            <img
              className="cursor-pointer"
              src="./src/assets/images/svg/sell-icon.svg"
              alt=""
            />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
