import React, { useState } from "react";

export default function Events_card({
  eventCategory,
  eventName,
  eventDesc,
  eventDate,
  guests,
  price,
  linkForLearnMore,
}) {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      className="group w-[416px] h-[242px] rounded-2xl p-4 border border-[#4A5567] hover:cursor-pointer "
      onMouseEnter={() =>
        setTimeout(() => {
          setIsHover(true);
        }, 200)
      }
      onMouseLeave={() =>
        setTimeout(() => {
          setIsHover(false);
        }, 4)
      }
    >
      <button className="border border-[#4A5567] rounded-lg text-white py-1.5 px-2.5 text-[14px]">
        {eventCategory}
      </button>
      <h2 className="text-white text-2xl mt-5">{eventName}</h2>
      <p className="text-[14px] opacity-70 text-white mt-3">{eventDesc}</p>

      {!isHover ? (
        <div className="flex justify-between mt-10 group-hover:">
          <div className="flex flex-col">
            <h5 className="text-white opacity-90 font-[500]">Qonaqlar:</h5>
            <p className="text-[14px] opacity-70 text-white">{guests}</p>
          </div>

          <div className="flex flex-col ">
            <p className="text-white opacity-90 font-[500]">
              {price === 0 ? "Ödənişsiz" : price}
            </p>
            <p className="text-[14px] opacity-70 text-white">{eventDate}</p>
          </div>
        </div>
      ) : (
        <div className="flex gap-4 mt-10 text-[14px] text-white">
          <button className="w-[184px] h-[40px] rounded-full bg-transparent  border border[#4A5567] flex justify-center items-center">
            Learn More
          </button>
          <button className="w-[184px] h-[40px] rounded-full bg-blue_light flex justify-center items-center">
            Register
          </button>
        </div>
      )}
    </div>
  );
}
