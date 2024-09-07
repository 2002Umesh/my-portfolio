"use client";

import {motion } from "framer-motion";
//hooks
import useScrollProgess from "@/hooks/useScrollProgess";

//variant
const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
};

const Template = ({ children }) => {
  const completetion = useScrollProgess();
  return (
    <>
      <motion.main
        variants={variants}
        intial="hidden"
        animate="enter"
        transition={{ Type: "linear", delay: 0.2, duration: 0.4 }}
      >
        {children}
      </motion.main>
      {/* completion bar */}
      <span
        style={{ transform: `translateY(${completetion - 100}%)` }}
        className="fixed z-50 bg-primary w-1 top-0 right-0 bottom-0 transition-all duration-700"
      ></span>
      {/* <div className="h-[4000px]"></div> */}
    </>
  );
};

export default Template;
