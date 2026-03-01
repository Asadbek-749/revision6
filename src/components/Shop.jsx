import React from "react";

const products = [
  {
    id: 1,
    name: "Cooper Dining Table",
    img: "./src/assets/images/img/shop1.png",
    rentPrice: 15,
    buyOldPrice: 359,
    buyNewPrice: 314,
  },
  {
    id: 2,
    name: "Croft Media Console",
    img: "./src/assets/images/img/shop2.png",
    rentPrice: 35,
    buyOldPrice: 839,
    buyNewPrice: 739,
  },
  {
    id: 3,
    name: "Essex Dining Chair",
    img: "./src/assets/images/img/shop3.png",
    rentPrice: 18,
    buyOldPrice: 429,
    buyNewPrice: 379,
  },
  {
    id: 4,
    name: "Ludlow Sofa",
    img: "./src/assets/images/img/shop4.png",
    rentPrice: 52,
    buyOldPrice: 1249,
    buyNewPrice: 1099,
  },
];

const ProductList = () => {
  return (
    <div className="bg-[#fbf9f8] pt-27">
      <div className="container mx-auto flex flex-col  ">
        <h2 className="text-center font-roboto text-[28px] md:text-[36px] lg:text-[48px] leading-[120%] font-normal text-black transition-all duration-300 ">
          Shop our Bestsellers
        </h2>

        <div className="flex flex-wrap items-stretch justify-center gap-5 p-8 bg-[#fbf9f8]">
          {products.map((product) => (
            <div
              key={product.id}
              className={`w-[260px] bg-white flex flex-col items-center justify-start p-8  transition-all  duration-300 cursor-pointer `}
            >
              <div className="w-full h-40 mb-6 flex items-center justify-center  rounded-2xl">
                <img src={product.img} alt="" />
              </div>

              <h2 className="text-[20px] font-normal text-black text-center leading-snug mb-4 min-h-[56px] flex items-center">
                {product.name}
              </h2>

              <p className="text-[18px] text-black mb-3 text-center">
                rent for{" "}
                <span className="text-[#ea6a32]">${product.rentPrice}</span>/mo
              </p>

              <div className="text-[18px] text-black text-center leading-tight flex flex-col items-center">
                <p>
                  or buy for{" "}
                  <span className="text-gray-500 line-through">
                    ${product.buyOldPrice}
                  </span>
                </p>
                <p className="mt-1">${product.buyNewPrice}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
