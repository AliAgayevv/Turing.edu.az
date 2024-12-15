// FAQItem.jsx
import { useState } from "react";
import data from "../../datas/FAQdata.json";

function LongFAQItem({ question, answer }) {
  const [isVisible, setIsVisible] = useState(false);
  console.log(data);

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div className="w-[1076px] p-4 h-auto rounded-lg border border-white_medium mb-4">
      <div
        className="flex gap-2 items-center cursor-pointer"
        onClick={toggleVisibility}
      >
        <button className="text-xl font-[500] font-jakarta text-black_dark focus:outline-none">
          {isVisible ? "-" : "+"}
        </button>
        <h4 className="text-xl font-[500] font-jakarta text-black_dark">
          {question}
        </h4>
      </div>
      {isVisible && (
        <p className="py-2 px-3 text-white_dark text-[14px] transition-all duration-300 w-5/6 text-left">
          {answer}
        </p>
      )}
    </div>
  );
}

export default LongFAQItem;
