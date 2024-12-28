import { useRef } from "react";
import { IQAProps } from "../../const/types";
import { motion, useInView } from "framer-motion";
import { yToCenter } from "../../utils/motionAnimations";

const FAQAnimationItem = yToCenter(-100);

function FAQItem({ question, answer, isVisible, onClick }: IQAProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.3,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={FAQAnimationItem}
      className="w-[430px] md:w-[856px] p-4 h-auto rounded-lg border border-white_medium mb-4"
    >
      <div
        className="flex gap-5 md:gap-2 items-center cursor-pointer"
        onClick={onClick}
      >
        <button className="text-xl font-[500] font-jakarta text-black_dark focus:outline-none">
          {isVisible ? "-" : "+"}
        </button>
        <h4 className="text-xl font-[500] font-jakarta text-black_dark">
          {question}
        </h4>
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isVisible ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="py-2 px-3 text-white_dark text-sm sm:text-[14px] text-left leading-relaxed">
          {answer}
        </p>
      </div>
    </motion.div>
  );
}

export default FAQItem;
