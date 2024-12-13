import React from "react";

export default function Events_card({
  eventCategory,
  eventName,
  eventDesc,
  eventDate,
  guests,
  price,
  linkForLearnMore,
}) {
  return (
    <div className="w-[416px] h-[242px] rounded-2xl p-4 border border-[#4A5567] ">
      <button className="border border-[#4A5567] rounded-lg text-white py-1.5 px-2.5 text-[14px]">
        {eventCategory}
      </button>
      <h2 className="text-white text-2xl mt-5">{eventName}</h2>
      <p className="text-[14px] opacity-70 text-white mt-3">{eventDesc}</p>

      <div className="flex justify-between mt-10">
        <div className="flex flex-col">
          <h5 className="text-white opacity-90 font-[500]">Qonaqlar:</h5>
          <p className="text-[14px] opacity-70 text-white">{guests}</p>
        </div>

        <div className="flex flex-col">
          <p className="text-white opacity-90 font-[500]">
            {price === 0 ? "Ödənişsiz" : price}
          </p>
          <p className="text-[14px] opacity-70 text-white">{eventDate}</p>
        </div>
      </div>
    </div>
  );
}
