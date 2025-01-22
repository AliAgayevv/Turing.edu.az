import React from "react";
import ApplyNow_btn from "../ApplyNow_btn";
import LearnMore_btn from "../LearnMore_btn";
import { motion } from "framer-motion";
import { useBreakpoint } from "../../hooks/useBreakpoint";

interface IProps {
  category: string;
  img: string;
  desc: string;
  id: number | string;
  title: string;
  hiddenText: string;
  route: string;
}

const SpecialtyCard: React.FC<IProps> = ({
  id,
  category,
  img,
  desc,
  title,
  hiddenText,
  route,
}) => {
  const isMobile = useBreakpoint();
  return (
    <motion.div
      className="border group w-auto h-[500px] xl:w-[22vw]  bg-white rounded-2xl p-4 flex flex-col gap-5 font-inter overflow-hidden relative"
      whileHover={isMobile ? {} : "hover"}
    >
      <motion.div
        className="w-auto h-auto xl:w-[20vw] xl:h-[20vw] md:max-h-[40vh] md:h-[40vh] lg:max-h-[36vh] lg:h-[36vh] p-2 rounded-lg flex items-center justify-center"
        variants={
          isMobile
            ? {}
            : {
                hover: {
                  scale: 0.56,
                  y: -55,
                  x: -60,
                  transition: { duration: 0.3, delay: 0.2 },
                },
              }
        }
      >
        <motion.img
          src={img}
          alt={title}
          className="h-full w-full object-cover rounded-xl"
        />
      </motion.div>

      <div>
        <motion.button
          disabled
          className="flex px-2.5 justify-center items-center text-[#01030E] bg-[#F8F9FA] rounded-lg border mb-4 text-[14px] font-[400] opacity-70"
          variants={{
            hover: {
              y: -95,
              transition: { duration: 0.3, delay: 0.3 },
            },
          }}
        >
          {category.slice(0, 1).toUpperCase() + category.slice(1)}
        </motion.button>

        <motion.h3
          className="mb-[6px] font-[500]"
          variants={{
            hover: {
              y: -100,
              transition: { duration: 0.3, delay: 0.3 },
            },
          }}
        >
          {title}
        </motion.h3>

        <motion.p
          className="p-1 text-[12px] text-[#01030E] opacity-80 font-[400]"
          variants={{
            hover: {
              y: 100,
              transition: { duration: 0.5, delay: 0.3 },
            },
          }}
        >
          {desc}
        </motion.p>

        <motion.p
          className="absolute -bottom-20 p-1 text-[12px] text-[#01030E] opacity-80 font-[400]"
          variants={{
            hover: {
              y: -170,
              x: -1,
              transition: { duration: 0.3, delay: 0.3 },
            },
          }}
        >
          {hiddenText}
        </motion.p>

        <motion.div
          className="absolute -bottom-16 left-0 right-0 flex gap-4 justify-center"
          variants={{
            hover: {
              y: -82,
              transition: { duration: 0.3, delay: 0.5 },
            },
          }}
        >
          <div className="w-[129px] h-[60px]">
            <LearnMore_btn>Learn More</LearnMore_btn>
          </div>
          <div className="w-[129px] h-[46px]">
            <ApplyNow_btn />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SpecialtyCard;
