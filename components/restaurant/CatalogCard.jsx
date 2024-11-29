"use client";

import Popup from "@components/PopUpModal";
import { deleteFoodItem } from "@services/restaurantServices";
import { useMutation } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import DiscountDialog from "./DiscountDialog";
import { useState } from "react";

const CatalogCard = ({
  itemId,
  imageUrl,
  name,
  description,
  price,
  discount,
  discountCap,
  orders,
  rating,
  onSuccessFn,
}) => {
  const [showDiscountModal, setShowDiscountModal] = useState(false);

  const {
    mutate: deleteItem,
    data,
    isSuccess,
    isError,
    isPending,
    error,
    reset,
  } = useMutation({
    mutationKey: ["food-item", itemId],
    mutationFn: ({ itemId }) => deleteFoodItem(itemId),
    retry: 1,
    onSuccess: () => {
      onSuccessFn();
    },
  });

  return (
    <>
      <div className="flex flex-col lg:flex-row bg-white border-t border-r border-grey-light-3 rounded-xl lg:pr-6 relative shadow-xl overflow-hidden">
        <Link
          className="absolute rounded-full bg-tertiary-blue p-2 right-6 top-6"
          href={{ pathname: "/restaurant/catalog/update", query: { itemId } }}
        >
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
        </Link>
        <button
          className="absolute rounded-full bg-white p-2 right-20 top-6"
          onClick={() => {
            deleteItem({ itemId });
            reset();
          }}
        >
          {isPending ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="red"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          )}
        </button>
        <Image
          src={
            imageUrl &&
            (imageUrl.startsWith("http") || imageUrl.startsWith("/"))
              ? imageUrl
              : "/assets/images/CRAVYN.png"
          }
          width={500}
          height={500}
          alt={name}
          className="lg:w-1/4 aspect-square object-cover w-full"
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
            <div
              onClick={() => setShowDiscountModal(true)}
              className="hover:cursor-pointer"
            >
              <span className="font-semibold text-gray-700">Discount: </span>
              <span className="text-orange-500 font-extrabold">
                {discount ?? "None"}
              </span>
            </div>
          </div>

          <div className="mt-4 border-t-2 border-grey-light-3 py-4 flex flex-col lg:flex-row justify-between text-gray-600 text-base font-semibold">
            <span>Orders: {orders ?? "0"}</span>
            <span>Rating: {rating ?? "N/A"}</span>
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

      <DiscountDialog
        visible={showDiscountModal}
        closefunc={() => setShowDiscountModal(false)}
        foodItemId={itemId}
        foodName={name}
        currentDiscountPercent={discount}
        currentDiscountCap={discountCap}
        successFunc={onSuccessFn}
      />

      {isError && (
        <Popup duration={2000} message={error.message} type="failure" />
      )}
      {isSuccess && (
        <Popup duration={2000} message={data.message} type="success" />
      )}
    </>
  );
};

export default CatalogCard;
