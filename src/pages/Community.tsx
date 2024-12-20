import Navbar from "../components/Navbar";
import image1 from "../assets/photos/communityBGPHOTOS/photo1.jpeg";
import image2 from "../assets/photos/communityBGPHOTOS/photo2.jpeg";
import image3 from "../assets/photos/communityBGPHOTOS/photo3.jpeg";
import image4 from "../assets/photos/communityBGPHOTOS/photo4.png";
import image5 from "../assets/photos/communityBGPHOTOS/photo5.png";
import image6 from "../assets/photos/communityBGPHOTOS/photo6.jpeg";
import imageCentered from "../assets/photos/communityBGPHOTOS/photoCenter.jpeg";
import { useEffect, useState } from "react";
import vector1 from "../assets/vectors/communityFirstVector.png";
import vector2 from "../assets/vectors/positiveEnergyVector.png";
import vector3 from "../assets/vectors/wavesBeforeVector.png";
import vector4 from "../assets/vectors/teachLiveVector.png";
import SeeAll_btn from "../components/SeeAll_btn";

const gridImages = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  imageCentered,
];

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

export default function Community() {
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
    <div className=" bg-blue_ultraDark z-0 relative">
      <Navbar isDark={false} />
      <div className="w-11/12 mx-auto text-white text-4xl relative">
        <div className="flex z-10 absolute w-full h-full top-[110px] left-[200px] opacity-40 ">
          <img src={image1} className="w-[207px] h-[216px] object-cover" />
        </div>
        <div className="flex z-10 absolute top-[40px] left-[440px] opacity-40 w-full h-full">
          <img src={image2} className="w-[323px] h-[189px] object-cover" />
        </div>
        <div className="flex z-10 absolute top-[125px] left-[850px] opacity-40 w-full h-full">
          <img src={image3} className="w-[323px] h-[150px] object-cover" />
        </div>
        <div className="flex z-10 absolute top-[375px] left-[950px] opacity-40 w-full h-full">
          <img src={image4} className="w-[165px] h-[312px] object-cover" />
        </div>
        <div className="flex z-10 absolute top-[585px] left-[350px] opacity-40 w-full h-full">
          <img src={image5} className="w-[554px] h-[149px] object-cover" />
        </div>
        <div className="flex z-10 absolute top-[400px] left-[200px] opacity-40 w-full h-full">
          <img src={image6} className="w-[159px] h-[135px] object-cover" />
        </div>
        <div className="flex z-10 absolute top-[320px] left-[444px] opacity-40 w-full h-full ">
          <img
            src={imageCentered}
            className="w-[438px] h-[233px] object-cover"
          />
        </div>
      </div>
      <div className=" z-20 flex justify-center items-center h-screen overflow-hidden relative">
        <div className="font-montserrat font-bold text-[64px] md:text-[120px] leading-[120px] text-center">
          <h1 className="text-white/50">Innovate</h1>
          <h1 className="text-white/80">Explore</h1>
          <h1 className="text-white">Excel</h1>
        </div>
      </div>
      <div className="mx-auto w-screen bg-blue_ultraDark h-screen text-white">
        <div className="mx-auto w-11/12">
          <h1 className="text-center text-3xl">
            <span className="text-blue_light">Turing Academy</span> olaraq
            sizlərə bir addım <br></br> öndə olan mühitimizi təqdim edirik falan
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="py-20 justify-center items-center overflow-hidden w-screen flex gap-5 rotate-[5deg]">
            <img
              src={image1}
              className="w-[394px] h-[286px] object-cover z-40 rounded-2xl "
            />
            <img
              src={image1}
              className="w-[394px] h-[286px] object-cover z-40 rounded-2xl "
            />
            <img
              src={image1}
              className="w-[394px] h-[286px] object-cover z-40 rounded-2xl "
            />
            <img
              src={image1}
              className="w-[394px] h-[286px] object-cover z-40 rounded-2xl "
            />
          </div>
          <div className="w-[145px] h-[48px] text-center">
            <SeeAll_btn>See All</SeeAll_btn>
          </div>
        </div>
        <div className="w-screen bg-blue_ultraDark pt-20 h-screen">
          <div className="w-11/12 mx-auto">
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
                    <img
                      src={data.icon}
                      className="absolute -top-4 -left-3 -z-10"
                    />
                  )}
                  <h4 className="font-[500] text-xl text-white">
                    {data.title}
                  </h4>
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
          </div>
          <div className="text-center pt-96 h-[1000px] bg-blue_ultraDark relative ">
            <h1 className="text-[120px] font-[600] font-montserrat">Mühit</h1>
            <p className="text-[18px] text-white_lightMedium">
              Learn highly demanded skills through practical courses, <br></br>{" "}
              created bytrusted industry professionals, that focus on real-world
              applications
            </p>
            <div className="flex z-10 absolute top-[180px] left-[244px] opacity-80 w-full h-full">
              <img
                src={imageCentered}
                className="w-[237px] h-[323px] object-cover -rotate-[15deg] rounded-2xl"
              />
            </div>
            <div className="flex z-10 absolute top-[210px] left-[1050px] opacity-80 w-full h-full ">
              <img
                src={imageCentered}
                className="w-[237px] h-[323px] object-cover rotate-[15deg] rounded-2xl"
              />
            </div>
            <div className="flex z-10 absolute top-[650px] left-[480px] opacity-80 w-full h-full ">
              <img
                src={imageCentered}
                className="w-[214px] h-[292px] object-cover -rotate-[9.5deg] rounded-2xl"
              />
            </div>
            <div className="flex z-10 absolute top-[670px] left-[830px] opacity-80 w-full h-full ">
              <img
                src={imageCentered}
                className="w-[146px] h-[199px] object-cover rotate-[8.5deg] rounded-2xl"
              />
            </div>
          </div>
          <div className="relative min-h-screen w-full overflow-hidden">
            {/* Image Grid Background */}
            <div className="absolute inset-0 grid grid-cols-3 gap-0">
              {gridImages.map((src, index) => (
                <div key={index} className="relative h-[400px] overflow-hidden">
                  <img
                    src={src}
                    alt={`Grid image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/70" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center text-white ">
              <h1 className="text-4xl md:text-6xl font-bold mb-8 flex items-center gap-4">
                Onlar
                <div className="flex -space-x-4">
                  <img
                    src="/src/assets/photos/ali.jpeg"
                    alt="Profile 1"
                    className="w-20 h-20 rounded-full border-4 border-white"
                  />
                  <img
                    src="/src/assets/photos/ali.jpeg"
                    alt="Profile 2"
                    className="w-20 h-20 rounded-full border-4 border-white"
                  />
                </div>
                bizi seçərək
              </h1>

              <h2 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="text-blue-400">#BirAddımÖndə</span>
                <span className="ml-4">oldu!</span>
              </h2>

              <p className="max-w-2xl text-lg md:text-xl text-gray-200">
                Learn highly demanded skills through practical courses, created
                by trusted industry professionals, that focus on real-world
                applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
