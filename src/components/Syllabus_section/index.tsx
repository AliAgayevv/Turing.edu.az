import data from "../../datas/FAQdata.json";
import FAQItem from "../FAQ_item";
// TODO : ADD SYLLABUS LINK
interface SyllabusSectionProps {
  category: string;
}

export default function Syllabus_section({ category }: SyllabusSectionProps) {
  const categoryData = data.find((item) => item.category === category);

  const syllabusLink = categoryData?.syllabusLink || "#";
  const modules = categoryData?.modules || [];

  console.log(modules);

  return (
    <div className="flex flex-col gap- md:flex-row md:justify-between">
      <div className="flex flex-col">
        <a
          href={syllabusLink}
          download
          className="opacity-60 uppercase text-[14px] text-black_dark cursor-pointer w-full"
        >
          <h4>Download Syllabus</h4>
        </a>
        <h2 className="text-[48px] font-500 font-jakarta text-black_dark w-[500px] mb-4 md:mb-12">
          Learn by doing
        </h2>
        <a href={syllabusLink} download>
          <button className="border w-full mb-10 md:w-[198px] h-[44px] rounded-full">
            Download Syllabus
          </button>
        </a>
      </div>
      <div>
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
