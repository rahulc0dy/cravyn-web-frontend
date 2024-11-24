"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const QueryTopicsCard = ({ title, image, description }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      variants={cardVariants}
      className="py-5 px-3 flex flex-col justify-center items-center shadow-lg rounded-2xl border-2 border-emerald-300"
    >
      <Image
        src={image}
        width={100}
        height={100}
        alt={title}
        className="h-16 w-auto drop-shadow-sm"
      />
      <Link href="#" className=" font-bold text-xl pt-2 text-emerald-400">
        {title}
      </Link>
      <hr className="bg-gray-400 w-1/2 my-1" />
      <p className="text-center text-grey-medium font-semibold">
        {description}
      </p>
    </motion.div>
  );
};

export default QueryTopicsCard;
