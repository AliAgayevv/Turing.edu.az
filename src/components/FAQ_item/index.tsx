// FAQItem.jsx
import { useState } from "react";
import data from "../../datas/FAQdata.json";
import { IQAProps } from "../../const/types";

function FAQItem({ question, answer }: IQAProps) {
  const [isVisible, setIsVisible] = useState(false);
  console.log(data);

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    // TODO: SpecialyInner de faqITEM sabit width yoxdu deye bezi itemler goruntunu pozur. RAILDEN KOMEK ISTE
    <div className="w-full md:w-[856px] p-4 h-auto rounded-lg border border-white_medium mb-4">
      <div
        className="flex gap-5 md:gap-2 items-center cursor-pointer"
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
        <p className="pl-10 py-2 md:py-2 md:px-5 text-white_dark text-[14px] transition-all duration-300 w-full md:w-5/6">
          {answer}
        </p>
      )}
    </div>
  );
}

export default FAQItem;
