import { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { IEventsProps } from "../../const/types";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import { yToCenter } from "../../utils/motionAnimations";

const contentVariants = {
  hidden: { opacity: 0, height: 0, translateY: 40 },
  visible: {
    opacity: 1,
    translateY: 10,
    height: "auto",
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

const animation = yToCenter(20);

export default function Events_card({
  isDark,
  eventCategory,
  eventName,
  eventDesc,
  eventDate,
  guests,
  price,
}: // linkForLearnMore,
IEventsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.3,
  });

  const isMobile = useBreakpoint(1024);
  const [isHover, setIsHover] = useState(false);

  const black_text = !isDark ? "text-black_dark" : "text-white";
  const white_ultraDark = !isDark
    ? "text-white_ultraDark"
    : "text-white opacity-70";
  const buttons_color = !isDark
    ? "text-white_ultraDark font-[600]"
    : "text-white";

  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsHover(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsHover(false);
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={animation}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      // ! TODO: Emilden sorus ki mobilde event card olcusu nece olsun? url -> http://localhost:5173/events
      className={`group w-full h-[290px] sm:h-[250px] md:h-[290px] lg:h-[38vh] xl:h-[270px] lg:w-[29vw] 2xl:w-[28.7vw] rounded-2xl p-4 border ${
        !isDark ? "border-white_medium" : "border-[#4A5567]"
      } ${!isMobile ? "hover:cursor-pointer" : ""} ${
        !isDark ? "bg-white_ultraLight" : ""
      } relative overflow-hidden`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={`border rounded-lg py-1 px-2.5 text-[14px] ${
          !isDark
            ? "text-white_ultraDark border-white_medium"
            : "text-white border-[#4A5567]"
        }`}
      >
        {eventCategory}
      </button>
      <h2 className={`${black_text} text-2xl mt-5`}>{eventName}</h2>
      <p className={`${white_ultraDark} text-[14px] mt-3`}>{eventDesc}</p>

      <AnimatePresence initial={false} mode="wait">
        {!isHover || isMobile ? (
          <motion.div
            key="details"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={contentVariants}
            className="flex justify-between items-start mt-10 flex-wrap gap-2"
          >
            <div className="flex flex-col gap-1 max-w-[55%]">
              <h5 className={`${black_text} opacity-90 font-[500]`}>Guests:</h5>
              <div className={`${white_ultraDark} text-[13px]`}>
                {guests.slice(0, 2).map((guest, index) => (
                  <span key={guest.id} className="font-medium">
                    {guest.guestName}
                    {index <= guests.length - 1 && index !== 1 && ", "}
                    {index === 1 && " ..."}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-1 max-w-[40%] text-right">
              <p className={`opacity-90 font-[500] ${black_text}`}>
                {price === 0 ? "Free" : `$${price}`}
              </p>
              <p className={`${white_ultraDark} text-[14px]`}>{eventDate}</p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="buttons"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={contentVariants}
            className="flex gap-4 mt-10 text-[14px]"
          >
            <motion.button
              whileHover={!isMobile ? { scale: 1.02 } : undefined}
              whileTap={!isMobile ? { scale: 0.98 } : undefined}
              className={`w-[50%] h-[50px] rounded-full bg-transparent border border-[#4A5567] flex justify-center items-center ${buttons_color}`}
            >
              Learn More
            </motion.button>
            <motion.button
              whileHover={!isMobile ? { scale: 1.02 } : undefined}
              whileTap={!isMobile ? { scale: 0.98 } : undefined}
              className="w-[50%] h-[50px] rounded-full bg-blue_light flex justify-center items-center text-white"
            >
              Register
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
