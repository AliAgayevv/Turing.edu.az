import { IChildrenProps } from "../../const/types";
export default function SeeAll_btn({ children }: IChildrenProps) {
  return (
    <button className="border-[#4a5567]  border rounded-full p-2 w-full h-full">
      {children}
    </button>
  );
}
