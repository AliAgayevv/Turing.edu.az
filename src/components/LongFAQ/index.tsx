import { useState } from "react";
import LongFAQItem from "../LongFAQItem";
import fakeData from "../../datas/schoolarShip.json";

interface LongFAQProps {
  id: number | string;
}

function LongFAQ({ id }: LongFAQProps) {
  const currentData = fakeData.find((item) => item.id === id);
  const [activeId, setActiveId] = useState<string | null>(null);
  const faq = currentData?.questions;

  const toggleVisibility = (clickedId: string) => {
    // Eğer aynı id'ye tıklanırsa kapat, değilse aç
    setActiveId((prev) => (prev === clickedId ? null : clickedId));
  };

  return (
    <div className="mt-12 flex flex-col items-center justify-center">
      {faq?.map((item) => (
        <LongFAQItem
          key={item.id}
          question={item.question}
          answer={item.answer}
          isVisible={activeId === item.id} // Sadece aktif ID'yi kontrol et
          onClick={() => toggleVisibility(item.id)} // ID'yi toggleVisibility'ye gönder
        />
      ))}
    </div>
  );
}

export default LongFAQ;
