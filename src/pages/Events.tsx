import { useState, useEffect } from "react";
import Events_card from "../components/Events_card";
import { Link } from "react-router-dom";

const fakeData = [
  {
    id: 1,
    eventCategory: "UX/UI Dizayn",
    eventName: "III Design Competition",
    eventDesc: "A lot happened this month. Take a look at what's coming.",
    guests: "Togrul Samed, Zumrad Muradov",
    eventDate: "Apr 17, 2024",
    price: "Ödənişsiz",
    linkForLearnMore: "",
  },
  {
    id: 2,
    eventCategory: "Frontend Development",
    eventName: "React Workshop",
    eventDesc: "Learn modern frontend development techniques.",
    guests: "Elchin Muradov",
    eventDate: "Apr 20, 2024",
    price: "Ödənişsiz",
    linkForLearnMore: "",
  },
  {
    id: 3,
    eventCategory: "Backend Development",
    eventName: "Node.js Hackathon",
    eventDesc: "Join us to build backend APIs and win prizes.",
    guests: "Ali Veliyev",
    eventDate: "Apr 24, 2024",
    price: "Ödənişsiz",
    linkForLearnMore: "",
  },
  {
    id: 4,
    eventCategory: "UX/UI Dizayn",
    eventName: "UI Trends in 2024",
    eventDesc: "Explore the top UI design trends for this year.",
    guests: "Zumrad Muradov",
    eventDate: "Apr 25, 2024",
    price: "Ödənişsiz",
    linkForLearnMore: "",
  },
  {
    id: 5,
    eventCategory: "Full Stack Development",
    eventName: "Build MERN Apps",
    eventDesc: "Learn how to build full-stack applications with MERN.",
    guests: "Murad Imanov",
    eventDate: "Apr 28, 2024",
    price: "Ödənişsiz",
    linkForLearnMore: "",
  },
  {
    id: 6,
    eventCategory: "Mobile Development",
    eventName: "Flutter Basics",
    eventDesc: "Learn to build mobile apps using Flutter.",
    guests: "Togrul Samed",
    eventDate: "Apr 30, 2024",
    price: "Ödənişsiz",
    linkForLearnMore: "",
  },
];

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
              <button className="border-1 border-black_light px-8 py-4 bg-blue_dark w-full h-full text-white rounded-full">
                See All
              </button>
            </Link>
          </div>
        )}
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {fakeData.slice(0, 6).map((event) => (
          <Events_card
            key={event.id}
            isDark={true}
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

      {isMobile && (
        <div className="flex justify-center mt-8">
          <Link to={"/events"}>
            <button className="w-full px-10 h-[48px] border border-black_light text-white bg-blue_dark rounded-full font-[500] ">
              See All
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
