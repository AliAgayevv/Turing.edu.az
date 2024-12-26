import Reels_card from "../components/Reels_card";
import SeeAll_btn from "../components/SeeAll_btn";
import { Link } from "react-router";
import fakeData from "../datas/graduates.json";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const cardAnimation = {
  hidden: { opacity: 0, translateX: -100 },
  visible: {
    opacity: 1,
    translateX: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};
export default function OurGraduates() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.3,
  });
  return (
    <div className="w-11/12 mx-auto py-20">
      <h3 className="uppercase text-white_dark">Our Graduates</h3>
      <div className="flex flex-col md:flex-row justify-between items-center pr-10">
        <h1 className="md:text-[48px] text-[32px] md:text-5xl font-jakarta font-[500] text-black_medium py-4 line-clamp-3">
          Accelerate your career
          <br className="hidden md:block" />
          in <span className="text-blue_light">Turing Academy</span>
        </h1>
        <Link to={"/graduates"}>
          <div className="hidden md:block h-[56px] w-[145px]">
            <SeeAll_btn>See all</SeeAll_btn>
          </div>
        </Link>
      </div>
      <div className="flex gap-4 md:gap-0 overflow-x-auto snap-x snap-mandatory scroll-smooth md:overflow-clip pb-10 pt-4 scrollbar-hide">
        {fakeData.slice(0, 4).map((data) => (
          <>
            <motion.div
              ref={ref}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={cardAnimation}
              className="snap-center flex-shrink-0 w-[85%] sm:w-1/2 md:w-1/3 xl:w-1/4 px-4 hidden md:block"
              key={data.id}
            >
              <Reels_card {...data} />
            </motion.div>

            <motion.div
              className="snap-center flex-shrink-0 w-[85%] sm:w-1/2 md:w-1/3 xl:w-1/4 px-4 block md:hidden"
              key={data.id}
            >
              <Reels_card {...data} />
            </motion.div>
          </>
        ))}
      </div>
      <Link to={"/graduates"}>
        <div className="block md:hidden h-[56px] w-11/12 mx-auto">
          <SeeAll_btn>See all</SeeAll_btn>
        </div>
      </Link>
    </div>
  );
}
