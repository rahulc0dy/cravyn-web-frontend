import React from "react";
import { motion } from "framer-motion";

const TeamCard = ({image,name,role,desc1,desc2,desc3,delay}) => {
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{delay:0.5}}
    viewport={{once:true}}
    className="max-w-xs p-6 bg-white rounded-lg shadow-md border-2 border- border-black m-10">
      <div className="flex flex-col items-center">
        <img src={image} className="w-40 h-45 rounded-full mb-4"
        />
        <h2 className="text-2xl font-semibold">{name}</h2>
        <p className="text-gray-500 text-lg mb-6">{role}</p>

        <ul className="text-gray-700 text-left space-y-2">
          <li className="flex items-center font-semibold">
            <input type="checkbox" checked readOnly className="w-4 h-4 mr-2 accent-blue-500"
            />
            {desc1}
          </li>
          <li className="flex items-center font-semibold">
            <input type="checkbox" checked readOnly className="w-4 h-4 mr-2 accent-blue-500"
            />
            {desc2}
          </li>
          <li className="flex items-center font-semibold">
            <input type="checkbox" checked readOnly className="w-4 h-4 mr-2 accent-blue-500"
            />
            {desc3}
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default TeamCard;
