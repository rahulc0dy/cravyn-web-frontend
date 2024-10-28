import React from "react";
import FileInput from "./FileInput";

const FoodItemForm = () => {
  return (
    <div className=" grid my-10 grid-rows-[1fr_auto] m-5 lg:mx-auto p-8 border-2 border-secondary-blue rounded-lg self-start">
      <div className="grid md:grid-cols-[1.5fr_3fr] gap-8 md:my-8">
        <div className="flex flex-col items-center gap-2">
          <div className="w-full aspect-square rounded-md bg-red-100 flex items-center justify-center text-gray-500">
            Image 500 X 500 pixels
          </div>
          <FileInput
            classes={" w-full text-gray-600 border-2 border-grey-light-3"}
          />
          <span className="text-red-500">*Please select an image</span>
          <p className="mt-2 text-xs text-gray-500 text-center">
            Please mind that the image should be a true representation of the
            actual food item and must comply with FSSAI policies.
          </p>
        </div>

        <div className="grid grid-rows-[auto_auto_auto] gap-4 items-start">
          <div className="flex flex-col md:flex-row md:items-center">
            <label className="md:w-1/4 text-grey-dark-3 text-lg font-semibold mr-5">
              Item Name:
            </label>
            <input
              type="text"
              placeholder="Enter Item Name"
              className="w-full placeholder-grey-dark-3 bg-grey-light-2 px-3 py-2 border-2 border-grey-light-3 rounded-md invalid:border-primary-red valid:border-secondary-green placeholder-shown:invalid:border-grey-light-3  focus:outline-none"
              required
              minLength={3}
            />
          </div>

          <div>
            <p className="text-grey-dark-3 text-lg mb-4 font-semibold">
              Description:
            </p>
            <textarea
              placeholder="Enter Description"
              className="bg-grey-light-2 placeholder-grey-dark-3 w-full px-3 py-2 border-2 border-grey-light-3 rounded-md resize-none invalid:border-primary-red valid:border-secondary-green placeholder-shown:invalid:border-grey-light-3 placeholder-shown:valid:border-grey-light-3 focus:outline-none"
              rows="6"
              minLength={10}
              maxLength={300}
            />
          </div>

          <div className="flex flex-col md:flex-row md:items-center">
            <label className="md:w-1/4 text-grey-dark-3 text-lg font-semibold mr-5">
              Item Price:
            </label>
            <div className="flex w-full">
              <span className=" text-2xl text-green-900 font-bold rounded-l-md border-t-2 border-l-2 border-b-2 border-grey-light-3 bg-green-100 px-4 py-1">
                ₹
              </span>
              <input
                type="text"
                inputMode="numeric"
                placeholder="Enter Item Price"
                className="w-full placeholder-grey-dark-3 md:pl-6 px-3 py-2 border-2 border-grey-light-3 rounded-r-md invalid:border-primary-red valid:border-secondary-green placeholder-shown:invalid:border-grey-light-3 focus:outline-none"
                required
              />
            </div>
          </div>
        </div>
      </div>

      <div className=" flex flex-col md:flex-row justify-between gap-3 py-3 md:py-0">
        <button className="md:w-2/3 px-6 py-2 bg-primary-green text-white font-semibold rounded-md hover:brightness-90">
          Add Item to Catalog
        </button>
        <button className="font-semibold md:w-1/3 px-6 py-2 bg-primary-red text-white rounded-md hover:brightness-90">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default FoodItemForm;
