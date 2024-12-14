import data from "../../datas/FAQdata.json";
import FAQItem from "../FAQ_item";

export default function Syllabus_section({ category }) {
  const categoryData = data.find((item) => item.category === category);

  const syllabusLink = categoryData?.syllabusLink || [];
  const modules = categoryData?.modules || [];

  console.log(modules);
  return (
    <div className="flex justify-between">
      <div className="flex flex-col">
        <h4 className="opacity-60 uppercase text-[14px] text-black_dark">
          Syllabus
        </h4>
        <h2 className="text-[48px] font-500 font-jakarta text-black_dark w-[500px] mb-12">
          Learn by doing
        </h2>
        <button className="border w-[198px] h-[44px] rounded-full">
          Download Syllabus
        </button>
      </div>
      <div className="">
        {modules.map((item) => (
          <FAQItem
            key={item.id}
            question={item.title}
            answer={item.moduleDesc}
          />
        ))}
      </div>
    </div>
  );
}
