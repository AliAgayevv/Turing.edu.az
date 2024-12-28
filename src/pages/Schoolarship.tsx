import { useState } from "react";
import Navbar from "../components/Navbar";
import SpecialtyCard from "../components/Specialty_card";
import fakeData from "../datas/schoolarShip.json";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router";

let fixCategory = ["all"];

fakeData.forEach((data) => {
  if (!fixCategory.includes(data.category)) {
    fixCategory.push(data.category);
  }
});

export default function Schoolarship() {
  window.scrollTo({ top: 0, behavior: "smooth" });
  const [selectedCategory, setSelectedCategory] = useState("all");
  const filteredEvents =
    selectedCategory === "all"
      ? fakeData
      : fakeData.filter((data) => data.category === selectedCategory);

  const handleSelect = (category: string) => {
    setSelectedCategory(category);
  };
  return (
    <motion.div
      transition={{
        duration: 0.5,
        delay: 0.2,
        ease: "easeInOut",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="z-[50]  h-screen"
    >
      <Navbar isDark={true} />
      <div className="w-screen bg-white ">
        <div className="mx-auto w-11/12 pt-24 pb-20">
          <h1 className="font-jakarta font-[500] text-5xl">
            Active Scholarship Programs
          </h1>
          <div className="flex gap-3">
            <div className="inline-flex items-center gap-2 h-11 p-1 bg-[#f9f9f9]/50 rounded-lg border border-[#d9d9db] cursor-pointer mt-8">
              {fixCategory.map((category) => (
                <div
                  key={category}
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
          </div>
          <div className="flex flex-col gap-5 md:grid  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6 md:gap-7">
            {filteredEvents.map((item) => (
              <Link to={`/schoolarship/${item.id}`}>
                <SpecialtyCard
                  id={item.id}
                  key={item.id}
                  category={item.slotCount}
                  img={item.img}
                  desc={item.desc}
                  title={item.title}
                  hiddenText={item.hiddenText}
                  route={item.route}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="h-screen relative -z-[2]">
        <Footer />
      </div>
    </motion.div>
  );
}
