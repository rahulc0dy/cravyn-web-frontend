"use client";

import Popup from "@components/PopUpModal";
import { updateFooditemDiscount } from "@services/restaurantServices";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

const DiscountDialog = ({
  foodItemId,
  foodName,
  currentDiscountPercent = 0,
  currentDiscountCap = 0,
  visible,
  closefunc,
  successFunc,
}) => {
  const [discountPercent, setDiscountPercent] = useState(
    currentDiscountPercent
  );
  const [discountCap, setDiscountCap] = useState(currentDiscountCap);

  const {
    mutate: setDiscount,
    isSuccess,
    isError,
    isPending,
    error,
    data,
  } = useMutation({
    mutationKey: ["discounts", currentDiscountCap, discountPercent],
    mutationFn: ({ foodItemId, discountPercent, discountCap }) =>
      updateFooditemDiscount(foodItemId, discountPercent, discountCap),
    onSuccess: () => {
      successFunc();
      closefunc();
    },
  });

  const handleDiscountUpdate = (e) => {
    e.preventDefault();
    setDiscount({ foodItemId, discountPercent, discountCap });
  };

  if (!visible) return null;
  return (
    <>
      <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 px-4 z-50">
        <div className="bg-white shadow-lg max-w-2xl p-10">
          <div className="text-3xl font-extrabold pb-6 tracking-widest text-grey-dark-3">
            Discount for {foodName}
          </div>
          <form
            className="flex flex-col justify-center gap-5"
            onSubmit={handleDiscountUpdate}
          >
            <label className="w-max" htmlFor="discount-percent">
              <p className="font-bold text-tertiary-blue text-xl mb-2 w-max">
                Discount Percent:
              </p>
              <input
                type="number"
                min={0}
                max={100}
                id="discount-percent"
                className="w-40 border-2 border-gray-200 p-2 rounded-md focus:outline-none"
                value={discountPercent}
                onChange={(e) => setDiscountPercent(e.target.value)}
                required
              />
              <span className="inline-block px-5 font-bold text-2xl text-secondary-orange">
                %
              </span>
            </label>
            <label className="w-max" htmlFor="discount-percent">
              <p className="font-bold text-tertiary-blue text-xl mb-2 w-max">
                Discount Maximum Value:
              </p>
              <span className="inline-block pr-5 font-bold text-2xl text-secondary-green">
                ₹
              </span>
              <input
                type="number"
                min={0}
                max={1000}
                id="discount-percent"
                className="w-40 border-2 border-gray-200 p-2 rounded-md focus:outline-none"
                value={discountCap}
                onChange={(e) => setDiscountCap(e.target.value)}
                required
              />
            </label>

            <div className="flex flex-col gap-4 items-center flex-wrap lg:flex-row">
              <input
                type="submit"
                value={isPending ? "Updating..." : "Update Discount"}
                className="w-full bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 cursor-pointer"
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  closefunc();
                }}
                className="w-full bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
      {isSuccess && (
        <Popup message={data.message} duration={2000} type="success" />
      )}
      {isError && (
        <Popup message={error.message} duration={2000} type="failure" />
      )}
    </>
  );
};

export default DiscountDialog;
