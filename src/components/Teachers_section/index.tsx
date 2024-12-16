import data from "../../datas/FAQdata.json";
import Teacher_card from "../Teacher_card";

interface IProps {
  category: string | number;
}

export default function Teachers_section({ category }: IProps) {
  const categoryData = data.find((item) => item.category === category);
  const teachers = categoryData?.instructors || [];

  return (
    <div className="w-full">
      {/* Section Title */}
      <h4 className="opacity-60 uppercase text-[12px] sm:text-[14px] text-black_dark">
        Instructors
      </h4>
      <h2 className="text-[40px]  md:text-[48px] font-[500] font-jakarta text-black_dark w-full md:w-[550px] mb-6 md:mb-12">
        Guiding Future Lights: Our Instructors
      </h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {teachers.map((item) => (
          <Teacher_card
            key={item.name} // Always include a key when mapping
            name={item.name}
            workPosition={item.workPosition}
            photo={item.photo}
            connect={item.connect}
          />
        ))}
      </div>
    </div>
  );
}
