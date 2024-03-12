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
      {multiline ? (
        <Multiple textList={textList} />
      ) : (
        <Single text={text} purpose="single" />
      )}
      <Cursor />
    </span>
  );
};

export default TypingText;

type SingleProps = {
  text: string;
  purpose?: "single" | "multiple";
  onComplete?: () => void;
};

const Single = ({ text, purpose, onComplete }: SingleProps) => {
  const cnt = useMotionValue(0);
  const newValue = useTransform(cnt, (v) => Math.round(v));
  const displayText = useTransform(newValue, (v) => text.slice(0, v));

  React.useEffect(() => {
    const controls = animate(cnt, text.length, {
      duration: 2,
      ease: "easeInOut",
      repeat: purpose === "single" ? Infinity : 1,
      repeatType: "reverse",
      repeatDelay: 1,
      onComplete: () => {
        onComplete && onComplete();
      },
    });
    return () => {
      controls.stop();
    };
  }, []);

  return <motion.span>{displayText}</motion.span>;
};

const Multiple = ({ textList }: { textList: string[] }) => {
  const [textIndex, setTextIndex] = React.useState(0);

  React.useEffect(() => {
    console.log(textIndex);
    console.log(textList[textIndex]);
  }, [textIndex]);

  return (
    <>
      {textList.map(
        (text, index) =>
          textIndex === index && (
            <Single
              key={index}
              text={text}
              purpose="multiple"
              onComplete={() => {
                setTextIndex((prev) => (prev + 1) % textList.length);
              }}
            />
          )
      )}
    </>
  );
};
