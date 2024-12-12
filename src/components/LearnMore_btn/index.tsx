import { ReactNode } from "react";

interface LearnMoreBtnProps {
  children: ReactNode;
}

export default function LearnMoreBtn({ children }: LearnMoreBtnProps) {
  return (
    <button className="border p-4 rounded-2xl w-[129px] h-[46px] flex justify-center items-center">
      {children}
    </button>
  );
}
