"use client";

import Description from "@components/Description";
import TeamCard from "@components/TeamCard";
import Steps from "@components/Steps";
import Image from "next/image";
import { motion } from "framer-motion";

const TeamData = [
  {
    image: "/assets/images/about/Rahul.png",
    name: "Rahul Chakraborty",
    role: "Frontend and Backend",
    desc1: "UI Design",
    desc2: "Frontend Development",
    desc3: "Backend API Development",
    delay: 0.3,
  },
  {
    image: "/assets/images/about/Saptak.png",
    name: "Saptak Manna",
    role: "Android and Backend",
    desc1: "Android Development",
    desc2: "Backend API Development",
    desc3: "UI Design",
    delay: 0.5,
  },
  {
    image: "/assets/images/about/Sneha.png",
    name: "Sneha Datta",
    role: "Android and UI/UX",
    desc1: "Android Development",
    desc2: "UI Design",
    desc3: "UX Design",
    delay: 0.7,
  },
  {
    image: "/assets/images/about/Souvik.png",
    name: "Souvik Mukherjee",
    role: "Chief Analytics/Data Officer",
    desc1: "Data Analytics Visionary",
    desc2: "Database Administrator",
    desc3: "Predictive Analytics Expert",
    delay: 0.9,
  },
];

const aboutus = () => {
  return (
    <>
      <div>
        <div className="bg-about-background bg-cover min-h-screen flex flex-col">
          <section className="p-8 lg:p-0 flex flex-grow items-center justify-center  shadow-[0_-5rem_5rem_white_inset]">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-6xl lg:text-8xl font-bold text-gray-900 mb-9">
                Who Are We?
              </h1>
              <p className="text-lg md:text-2xl md:font-normal font-semibold text-gray-600 leading-relaxed">
                We are a dynamic food delivery company dedicated to bringing
                your favorite meals right to your doorstep with speed and
                convenience. We partner with top restaurants and local eateries
                to offer a wide variety of cuisines, ensuring there&apos;s
                something for everyone. Our mission is to create a seamless and
                enjoyable ordering experience, driven by our passion for great
                food and exceptional customer service.
              </p>
            </div>
          </section>
        </div>
        <Description />
        <p className="text-center text-5xl font-bold mt-24 mb-10">Our Team</p>
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {TeamData.map(
              ({ image, name, role, desc1, desc2, desc3 }, index) => (
                <TeamCard
                  key={index}
                  image={image}
                  name={name}
                  role={role}
                  desc1={desc1}
                  desc2={desc2}
                  desc3={desc3}
                />
              )
            )}
          </div>
        </div>
        <p className="text-center text-5xl font-bold mt-24 mx-4 md:mx-0">
          From Phone to Door
        </p>
        <Steps />
        <div className="flex justify-center items-center md:mt-20 mb-14">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-20 m-10">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="rounded-md text-center max-w-96 p-8 bg-card1_bg bg-cover shadow-2xl"
            >
              <h2 className="text-orange-800 text-4xl font-bold mb-4">
                Mission
              </h2>
              <p className="text-orange-800 text-xl font-semibold">
                Our mission is to make mealtime moments more enjoyable by
                delivering fresh, high-quality meals from local restaurants
                directly to our customers&apos; doors. We strive to provide a
                fast, reliable, and convenient food delivery experience,
                tailored to meet the diverse tastes and preferences of our
                users.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className=" rounded-md text-center max-w-96 p-8 bg-card2_bg bg-cover shadow-2xl"
            >
              <h2 className="text-4xl text-cyan-900 font-bold mb-4">Vision</h2>
              <p className="text-xl text-cyan-900 font-semibold">
                Our vision is to revolutionize the way people connect with their
                favourite food, becoming the most trusted food delivery
                platform. We envision a world where every craving can be
                satisfied effortlessly, while promoting sustainability and
                supporting local communities through innovative, customer-driven
                solutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.1 }}
              className="rounded-md text-center max-w-96 p-8 bg-card3_bg shadow-2xl"
            >
              <h2 className="text-green-900 text-4xl font-bold mb-4">Values</h2>
              <p className="text-green-900 text-xl font-semibold">
                We put our customers first, ensuring every meal delivered is
                timely, fresh, and satisfying. We are committed to delivering
                excellence. We support local restaurants and foster growth in
                the communities we serve. We aim to minimize our impact on
                environment through responsible practices and partnerships.
              </p>
            </motion.div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="flex justify-center mb-10 max-w-screen-2xl mx-auto"
        >
          <div className="bg-gradient-to-r shadow-2xl from-red-950 to-red-700 bg-cover  rounded-md m-14">
            <div className="grid grid-rows-[1fr_auto] md:grid-cols-[1fr_auto]">
              <div>
                <p className="text-white text-2xl md:text-4xl font-bold pl-14 mt-8 mb-2">
                  Help us in fulfilling the cravings of the world
                </p>
                <button className="bg-accent-yellow font-bold text-black rounded-full px-5 py-2 ml-14 my-6 hover:bg-yellow-500">
                  Contact us
                </button>
              </div>
              <div>
                <Image
                  alt=""
                  className="mr-10 hidden md:inline-block"
                  src="/assets/images/about/dots.svg"
                  width={200}
                  height={150}
                ></Image>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default aboutus;
