import { FaLinkedinIn } from "react-icons/fa";
import { ITeacherProps } from "../../const/types";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { xToCenter } from "../../utils/motionAnimations";

// Create a modified version of ITeacherProps with optional connect
type ModifiedTeacherProps = Omit<ITeacherProps, "connect"> & {
  connect?: string;
};

export default function Teacher_card({
  name,
  workPosition,
  photo,
  connect,
}: ModifiedTeacherProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.3,
  });
  const teacherItem = xToCenter(-100);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={teacherItem}
      className="border rounded-2xl lg:w-[20vw] h-auto flex flex-col items-center p-4 bg-white transition-shadow duration-300"
    >
      <div className="w-full sm:w-[30vw] sm:h-[30vh] md:w-[35vw] lg:w-[18vw] lg:h-[40vh] xl:h-[20vw] xl:max-h-[50vh] xl:w-[18vw] xl:aspect-auto sm:max-h-[30vh] aspect-square flex items-center justify-center">
        <img
          src={photo}
          className="w-full h-full object-cover rounded-[15px]"
          alt={name}
        />
      </div>
      <div className="w-full flex justify-between items-center mt-4">
        <div>
          <h4 className="font-[500] text-base sm:text-lg text-black_dark">
            {name}
          </h4>
          <p className="text-xs sm:text-sm opacity-80 text-black_dark">
            {workPosition}
          </p>
        </div>
        {connect ? (
          <a href={connect} target="_blank" rel="noopener noreferrer">
            <div className="w-8 h-8 rounded-full border flex justify-center items-center hover:bg-gray-100 transition duration-200">
              <FaLinkedinIn className="text-sm sm:text-base" />
            </div>
          </a>
        ) : (
          <div className="w-8 h-8 rounded-full border flex justify-center items-center opacity-50 cursor-not-allowed">
            <FaLinkedinIn className="text-sm sm:text-base" />
          </div>
        )}
      </div>
    </motion.div>
  );
}
