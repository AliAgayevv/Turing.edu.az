import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import LongFAQItem from "../LongFAQItem";
import { yToCenter } from "../../utils/motionAnimations";

// Define interfaces for the data structure
interface FaqItem {
  question: string;
  answer: string;
  id?: number; // Optional because backend might not provide id
}

interface LongFAQProps {
  id: number;
  faqData?: FaqItem[]; // Pass FAQ data from parent component
}

function LongFAQ({ faqData }: LongFAQProps) {
  const [activeId, setActiveId] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.3,
  });

  const FAQitemVariant = yToCenter(20);

  const toggleVisibility = (clickedId: number) => {
    setActiveId((prev) => (prev === clickedId ? null : clickedId));
  };

  // Check if we have FAQ data
  if (!faqData || faqData.length === 0) {
    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={FAQitemVariant}
        className="mt-12 flex flex-col items-center justify-center"
      >
        <p className="text-gray-500">No FAQs available for this scholarship.</p>
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={FAQitemVariant}
      className="mt-12 flex flex-col items-center justify-center"
    >
      {faqData.map((item, index) => (
        <LongFAQItem
          key={index}
          question={item.question}
          answer={item.answer}
          isVisible={activeId === index}
          onClick={() => toggleVisibility(index)}
        />
      ))}
    </motion.div>
  );
}

export default LongFAQ;
