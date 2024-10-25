import React from 'react';

const OrderCard = ({ orderId, time, items, total,func }) => {
  return (
    <div className="border-2 border-gray-300 rounded-lg shadow-xl w-60 h-72 m-8">
      <div className="bg-accent-green flex justify-between items-center p-5 border-b-2">
        <span className="text-xl font-bold text-tertiary-green tracking-widest">{orderId}</span>
        <span className="text-sm flex items-center">
        <span className="font-bold text-tertiary-blue">{time}</span>
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
          <div className="text-sm text-gray-500">+ {items.length - 3} more items</div>
        )}
      </div>
      <div className="border-t-2 pt-2 px-4">
        <div className="flex justify-between text-green-600 font-bold">
          <span>Order Total</span>
          <span>₹ {total}</span>
        </div>
      </div>
      <button onClick={func} className="mt-4 text-red-500 hover:text-lg hover:text-red-800 font-semibold px-4">View Details</button>
    </div>
  );
};

export default OrderCard;
