import React from "react";

const ShopRoom = () => {
  return (
    <div className="bg-[#FBF8F5]">
      <div className="container mx-auto Pt-10 flex flex-col gap-10 pb-20 ">
        <h2 className="text-center font-roboto text-[28px] md:text-[36px] lg:text-[48px] leading-[120%] font-normal text-black transition-all duration-300 ">
          Shop by Room
        </h2>

        <div className="flex items-center gap-10 mx-auto">
          {/* Card 1  */}
          <div className="flex flex-col items-center rounded-xl overflow-hidden bg-white shadow-[6px_6px_0px_#f9a8d4] transition-all duration-300">
            <a href="#" className="w-full block overflow-hidden">
              <img
                className="w-full h-[200px] object-cover"
                src="src/assets/images/img/room1.png"
                alt="Living Room"
              />
            </a>

            <a href="#" className="block">
              <h5 className="mt-3 mb-4 font-roboto text-[17px] leading-[28px] font-normal text-black text-center">
                Living Room
              </h5>
            </a>
          </div>

          {/* Card 2  */}
          <div className="flex flex-col items-center rounded-xl overflow-hidden bg-white shadow-[6px_6px_0px_#E7CB43] transition-all duration-300">
            <a href="#" className="w-full block overflow-hidden">
              <img
                className="w-full h-[200px] object-cover"
                src="src/assets/images/img/room2.png"
                alt="Living Room"
              />
            </a>

            <a href="#" className="block">
              <h5 className="mt-3 mb-4 font-roboto text-[17px] leading-[28px] font-normal text-black text-center">
                Bedroom
              </h5>
            </a>
          </div>

          {/* Card 3  */}
          <div className="flex flex-col items-center rounded-xl overflow-hidden bg-white shadow-[6px_6px_0px_#A2D4C5] transition-all duration-300">
            <a href="#" className="w-full block overflow-hidden">
              <img
                className="w-full h-[200px] object-cover"
                src="src/assets/images/img/room3.png"
                alt="Living Room"
              />
            </a>

            <a href="#" className="block">
              <h5 className="mt-3 mb-4 font-roboto text-[17px] leading-[28px] font-normal text-black text-center">
                Home Office
              </h5>
            </a>
          </div>

          {/* Card 4  */}
          <div className="flex flex-col items-center rounded-xl overflow-hidden bg-white shadow-[6px_6px_0px_#AF4920] transition-all duration-300">
            <a href="#" className="w-full block overflow-hidden">
              <img
                className="w-full h-[200px] object-cover"
                src="src/assets/images/img/room1.png"
                alt="Living Room"
              />
            </a>

            <a href="#" className="block">
              <h5 className="mt-3 mb-4 font-roboto text-[17px] leading-[28px] font-normal text-black text-center">
                Dining Room
              </h5>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopRoom;
