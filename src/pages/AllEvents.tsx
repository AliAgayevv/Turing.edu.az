import { useState } from "react";
import Navbar from "../components/Navbar";
import Events_card from "../components/Events_card";
import LoadMore_btn from "../components/LoadMore_btn";

const PAGE_SIZE = 12; // Başlangıçta gösterilecek etkinlik sayısı
const LOAD_MORE_COUNT = 3; // Her defa yüklenecek ek etkinlik sayısı

// Dummy event data (veri kaynağınızın burada olduğunu varsayalım)
const eventsData = new Array(30).fill(null).map((_, index) => ({
  id: index + 1,
  eventCategory: "UX/UI Dizayn",
  eventName: `Event ${index + 1}`,
  eventDesc: "A lot happened this month. Take a look at what's coming.",
  guests: "Togrul Samed, Zumrad Muradov",
  eventDate: "Apr 17, 2024",
  price: 0,
  linkForLearnMore: "",
}));

export default function AllEvents() {
  const [selected, setSelected] = useState("all");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const handleSelect = (button: string) => {
    setSelected(button);
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + LOAD_MORE_COUNT);
  };

  return (
    <div className="mx-auto w-11/12">
      <Navbar isDark={true} />
      <div className="px-10 mt-24">
        <h1 className="text-5xl font-[500] font-jakarta text-black_dark">
          Events
        </h1>
        <div className="inline-flex items-center gap-2 h-11 p-1 bg-[#f9f9f9]/50 rounded-lg border border-[#d9d9db] cursor-pointer mt-8">
          {/* Filtre Butonları */}
          <div
            onClick={() => handleSelect("all")}
            className={`px-3 py-2 rounded-md ${
              selected === "all"
                ? "bg-white border-[#d9d9db] border-[1.5px] text-black_dark opacity-70"
                : "text-[#6C737F] border-transparent"
            }`}
          >
            Upcoming Events
          </div>
          <div
            onClick={() => handleSelect("fundamentals")}
            className={`px-3 py-2 rounded-md ${
              selected === "fundamentals"
                ? "bg-white border-[#d9d9db] border-[1.5px] text-black_dark opacity-70"
                : "text-[#6C737F] border-transparent"
            }`}
          >
            Hackathons
          </div>
          <div
            onClick={() => handleSelect("specialization")}
            className={`px-3 py-2 rounded-md ${
              selected === "specialization"
                ? "bg-white border-[#d9d9db] border-[1.5px] text-black_dark opacity-70"
                : "text-[#6C737F] border-transparent"
            }`}
          >
            Competitions
          </div>
          <div
            onClick={() => handleSelect("seminar")}
            className={`px-3 py-2 rounded-md ${
              selected === "seminar"
                ? "bg-white border-[#d9d9db] border-[1.5px] text-black_dark opacity-70"
                : "text-[#6C737F] border-transparent"
            }`}
          >
            Seminars
          </div>
        </div>

        {/* Etkinlik Kartları */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 gap-6">
          {eventsData.slice(0, visibleCount).map((event) => (
            <Events_card
              key={event.id}
              isDark={false}
              eventCategory={event.eventCategory}
              eventName={event.eventName}
              eventDesc={event.eventDesc}
              guests={event.guests}
              eventDate={event.eventDate}
              price={event.price}
              linkForLearnMore={event.linkForLearnMore}
            />
          ))}
        </div>

        {/* Load More Butonu */}
        {visibleCount < eventsData.length && (
          <div className="text-center mt-8 flex justify-center items-center">
            <div className="w-[146px] h-[48px]" onClick={handleLoadMore}>
              <LoadMore_btn>Load More</LoadMore_btn>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
