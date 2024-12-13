import MutualChoices_card from "../components/MutualChoices_card";
import icon from "../assets/vectors/Frame.png";
import textVector from "../assets/vectors/textVector.png";
import SeeAll_btn from "../components/SeeAll_btn";

export default function MutualChoices() {
  return (
    <div className="h-[452px] w-full flex gap-[220px] justify-center items-center bg-white">
      <div className="w-[220px]">
        <div className="flex flex-col gap-14">
          <p className="font-[500] text-[14px] text-white_ultraDark relative">
            MUTUAL CHOICES
            <img className=" absolute -bottom-8 -right-12" src={textVector} />
            <p className="font-[600] leading-[60px] font-jakarta text-[48px] text-black_medium">
              Skill up, stand out
            </p>
          </p>
          <SeeAll_btn />
        </div>
      </div>
      <div className="grid grid-cols-2 space-x-3">
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
    </div>
  );
}
