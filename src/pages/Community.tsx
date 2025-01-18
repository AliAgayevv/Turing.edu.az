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
import CursorEffect from "../utils/CursorEffect";
import CommunitySlider from "../components/CommunitySlider";
import CommunityAdvantages from "../components/CommunityAdvantages";

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

const MuhitComponent = () => {
  return (
    <div className="relative h-screen flex justify-center items-center overflow-x-hidden">
      <div className="text-center z-10">
        <h1 className="text-white text-[5rem] md:text-[10rem] font-bold">
          Mühit
        </h1>
        <p className="text-gray-300 text-sm md:text-lg md:-mt-[40px]">
          Learn highly demanded skills through practical courses, <br />
          created by trusted industry professionals, that focus on real-world
          applications.
        </p>
      </div>

      {/* Floating Images */}
      <div className="absolute inset-0 flex justify-center items-center overflow-x-hidden">
        <img
          src={image1}
          alt="Community 1"
          className="absolute w-[120px] h-[211px] md:w-[237px] md:h-[323px] object-cover rounded-[24px] left-0 top-20 xl:top-20 xl:left-48 2xl:top-16 2xl:left-60 rotate-[-15deg] "
        />
        <img
          src={imageCentered}
          alt="Community 2"
          className="absolute w-[114px] md:w-[260px] md:h-[354px] h-[156px] object-cover rounded-[24px] top-40 -right-5 xl:top-20 xl:right-44 2xl:top-20 2xl:right-52 rotate-[10deg] "
        />
        <img
          src={imageCentered}
          alt="Community 3"
          className="absolute w-[132px] h-[180px] object-cover md:w-[214px] md:h-[292px] rounded-[24px] bottom-20 left-0 xl:-bottom-6 xl:left-[26rem] 2xl:bottom-5 2xl:left-[30rem] -rotate-[15deg] "
        />
        <img
          src={image4}
          alt="Community 4"
          className="absolute w-[184px] h-[250px] md:w-[146px] md:h-[200px] rounded-[24px] -bottom-5 right-4 xl:bottom-16 xl:right-[32rem] 2xl:bottom-28 2xl:right-[36rem] rotate-[10deg] "
        />
      </div>
    </div>
  );
};

export default function Community() {
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
      <CursorEffect />
      <Navbar isDark={false} />
      <div className=" z-0 relative overflow-hidden h-[calc(100vh-15vh)] xl:mt-0 mt-10">
        <div className=" perspective-[1000px]">
          <div
            className="absolute h-[700px] w-[1000px] translate-x-[-50%] translate-y-[-50%] left-[50%] top-[50%] "
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div>
              <img
                src={image1}
                alt="community image"
                className="max-w-[207px] max-h-[216px] object-cover absolute top-[70px] left-[50px] rotate-on-cursor opacity-40"
              />
            </div>
            <div>
              <img
                src={image2}
                alt="community image"
                className="max-w-[323px] max-h-[189px] object-cover absolute top-[20px] left-[300px] rotate-on-cursor opacity-40"
              />
            </div>
            <div>
              <img
                src={image3}
                alt="community image"
                className="max-w-[323px] max-h-[150px] object-cover absolute top-[60px] right-[50px] rotate-on-cursor opacity-40"
              />
            </div>
            <div>
              <img
                src={image4}
                alt="community image"
                className="max-w-[165px] max-h-[312px] object-cover absolute bottom-[150px] right-[40px] rotate-on-cursor opacity-40"
              />
            </div>
            <div>
              <img
                src={image5}
                alt="community image"
                className="w-[554px] h-[149px] object-cover absolute bottom-[40px] left-[200px] rotate-on-cursor opacity-40"
              />
            </div>
            <div>
              <img
                src={image6}
                alt="community image"
                className="max-w-[190px] max-h-[175px] absolute top-[320px] left-[70px] rotate-on-cursor opacity-40"
              />
            </div>
            <div>
              <img
                src={imageCentered}
                alt="community image"
                className="max-w-[438px] max-h-[233px] object-cover absolute top-[240px] left-[340px] rotate-on-cursor opacity-40"
              />
            </div>
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
      <div className="text-white flex flex-col w-5/6 mt-10 xl:mt-0 xl:w-2/6 mx-auto">
        <h4 className="text-left opacity-60 uppercase">Mühit</h4>
        <h1 className="font-jakarta font-[500] text-white xl:text-[26px] text-[20px]">
          <span className="text-blue_light">Turing Academy </span>
          olaraq sizlərə bir addım öndə olan mühitimizi təqdim edirik falan
        </h1>
      </div>
      <div className="mt-36 md:h-[350px] xl:h-[400px] h-[1750px]">
        <CommunitySlider />
      </div>
      <div className="md:mt-20 h-[2400px]">
        <CommunityAdvantages />
        <MuhitComponent />
      </div>
    </div>
  );
}
