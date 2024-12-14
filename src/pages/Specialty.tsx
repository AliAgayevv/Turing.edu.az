import { useState } from "react";
import Navbar from "../components/Navbar";
import fakeImage from "../assets/photos/studentExamplePhoto.jpeg";
import SpecialtyCard from "../components/Specialty_card";
import LearnMoreBtn from "../components/LearnMore_btn";

export default function Specialty() {
  const [selected, setSelected] = useState("all");

  const handleSelect = (button: any) => {
    setSelected(button); // Seçilen butonu state'e kaydediyoruz
  };
  return (
    <div className="">
      <Navbar isDark={true} />

      <div className="mx-auto w-11/12 h-auto mt-[100px] px-8 mb-20">
        <h1 className="font-jakarta font-[500] text-3xl sm:text-5xl text-black_dark ">
          Fiels of Study
        </h1>
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

        <div className="mt-6 flex flex-col sm:grid sm:grid-cols-4 gap-6">
          <SpecialtyCard
            category="Design"
            title="UX/UI Design"
            desc={"Design Intuitive Digital Experiences"}
            hiddenText="You will learn how to transform houses and apartments, create drawings and 3D visualization. You can take high-paying orders or open a design studio. You can take high..."
            img={fakeImage}
            route="UX-UI"
          />
          <SpecialtyCard
            category="Front"
            title="Frontend"
            desc={"Design Intuitive Digital Experiences"}
            hiddenText="You will learn how to transform houses and apartments, create drawings and 3D visualization. You can take high-paying orders or open a design studio. You can take high..."
            img={fakeImage}
            route="Frontend"
          />
          <SpecialtyCard
            category="Backend"
            title="Backend"
            desc={"Design Intuitive Digital Experiences"}
            hiddenText="You will learn how to transform houses and apartments, create drawings and 3D visualization. You can take high-paying orders or open a design studio. You can take high..."
            img={fakeImage}
            route="Backend"
          />
          <SpecialtyCard
            category="Design"
            title="UX/UI Design"
            desc={"Design Intuitive Digital Experiences"}
            hiddenText="You will learn how to transform houses and apartments, create drawings and 3D visualization. You can take high-paying orders or open a design studio. You can take high..."
            img={fakeImage}
            route="UX-UI"
          />
          <SpecialtyCard
            category="Front"
            title="Frontend"
            desc={"Design Intuitive Digital Experiences"}
            hiddenText="You will learn how to transform houses and apartments, create drawings and 3D visualization. You can take high-paying orders or open a design studio. You can take high..."
            img={fakeImage}
            route="Frontend"
          />
          <SpecialtyCard
            category="Backend"
            title="Backend"
            desc={"Design Intuitive Digital Experiences"}
            hiddenText="You will learn how to transform houses and apartments, create drawings and 3D visualization. You can take high-paying orders or open a design studio. You can take high..."
            img={fakeImage}
            route="Backend"
          />
        </div>
        <div className="w-full h-[110px] rounded-2xl border-white_medium mt-6 border flex justify-between items-center px-6">
          <div>
            <span className="font-[500] text-base text-black_ulrtaDark">
              Not sure what to choose?{" "}
            </span>
            <p className="text-[14px] opacity-60 text-black_dark">
              10 suallıq sorğumuza qatıl, potensialına uyğun ixtisası daha
              sürətli öyrən.
            </p>
          </div>
          <div className="w-[145px] h-[48px]">
            <LearnMoreBtn>Start test</LearnMoreBtn>
          </div>
        </div>
      </div>
    </div>
  );
}
