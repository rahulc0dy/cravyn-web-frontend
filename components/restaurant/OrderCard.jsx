import React from "react";

const OrderCard = ({ orderId, time, items, total, func }) => {
  return (
    <div className="border-2 border-gray-300 rounded-lg shadow-xl w-60 h-72">
      <div className="bg-accent-green flex justify-between items-center p-5 border-b-2">
        <span className="text-xl font-bold text-tertiary-green tracking-widest">
          {orderId}
        </span>
        <span className="text-sm flex items-center">
          <span className="font-bold text-tertiary-blue text-base flex items-center">
            <svg
              width="16"
              height="16"
              viewBox="0 0 20 20"
              fill="none"
              class="inline mr-2"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 4V10H14.5M19 10C19 11.1819 18.7672 12.3522 18.3149 13.4442C17.8626 14.5361 17.1997 15.5282 16.364 16.364C15.5282 17.1997 14.5361 17.8626 13.4442 18.3149C12.3522 18.7672 11.1819 19 10 19C8.8181 19 7.64778 18.7672 6.55585 18.3149C5.46392 17.8626 4.47177 17.1997 3.63604 16.364C2.80031 15.5282 2.13738 14.5361 1.68508 13.4442C1.23279 12.3522 1 11.1819 1 10C1 7.61305 1.94821 5.32387 3.63604 3.63604C5.32387 1.94821 7.61305 1 10 1C12.3869 1 14.6761 1.94821 16.364 3.63604C18.0518 5.32387 19 7.61305 19 10Z"
                stroke="#1D3E73"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            {time}
          </span>
        </span>
      </div>
      <div className="py-4 px-4">
        {items.slice(0, 3).map((item, index) => (
          <div key={index} className="flex justify-between">
            <span>{item.name}</span>
            <span className="font-semibold">×{item.quantity}</span>
          </div>
        ))}
        {items.length > 3 && (
          <div className="text-sm text-gray-500">
            + {items.length - 3} more items
          </div>
        )}
      </div>
      <div className="border-t-2 pt-2 px-4">
        <div className="flex justify-between text-green-600 font-bold">
          <span>Order Total</span>
          <span>₹ {total}</span>
        </div>
      </div>
      <button
        onClick={func}
        className="mt-4 text-red-500 hover:text-lg hover:text-red-800 font-semibold px-4"
      >
        View Details
      </button>
    </div>
  );
};

export default OrderCard;
