"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const FaqExpandableCard = ({ question, answer }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border-grey-light-3 rounded-lg border-2 px-5 mb-6">
      <div className="flex items-center justify-between w-full">
        <p className="md:text-lg font-normal text-grey-dark-3 py-5">
          {question}
        </p>
        <Image
          src="/assets/icons/expand-down.png"
          width={40}
          height={40}
          alt="expand icon"
          className="cursor-pointer"
          onClick={() => {
            setIsExpanded(!isExpanded);
          }}
        />
      </div>

      {/* Animated section */}
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <hr />
            <p className="text-md font-normal text-grey-dark-3 py-5">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FaqExpandableCard;
