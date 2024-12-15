import data from "../../datas/FAQdata.json";
import Teacher_card from "../Teacher_card";

interface IProps {
  category: string;
}

export default function Teachers_section({ category }: IProps) {
  const categoryData = data.find((item) => item.category === category);

  const teachers = categoryData?.instructors || [];

  console.log(teachers);
  return (
    <div>
      <h4 className="opacity-60 uppercase text-[14px] text-black_dark">
        Instructors
      </h4>
      <h2 className="text-[48px] font-500 font-jakarta text-black_dark w-[500px] mb-12">
        Guiding Future Lights: Our Instructors{" "}
      </h2>
      <div className="grid grid-cols-4 gap-6">
        {teachers.map((item) => (
          <Teacher_card
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
