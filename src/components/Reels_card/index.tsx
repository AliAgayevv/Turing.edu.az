import { useState } from "react";
import playVector from "../../assets/vectors/play.png";
import { IStudentsInfoProps } from "../../const/types";
import { motion } from "framer-motion";
import { yToCenter } from "../../utils/motionAnimations";

const item = yToCenter(20);

export default function Reels_card({
  graduatesPage,
  studentName,
  coverPhoto,
  videoUrl,
  category,
  desc,
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
        className={`h-auto md:w-[306px] rounded-2xl p-4 border relative group ${
          graduatesPage ? "w-full" : "w-[250px]"
        }  `}
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
            {category?.charAt(0).toUpperCase() + category?.slice(1)}
          </button>
          <div>
            <h4 className="font-[500] text-[18px] text-black_ultraDark">
              {studentName}
            </h4>
            <p className="text-[12px] text-black_ultraLight">{desc}</p>
          </div>
        </div>
      </motion.div>

      {isPlaying && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center p-4 sm:p-6 md:p-8"
          onClick={handleCloseModal}
        >
          <div
            className="relative w-full max-w-[90vw] sm:max-w-[80vw] md:max-w-[80vw] lg:max-w-[80vw] h-auto aspect-video bg-black rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              className="w-full h-full border-none rounded-lg sm:rounded-xl md:rounded-2xl"
              src={videoUrl}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              title="YouTube Video"
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}
