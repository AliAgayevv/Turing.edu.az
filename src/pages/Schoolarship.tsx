import React, { useState } from "react";
import Navbar from "../components/Navbar";
import SpecialtyCard from "../components/Specialty_card";
import fakeData from "../datas/schoolarShip.json";

export default function Schoolarship() {
  const [selected, setSelected] = useState("all");

  const handleSelect = (button: any) => {
    setSelected(button); // Seçilen butonu state'e kaydediyoruz
  };
  return (
    <div className="w-11/12 mx-auto">
      <Navbar isDark={true} />
      <div className="mx-auto w-11/12 mt-24">
        <h1 className="font-jakarta font-[500] text-5xl">
          Active Scholarship Programs
        </h1>
        <div className="flex gap-3">
          <div className="inline-flex items-center gap-2 h-11 p-1 bg-[#f9f9f9]/50 rounded-lg border border-[#d9d9db] cursor-pointer mt-8">
            {/* "All" Butonu */}
            <div
              onClick={() => handleSelect("all")}
              className={`px-3 py-2 rounded-md flex items-center justify-center ${
                selected === "all"
                  ? "bg-white border-[#d9d9db] border-[1.5px] text-black_dark opacity-70"
                  : "text-[#6C737F] border-transparent"
              }`}
            >
              <div
                className={`font-normal font-['Inter'] ${
                  selected === "all" ? "opacity-100" : "opacity-70"
                } leading-none`}
              >
                All
              </div>
            </div>

            <div
              onClick={() => handleSelect("fundamentals")}
              className={`px-3 py-2 rounded-md flex items-center justify-center ${
                selected === "fundamentals"
                  ? "bg-white border-[#d9d9db] border-[1.5px] text-black_dark opacity-70"
                  : "text-[#6C737F] border-transparent"
              }`}
            >
              <div
                className={`text-sm font-normal font-['Inter'] leading-[14px] ${
                  selected === "fundamentals" ? "opacity-100" : "opacity-70"
                }`}
              >
                Fundamentals
              </div>
            </div>

            <div
              onClick={() => handleSelect("specialization")}
              className={`px-3 py-2 rounded-md flex items-center justify-center ${
                selected === "specialization"
                  ? "bg-white border-[#d9d9db] border-[1.5px] text-black_dark opacity-70"
                  : "text-[#6C737F] border-transparent"
              }`}
            >
              <div
                className={`text-sm font-normal font-['Inter'] leading-[14px] ${
                  selected === "specialization" ? "opacity-100" : "opacity-70"
                }`}
              >
                Specialization
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 mt-6 gap-7">
          {fakeData.map((item) => (
            <SpecialtyCard
              category={item.slotCount}
              img={item.img}
              desc={item.desc}
              title={item.title}
              hiddenText={item.hiddenText}
              route={item.route}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
