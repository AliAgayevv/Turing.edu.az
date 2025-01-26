import vector1 from "../../assets/vectors/communityFirstVector.png";
import vector2 from "../../assets/vectors/positiveEnergyVector.png";
import vector3 from "../../assets/vectors/wavesBeforeVector.png";
import vector4 from "../../assets/vectors/teachLiveVector.png";
import { motion } from "framer-motion";
// import animatedCardPhoto1 from "../../assets/photos/communityAnimatedPhotos/1.jpeg";
// import animatedCardPhoto2 from "../../assets/photos/communityAnimatedPhotos/2.jpeg";
// import animatedCardPhoto3 from "../../assets/photos/communityAnimatedPhotos/3.jpeg";
// import animatedCardPhoto4 from "../../assets/photos/communityAnimatedPhotos/4.jpeg";

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

// const cardPhotos = [
//   {
//     photo: animatedCardPhoto1,
//     id: 1,
//   },
//   {
//     photo: animatedCardPhoto2,
//     id: 2,
//   },
//   {
//     photo: animatedCardPhoto3,
//     id: 3,
//   },
//   {
//     photo: animatedCardPhoto4,
//     id: 4,
//   },
// ];

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
    </div>
  );
}
