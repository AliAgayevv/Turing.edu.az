import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { eventsData } from "../datas/eventsData";
import ApplyNow_btn from "../components/ApplyNow_btn";
import Teacher_card from "../components/Teacher_card";
import Footer from "../components/Footer";

export default function EventsInner() {
  const { id } = useParams<{ id: string }>();
  const currentEvent = eventsData.find((event) => event.id === Number(id));

  console.log(currentEvent);
  return (
    <div className="">
      <Navbar isDark={true} />
      <div className="w-screen bg-white">
        <div className="mx-auto w-11/12">
          <div className="mx-auto w-11/12 pt-5 md:pt-24 flex flex-col md:flex-row md:justify-between md:items-center">
            {/* Sol Kısım */}
            <div className="flex flex-col gap-6">
              <h4 className="opacity-60 uppercase text-[14px] text-black_dark">
                ABOUT EVENT
              </h4>
              <h1 className="text-4xl md:text-5xl font-jakarta font-[500] text-black_dark py-2 md:py-4">
                {currentEvent?.eventName}
              </h1>
              <p className="text-white_ultraDark text-[18px] font-inter">
                {currentEvent?.eventDesc}
              </p>
              <div
                className={`w-[145px] h-[48px] hidden lg:block ${
                  currentEvent?.isEnd ? "" : ""
                }`}
              >
                <ApplyNow_btn isDisabled={currentEvent?.isEnd ? true : false}>
                  Apply Now
                </ApplyNow_btn>
              </div>
            </div>

            {/* Sağ Kısım */}
            <div className="mr-20">
              <div className="mt-20 flex flex-col gap-6">
                <div>
                  <h3 className="font-[500] text-xl text-black_dark">Slots:</h3>
                  <h5 className="text-white_ultraDark">
                    {currentEvent?.slotsCount}
                  </h5>
                </div>
                <div>
                  <h3 className="font-[500] text-xl text-black_dark">
                    Register:
                  </h3>
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
                {/* Sadece Mobil Ekranlarda Gösterilecek Buton */}
                <div
                  className={`w-[145px] h-[48px] block lg:hidden mt-4 ${
                    currentEvent?.isEnd ? "disabled" : ""
                  }`}
                >
                  <ApplyNow_btn isDisabled={currentEvent?.isEnd ? true : false}>
                    Apply Now
                  </ApplyNow_btn>
                </div>
              </div>
            </div>
          </div>

          {/* Guests Bölümü */}
          <div className="mt-32 w-11/12 mx-auto pb-20">
            <h4 className="opacity-60 uppercase text-[14px] text-black_dark">
              Guests
            </h4>
            <h1 className="text-4xl md:text-5xl font-jakarta font-[500] text-black_dark py-4">
              Meet Our Guests
            </h1>
            <div className="mr-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
          </div>
          {currentEvent?.isEnd && (
            <div className="pt-24 w-11/12 mx-auto pb-20">
              <h4 className="opacity-60 uppercase text-[14px] text-black_dark">
                Gallery
              </h4>
              <h1 className="text-4xl md:text-5xl font-jakarta font-[500] text-black_dark py-4">
                What we did
              </h1>
              <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10 lg:gap-5">
                {currentEvent.photos.map((photo, index) => (
                  <div
                    key={index}
                    className="w-full h-[250px] sm:h-[306px] rounded-2xl overflow-hidden"
                  >
                    <img
                      className="w-full h-full object-cover rounded-2xl"
                      src={photo}
                      alt={`Event Photo ${index + 1}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="w-screen h-screen">
        <Footer />
      </div>
    </div>
  );
}
