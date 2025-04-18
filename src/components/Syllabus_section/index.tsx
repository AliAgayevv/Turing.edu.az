import { useState } from "react";
import FAQItem from "../FAQ_item";
import { useGetSpecialityByIdQuery } from "../../store/services/specialityApi";

// Define a Module interface
interface Module {
  id?: number | string;
  title: string;
  description: string;
}

interface SyllabusSectionProps {
  category: string | number | undefined; // Updated to allow undefined
  modules?: Module[]; // Added type
}

export default function Syllabus_section({
  category,
  modules: propModules,
}: SyllabusSectionProps) {
  const { data } = useGetSpecialityByIdQuery(category);
  const [activeId, setActiveId] = useState<string | number | null>(null);

  // Use modules from props if available, otherwise from data
  const modules = propModules || (data?.modules as Module[]) || [];
  const syllabusLink = data?.syllabusUrl || "#";

  const toggleVisibility = (clickedId: number) => {
    setActiveId((prev) => (prev === clickedId ? null : clickedId));
  };

  return (
    <div className="flex flex-col gap-8 md:flex-row md:justify-between">
      <div className="flex flex-col">
        <a
          href={syllabusLink}
          download
          className="opacity-60 uppercase text-[14px] text-black_dark cursor-pointer w-full"
        >
          <h4>Download Syllabus</h4>
        </a>
        <h2 className="text-[48px] font-500 font-jakarta text-black_dark w-full md:w-[500px] mb-4 md:mb-12">
          Learn by doing
        </h2>
        <a href={syllabusLink} download>
          <button className="border w-full mb-10 md:w-[198px] h-[44px] rounded-full">
            Download Syllabus
          </button>
        </a>
      </div>
      <div className="w-full md:w-1/2">
        {modules && modules.length > 0 ? (
          modules.map((module: Module, index: number) => (
            <FAQItem
              key={module.id || index}
              question={module.title}
              answer={module.description}
              onClick={() => toggleVisibility(index)}
              isVisible={activeId === index}
            />
          ))
        ) : (
          <p className="text-black_dark opacity-70">
            No syllabus modules available.
          </p>
        )}
      </div>
    </div>
  );
}
