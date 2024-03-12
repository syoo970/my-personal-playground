"use client";
import React from "react";
import { motion, useMotionValue, animate, useTransform } from "framer-motion";
import Cursor from "./Cursor";

type TypingTextProps =
  | {
      text: string;
      textList?: never;
      multiline?: false;
    }
  | {
      text?: never;
      multiline: true;
      textList: string[];
    };

const TypingText = ({ text, multiline, textList }: TypingTextProps) => {
  return (
    <span>
      {multiline ? null : <Single text={text} />}
      <Cursor />
    </span>
  );
};

export default TypingText;

const Single = ({ text }: { text: string }) => {
  const cnt = useMotionValue(0);
  const newValue = useTransform(cnt, (v) => Math.round(v));
  const displayText = useTransform(newValue, (v) => text.slice(0, v));

  React.useEffect(() => {
    const controls = animate(cnt, text.length, {
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: 1,
    });
    return () => {
      controls.stop();
    };
  }, []);

  return <motion.span>{displayText}</motion.span>;
};
