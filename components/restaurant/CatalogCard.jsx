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
    <div className="flex bg-white border-2 border-x-grey-light-3 rounded-xl pr-6 relative shadow-xl overflow-hidden">
      <button className="absolute rounded-full bg-tertiary-blue p-2 right-6 top-6">
        <svg
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.6465 3.36525L12.9117 2.09925C13.1755 1.83549 13.5332 1.68732 13.9062 1.68732C14.2793 1.68732 14.637 1.83549 14.9008 2.09925C15.1645 2.36301 15.3127 2.72074 15.3127 3.09375C15.3127 3.46676 15.1645 3.82449 14.9008 4.08825L6.9365 12.0525C6.53999 12.4488 6.05102 12.74 5.51375 12.9L3.5 13.5L4.1 11.4863C4.25996 10.949 4.55123 10.46 4.9475 10.0635L11.6465 3.36525ZM11.6465 3.36525L13.625 5.34375M12.5 10.5V14.0625C12.5 14.5101 12.3222 14.9393 12.0057 15.2557C11.6893 15.5722 11.2601 15.75 10.8125 15.75H2.9375C2.48995 15.75 2.06072 15.5722 1.74426 15.2557C1.42779 14.9393 1.25 14.5101 1.25 14.0625V6.1875C1.25 5.73995 1.42779 5.31073 1.74426 4.99426C2.06072 4.67779 2.48995 4.5 2.9375 4.5H6.5"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <Image
        src={imageUrl}
        width={500}
        height={500}
        alt={name}
        className="w-1/4 object-cover"
      />
      <div className="p-4 w-2/3 grid grid-rows-[auto_1fr_auto_auto]">
        <div className="text-2xl font-bold text-gray-800 mb-3">{name}</div>

        <div>
          <p className="text-lg font-light text-gray-600">{description}</p>
        </div>

        <div className="mt-4 flex justify-between">
          <div>
            <span className="font-semibold text-gray-700">Price: </span>
            <span className="text-green-600 font-bold">₹ {price}</span>
          </div>
          <div>
            <span className="font-semibold text-gray-700">Discount: </span>
            <span className="text-orange-500 font-extrabold">{discount}</span>
          </div>
        </div>

        <div className="mt-4 border-t-2 border-grey-light-3 py-4 flex justify-between text-gray-600 text-base font-semibold">
          <span>Orders: {orders}</span>
          <span>Rating: {rating}</span>
          <span>
            <label className="inline-flex items-center cursor-pointer">
              <span className="mr-2">Available:</span>
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none  rounded-full peer dark:bg-grey-light-3 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-secondary-pink"></div>
            </label>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CatalogCard;
