import React from "react";

export default function LoadMore_btn({ children }) {
  return (
    <button className="w-full h-full border rounded-full bg-white border-black_light text-black_light">
      {children}
    </button>
  );
}
