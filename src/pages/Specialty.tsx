import { useState } from "react";
import Navbar from "../components/Navbar";
import fakeImage from "../assets/photos/studentExamplePhoto.jpeg";
import SpecialtyCard from "../components/Specialty_card";
import LearnMoreBtn from "../components/LearnMore_btn";
import aliImage from "../assets/photos/ali.jpeg";
import muradImage from "../assets/photos/muradTelebe.jpeg";
import Footer from "../components/Footer";

export default function Specialty() {
  const [selected, setSelected] = useState("all");

  const handleSelect = (button: string) => {
    setSelected(button);
  };

  return (
    <div className="">
      <Navbar isDark={true} />

      <div className="w-screen bg-white">
        <div className="mx-auto w-11/12 h-auto py-[100px] px-4 sm:px-8 mb-20 bg-white">
          <h1 className="font-jakarta font-[500] text-3xl sm:text-5xl text-black_dark">
            Fields of Study
          </h1>

          <div className="inline-flex flex-wrap items-center gap-2 h-11 p-1 bg-[#f9f9f9]/50 rounded-lg border border-[#d9d9db] cursor-pointer mt-8">
            {["all", "fundamentals", "specialization"].map((category) => (
              <div
                key={category}
                onClick={() => handleSelect(category)}
                className={`px-3 py-2 rounded-md flex items-center justify-center ${
                  selected === category
                    ? "bg-white border-[#d9d9db] border-[1.5px] text-black_dark opacity-70"
                    : "text-[#6C737F] border-transparent"
                }`}
              >
                <div
                  className={`font-normal font-['Inter'] ${
                    selected === category ? "opacity-100" : "opacity-70"
                  } leading-none`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <SpecialtyCard
              category="Design"
              title="UX/UI Design"
              desc="Design Intuitive Digital Experiences"
              hiddenText="You will learn how to transform houses and apartments, create drawings and 3D visualization."
              img={fakeImage}
              route="UX-UI"
            />
            <SpecialtyCard
              category="Front"
              title="Frontend"
              desc="Develop Responsive Websites"
              hiddenText="You will learn how to build interactive and dynamic web applications."
              img={aliImage}
              route="Frontend"
            />
            <SpecialtyCard
              category="Backend"
              title="Backend"
              desc="Master Server-Side Logic"
              hiddenText="You will learn to create robust backend systems and APIs."
              img={muradImage}
              route="Backend"
            />
            <SpecialtyCard
              category="Design"
              title="UX/UI Design"
              desc="Design Intuitive Digital Experiences"
              hiddenText="You will learn how to transform houses and apartments, create drawings and 3D visualization."
              img={fakeImage}
              route="UX-UI"
            />
            <SpecialtyCard
              category="Design"
              title="UX/UI Design"
              desc="Design Intuitive Digital Experiences"
              hiddenText="You will learn how to transform houses and apartments, create drawings and 3D visualization."
              img={fakeImage}
              route="UX-UI"
            />
          </div>

          <div className="w-full h-auto rounded-2xl border border-white_medium mt-6 flex flex-col sm:flex-row justify-between items-center p-6">
            <div className="mb-4 sm:mb-0">
              <span className="font-[500] text-base text-black_ultraDark">
                Not sure what to choose?{" "}
              </span>
              <p className="text-[14px] opacity-60 text-black_dark">
                10 suallıq sorğumuza qatıl, potensialına uyğun ixtisası daha
                sürətli öyrən.
              </p>
            </div>
            <div className="w-full sm:w-[145px] h-[48px]">
              <LearnMoreBtn>Start test</LearnMoreBtn>
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen h-screen">
        <Footer />
      </div>
    </div>
  );
}
