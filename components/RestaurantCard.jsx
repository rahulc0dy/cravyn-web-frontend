import Image from "next/image";
import { motion } from "framer-motion";

const RestaurantCard = ({
  image,
  restaurant,
  description,
  stars,
  distance,
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
      className="m-5 rounded-xl shadow-xl bg-white text-left"
    >
      <div className="relative object-cover w-full">
        <Image
          className="w-full max-h-40 object-cover rounded-t-xl"
          src={image}
          width={200}
          height={60}
          alt={restaurant}
        />
        <span className="absolute top-2 -left-2 bg-primary-red text-white px-2 py-0.5 free-delivery-clip-path pr-8 drop-shadow-2xl">
          Free Delivery
        </span>
      </div>

      <div className="px-5 py-4">
        <div className="font-bold text-2xl text-primary-grey">{restaurant}</div>

        <p className="font-medium text-gray-500 text-ellipsis line-clamp-2 my-2">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default RestaurantCard;
