import React from "react";

export default function LearnMore_btn({ children }) {
  return (
    <button className="border p-4 rounded-2xl w-[129px] h-[46px] flex justify-center items-center">
      {children}
    </button>
  );
}
