import React from "react";
import { IStepProps } from "../../const/types";
import { motion, useInView } from "framer-motion";

export default function Steps_box({
  stepTitle,
  stepType,
  stepDetail,
}: IStepProps) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.3,
  });
  const stepBoxVariants = {
    hidden: {
      opacity: 0,
      x: 20,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={stepBoxVariants}
      className="w-full max-w-[415px] h-auto rounded-2xl border p-4 sm:p-6"
    >
      <span className="border px-2 py-1 rounded-lg text-white_ultraDark text-[14px]">
        {stepTitle}
      </span>

      <div className="mt-4 sm:mt-6">
        <p className="text-white_ultraDark text-[12px]">
          {stepType.toUpperCase()}
        </p>
        <p className="text-black_darktext-[18px] font-[500] leading-snug">
          {stepDetail}
        </p>
      </div>
    </motion.div>
  );
}
