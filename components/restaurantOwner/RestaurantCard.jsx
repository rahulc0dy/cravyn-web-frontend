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
      className="m-5 rounded-xl shadow-xl bg-white text-left max-w-full"
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

      <div className="px-5 py-4">
        <h4 className="font-bold text-primary-orange text-3xl">{name}</h4>
        <p className="font-base text-grey-medium text-lg mb-2 text-wrap">
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
          {stars}
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
