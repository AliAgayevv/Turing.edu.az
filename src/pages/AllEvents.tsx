import { useState } from "react";
import Navbar from "../components/Navbar";
import Events_card from "../components/Events_card";
import LoadMore_btn from "../components/LoadMore_btn";
import { Link } from "react-router";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { useGetEventsQuery } from "../store/services/eventApi";

const PAGE_SIZE = 6;
const LOAD_MORE_COUNT = 3;

export default function AllEvents() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const { data } = useGetEventsQuery({});

  console.log("Backend data: ", data);

  // Extract unique categories from events data
  const categories = data
    ? ["all", ...new Set(data.map((event: any) => event.category))]
    : ["all"];

  // Filter events based on selected category
  const filteredEvents = !data
    ? []
    : selectedCategory === "all"
    ? data
    : data.filter((event: any) => event.category === selectedCategory);

  const handleSelect = (category: any) => {
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
            <div className="flex md:inline-flex items-center gap-2 h-11 overflow-hidden p-1 bg-[#f9f9f9]/50 rounded-lg border border-[#d9d9db] cursor-pointer mt-8 sm:flex-nowrap ">
              {categories.map((category, index: number) => (
                <div
                  key={index}
                  onClick={() => handleSelect(category)}
                  className={`px-3 py-1 rounded-md text-[14px] text-nowrap ${
                    selectedCategory === category
                      ? "bg-white border-[#d9d9db] border-[1.5px] text-black_dark opacity-70"
                      : "text-[#6C737F] border-transparent"
                  }`}
                >
                  {category}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 mt-6 gap-y-3 gap-x-5 lg:gap-x-10 pb-20">
              {filteredEvents.slice(0, visibleCount).map((event: any) => (
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
