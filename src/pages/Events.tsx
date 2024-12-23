import { useState, useEffect } from "react";
import Events_card from "../components/Events_card";
import { Link } from "react-router-dom";

import { eventsData } from "../datas/eventsData";

export default function Events() {
  const [isMobile, setIsMobile] = useState(false);
  // useResizeScreen(size)

  useEffect(() => {
    // Check screen width to determine if it's mobile
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640); // Tailwind's sm breakpoint: 640px
    };

    handleResize(); // Run once to set initial value
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-11/12 mx-auto py-10 overflow-hidden">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
        <div>
          <h3 className="uppercase text-white_dark">Events</h3>
          <h1 className="text-3xl md:text-5xl font-jakarta font-[500] text-white py-4">
            Upcoming Events
          </h1>
        </div>
        {!isMobile && (
          <div className="text-white bg-transparent w-full sm:w-[145px] h-[56px]">
            <Link to={"/events"}>
              <button className="border border-black_light px-8 py-4 bg-blue_dark w-full h-full text-white rounded-full">
                See All
              </button>
            </Link>
          </div>
        )}
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {eventsData.slice(0, 6).map((event) => (
          <Link to={event.linkForLearnMore} key={event.id}>
            <Events_card {...event} isDark={true} />
          </Link>
        ))}
      </div>

      {isMobile && (
        <div className="flex justify-center mt-8">
          <Link to={"/events"}>
            <button className="w-[28rem]  px-10 h-[48px]  text-white bg-blue_dark  font-[500] border   rounded-full border-black_light">
              See All
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
