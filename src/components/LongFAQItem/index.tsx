import { IQAProps } from "../../const/types";

interface LongFAQItemProps extends IQAProps {
  isVisible: boolean;
  onClick: () => void;
}

function LongFAQItem({
  question,
  answer,
  isVisible,
  onClick,
}: LongFAQItemProps) {
  return (
    <div className="w-full max-w-[1076px] p-4 sm:p-6 h-auto rounded-lg border border-white_medium mb-4 mx-auto">
      <div
        className="flex gap-4 text-left items-center cursor-pointer"
        onClick={onClick}
      >
        <button className="text-lg sm:text-xl font-[500] font-jakarta text-black_dark focus:outline-none">
          {isVisible ? "-" : "+"}
        </button>
        <h4 className="text-base sm:text-xl font-[500] font-jakarta text-black_dark leading-tight">
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
    </div>
  );
}

export default LongFAQItem;
