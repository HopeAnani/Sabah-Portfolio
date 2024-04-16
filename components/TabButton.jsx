import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "text-[#D5A848] underline underline-offset-8 " : "dark:text-[#ADB7BE] text-[#807f7d]"; 

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 text-md md:text-2xl hover:text-[#e9b953]  ${buttonClasses}`}>
        
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-primary-500 mt-2 mr-3"
      ></motion.div>
    </button>
  );
};

export default TabButton;