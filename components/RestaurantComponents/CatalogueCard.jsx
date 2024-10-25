import React from 'react';

const CatalogueCard = ({ imageUrl, name, description, price, discount, orders, rating, repeats }) => {
  return (
    <div className="flex bg-white border-2 border-grey-medium rounded-xl max-w-4xl pr-6 shadow-xl overflow-hidden">
      <img src={imageUrl} alt={name} className="w-1/3 object-cover" />
      <div className="p-4 w-2/3 grid grid-rows-[auto_1fr_auto_auto]">

        <div className="text-xl font-bold text-gray-800 mb-3">{name}</div>

        <div><p className="mt- font-semibold text-gray-600">{description}</p></div>

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

        <div className="mt-4 border-t-2 border-grey-light-3 p-4 flex justify-between text-gray-600">
          <span>Orders: {orders}</span>
          <span>Rating: {rating}</span>
          <span>Repeats: {repeats}</span>
        </div>

      </div>
    </div>
  );
};

export default CatalogueCard;
