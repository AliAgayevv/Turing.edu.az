import { useState } from "react";
import { IQAProps } from "../../const/types";

function LongFAQItem({ question, answer }: IQAProps) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div className="w-full max-w-[1076px] p-4 sm:p-6 h-auto rounded-lg border border-white_medium mb-4 mx-auto">
      {/* Header Section */}
      <div
        className="flex gap-2 sm:gap-4 items-center cursor-pointer"
        onClick={toggleVisibility}
      >
        <button className="text-lg sm:text-xl font-[500] font-jakarta text-black_dark focus:outline-none">
          {isVisible ? "-" : "+"}
        </button>
        <h4 className="text-base sm:text-xl font-[500] font-jakarta text-black_dark leading-tight">
          {question}
        </h4>
      </div>

      {/* Answer Section */}
      {isVisible && (
        <p className="py-2 px-3 text-white_dark text-sm sm:text-[14px] transition-all duration-300 text-left leading-relaxed">
          {answer}
        </p>
      )}
    </div>
  );
}

export default LongFAQItem;
