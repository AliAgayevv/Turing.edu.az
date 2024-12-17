import MutualChoices_card from "../components/MutualChoices_card";
import icon from "../assets/vectors/Frame.png";
import textVector from "../assets/vectors/textVector.png";
import SeeAll_btn from "../components/SeeAll_btn";

export default function MutualChoices() {
  return (
    <div className="w-full flex flex-col lg:flex-row gap-10 lg:gap-[220px] justify-center items-center bg-white py-10 lg:py-20">
      {/* Left Section */}
      <div className="w-full lg:w-[220px] flex justify-start">
        <div className="flex flex-col gap-8 lg:gap-14 px-4 lg:px-0">
          <div className="relative">
            <p className="font-[500] text-[14px] text-white_ultraDark">
              MUTUAL CHOICES
              <img
                className="absolute -bottom-8 sm:-bottom-7 left-[104px] sm:left-24"
                src={textVector}
                alt="Text Vector"
              />
            </p>
            <p className="font-[600] leading-[50px] sm:leading-[60px] font-jakarta text-[50px] sm:text-[48px] text-black_medium mt-4 w-[300px]">
              Skill up, stand out
            </p>
          </div>
          {/* See All Button for Desktop */}
          <div className="hidden lg:block h-[56px] w-[145px]">
            <SeeAll_btn>See all</SeeAll_btn>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-4 lg:px-0">
        <MutualChoices_card
          title={"Design"}
          desc={
            "Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit Korem ipsum dolor sit amet"
          }
          icon={icon}
        />
        <MutualChoices_card
          title={"Design"}
          desc={
            "Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit Korem ipsum dolor sit amet"
          }
          icon={icon}
        />
      </div>

      {/* See All Button for Mobile */}
      <div className="block lg:hidden w-full mt-6 px-4">
        <SeeAll_btn>See all</SeeAll_btn>
      </div>
    </div>
  );
}
