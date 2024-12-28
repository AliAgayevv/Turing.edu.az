import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import LongFAQItem from "../LongFAQItem";
import fakeData from "../../datas/schoolarShip.json";
import { yToCenter } from "../../utils/motionAnimations";

interface LongFAQProps {
  id: any;
}

function LongFAQ({ id }: LongFAQProps) {
  const currentData = fakeData.find((item) => item.id === id);
  const [activeId, setActiveId] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.3,
  });
  const faq = currentData?.questions;
  const FAQitemVariant = yToCenter(20);

  const toggleVisibility = (clickedId: number) => {
    setActiveId((prev) => (prev === clickedId ? null : clickedId));
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={FAQitemVariant}
      className="mt-12 flex flex-col items-center justify-center"
    >
      {faq?.map((item) => (
        <LongFAQItem
          key={item.id}
          question={item.question}
          answer={item.answer}
          isVisible={activeId === item.id}
          onClick={() => toggleVisibility(item.id)}
        />
      ))}
    </motion.div>
  );
}

export default LongFAQ;
