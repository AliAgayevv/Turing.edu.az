import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import image1 from "../assets/photos/communityBGPHOTOS/photo1.jpeg";
import image2 from "../assets/photos/communityBGPHOTOS/photo2.jpeg";
import image3 from "../assets/photos/communityBGPHOTOS/photo3.jpeg";
import image4 from "../assets/photos/communityBGPHOTOS/photo4.png";
import image5 from "../assets/photos/communityBGPHOTOS/photo5.png";
import image6 from "../assets/photos/communityBGPHOTOS/photo6.jpeg";
import imageCentered from "../assets/photos/communityBGPHOTOS/photoCenter.jpeg";
import vector1 from "../assets/vectors/communityFirstVector.png";
import vector2 from "../assets/vectors/positiveEnergyVector.png";
import vector3 from "../assets/vectors/wavesBeforeVector.png";
import vector4 from "../assets/vectors/teachLiveVector.png";
import { CommunityActivities } from "../components/CommunityActivities";

const fakeData = [
  {
    id: 1,
    title: "Community first",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit.",
    icon: vector1,
  },
  {
    id: 2,
    title: "Always authentic",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit.",
  },
  {
    id: 3,
    title: "Celebrate diversity",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit.",
  },
  {
    id: 4,
    title: "Stay sustainable",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit.",
  },
  {
    id: 5,
    title: "Positive Energy",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit.",
    icon: vector2,
  },
  {
    id: 6,
    title: "Waves before web",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit.",
    icon: vector3,
  },
  {
    id: 7,
    title: "Teach live",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit.",
    icon: vector4,
  },
  {
    id: 8,
    title: "Learn-by-doing",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit.",
  },
];

export default function Community() {
  window.scrollTo({ top: 0, behavior: "smooth" });
  const [visibleCount, setVisibleCount] = useState(4);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const items =
      container.querySelectorAll<HTMLDivElement>(".rotate-on-cursor");
    const rect = container.getBoundingClientRect();

    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);

    items.forEach((item) => {
      const rotateX = y * 20; // Adjust rotation intensity
      const rotateY = -x * 15;
      item.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const items =
      e.currentTarget.querySelectorAll<HTMLDivElement>(".rotate-on-cursor");
    items.forEach((item) => {
      item.style.transform = "rotateX(0) rotateY(0)";
    });
  };

  const updateVisibleCount = () => {
    if (window.innerWidth >= 768) {
      setVisibleCount(fakeData.length);
    } else {
      setVisibleCount(4);
    }
  };

  useEffect(() => {
    updateVisibleCount();

    window.addEventListener("resize", updateVisibleCount);

    // Cleanup the event listener on unmount
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  return (
    <div className="bg-blue_ultraDark min-h-screen">
      <Navbar isDark={false} />
    <div className=" z-0 relative overflow-hidden h-[calc(100vh-15vh)]">
      <div
        className=" perspective-[1000px]"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
          {/* <div className="absolute top-[110px] left-[200px] rotate-on-cursor opacity-40">
            <img src={image1} className="w-[207px] h-[216px] object-cover" />
          </div>
          <div className="absolute top-[40px] left-[440px] rotate-on-cursor opacity-40">
            <img src={image2} className="w-[323px] h-[189px] object-cover" />
          </div>
          <div className="absolute top-[125px] left-[850px] rotate-on-cursor  opacity-40">
            <img src={image3} className="w-[323px] h-[150px] object-cover" />
          </div>
          <div className="absolute top-[375px] left-[950px] rotate-on-cursor  opacity-40">
            <img src={image4} className="w-[165px] h-[312px] object-cover" />
          </div>
          <div className="absolute top-[585px] left-[350px] rotate-on-cursor opacity-40">
            <img src={image5} className="w-[554px] h-[149px] object-cover" />
          </div>
          <div className="absolute top-[400px] left-[200px] rotate-on-cursor opacity-40">
            <img src={image6} className="w-[159px] h-[135px] object-cover" />
          </div>
          <div className="absolute top-[320px] left-[444px] rotate-on-cursor  opacity-40">
            <img
              src={imageCentered}
              className="w-[438px] h-[233px] object-cover"
            />
          </div> */}

          <div className="absolute h-[700px] w-[1000px] translate-x-[-50%] translate-y-[-50%] left-[50%] top-[50%]">
            <div><img src={image1} alt="community image" className="max-w-[207px] max-h-[216px] object-cover absolute top-[70px] left-[50px] rotate-on-cursor opacity-40"/></div>
            <div><img src={image2} alt="community image" className="max-w-[323px] max-h-[189px] object-cover absolute top-[20px] left-[300px] rotate-on-cursor opacity-40"/></div>
            <div><img src={image3} alt="community image" className="max-w-[323px] max-h-[150px] object-cover absolute top-[60px] right-[50px] rotate-on-cursor opacity-40"/></div>
            <div><img src={image4} alt="community image" className="max-w-[165px] max-h-[312px] object-cover absolute bottom-[70px] right-[20px] rotate-on-cursor opacity-40"/></div>
            <div><img src={image5} alt="community image" className="w-[554px] h-[149px] object-cover absolute bottom-[40px] left-[240px] rotate-on-cursor opacity-40"/></div>
            <div><img src={image6} alt="community image" className="max-w-[159px] max-h-[135px] absolute top-[350px] left-[50px] rotate-on-cursor opacity-40"/></div>
            <div><img src={imageCentered} alt="community image" className="max-w-[438px] max-h-[233px] object-cover absolute top-[240px] left-[340px] rotate-on-cursor opacity-40"/></div>
          </div>

        <div className="z-20 text-center pointer-events-none absolute translate-x-[-50%] translate-y-[-50%] left-[50%] top-[50%]">
          <h1 className="text-white text-6xl md:text-8xl font-bold">
            Innovate
          </h1>
          <h1 className="text-white/80 text-6xl md:text-8xl font-bold">
            Explore
          </h1>
          <h1 className="text-white/50 text-6xl md:text-8xl font-bold">
            Excel
          </h1>
        </div>
      </div>
    </div>
      <CommunityActivities/>
    </div>
  );
}
