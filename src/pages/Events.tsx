import React from "react";
import SeeAll_btn from "../components/SeeAll_btn";
import Events_card from "../components/Events_card";

export default function Events() {
  return (
    <div className="w-11/12 mx-auto h-[900px] py-20">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="uppercase text-white_dark">Events</h3>
          <h1 className="text-5xl font-jakarta font-[500] text-white py-4">
            Upcoming Events
          </h1>
        </div>
        <div className="text-white bg-transparent">
          <SeeAll_btn />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6 mt-16">
        <Events_card
          eventCategory={"UX/UI Dizayn"}
          eventName={"III Design Competition"}
          eventDesc={"A lot happened this month. Take a look at what's coming."}
          guests={"Togrul Samed, Zumrad Muradov"}
          eventDate={"Apr 17, 2024"}
          price={0}
          linkForLearnMore={""}
        />
        <Events_card
          eventCategory={"UX/UI Dizayn"}
          eventName={"III Design Competition"}
          eventDesc={"A lot happened this month. Take a look at what's coming."}
          guests={"Togrul Samed, Zumrad Muradov"}
          eventDate={"Apr 17, 2024"}
          price={0}
          linkForLearnMore={""}
        />
        <Events_card
          eventCategory={"UX/UI Dizayn"}
          eventName={"III Design Competition"}
          eventDesc={"A lot happened this month. Take a look at what's coming."}
          guests={"Togrul Samed, Zumrad Muradov"}
          eventDate={"Apr 17, 2024"}
          price={0}
          linkForLearnMore={""}
        />
        <Events_card
          eventCategory={"UX/UI Dizayn"}
          eventName={"III Design Competition"}
          eventDesc={"A lot happened this month. Take a look at what's coming."}
          guests={"Togrul Samed, Zumrad Muradov"}
          eventDate={"Apr 17, 2024"}
          price={0}
          linkForLearnMore={""}
        />
        <Events_card
          eventCategory={"UX/UI Dizayn"}
          eventName={"III Design Competition"}
          eventDesc={"A lot happened this month. Take a look at what's coming."}
          guests={"Togrul Samed, Zumrad Muradov"}
          eventDate={"Apr 17, 2024"}
          price={0}
          linkForLearnMore={""}
        />
        <Events_card
          eventCategory={"UX/UI Dizayn"}
          eventName={"III Design Competition"}
          eventDesc={"A lot happened this month. Take a look at what's coming."}
          guests={"Togrul Samed, Zumrad Muradov"}
          eventDate={"Apr 17, 2024"}
          price={0}
          linkForLearnMore={""}
        />
      </div>
    </div>
  );
}
