import { ReactNode } from "react";

interface LearnMoreBtnProps {
  children: ReactNode;
}
export default function LoadMore_btn({ children }: LearnMoreBtnProps) {
  return (
    <button className="w-full h-full border rounded-full bg-white border-black_light text-black_light">
      {children}
    </button>
  );
}
