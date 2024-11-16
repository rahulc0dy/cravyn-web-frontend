import Image from "next/image";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5, // Stagger effect for children
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Description = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="flex justify-center items-center mx-auto py-10 m-6 max-w-screen-2xl"
    >
      <div className="grid grid-cols-1 lg:grid-cols-10 lg:gap-8 w-11/12 md:w-9/12 lg:w-8/12">
        <motion.div variants={childVariants} className="md:col-span-3">
          <div className="mt-14 h-4/5 border-4 border-gray-300 p-6 rounded-lg">
            <Image
              src="/assets/images/about/bike.png"
              width={400}
              height={400}
              className="w-6/12 h-5/12 md:w-4/12 lg:w-full mx-auto mb-4"
              alt="Delivery Bike"
            />
            <h2 className="text-3xl font-bold pb-2">30 Minutes Delivery</h2>
            <p className="text-gray-600 font-semibold mb-6 md:m-0 pb-5">
              We Deliver your food fresh to you within 30 minutes. So your
              cravings don&apos;t have to wait.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={childVariants}
          className="md:col-span-4 grid grid-rows-3 gap-9"
        >
          <div className="border-4 border-gray-300 pt-8 pl-8 pr-8 rounded-lg">
            <h2 className="text-3xl font-bold md:mb-2 mb-9">Work With Us</h2>
            <p className="text-gray-600 font-semibold">
              Join our huge chain of connected restaurants that help fulfill the
              cravings of people.
            </p>
          </div>

          <div className="p-10 rounded-lg bg-gradient-to-r from-red-950 to-red-600 text-white">
            <h2 className="text-3xl font-bold pb-5">
              Want to connect with us?
            </h2>
            <button className="bg-yellow-200 text-black font-bold px-8 py-2 rounded-full hover:bg-yellow-500">
              Contact us
            </button>
          </div>

          <div className="border-4 border-gray-300 pl-8 pr-8 pt-8 rounded-lg">
            <h2 className="text-3xl font-bold md:mb-2 mb-9">
              Want To Deliver?
            </h2>
            <p className="text-gray-600 font-semibold">
              Become a partner who delivers people the things they crave the
              most, and watch their smiles.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={childVariants}
          className="md:col-span-3 lg:pt-4 lg:pb-4"
        >
          <div className="mt-14 h-4/5 border-4 border-gray-300 p-6 rounded-lg">
            <Image
              src="/assets/images/about/fresh-food.png"
              width={500}
              height={500}
              className="ml-10 w-8/12 h-5/12 md:w-4/12 lg:w-full lg:ml-0 mb-4 lg:mt-8 lg:mb-14"
              alt="Fresh Food"
            />
            <h2 className="text-3xl font-bold pb-2">Fresh Cooked Food</h2>
            <p className="text-gray-600 font-semibold mb-6 md:m-0 pb-5">
              We deliver fresh cooked food straight from the restaurant&apos;s
              pan to your plate.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Description;
