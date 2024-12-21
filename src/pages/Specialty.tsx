import { useState } from "react";
import Navbar from "../components/Navbar";
import LearnMoreBtn from "../components/LearnMore_btn";
import Footer from "../components/Footer";
import graduatesData from "../datas/graduates.json";
import { Link } from "react-router-dom";
import Reels_card from "../components/Reels_card";

let fixCategory = ["all"];
graduatesData.forEach((graduates) => {
  if (!fixCategory.includes(graduates.category)) {
    fixCategory.push(graduates.category);
  }
});
console.log(fixCategory);

export default function Specialty() {
  const [selectedCategory, setSelectedCategory] = useState("all"); // Manage active category and button state

  const handleSelect = (button: string) => {
    setSelectedCategory(button);
  };
  const filteredEvents =
    selectedCategory === "all"
      ? graduatesData
      : graduatesData.filter((event) => event.category === selectedCategory);

  return (
    <div className="h-screen">
      <Navbar isDark={true} />
      <div className="w-screen bg-white">
        <div className="mx-auto w-11/12 h-auto py-[100px] px-4 sm:px-8 mb-20 bg-white">
          <h1 className="font-jakarta font-[500] text-3xl sm:text-5xl text-black_dark">
            Fields of Study
          </h1>

          <div className="inline-flex flex-wrap items-center gap-2 h-11 p-1 bg-[#f9f9f9]/50 rounded-lg border border-[#d9d9db] cursor-pointer mt-8">
            {fixCategory.map((category) => (
              <div
                onClick={() => handleSelect(category)}
                className={`px-3 py-1 rounded-md text-nowrap ${
                  selectedCategory === category
                    ? "bg-white border-[#d9d9db] border-[1.5px] text-black_dark opacity-70"
                    : "text-[#6C737F] border-transparent"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </div>
            ))}
          </div>

          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredEvents.map((event) => (
              <Link to={event.route} key={event.id}>
                <Reels_card {...event} />
              </Link>
            ))}
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
      <div className="h-screen relative -z-[2]">
        <Footer />
      </div>
    </div>
  );
}
