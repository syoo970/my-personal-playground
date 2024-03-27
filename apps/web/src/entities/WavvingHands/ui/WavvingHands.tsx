"use client";
import { motion } from "framer-motion";
import { HtmlHTMLAttributes } from "react";

const WavvingHands = ({
  ...props
}: Pick<HtmlHTMLAttributes<HTMLSpanElement>, "style" | "className">) => {
  return (
    <motion.span
      animate="wavve"
      variants={{
        wavve: {
          rotate: -45,
          transition: {
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          },
        },
      }}
      {...props}
    >
      👋
    </motion.span>
  );
};

export default WavvingHands;
