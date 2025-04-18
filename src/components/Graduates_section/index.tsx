import { useGetSpecialityByIdQuery } from "../../store/services/specialityApi";
import Graduates_card from "../Graduates_card";

// Define the Graduate interface
interface Graduate {
  id?: number | string;
  fullName: string;
  coverPhotoUrl: string;
  videoUrl: string;
  positionWithCompany: string;
}

interface IProps {
  category: string | number | undefined;
  graduates?: Graduate[]; // Added graduates prop to interface
}

export default function Graduates_section({
  category,
  graduates: graduatesProp,
}: IProps) {
  const { data } = useGetSpecialityByIdQuery(category);

  // Use graduates from props if provided, otherwise use data from API
  const graduatesToShow =
    graduatesProp || (data?.graduates as Graduate[]) || [];

  return (
    <div>
      <h4 className="opacity-60 uppercase text-[14px] text-black_dark">
        Our graduates
      </h4>
      <h1 className="text-4xl md:text-5xl font-jakarta font-[500] text-black_dark py-4">
        Honoring Our Graduates
        <br />
        in <span className="text-blue_light">Turing Academy</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {graduatesToShow.slice(0, 4).map((item: Graduate, index: number) => (
          <Graduates_card
            key={index}
            studentName={item.fullName}
            coverPhoto={item.coverPhotoUrl}
            videoUrl={item.videoUrl}
            desc={item.positionWithCompany}
          />
        ))}
      </div>
    </div>
  );
}
