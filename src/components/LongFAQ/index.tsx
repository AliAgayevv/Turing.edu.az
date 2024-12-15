import fakeData from "../../datas/schoolarShip.json";
import LongFAQItem from "../LongFAQItem";

interface IProps {
  id: number | string;
}

export default function LongFAQ({ id }: IProps) {
  const currentData = fakeData.find((item) => item.id === id);
  const faq = currentData?.questions;
  return (
    <div className="mt-24">
      <div className="text-center">
        <h2 className="font-jakarta font-[500] text-[32px]">
          Frequently asked questions (FAQ)
        </h2>
        <h4 className="text-[14px] text-black_light">{currentData?.faqDesc}</h4>
        <div className="mt-12 flex flex-col items-center justify-center">
          {faq?.map((item) => (
            <LongFAQItem question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </div>
  );
}
