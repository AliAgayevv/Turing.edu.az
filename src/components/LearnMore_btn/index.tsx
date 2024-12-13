import { ReactNode } from "react";

interface LearnMoreBtnProps {
  children: ReactNode;
}

export default function LearnMoreBtn({ children }: LearnMoreBtnProps) {
  return (
    <button className="border p-4 rounded-full w-full h-full flex justify-center items-center">
      {children}
    </button>
  );
}
