import { useState } from "react";
import playVector from "../../assets/vectors/play.png";
import { IStudentsInfoProps } from "../../const/types";
import { motion } from "framer-motion";

const item = {
  hidden: { opacity: 0, translateY: 20 },
  visible: {
    opacity: 1,
    translateY: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};
export default function Reels_card({
  category,
  name,
  desc,
  video,
  coverPhoto,
}: IStudentsInfoProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleTogglePlay = () => {
    setIsPlaying(true);
  };

  const handleCloseModal = () => {
    setIsPlaying(false);
  };

  return (
    <>
      <motion.div
        variants={item}
        initial="hidden"
        animate="visible"
        className="h-auto w-full md:w-[306px] rounded-2xl p-4 border relative group"
      >
        <div
          className="w-full md:w-[274px] bg-blue-50 rounded-[10px] relative overflow-hidden"
          onClick={handleTogglePlay}
        >
          <img
            src={coverPhoto}
            className="rounded-[10px] object-cover cursor-pointer customAspect transition-transform duration-300 hover:scale-105"
            alt="Cover"
          />
          {!isPlaying && (
            <button
              className="absolute w-16 h-16 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white rounded-full flex items-center justify-center"
              onClick={handleTogglePlay}
            >
              <img src={playVector} alt="Play Button" />
            </button>
          )}
        </div>

        <div className="h-[85px] w-full flex flex-col mt-4 gap-3">
          <button className="bg-white_ultraLight border-white_medium text-blue_lightMedium border rounded-lg px-10 py-1.5 flex justify-center items-center w-1/4 h-[29px]">
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
          <div>
            <h4 className="font-[500] text-[18px] text-black_ultraDark">
              {name}
            </h4>
            <p className="text-[12px] text-black_ultraLight">{desc}</p>
          </div>
        </div>
      </motion.div>

      {isPlaying && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center"
          onClick={handleCloseModal}
        >
          <div
            className="relative h-[80vh] aspect-video bg-black rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking inside
          >
            <iframe
              className=" mx-auto aspect-video h-full border-none rounded-2xl"
              src={video}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              style={{ border: "none" }}
              title="YouTube Video"
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}
