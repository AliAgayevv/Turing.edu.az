import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { yToCenter } from "../utils/motionAnimations";
import { useGetCommunityContentQuery } from "../store/services/communityApi";

const liAnimation = yToCenter(20);

export default function TuringAdvantage() {
  const { data, isLoading, isError } = useGetCommunityContentQuery({});

  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.3,
  });

  const [visibleCount, setVisibleCount] = useState(4);

  const updateVisibleCount = () => {
    if (window.innerWidth >= 768 && Array.isArray(data?.advantages)) {
      setVisibleCount(data.advantages.length);
    } else {
      setVisibleCount(4);
    }
  };

  useEffect(() => {
    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, [data]);

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  if (isLoading)
    return <div className="text-white text-center py-10">Loading...</div>;

  if (isError || !Array.isArray(data?.advantages))
    return (
      <div className="text-white text-center py-10">
        Error loading or invalid data format.
      </div>
    );

  return (
    <div className="w-11/12 mx-auto pt-16 relative">
      <div className="w-11/12 mx-auto">
        <h3 className="uppercase text-white_dark">Turing Advantage</h3>
        <h1 className="text-4xl md:text-5xl font-semibold text-white py-4">
          <span className="text-sky-500">Turing Academy</span> offers a fun
          <br />& accessible learning experience.
        </h1>
      </div>

      <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 mt-[72px] gap-[48px] md:gap-[72px] md:px-8 lg:px-16">
        {data.advantages.slice(0, visibleCount).map(
          (
            item: {
              title: string;
              description: string;
              icon?: string;
              desc: string;
            },
            index: number
          ) => (
            <motion.div
              ref={index === 0 ? ref : null}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={liAnimation}
              key={index}
              className="w-11/12 mx-auto relative z-10"
            >
              <h4 className="font-[500] text-xl text-white">{item.title}</h4>
              <p className="text-[14px] text-[#A2A1A4] break-words">
                {item.description}
              </p>
            </motion.div>
          )
        )}
      </div>

      {visibleCount < data.advantages.length && (
        <button
          onClick={loadMore}
          className="md:hidden w-full border text-white border-black_light mt-6 rounded-full font-[500] h-[48px] bg-transparent"
        >
          See more
        </button>
      )}

      <div className="mt-4 md:mt-[72px] relative overflow-hidden">
        <div className="w-full md:w-[1000px] relative h-[320px] mt-8 rounded-lg mx-auto">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl"
            src={data.communityVideoUrl}
            autoPlay
            playsInline
            loop
          />
          <div className="absolute h-full flex items-center justify-center lg:inset-0">
            <div
              className="text-[60px] sm:text-[88px] md:text-[130px] lg:text-[150px] xl:text-[170px] 2xl:text-[210px] uppercase text-white_light_32 text-center font-bold tracking-wide"
              style={{ fontFamily: "montserrat" }}
            >
              Community
            </div>
          </div>
        </div>

        <div className="w-full md:w-[736px] mx-auto pt-16 flex flex-col justify-center items-center gap-8">
          <p className="text-white_lightMedium text-[18px] text-center">
            {data.bottomMessage}
          </p>
          <Link to="/community">
            <button className="bg-black_dark border border-black_light text-white_solid py-3 px-6 rounded-3xl mb-10 w-full h-full xl:w-[10vw] xl:h-[6vh]">
              Explore us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
