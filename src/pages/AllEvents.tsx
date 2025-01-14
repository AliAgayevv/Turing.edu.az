import { useState } from "react";
import Navbar from "../components/Navbar";
import Events_card from "../components/Events_card";
import LoadMore_btn from "../components/LoadMore_btn";
import { Link } from "react-router";
import { eventsData } from "../datas/eventsData";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

let fixCategory = ["all"];

eventsData.forEach((event) => {
  if (!fixCategory.includes(event.category)) {
    fixCategory.push(event.category);
  }
});

const PAGE_SIZE = 6;
const LOAD_MORE_COUNT = 3;

export default function AllEvents() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const filteredEvents =
    selectedCategory === "all"
      ? eventsData
      : eventsData.filter((event) => event.category === selectedCategory);

  const handleSelect = (category: string) => {
    setSelectedCategory(category);
    setVisibleCount(PAGE_SIZE);
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + LOAD_MORE_COUNT);
  };

  return (
    <motion.div
      className="h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Navbar isDark={true} />
      <div className="w-screen bg-white">
        <div className="mx-auto h-auto w-11/12 bg-white">
          <div className="px-10 pt-24">
            <h1 className="text-5xl font-[500] font-jakarta text-black_dark">
              Events
            </h1>
            <div className="flex md:inline-flex items-center gap-2 h-11 overflow-x-auto p-1 bg-[#f9f9f9]/50 rounded-lg border border-[#d9d9db] cursor-pointer mt-8 sm:flex-nowrap overflow-y-hidden">
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 mt-6 gap-6 pb-20">
              {filteredEvents.slice(0, visibleCount).map((event) => (
                <Link to={`/events/${event.id}`} key={event.id}>
                  <Events_card isDark={false} {...event} />
                </Link>
              ))}
            </div>

            {visibleCount < filteredEvents.length && (
              <div className="text-center mt-8 flex justify-center items-center pb-10">
                <div className="w-[146px] h-[48px]" onClick={handleLoadMore}>
                  <LoadMore_btn>Load More</LoadMore_btn>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="h-screen relative -z-[2]">
        <Footer />
      </div>
    </motion.div>
  );
}
