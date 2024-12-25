import arrow from "../../assets/vectors/arrow-right-top.png";
import { IMutualChoicesProps } from "../../const/types";

export default function MutualChoices_card({
  icon,
  title,
  desc,
}: IMutualChoicesProps) {
  return (
    <div className="flex flex-col gap-5 p-4 w-full sm:w-[416px] md:w-[350px] lg:w-[416px] h-auto bg-white border rounded-2xl">
      <div className="w-12 h-12 p-3 rounded-full bg-[#f8f9fa] border flex justify-center items-center">
        <img src={icon} className="w-6 h-6" alt={title} />
      </div>

      <div>
        <h3 className="text-lg sm:text-xl text-[#01030e] font-[500] font-inter">
          {title}
        </h3>
        <p className="text-black_ultraLight font-[400] text-sm sm:text-[14px]">
          {desc}
        </p>
      </div>

      <button className="border px-[10px] sm:px-[11px] flex justify-center items-center h-[38px]  w-[130px] rounded-3xl gap-2 hover:bg-gray-100 transition-all duration-200">
        <p className="text-sm sm:text-base">Learn more</p>
        <img src={arrow} alt="Arrow" className="" />
      </button>
    </div>
  );
}
