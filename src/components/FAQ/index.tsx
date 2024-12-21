import FAQItem from "../FAQ_item";
import faqData from "../../datas/FAQdata.json";
import { useState } from "react";

interface IProps {
  category: string;
}

export default function FAQ({ id }: IProps) {
  const categoryData = faqData.find((item) => item.category === id);
  const [activeId, setActiveId] = useState<string | null>(null);
  const faq = categoryData?.questions || [];

  const toggleVisibility = (clickedId: string) => {
    setActiveId((prev) => (prev === clickedId ? null : clickedId));
  };

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
        {faq.length > 0 ? (
          faq.map((item) => (
            <FAQItem
              key={item.id}
              question={item.question}
              answer={item.answer}
              isVisible={activeId === item.id} // Sadece aktif ID'yi kontrol et
              onClick={() => toggleVisibility(item.id)} // ID'yi toggleVisibility'ye gönder
            />
          ))
        ) : (
          <p className="text-gray-500">No FAQs available for this category.</p>
        )}
      </div>
    </div>
  );
}
