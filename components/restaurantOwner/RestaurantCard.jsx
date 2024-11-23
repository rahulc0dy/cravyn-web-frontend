"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const RestaurantCard = ({
  image,
  name,
  address,
  stars,
  sales,
  ordersPerDay,
  verification,
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 100,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { delay: 0.3 },
      }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="m-5 rounded-xl shadow-xl bg-white text-left max-w-full relative"
    >
      <div className="relative object-cover w-full">
        <Image
          className="w-full max-h-40 object-cover rounded-t-xl"
          src={image}
          width={800}
          height={240}
          alt={name}
        />
      </div>

      <div className="absolute rounded-full bg-white top-3 left-3">
        {verification === "verified" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#00cd52"
            className="size-6 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
            />
          </svg>
        ) : verification === "pending" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#ed7e00"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="red"
            className="size-6 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        )}
      </div>

      <div className="px-5 py-4">
        <h4 className="font-bold text-primary-orange text-3xl">{name}</h4>
        <p className="font-base text-grey-medium text-lg mb-2 text-wrap min-h-12">
          {address}
        </p>
        <h5 className="font-semibold text-xl text-primary-grey">
          <Image
            className="inline-block align-text-top"
            src="/assets/icons/card-star.png"
            width={25}
            height={25}
            alt="star"
          />{" "}
          {verification === "pending"
            ? "Pending Verification"
            : verification === "rejected"
            ? "Cannot be rated"
            : stars}
        </h5>

        <p className="font-medium text-lg">
          Sales:{" "}
          <span className="font-bold text-secondary-orange text-lg tracking-widest px-2">
            ₹ {sales}
          </span>
        </p>
        <p className="font-medium text-lg">
          Orders / day:{" "}
          <span className="font-bold text-secondary-green text-lg tracking-widest px-2">
            {ordersPerDay}
          </span>
        </p>
      </div>
    </motion.div>
  );
};

export default RestaurantCard;
