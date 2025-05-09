import MutualChoices_card from "../components/MutualChoices_card";
import icon from "../assets/vectors/Frame.png";
import textVector from "../assets/vectors/textVector.png";
import { motion, useInView } from "framer-motion";

import SeeAll_btn from "../components/SeeAll_btn";
import { Link } from "react-router";
import React from "react";
import { xToCenter } from "../utils/motionAnimations";

export default function MutualChoices() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.3,
  });
  const item = xToCenter(-20);
  return (
    <div className="flex flex-col lg:flex-row gap-10 w-full lg:justify-around justify-center items-center bg-white py-10 lg:py-[72px] overflow-hidden">
      <div className="w-full lg:w-[12%] 2xl:w-[18%] flex justify-start">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={item}
          className="flex flex-col gap-8 lg:gap-14 px-4 lg:px-0"
        >
          <div className="relative">
            <p className="font-[500] text-[14px] text-white_ultraDark">
              MUTUAL CHOICES
              <img
                className="absolute -bottom-8 sm:-bottom-7 left-[104px] sm:left-24"
                src={textVector}
                alt="Text Vector"
              />
            </p>
            <p className="font-[600] leading-[50px] sm:leading-[60px] font-Plus_Jakarta_Sans text-[50px] sm:text-[48px] text-black_medium pt-4 w-[300px]">
              Skill up, stand out
            </p>
          </div>
          <div className="hidden lg:block h-[56px] w-[145px]">
            <Link to={"/specialty"}>
              <SeeAll_btn>See all</SeeAll_btn>
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 lg:px-0">
        <MutualChoices_card
          title={"Design"}
          desc={
            "Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit Korem ipsum dolor sit amet"
          }
          icon={icon}
        />
        <MutualChoices_card
          title={"Design"}
          desc={
            "Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit Korem ipsum dolor sit amet"
          }
          icon={icon}
        />
      </div>

      <div className="block lg:hidden w-full mt-6 px-4">
        <Link to={"/specialty"}>
          <SeeAll_btn>See all</SeeAll_btn>
        </Link>
      </div>
    </div>
  );
}
