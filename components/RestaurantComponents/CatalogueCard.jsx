import React from 'react';

const CatalogueCard = ({ imageUrl, name, description, price, discount, orders, rating}) => {
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

        <div className="mt-4 border-t-2 border-grey-light-3 py-4 flex justify-between text-gray-600 text-base font-semibold">
          <span>Orders: {orders}</span>
          <span>Rating: {rating}</span>
          <span>
          <label class="inline-flex items-center cursor-pointer">
          <span className='mr-2'>Available:</span>
          <input type="checkbox" value="" class="sr-only peer"/>
          <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none  rounded-full peer dark:bg-grey-light-3 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-secondary-pink"></div>
</label>
</span>
        </div>

      </div>
    </div>
  );
};

export default CatalogueCard;
