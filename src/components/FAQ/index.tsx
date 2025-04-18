import FAQItem from "../FAQ_item";
import { useState } from "react";
import { useGetSpecialityByIdQuery } from "../../store/services/specialityApi";

interface FaqData {
  questions: string[];
  answers: string[];
}

interface IProps {
  id: string | number | undefined;
  faqData?: FaqData; // Added faqData prop to interface
}

export default function FAQ({ id, faqData }: IProps) {
  const { data, isLoading, error } = useGetSpecialityByIdQuery(id);
  const [activeId, setActiveId] = useState<number | null>(null);

  const toggleVisibility = (clickedId: number) => {
    setActiveId((prev) => (prev === clickedId ? null : clickedId));
  };

  // Use faqData from props if provided, otherwise use data from API
  const faqToUse = faqData || (data?.faq as FaqData);

  // Handle loading state
  if (isLoading && !faqData) {
    return (
      <div className="w-full px-7 py-10 flex flex-col md:flex-row justify-between">
        <div className="mb-8 md:mb-0">
          <h2 className="font-jakarta font-[500] text-5xl text-black_solid">
            FAQ
          </h2>
          <p className="text-black_light text-[14px]">Loading FAQs...</p>
        </div>
      </div>
    );
  }

  // Handle error state
  if (error && !faqData) {
    return (
      <div className="w-full px-7 py-10 flex flex-col md:flex-row justify-between">
        <div className="mb-8 md:mb-0">
          <h2 className="font-jakarta font-[500] text-5xl text-black_solid">
            FAQ
          </h2>
          <p className="text-black_light text-[14px]">
            Error loading FAQs. Please try again later.
          </p>
        </div>
      </div>
    );
  }

  // Check if we have FAQ data
  if (!faqToUse) {
    return (
      <div className="w-full px-7 py-10 flex flex-col md:flex-row justify-between">
        <div className="mb-8 md:mb-0">
          <h2 className="font-jakarta font-[500] text-5xl text-black_solid">
            FAQ
          </h2>
          <p className="text-black_light text-[14px]">
            No FAQs available for this category.
          </p>
        </div>
      </div>
    );
  }

  // Extract questions and answers
  const { questions, answers } = faqToUse;

  // Check if questions and answers exist and have content
  if (
    !questions ||
    !answers ||
    questions.length === 0 ||
    answers.length === 0
  ) {
    return (
      <div className="w-full px-7 py-10 flex flex-col md:flex-row justify-between">
        <div className="mb-8 md:mb-0">
          <h2 className="font-jakarta font-[500] text-5xl text-black_solid">
            FAQ
          </h2>
          <p className="text-black_light text-[14px]">
            No FAQs available for this category.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full px-7 py-10 flex flex-col md:flex-row justify-between">
      <div className="mb-8 md:mb-0">
        <h2 className="font-jakarta font-[500] text-5xl text-black_solid">
          FAQ
        </h2>
        <p className="text-black_light text-[14px]">
          We're here to support your design journey.
        </p>
      </div>
      <div className="flex flex-col items-start w-full md:w-2/3">
        {questions.map((question: string, index: number) => (
          <FAQItem
            key={index}
            question={question}
            answer={answers[index] || ""}
            onClick={() => toggleVisibility(index)}
            isVisible={activeId === index}
          />
        ))}
      </div>
    </div>
  );
}
