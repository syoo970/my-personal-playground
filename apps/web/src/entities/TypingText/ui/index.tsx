"use client";
import React, { HtmlHTMLAttributes } from "react";
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

type MotionType = {
  innerClassName?: string;
  cursor?: boolean;
};

const TypingText = ({
  text,
  multiline,
  textList,
  innerClassName,
  cursor = true,
  ...props
}: TypingTextProps & HtmlHTMLAttributes<HTMLSpanElement> & MotionType) => {
  return (
    <span {...props}>
      {multiline ? (
        <Multiple textList={textList} innerClassName={innerClassName} />
      ) : (
        <Single text={text} purpose="single" innerClassName={innerClassName} />
      )}
      {cursor ? <Cursor /> : null}
    </span>
  );
};

export default TypingText;

type SingleProps = {
  text: string;
  purpose?: "single" | "multiple";
  onComplete?: () => void;
};

const Single = ({
  text,
  purpose,
  onComplete,
  innerClassName,
}: SingleProps & MotionType) => {
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

  return <motion.span className={innerClassName}>{displayText}</motion.span>;
};

const Multiple = ({
  textList,
  innerClassName,
}: { textList: string[] } & MotionType) => {
  const [textIndex, setTextIndex] = React.useState(0);

  return (
    <>
      {textList.map(
        (text, index) =>
          textIndex === index && (
            <Single
              key={index}
              text={text}
              innerClassName={innerClassName}
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
