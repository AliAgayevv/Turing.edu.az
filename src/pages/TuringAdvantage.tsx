// TODO: Arxa fondaki isiq effektleri partdiyir overflow verib, onlari neylese duzelt

import { useState, useEffect } from "react";
import vector1 from "../assets/vectors/communityFirstVector.png";
import vector2 from "../assets/vectors/positiveEnergyVector.png";
import vector3 from "../assets/vectors/wavesBeforeVector.png";
import vector4 from "../assets/vectors/teachLiveVector.png";
import exampleVideo from "../assets/videos/community-video.mp4";

const fakeData = [
  {
    id: 1,
    title: "Community first",
    desc: "Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit Korem ipsum dolor sit amet",
    icon: vector1,
  },
  {
    id: 2,
    title: "Always authentic",
    desc: "Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit Korem ipsum dolor sit amet",
  },
  {
    id: 3,
    title: "Celebrate diversity",
    desc: "Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit Korem ipsum dolor sit amet",
  },
  {
    id: 4,
    title: "Stay sustainable",
    desc: "Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit Korem ipsum dolor sit amet",
  },
  {
    id: 5,
    title: "Positive Energy",
    desc: "Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit Korem ipsum dolor sit amet",
    icon: vector2,
  },
  {
    id: 6,
    title: "Waves before web",
    desc: "Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit Korem ipsum dolor sit amet",
    icon: vector3,
  },
  {
    id: 7,
    title: "Teach live",
    desc: "Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit Korem ipsum dolor sit amet",
    icon: vector4,
  },
  {
    id: 8,
    title: "Learn-by-doing",
    desc: "Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit Korem ipsum dolor sit amet",
  },
];

export default function TuringAdvantage() {
  const [visibleCount, setVisibleCount] = useState(4);

  const updateVisibleCount = () => {
    if (window.innerWidth >= 768) {
      setVisibleCount(fakeData.length); // Show all data on desktop
    } else {
      setVisibleCount(4); // Show 4 items on mobile
    }
  };

  useEffect(() => {
    updateVisibleCount();

    window.addEventListener("resize", updateVisibleCount);

    // Cleanup the event listener on unmount
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  // Function to load 4 more items
  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  return (
    <div className="w-11/12 mx-auto pt-16 relative">
      {/* Background Gradient */}
      {/* <div className="absolute -top-80 -right-80 w-[500px] h-[500px] bg-gradient-to-br from-blue-200 to-transparent blur-[120px] rounded-full pointer-events-none z-0"></div> */}

      {/* Title */}
      <h3 className="uppercase text-white_dark">Turing Advantage</h3>
      <h1 className="text-4xl md:text-5xl font-semibold text-white py-4">
        <span className="text-sky-500">Turing Academy</span> offers a fun
        <br />& accessible learning experience.
      </h1>

      {/* Data Grid */}
      <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 mt-[72px] gap-[48px] md:gap-[72px] md:px-8 lg:px-16">
        {fakeData.slice(0, visibleCount).map((data) => (
          <div key={data.id} className="w-full relative z-10">
            {data.icon && (
              <img src={data.icon} className="absolute -top-4 -left-3 -z-10" />
            )}
            <h4 className="font-[500] text-xl text-white">{data.title}</h4>
            <p className="text-[14px] text-[#A2A1A4] break-words">
              {data.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Load More Button (Visible only on mobile) */}
      {visibleCount < fakeData.length && (
        <button
          onClick={loadMore}
          className="md:hidden w-full border text-white border-black_light mt-6 rounded-full font-[500] h-[48px] bg-transparent"
        >
          See more
        </button>
      )}

      {/* Video Section */}
      <div className="mt-44 relative overflow-hidden ">
        <div className="w-full md:w-[1000px] relative h-[320px] mt-8 rounded-lg overflow-hidden mx-auto">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl"
            src={exampleVideo}
            autoPlay
            loop={true}
          />
        </div>
        <div className="text-[65px] leading-4 top-36 right-5   md:leading-9 md:text-[195px] absolute md:top-40 text-white_light_32 font-[900] font-montserrat uppercase ">
          Community
        </div>

        {/* Description and Explore Button */}
        <div className="w-full md:w-[736px] mx-auto pt-16 flex flex-col justify-center items-center gap-8">
          <p className="text-white_lightMedium text-[18px] text-center">
            Learn highly demanded skills through practical courses, created by
            trusted industry professionals, that focus on real-world
            applications.
          </p>
          <button className="bg-black_dark border border-black_light text-white_solid py-3 px-6 rounded-3xl mb-10">
            Explore us
          </button>
        </div>
      </div>
    </div>
  );
}
