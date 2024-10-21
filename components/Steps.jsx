import Image from "next/image";
import { motion } from "framer-motion";

const Steps = () => {
  return (
    <div className="flex justify-center items-center mx-auto max-w-screen-2xl my-4 md:mt-20">
      <div className="grid grid-cols-[1fr_auto_1fr] grid-rows-4 gap-4 md:gap-8 max-w-4xl text-black">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex justify-end"
        >
          <Image
            src="/assets/images/about/order.svg"
            width={150}
            height={150}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-left"
        >
          <h2 className="text-lg md:text-2xl font-bold mb-2">
            Choose your cravings from our website or android app.
          </h2>
          <p className="text-gray-600 text-base md:text-lg font-light">
            Make a free account on our platform. Browse from the thousands of
            available restaurants and delicious items from our app. Place an
            order and get started.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="text-right"
        >
          <h2 className="text-lg md:text-2xl font-bold mb-2">
            Your favourite restaurant cooks for you.
          </h2>
          <p className="text-gray-600 text-base md:text-lg font-light">
            Your food is freshly prepared by the restaurants according to your
            preferences and likings. Customize your order with instructions that
            make the order just for you.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className=" flex justify-start"
        >
          <Image
            src="/assets/images/about/cook.svg"
            width={150}
            height={150}
            className="ml-4 h-11/12"
          />
        </motion.div>
        <div className=" row-span-4 col-start-2 row-start-1 -translate-y-4">
          <Image
            src="assets/images/about/numbers.svg"
            width={35}
            height={200}
            className="h-5/6"
          ></Image>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.1 }}
          className="flex justify-end -translate-y-14 md:-translate-y-6"
        >
          <Image
            className="h-full"
            src="/assets/images/about/ride.svg"
            width={175}
            height={250}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.1 }}
          className=""
        >
          <h2 className="text-lg md:text-2xl font-bold mb-2">
            Our delivery partners are always ready to go .
          </h2>
          <p className="text-gray-600 text-base md:text-lg font-light">
            Your order is picked up by our delivery partners who are always
            ready to deliver your cravings to your doorstep.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.5 }}
          className="text-right -translate-y-8 md:-translate-y-0"
        >
          <h2 className="text-lg md:text-2xl font-bold mb-2">
            Get your cravings in minutes at your doorstep.
          </h2>
          <p className="text-gray-600 text-base md:text-lg font-light">
            Your food is delivered to you within 30 minutes of placing an order.
            Get a seamless experience ordering through us. Give it a go now!
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.5 }}
          className="-translate-y-6 md:-translate-y-0"
        >
          <Image
            src="/assets/images/about/deliver.svg"
            width={150}
            height={150}
            className="ml-4"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Steps;
