import icon from "../../assets/vectors/watchVideoIcon.png";
import { IChildrenProps } from "../../const/types";

export default function WatchNow_btn({ children }: IChildrenProps) {
  return (
    <button className="w-full h-full rounded-full border text-white font-[500] border-[#4A5567] flex gap-2 justify-center items-center">
      <img src={icon} />
      {children}
    </button>
  );
}
