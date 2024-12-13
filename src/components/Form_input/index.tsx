import React from "react";

export default function Form_input({ placeholder }) {
  return (
    <input
      className="w-full h-full border-[1px] disabled:bg-white_medium rounded-lg p-4 outline-black_ultraLight hover:bg-white_ultraLight transition-all delay-100"
      placeholder={placeholder}
    />
  );
}
