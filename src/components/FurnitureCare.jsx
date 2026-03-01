import React from "react";

const care = [
  {
    id: 1,
    title: "Enjoy a fully furnished space in less than week",
    disc: "Feather furniture is available to be delivered and assembled in New York City, Los Angeles and San Francisco.",
    link: "Explore Furniture",
    img: "src/assets/images/img/img5.png",
    status: "left",
  },

  {
    id: 2,
    title: "Garage Sale - 40% & Up",
    disc: "Our Garage Sale is open! Savings start at 40% on favorite retired pieces. Find dressers, sofas, decor, and more to make the year one to remember.",
    link: "Shop Now",
    img: "src/assets/images/img/img4.png",
    status: "right",
  },

  {
    id: 3,
    title: "Furniture for business, made simple.",
    disc: "Say goodbye to cost, complexity, and commitment of furniture. Feather makes it easy with affordable rental plans, white glove delivery and best-in-class account service.",
    link: "Visit Feather For Business",
    img: "src/assets/images/img/img3.png",
    status: "left",
  },

  {
    id: 4,
    title: "Never assemble furniture again.",
    disc: "We move a lot. There are countless floor plans and roommates (oh, and your evolving tastes) between here and there. With Feather, furnish your space without breaking a sweat or reaching for a screwdriver.",
    link: "How Feather Works",
    img: "src/assets/images/img/img2.png",
    status: "right",
  },
];

const FurnitureCare = () => {
  return (
    <div className="container mx-auto mt-10 pb-22">
      <div className="flex flex-col gap-5 mb-[94px]">
        <h3 className="font-roboto text-[36px] leading-[44px] font-normal text-black text-center">
          “Keeping Furniture in Homes and out of Landfills."
        </h3>
        <p className="font-roboto text-[24px] leading-[32px] font-normal text-black text-center">
          This isn’t just another rental company - We’re elevating the future of
          furniture by <br /> replacing the commitment of ownership with a
          culture of sharing in a way that’s <br /> curated, convenient, and
          sustainable.
        </p>
      </div>

      <div className="flex flex-col gap-10">
        {care.map((product) => (
          <div
            key={product.id}
            className={`flex ${product.status === "left" ? "flex-row-reverse" : "flex-row"} gap-7 items-center`}
          >
            <div className="w-1/2">
              <img
                src={product.img}
                alt={product.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="w-1/2 gap-10">
              <h4 className="font-roboto text-[36px] leading-[44px] font-normal text-black mb-3 w-[55%]">
                {product.title}
              </h4>
              <p className="font-roboto text-[18px] leading-[24px] font-normal text-black mb-5 w-[55%]">
                {product.disc}
              </p>
              <a href="#" className="font-roboto text-[16px] leading-[24px] font-normal text-[#E9672B]">
                {product.link}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FurnitureCare;
