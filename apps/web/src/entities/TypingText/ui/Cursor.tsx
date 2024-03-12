"use client";
import { motion } from "framer-motion";
import { cursorVariants } from "../lib";

const Cursor = () => {
  return (
    <motion.div
      variants={cursorVariants}
      animate="blinking"
      className="inline-block h-5 w-[1px] translate-y-1 bg-slate-900 bg-[white]"
    />
  );
};

export default Cursor;
