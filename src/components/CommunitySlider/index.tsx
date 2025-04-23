import { useBreakpoint } from "../../hooks/useBreakpoint";
import { useGetCommunityContentQuery } from "../../store/services/communityApi";

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

type CommunitySliderProps = {
  photoUrl: string;
  name: string;
  description: string;
  subDescription: string;
};
export default function CommunitySlider() {
  const { data, isLoading } = useGetCommunityContentQuery({});
  isLoading && <div>Loading...</div>;
  return (
    <div
      className=" w-screen  h-screen 
        flex flex-col gap-40 ml-4
        md:flex-row md:rotate-6 md:-ml-10 md:gap-6
        "
    >
      {data?.cards.map(
        (currentElement: CommunitySliderProps, index: number) => (
          <CommunitySliderElement
            key={index}
            image={currentElement.photoUrl}
            name={currentElement.name}
            desc={currentElement.description}
            subText={currentElement.subDescription}
            subTextColor={
              index % 2 === 0
                ? "text-blue_light opacity-60"
                : "text-white opacity-60"
            }
          />
        )
      )}
    </div>
  );
}
