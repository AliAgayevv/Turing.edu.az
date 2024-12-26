import { FaLinkedinIn } from "react-icons/fa";
import { ITeacherProps } from "../../const/types";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Teacher_card({
  name,
  workPosition,
  photo,
  connect,
}: ITeacherProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.3,
  });
  const teacherItem = {
    hidden: { opacity: 0, translateX: 100 },
    visible: {
      opacity: 1,
      translateX: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={teacherItem}
      className="border rounded-2xl w-full h-auto flex flex-col items-center p-4 sm:p-6 bg-white transition-shadow duration-300"
    >
      <div className="w-full md:w-[260px]  min-h-[300px] aspect-square flex items-center justify-center">
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

        <a href={connect} target="_blank" rel="noopener noreferrer">
          <div className="w-8 h-8 rounded-full border flex justify-center items-center hover:bg-gray-100 transition duration-200">
            <FaLinkedinIn className="text-sm sm:text-base" />
          </div>
        </a>
      </div>
    </motion.div>
  );
}
