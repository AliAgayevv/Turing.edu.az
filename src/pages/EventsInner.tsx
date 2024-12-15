import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { eventsData } from "../datas/eventsData";
import ApplyNow_btn from "../components/ApplyNow_btn";
import Teacher_card from "../components/Teacher_card";

export default function EventsInner() {
  const { id } = useParams<{ id: string }>();
  const currentEvent = eventsData.find((event) => event.id === Number(id));

  console.log(currentEvent);
  return (
    <div className="mx-auto w-11/12">
      <Navbar isDark={true} />
      <div className="mx-auto w-11/12 mt-24 flex justify-between items-center">
        <div className="flex flex-col gap-6">
          <h4 className="opacity-60 uppercase text-[14px] text-black_dark">
            ABOUT EVENT
          </h4>
          <h1 className="text-4xl md:text-5xl font-jakarta font-[500] text-black_dark py-4">
            {currentEvent?.eventName}
          </h1>
          <p className="text-white_ultraDark text-[18px] font-inter">
            {currentEvent?.eventDesc}
          </p>
          <div className="w-[145px] h-[48px]">
            <ApplyNow_btn>Apply Now</ApplyNow_btn>
          </div>
        </div>
        <div className="mr-20">
          <div className="mt-20 flex-col flex gap-6">
            <div>
              <h3 className="font-[500] text-xl text-black_dark">Slots:</h3>
              <h5 className="text-white_ultraDark">
                {currentEvent?.slotsCount}
              </h5>
            </div>
            <div>
              <h3 className="font-[500] text-xl text-black_dark">Register:</h3>
              <h5 className="text-white_ultraDark">
                {currentEvent?.eventRegisterDate}
              </h5>
            </div>
            <div>
              <h3 className="font-[500] text-xl text-black_dark">Date:</h3>
              <h5 className="text-white_ultraDark">
                {currentEvent?.eventDate}
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-32 w-11/12 mx-auto">
        <h4 className="opacity-60 uppercase text-[14px] text-black_dark">
          Guests
        </h4>
        <h1 className="text-4xl md:text-5xl font-jakarta font-[500] text-black_dark py-4">
          Meet Our Guests
        </h1>
        <div className="mr-12 grid grid-cols-4">
          {currentEvent?.guests.map((guest) => (
            <Teacher_card
              name={guest.guestName}
              workPosition={guest.guestWorkingPosition}
              photo={guest.photo}
              key={guest.id}
              connect={guest.connect}
            />
          ))}
        </div>
        {currentEvent?.isEnd && (
          <div className="mt-24">
            <h4 className="opacity-60 uppercase text-[14px] text-black_dark">
              Gallery
            </h4>
            <h1 className="text-4xl md:text-5xl font-jakarta font-[500] text-black_dark py-4">
              What we did
            </h1>
            <div className="mt-6 grid grid-cols-4 gap-6">
              {currentEvent.photos.map((photo) => (
                <div className="w-[306px] h-[306px] rounded-2xl">
                  <img className="w-full h-full rounded-2xl" src={photo} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
