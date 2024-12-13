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
  return (
    <div className="h-[1500px] w-11/12 mx-auto  pt-16 relative">
      {/* TODO: overflow problemi */}
      <div className="absolute -top-80 -right-80 w-[500px] h-[500px] bg-gradient-to-br from-blue-200 to-transparent blur-[120px] rounded-full pointer-events-none z-0"></div>

      <h3 className="uppercase text-white_dark">Turing Advantage</h3>
      <h1 className="text-4xl md:text-5xl font-semibold text-white py-4">
        <span className="text-sky-500">Turing Academy</span> offers a fun
        <br />& accessible learning experience.
      </h1>
      <div className="grid grid-cols-3 mt-[72px] gap-[72px] pr-60   ">
        {fakeData.map((data) => {
          return (
            <div key={data.id} className="w-[306px] relative z-10">
              <img
                src={data?.icon}
                className=" absolute -top-4 -left-3 -z-10"
              />
              <h4 className="font-[500] text-xl text-white">{data.title}</h4>
              <p className="text-[14px] text-[#A2A1A4]">{data.desc}</p>
            </div>
          );
        })}
      </div>
      <div className="mt-44 relative">
        <div className="w-[1000px] relative h-[320px] mt-8 rounded-lg overflow-hidden  mx-auto">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl"
            src={exampleVideo}
          />
        </div>
        <div className="text-3xl absolute top-40 text-white_light_32 font-[900] font-montserrat uppercase text-[195px]">
          Community
        </div>
        <div className="w-[736px] mx-auto pt-16 flex flex-col justify-center items-center gap-8">
          <p className="text-white_lightMedium text-[18px] text-center ">
            Learn highly demanded skills through practical courses, created
            bytrusted industry professionals, that focus on real-world
            applications.
          </p>
          <button className="bg-black_dark border border-black_light text-white_solid py-3 px-6 rounded-3xl">
            Explore us
          </button>
        </div>
      </div>
    </div>
  );
}
