import { useRef, useState } from "react";
import playVector from "../../assets/vectors/play.png";
import { IGraduatesProps } from "../../const/types";
import { motion, useInView } from "framer-motion";
import { xToCenter } from "../../utils/motionAnimations";

const item = xToCenter(100);

export default function Graduates_card({
  studentName,
  coverPhoto,
  videoUrl,
  desc,
}: IGraduatesProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleTogglePlay = () => {
    setIsPlaying(true);
  };

  const handleCloseModal = () => {
    setIsPlaying(false);
  };

  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.3,
  });

  return (
    <>
      <motion.div
        variants={item}
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="h-auto md:h-[490px] w-full md:w-[306px] rounded-2xl p-4 border relative group"
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

        <div className="h-[85px] w-full flex flex-col mt-5 md:mt-2 gap-0  md:gap-3">
          <div className="flex flex-col gap-3 md:gap-0">
            <h4 className="text-[20px] font-[500] md:text-[18px] text-black_dark">
              {studentName}
            </h4>
            <p className="text-base  md:text-[12px] text-black_dark opacity-80">
              {desc}
            </p>
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
