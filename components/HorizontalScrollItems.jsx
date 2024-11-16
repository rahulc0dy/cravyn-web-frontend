"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  { id: 1, title: "Pizza", img: "/assets/images/Burger.png" },
  { id: 2, title: "Chicken", img: "/assets/images/Burger.png" },
  { id: 3, title: "Burger", img: "/assets/images/Burger.png" },
  { id: 4, title: "Momos", img: "/assets/images/Burger.png" },
  { id: 5, title: "Rolls", img: "/assets/images/Burger.png" },
  { id: 6, title: "Cake", img: "/assets/images/Burger.png" },
  { id: 7, title: "asdf", img: "/assets/images/Burger.png" },
  { id: 8, title: "afd", img: "/assets/images/Burger.png" },
  { id: 9, title: "asdfsd", img: "/assets/images/Burger.png" },
  { id: 10, title: "asdf", img: "/assets/images/Burger.png" },
  { id: 11, title: "Caake", img: "/assets/images/Burger.png" },
  { id: 12, title: "Cakasde", img: "/assets/images/Burger.png" },
  { id: 13, title: "Cake", img: "/assets/images/Burger.png" },
];

const HorizontalCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < items.length - 5) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="flex items-center justify-center gap-4 overflow-hidden relative">
      <button
        onClick={handlePrev}
        disabled={currentIndex === 0}
        className="bg-white p-2 rounded-full shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {"<"}
      </button>
      <div className="flex gap-4 w-[80%] overflow-hidden">
        <AnimatePresence initial={false}>
          {items.slice(currentIndex, currentIndex + 5).map((item) => (
            <motion.div
              key={item.id}
              className="flex flex-col items-center justify-center flex-shrink-0 w-[150px] h-[150px] bg-gray-100 rounded-full shadow-lg"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-[80%] h-[80%] rounded-full object-cover"
              />
              <p className="mt-2 text-sm font-medium">{item.title}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <button
        onClick={handleNext}
        disabled={currentIndex >= items.length - 5}
        className="bg-white p-2 rounded-full shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {">"}
      </button>
    </div>
  );
};

export default HorizontalCarousel;
