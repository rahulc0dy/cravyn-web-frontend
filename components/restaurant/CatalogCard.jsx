import Image from "next/image";
import React from "react";

const CatalogCard = ({
  imageUrl,
  name,
  description,
  price,
  discount,
  orders,
  rating,
}) => {
  return (
    <div className="flex flex-col lg:flex-row bg-white border-2 border-grey-light-3 rounded-xl lg:pr-6 relative shadow-xl overflow-hidden">
      <button className="absolute rounded-full bg-tertiary-blue p-2 right-6 top-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="white"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
          />
        </svg>
      </button>
      <Image
        src={imageUrl || "/assets/images/CRAVYN.png"}
        width={500}
        height={500}
        alt={name}
        className="lg:w-1/4 object-cover w-full"
      />
      <div className="p-4 lg:w-2/3 grid grid-rows-[auto_1fr_auto_auto]">
        <div className="text-2xl font-bold text-gray-800 mb-3">{name}</div>

        <div>
          <p className="text-lg font-light text-gray-600 line-clamp-3">
            {description}
          </p>
        </div>

        <div className="mt-4 flex flex-col lg:flex-row justify-between">
          <div>
            <span className="font-semibold text-gray-700">Price: </span>
            <span className="text-green-600 font-bold">₹ {price}</span>
          </div>
          <div>
            <span className="font-semibold text-gray-700">Discount: </span>
            <span className="text-orange-500 font-extrabold">{discount}</span>
          </div>
        </div>

        <div className="mt-4 border-t-2 border-grey-light-3 py-4 flex flex-col lg:flex-row justify-between text-gray-600 text-base font-semibold">
          <span>Orders: {orders}</span>
          <span>Rating: {rating}</span>
          <span>
            <label className="inline-flex items-center cursor-pointer">
              <span className="mr-2">Available:</span>
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none  rounded-full peer dark:bg-grey-light-3 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-secondary-green"></div>
            </label>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CatalogCard;
