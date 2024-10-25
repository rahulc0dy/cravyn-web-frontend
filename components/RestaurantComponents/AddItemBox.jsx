import React from 'react';

const AddItemBox = () => {
  return (
    <div className="max-w-4xl grid mb-10 grid-row-[1fr_auto] m-5 lg:mx-auto p-8 border-2 border-secondary-blue rounded-lg">
      <div className="grid grid-cols-[1.5fr_3fr] gap-8 md:my-8">
        <div className="flex flex-col items-center">
          <div className="w-full aspect-square rounded-md bg-red-100 flex items-center justify-center text-gray-500">
            Image 500 X 500 pixels
          </div>

          <input type="file" className="placeholder-grey-dark-3 bg-grey-light-2 border-2 border-grey-light-3 px-4 py-2 w-full mt-8 text-gray-600 rounded-md file:hidden">
          </input>
          <span className="text-red-500">*Please select an image</span>
          <p className="mt-2 text-xs text-gray-500 text-center">
            Please mind that the image should be a true representation of the actual food item and must comply with FSSAI policies.
          </p>
        </div>

        <div className="grid gris-rows-[auto_1fr_auto]">
          <div className="flex items-center mb-4">
            <label className="w-1/4 text-grey-dark-3 text-lg font-semibold mr-5">Item Name:</label>
            <input
              type="text"
              placeholder="Enter Item Name"
              className="w-full placeholder-grey-dark-3 bg-grey-light-2 px-3 py-2 border-2 border-grey-light-3 rounded-md"
            />
          </div>

          <div>
            <p className="text-grey-dark-3 text-lg font-semibold mb-6">Description:</p>
            <textarea
              placeholder="Enter Description"
              className="bg-grey-light-2 placeholder-grey-dark-3 w-full px-3 py-2 border-2 border-grey-light-3 rounded-md resize-none focus:outline-none focus:ring focus:ring-green-200"
              rows="6"
            />
          </div>

          <div className="flex items-center">
            <label className="w-1/4 text-grey-dark-3 text-lg font-semibold mr-5">Item Price:</label>
              <span className="text-2xl text-green-900 font-bold rounded-l-md border-t-2 border-l-2 border-b-2 border-grey-light-3 bg-green-100 px-4 py-1">₹</span>
              <input
                type="number"
                placeholder="Enter Item Price"
                className="w-full placeholder-grey-dark-3 md:pl-6 px-3 py-2 border-2 border-grey-light-3 rounded-r-md"
              />          
          </div>
        </div>
        </div>

      <div className=" flex justify-between mt-2">
        <button className="w-2/3 px-6 py-2 bg-secondary-green text-white font-semibold rounded-md hover:bg-teal-700">
          Add Item to Catalog
        </button>
        <button className="font-semibold w-1/3 ml-4 px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddItemBox;
