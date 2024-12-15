import { ReactNode } from "react";
interface IProps {
  children: ReactNode;
}
export default function SeeAll_btn({ children }: IProps) {
  return (
    <button className="border-[#4a5567]  border rounded-full p-2 w-full h-full">
      {children}
    </button>
  );
}
