import { useState } from "react";
import { IEventsProps } from "../../const/types";

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
    <div
      className={`group w-[416px] h-[242px] rounded-2xl p-4 border ${
        !isDark ? "border-white_medium" : "border-[#4A5567]"
      }  hover:cursor-pointer ${!isDark ? "bg-white_ultraLight" : ""}`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <button
        className={`border  rounded-lg  py-1 px-2.5 text-[14px] ${
          !isDark
            ? "text-white_ultraDark border-white_medium"
            : "text-white border-[#4A5567]"
        }`}
      >
        {eventCategory}
      </button>
      <h2
        className={`${black_text}
        }  text-2xl mt-5`}
      >
        {eventName}
      </h2>
      <p className={`${white_ultraDark} text-[14px]  mt-3`}>{eventDesc}</p>

      {!isHover ? (
        <div className="flex justify-between mt-10 group-hover:">
          <div className="flex flex-col">
            <h5 className={`${black_text} opacity-90 font-[500]`}>Qonaqlar:</h5>
            <p className={`${white_ultraDark} text-[14px] `}>{guests}</p>
          </div>

          <div className="flex flex-col ">
            <p className={` opacity-90 font-[500] ${black_text}`}>
              {price === 0 ? "Ödənişsiz" : price}
            </p>
            <p className={` ${white_ultraDark} text-[14px]`}>{eventDate}</p>
          </div>
        </div>
      ) : (
        <div className={`flex gap-4 mt-10 text-[14px] `}>
          <button
            className={`w-[184px] h-[40px] rounded-full bg-transparent  border border-[#4A5567] flex justify-center items-center ${buttons_color}`}
          >
            Learn More
          </button>
          <button className="w-[184px] h-[40px] rounded-full bg-blue_light flex justify-center items-center text-white ">
            Register
          </button>
        </div>
      )}
    </div>
  );
}
