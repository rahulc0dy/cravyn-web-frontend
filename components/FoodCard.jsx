import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const FoodCard = ({ image, item, description, stars }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 100,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { delay: 0.2 },
      }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.1 }}
      className="mt-10 min-w-fit box-border pb-4 rounded-xl px-4 shadow-xl bg-white"
    >
      <div className=" w-full -translate-y-10">
        <Image
          src={image}
          alt={item}
          width={1000}
          height={1000}
          className="w-full "
        />
      </div>

      <div className="px-8 text-left">
        <div className="font-bold text-3xl mb-1 text-primary-grey">{item}</div>
        <p className="text-gray-400 text-lg font-medium">{description}</p>

        <motion.div
          whileInView={{
            scale: [0.9, 1, 0.9],
            repeatCount: Infinity,
            transition: { duration: 0.5 },
          }}
          className="flex flex-col justify-between py-2 gap-4"
        >
          <Link
            href="#download-customer-app"
            className="text-lg min-w-fit font-semibold py-1 text-rose-500"
          >
            Love it 😍 ? Get yours Now
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FoodCard;
