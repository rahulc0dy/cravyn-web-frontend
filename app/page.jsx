"use client";

import FoodCard from "@components/FoodCard";
import FaqExpandableCard from "@components/restaurant/FaqExpandableCard";
import RestaurantCard from "@components/RestaurantCard";
import Image from "next/image";
import { Onest } from "next/font/google";
import Link from "next/link";
import { motion } from "framer-motion";
import HomeNav from "@components/HomeNav";
import { UserAuthProvider } from "@providers/UserAuthProvider";
import { downloadCustomerApp } from "@services/appDownloadServices";
import { useState } from "react";

const onest = Onest({ subsets: ["latin", "latin-ext"] });

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Delay between each child animation
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const foodCardData = [
  {
    image: "/assets/images/Sandwich.png",
    item: "Sandwiches",
    description: "Sandwiches made from fresh farm picked items.",
    stars: "4.5",
  },
  {
    image: "/assets/images/Burger.png",
    item: "Burgers",
    description:
      "A burst of flavours and textures with the tastiest burgers you have ever had.",
    stars: "4",
  },
  {
    image: "/assets/images/Ramen.png",
    item: "Ramen",
    description: "Delicious ramen filled with umami straight from japan.",
    stars: "4.8",
  },
  {
    image: "/assets/images/Strawberry-Cake.png",
    item: "Strawberry Cake",
    description: "Delicious strawberry cake that melts in your mouth.",
    stars: "4.6",
  },
];

const restaurantCardData = [
  {
    image: "/assets/images/Bukhara.png",
    restaurant: "Bukhara Dining",
    description:
      "Discover the art of fine dining at Bukhara, where exquisite flavors and elegant ambiance meet. Our globally-inspired menu is crafted with premium ingredients to offer a fusion of traditional and modern culinary delights.",
    stars: "4.5",
    distance: "35-40",
  },
  {
    image: "/assets/images/Banzara.png",
    restaurant: "Banzara Restaurant",
    description:
      "Step into Banzara, where the charm of rustic decor meets a menu filled with hearty, flavorful dishes. Whether you're craving comfort food or bold new tastes, our kitchen is ready to delight your senses.",
    stars: "4",
    distance: "40-45",
  },
  {
    image: "/assets/images/Mehico.png",
    restaurant: "Mehico Restaurant",
    description:
      "Embark on a culinary journey at Mehico, where vibrant Mexican flavors come alive. Savor our handcrafted dishes, made with fresh ingredients and authentic spices, in a lively and welcoming atmosphere.",
    stars: "4.3",
    distance: "25-30",
  },
  {
    image: "/assets/images/Maharaja.png",
    restaurant: "Maharaja Meals",
    description:
      "Experience a royal feast at Maharaja Meals, featuring rich, aromatic dishes inspired by traditional Indian cuisine. Each bite is a tribute to timeless flavors and exceptional hospitality.",
    stars: "4.7",
    distance: "15-20",
  },
];

const faqs = [
  {
    question: "I ordered food... where is it?!",
    answer:
      "We get it, hanger is real! 😤 Track your order in the app, and if it's taking longer than usual, remember: good food is worth the wait. Plus, you’ll appreciate it more after staring out the window every 5 seconds.",
  },
  {
    question: "What should I order if I don’t know what to order?",
    answer:
      "Ah, a classic conundrum. Try our Chef’s Surprise option — we’ll choose for you! Or scroll endlessly like you do on Netflix and pick whatever hits first. 🍿",
  },
  {
    question: "Why is my food not as pretty as the photos?",
    answer:
      "Our photographers have superpowers and really nice lighting. But don’t worry, it’ll taste just as amazing! Besides, it’s the inside (and the taste) that counts, right? 😅",
  },
  {
    question: "How do I get free delivery?",
    answer:
      "You could (1) check if it’s Taco Tuesday, (2) hope for a promo code, or (3) become besties with the delivery driver. Your call. 😉",
  },
  {
    question: "Help! I have too many options!",
    answer:
      "We know the struggle is real. Try the Eenie Meenie Miney Moe approach. Or filter by mood: Hungry? Super hungry? Or 'just a snack' (which we know really means 'full meal'). 🤷‍♂️",
  },
  {
    question: "Can I order from multiple restaurants?",
    answer:
      "One food craving at a time, please! But hey, if you really want that sushi-taco-pizza-burger combo, we’re here to make it happen. Just brace yourself for the wait… 🚴‍♀️🍣🌮🍕",
  },
  {
    question: "What happens if I fall asleep and miss my delivery?",
    answer:
      "The food goes on a spiritual journey back to the restaurant. Or your front desk might hold it, depending on your vibe with them. But no worries, you can re-order when you wake up. 😴",
  },
  {
    question: "What if my food is cold?",
    answer:
      "Uh-oh! Pop it in the microwave, or, if you want the VIP treatment, let us know, and we’ll make it right. Just think of it as a delicious, unexpected journey. 🍲",
  },
  {
    question: "Why don’t you deliver to my area yet?",
    answer:
      "Because the world is a big place, and we’re still growing! Drop us a hint on social, and who knows, your town could be next. (Also, start convincing your neighbors. The more, the merrier!) 🌍",
  },
];

const HomePage = () => {
  const [isPending, setIsPending] = useState(false);
  const handleDownloadCustomerApp = async () => {
    setIsPending(true);
    try {
      await downloadCustomerApp();
    } catch (error) {
      console.error(error);
      alert(error.message);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <>
      <UserAuthProvider>
        <HomeNav />
      </UserAuthProvider>
      <main className="bg-food-pattern bg-repeat selection:bg-rose-200">
        {/* Hero Section */}
        <section className="wrapper lg:grid grid-cols-[1fr_1fr]">
          <div className="lg:px-20 py-28 ">
            <div className="grid grid-cols-[auto_auto] place-items-center gap-5 w-max">
              <svg
                width="19"
                height="246"
                viewBox="0 0 19 246"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-44 sm:h-full z-50"
              >
                <path
                  d="M10 3L9.00001 243"
                  stroke="#363636"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeDasharray="10 10"
                />
                <circle cx="9.5" cy="40.5" r="9.5" fill="#363636" />
                <circle cx="9.5" cy="124.5" r="9.5" fill="#363636" />
                <circle cx="9.5" cy="207.5" r="9.5" fill="#363636" />
              </svg>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      bounce: 1,
                      type: "spring",
                      stiffness: 0.1,
                      staggerChildren: 0.3,
                    },
                  },
                }}
                className={`${onest.className} flex flex-col gap-4`}
              >
                <motion.h1
                  variants={{
                    hidden: { opacity: 0, x: 200 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  className="text-4xl sm:text-6xl lg:text-8xl font-bold w-max text-gray-800 text-shadow-blur"
                >
                  Crave.
                </motion.h1>
                <motion.h1
                  variants={{
                    hidden: { opacity: 0, x: 200 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  className="text-4xl sm:text-6xl lg:text-8xl font-bold w-max text-gray-800 text-shadow-blur"
                >
                  Click.
                </motion.h1>
                <motion.h1
                  variants={{
                    hidden: { opacity: 0, x: 200 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  className="text-4xl sm:text-6xl lg:text-8xl font-bold w-max text-primary-rose text-shadow-blur"
                >
                  Delivered.
                </motion.h1>
              </motion.div>
            </div>
            <p className="text-lg lg:text-2xl font-medium text-gray-600 my-5 text-shadow-blur">
              Get fresh foods and other treats at the convenience of your home.
              Order with us and enjoy exclusive discounts on your first order!
            </p>
            <motion.button
              initial={{ y: 50, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: {
                  bounce: 0.8,
                  type: "spring",
                },
              }}
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 5rem 1rem #ffda7f",
              }}
              whileTap={{ scale: 0.95 }}
              id="download-customer-app"
              className="bg-primary-grey text-white text-xl px-3 py-3 rounded-full font-semibold flex items-center gap-4 pr-7"
              onClick={handleDownloadCustomerApp}
            >
              <div className="bg-accent-yellow rounded-full p-2">
                <Image
                  src="/assets/icons/order-now.png"
                  width={25}
                  height={25}
                  alt="order now"
                />
              </div>
              {isPending ? "Loading" : "Download App"}
            </motion.button>
          </div>

          <div className="hidden relative lg:flex justify-center items-center">
            <Image
              src="/assets/images/hero-food-image.png"
              alt="hero food image"
              width={600}
              height={500}
              className="z-10 h-auto w-full"
            />
            <motion.div className="absolute w-1/2 bg-gradient-to-b from-primary-rose to-[#ffffffa2] right-0 top-5 bottom-0 rounded-2xl">
              <Image
                src="/assets/images/zigzagsvg.svg"
                height={2000}
                width={1000}
                alt="decorative image"
                className="h-full w-full object-cover"
              />
            </motion.div>
          </div>
        </section>

        <Image
          src="/assets/images/waves 1.svg"
          width={1920}
          height={120}
          className="h-auto w-full"
          alt="wave bg"
        />
        <div className=" w-full bg-gradient-to-b from-primary-rose to-white">
          {/* Food Showcase */}
          <section className="py-12 wrapper">
            <div className="container mx-auto text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-6">
                Top Choices
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10 p-10 ">
                {
                  /* Product Cards */
                  foodCardData.map(
                    ({ image, item, description, stars }, index) => (
                      <FoodCard
                        key={index}
                        image={image}
                        item={item}
                        description={description}
                        stars={stars}
                      />
                    )
                  )
                }
              </div>
            </div>
          </section>

          {/* Restaurants Section */}
          <section className="py-12 wrapper">
            <div className="container mx-auto text-center w-full">
              <h2 className="text-4xl font-bold text-rose-800 mb-6">
                Top Offers For You
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 md:p-10">
                {
                  /* Restaurant Cards */
                  restaurantCardData.map(
                    (
                      { image, restaurant, description, stars, distance },
                      index
                    ) => (
                      <RestaurantCard
                        key={index}
                        image={image}
                        restaurant={restaurant}
                        description={description}
                        stars={stars}
                        distance={distance}
                      />
                    )
                  )
                }
              </div>
            </div>
          </section>
        </div>

        {/* Deliver With Us */}

        <section className="py-10 lg:py-20 bg-white">
          <div className="wrapper flex flex-col justify-center items-center">
            <motion.h4
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`${onest.className} text-6xl font-bold text-center`}
            >
              Want to deliver cravings with us?
            </motion.h4>
            <motion.h3
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className={`text-grey-medium py-5 text-3xl text-center`}
            >
              Get out delivery partner app and start your journey now.
            </motion.h3>
            <motion.div
              initial={{
                opacity: 0,
                y: 100,
                background: "linear-gradient(to right, #FFE0E0, #FFFFFF)",
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.7,
                  bounce: 1,
                  stiffness: 100,
                  type: "spring",
                },
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.1,
                background: "linear-gradient(to right, #FFFFFF, #FFE0E0)",
              }}
              whileTap={{ scale: 0.95 }}
              className="tracking-wide text-xl py-3 px-8 rounded-full text-primary-rose font-bold my-8"
            >
              <Link
                href="/assets/animations/flying-globe.mp4"
                target="_blank"
                download="flying-globe.mp4"
              >
                Download delivery partner app
              </Link>
              <svg
                width="35"
                height="35"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="inline-block px-2"
              >
                <path
                  d="M28 20V25.3333C28 26.0406 27.719 26.7189 27.219 27.219C26.7189 27.719 26.0406 28 25.3333 28H6.66667C5.95942 28 5.28115 27.719 4.78105 27.219C4.28095 26.7189 4 26.0406 4 25.3333V20M9.33333 13.3333L16 20M16 20L22.6667 13.3333M16 20V4"
                  stroke="#FF1E46"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>
          </div>
        </section>

        <section className="w-full p-5 bg-white">
          <div className="wrapper">
            <h2 className="text-2xl font-bold text-tertiary-grey text-center py-7">
              Frequently Asked Questions
            </h2>
            {faqs.map(({ question, answer }, index) => (
              <FaqExpandableCard
                question={question}
                answer={answer}
                key={index}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default HomePage;
