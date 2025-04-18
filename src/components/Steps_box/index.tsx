import React from "react";
import { IStepProps } from "../../const/types";
import { motion, useInView } from "framer-motion";
import { xToCenter } from "../../utils/motionAnimations";

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
  const stepBoxVariants = xToCenter(20);
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={stepBoxVariants}
      className="w-full h-auto rounded-2xl border p-4 sm:p-6 max-w-[33%]"
    >
      <span className="border px-2 py-1 rounded-lg text-white_ultraDark text-[14px]">
        {stepTitle}
      </span>

      <div className="mt-4 sm:mt-6">
        <p className="text-white_ultraDark text-[12px]">{stepType}</p>
        <p className="text-black_darktext-[18px] font-[500] leading-snug">
          {stepDetail}
        </p>
      </div>
    </motion.div>
  );
}
