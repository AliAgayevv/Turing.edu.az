import vector1 from "../../assets/vectors/communityFirstVector.png";
import vector2 from "../../assets/vectors/positiveEnergyVector.png";
import vector3 from "../../assets/vectors/wavesBeforeVector.png";
import vector4 from "../../assets/vectors/teachLiveVector.png";
import { motion, useInView } from "framer-motion";
import animatedCardPhoto1 from "../../assets/photos/communityAnimatedPhotos/1.jpeg";
import animatedCardPhoto2 from "../../assets/photos/communityAnimatedPhotos/2.jpeg";
import animatedCardPhoto3 from "../../assets/photos/communityAnimatedPhotos/3.jpeg";
import animatedCardPhoto4 from "../../assets/photos/communityAnimatedPhotos/4.jpeg";

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

const cardPhotos = [
  {
    photo: animatedCardPhoto1,
    id: 1,
  },
  {
    photo: animatedCardPhoto2,
    id: 2,
  },
  {
    photo: animatedCardPhoto3,
    id: 3,
  },
  {
    photo: animatedCardPhoto4,
    id: 4,
  },
];

export default function CommunityAdvantages() {
  return (
    <div className="relative">
      <div className="w-11/12 mx-auto">
        <h3 className="uppercase text-white_dark">Turing Advantage</h3>
        <h1 className="text-4xl md:text-5xl font-semibold text-white py-4">
          <span className="text-sky-500">Turing Academy</span> offers a fun
          <br />& accessible learning experience.
        </h1>
      </div>

      <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 mt-[72px] gap-[48px] md:gap-[72px] md:px-8 lg:px-16">
        {fakeData.map((data) => (
          <motion.div
            initial="hidden"
            key={data.id}
            className="w-11/12 mx-auto relative z-10"
          >
            {data.icon && (
              <img src={data.icon} className="absolute -top-4 -left-3 -z-10" />
            )}
            <h4 className="font-[500] text-xl text-white">{data.title}</h4>
            <p className="text-[14px] text-[#A2A1A4] break-words">
              {data.desc}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="absolute h-[700px] w-[1000px] translate-x-[-50%] translate-y-[-50%] left-[50%] top-[1100px]">
        <div>
          <img
            src={animatedCardPhoto1}
            className="max-w-[237px] max-h-[323px] w-[237px] h-[323px] object-cover absolute lg:-top-[50px] lg:left-[40px] 2xl:-top-[80px] 2xl:-left-[20px] top-[500px] left-[300px] rotate-on-cursor  -rotate-[15deg]"
          />
        </div>
        <div>
          <img
            src={animatedCardPhoto2}
            className="max-w-[260px] max-h-[354px] w-[260px] h-[354px] object-cover absolute lg:-top-[40px] top-[500px] left-[560px] lg:left-[850px] rotate-on-cursor  rotate-[15deg]"
          />
        </div>
        <div>
          <img
            src={animatedCardPhoto3}
            className="max-w-[146px] max-h-[200px] w-[146px] h-[200px] object-cover absolute lg:top-[450px] lg:left-[650px] rotate-on-cursor  rotate-[10deg]"
          />
        </div>
        <div>
          <img
            src={animatedCardPhoto4}
            className="max-w-[214px] max-h-[292px] h-[292px] w-[214px] object-cover absolute lg:top-[450px] lg:left-[250px] rotate-on-cursor  -rotate-[10deg]"
          />
        </div>
      </div>
      <h1 className="font-montserrat font-[600] text-[120px] text-white absolute top-[900px] left-[600px] 2xl:left-[670px]">
        Mühit
      </h1>
      <p className="text-[18px] text-white_lightMedium absolute top-[1070px] left-[400px] w-2/4 text-center">
        Learn highly demanded skills through practical courses, created
        bytrusted industry professionals, that focus on real-world applications.
      </p>
    </div>
  );
}
