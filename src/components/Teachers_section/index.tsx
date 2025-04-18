import { useGetSpecialityByIdQuery } from "../../store/services/specialityApi";
import Teacher_card from "../Teacher_card";

// Define Teacher interface
interface Teacher {
  id?: number | string;
  fullName: string;
  positionWithCompany: string;
  photoUrl: string;
  linkedinUrl?: string;
}

interface IProps {
  category: string | number | undefined;
  teachers?: Teacher[]; // Added teachers prop
}

export default function Teachers_section({
  category,
  teachers: teachersProp,
}: IProps) {
  const { data } = useGetSpecialityByIdQuery(category);

  // Use teachers from props if provided, otherwise use data from API
  const teachersToShow = teachersProp || (data?.teachers as Teacher[]) || [];

  return (
    <div className="w-full">
      <h4 className="opacity-60 uppercase text-[12px] sm:text-[14px] text-black_dark">
        Instructors
      </h4>
      <h2 className="text-[40px] md:text-[48px] font-[500] font-jakarta text-black_dark w-full md:w-[550px] mb-6 md:mb-12">
        Guiding Future Lights: Our Instructors
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 md:gap-[16]">
        {teachersToShow.map((item: Teacher) => (
          <Teacher_card
            key={item.id || item.fullName}
            name={item.fullName}
            workPosition={item.positionWithCompany}
            photo={item.photoUrl}
            connect={item.linkedinUrl}
          />
        ))}
      </div>
    </div>
  );
}
