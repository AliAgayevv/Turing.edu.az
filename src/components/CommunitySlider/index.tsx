import photo1 from "../../assets/photos/communityBGPHOTOS/photo1.jpeg";
import photo2 from "../../assets/photos/communityBGPHOTOS/photo2.jpeg";
import photo3 from "../../assets/photos/communityBGPHOTOS/photo3.jpeg";
import photo4 from "../../assets/photos/communityBGPHOTOS/photo4.png";
import { useBreakpoint } from "../../hooks/useBreakpoint";

const fakeData = [
  {
    id: 1,
    image: photo1,
    desc: "Biz çox maraqlı bir şey edərək, tələbələrlə astaraya gəzməyə getdik.",
    name: "Astara-Sım",
    subText: "Birlikdə Əylənək",
    subTextColor: "text-blue_light opacity-60",
  },
  {
    id: 2,
    image: photo2,
    desc: "Biz çox maraqlı bir şey edərək, tələbələrlə astaraya gəzməyə getdik.",
    name: "Astara-Sım",
    subText: "Birlikdə Əylənək",
    subTextColor: "text-[#FFBD13CC] opacity-80",
  },
  {
    id: 3,
    image: photo3,
    desc: "Biz çox maraqlı bir şey edərək, tələbələrlə astaraya gəzməyə getdik.",
    name: "Astara-Sım",
    subText: "Birlikdə Əylənək",
    subTextColor: "text-white opacity-60",
  },
  {
    id: 4,
    image: photo4,
    desc: "Biz çox maraqlı bir şey edərək, tələbələrlə astaraya gəzməyə getdik.",
    name: "Astara-Sım",
    subText: "Birlikdə Əylənək",
    subTextColor: "text-white opacity-60",
  },
];

interface IProps {
  image: string;
  desc: string;
  name: string;
  subText: string;
  subTextColor: string;
}

function CommunitySliderElement({
  image,
  desc,
  name,
  subText,
  subTextColor,
}: IProps) {
  const isMobile = useBreakpoint(768);
  return (
    <div
      className=" bg-black rounded-[32px]  relative
     w-[90%] h-[35%]
    md:w-[30%]
    "
    >
      <img
        className="w-full h-full object-cover rounded-[32px] opacity-50"
        src={image}
      />
      {!isMobile ? (
        <div className="-rotate-6">
          <h2 className="text-white absolute bottom-0 text-[24px] left-12">
            {desc}
          </h2>
          <h1 className="font-[600] text-white absolute -bottom-14 left-12 text-[36px]">
            {name}
          </h1>
          <p
            className={`text-[14px]  absolute -bottom-20 left-12 text-white opacity-60`}
          >
            {subText}
          </p>
        </div>
      ) : (
        <div className="flex text-white flex-col mt-4">
          <h2>{desc}</h2>
          <h1 className="font-[600] text-3xl opacity-100">{name}</h1>
          <p className={`${subTextColor} font-[500] text-[14px]`}>{subText}</p>
        </div>
      )}
    </div>
  );
}

export default function CommunitySlider() {
  return (
    <div
      className=" w-screen  h-screen 
        flex flex-col gap-40 ml-4
        md:flex-row md:rotate-6 md:-ml-10 md:gap-6
        "
    >
      {fakeData.map((data) => (
        <CommunitySliderElement key={data.id} {...data} />
      ))}
    </div>
  );
}
