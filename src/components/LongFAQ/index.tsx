import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView, delay } from "framer-motion";
import LongFAQItem from "../LongFAQItem";
import fakeData from "../../datas/schoolarShip.json";

interface LongFAQProps {
  id: number | string;
}

function LongFAQ({ id }: LongFAQProps) {
  const currentData = fakeData.find((item) => item.id === id);
  const [activeId, setActiveId] = useState<string | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.3,
  });
  const faq = currentData?.questions;
  const FAQitemVariant = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const toggleVisibility = (clickedId: string) => {
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
      {faq?.map((item, index) => (
        <LongFAQItem
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
