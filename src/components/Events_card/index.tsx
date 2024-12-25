import { useState } from "react";
import { IEventsProps } from "../../const/types";
import { motion } from "framer-motion";

const item = {
  hidden: { opacity: 0, translateY: 20 },
  visible: {
    opacity: 1,
    translateY: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

export default function Events_card({
  isDark,
  eventCategory,
  eventName,
  eventDesc,
  eventDate,
  guests,
  price,
  linkForLearnMore,
}: IEventsProps) {
  const [isHover, setIsHover] = useState(false);
  const black_text = !isDark ? "text-black_dark" : "text-white";
  const white_ultraDark = !isDark
    ? "text-white_ultraDark"
    : "text-white opacity-70";
  const buttons_color = !isDark
    ? "text-white_ultraDark font-[600]"
    : "text-white";

  return (
    <motion.div
      variants={item}
      initial="hidden"
      animate="visible"
      className={`group w-full h-[290px] sm:h-[250px] md:h-[290px] lg:h-[250px] lg:w-[416px] rounded-2xl p-4 border ${
        !isDark ? "border-white_medium" : "border-[#4A5567]"
      } hover:cursor-pointer ${!isDark ? "bg-white_ultraLight" : ""}`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
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

      {!isHover ? (
        <div className="flex justify-between items-start mt-10 flex-wrap gap-2">
          <div className="flex flex-col gap-1 max-w-[55%]">
            <h5 className={`${black_text} opacity-90 font-[500]`}>Guests:</h5>
            <div className={`${white_ultraDark} text-[13px]`}>
              {guests.map((guest, index) => (
                <span key={guest.id} className="font-medium">
                  {guest.guestName}
                  {index < guests.length - 1 && ", "}
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
        </div>
      ) : (
        <div className="flex gap-4 mt-10 text-[14px]">
          <button
            className={`w-[184px] h-[40px] rounded-full bg-transparent border border-[#4A5567] flex justify-center items-center ${buttons_color}`}
          >
            Learn More
          </button>
          <button className="w-[184px] h-[40px] rounded-full bg-blue_light flex justify-center items-center text-white">
            Register
          </button>
        </div>
      )}
    </motion.div>
  );
}
