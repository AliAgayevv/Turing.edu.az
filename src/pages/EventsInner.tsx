import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import ApplyNow_btn from "../components/ApplyNow_btn";
import Teacher_card from "../components/Teacher_card";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { yToCenter } from "../utils/motionAnimations";
import { useGetEventByIdQuery } from "../store/services/eventApi";

// Define types
interface Guest {
  id: string | number;
  fullName: string;
  positionWithCompany: string;
  photo: string;
  linkedinUrl?: string;
}

interface EventData {
  id: string | number;
  name: string;
  description: string;
  eventDate: string;
  registerDeadline: string;
  slots: number;
  status: "PAST" | "FUTURE" | "CURRENT";
  isEnd?: boolean;
  photos: string[];
  guests: Guest[];
  registerLink?: string;
}

const item = yToCenter(20);

export default function EventsInner() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const { id } = useParams<{ id: string }>();
  const { data, isLoading, error } = useGetEventByIdQuery(id);
  const eventData = data as EventData | undefined;

  console.log(eventData);

  const [fullScreenImage, setFullScreenImage] = useState<string | null>(null);

  const handleOpenFullScreen = (imageSrc: string) => {
    setFullScreenImage(imageSrc);
  };

  const handleCloseFullScreen = () => {
    setFullScreenImage(null);
  };

  if (isLoading) {
    return (
      <div className="h-screen">
        <Navbar isDark={true} />
        <div className="w-screen bg-white">
          <div className="mx-auto w-11/12 pt-24 flex justify-center items-center">
            <p className="text-xl">Loading event details...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-screen">
        <Navbar isDark={true} />
        <div className="w-screen bg-white">
          <div className="mx-auto w-11/12 pt-24 flex justify-center items-center">
            <p className="text-xl">
              Error loading event. Please try again later.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen">
      <Navbar isDark={true} />
      <div className="w-screen bg-white">
        <div className="mx-auto w-11/12">
          <div className="mx-auto w-11/12 pt-5 md:pt-24 flex flex-col md:flex-row md:justify-between md:items-center">
            <div className="flex flex-col gap-6">
              <h4 className="opacity-60 uppercase text-[14px] text-black_dark">
                ABOUT EVENT
              </h4>
              <h1 className="text-4xl md:text-5xl font-jakarta font-[500] text-black_dark py-2 md:py-4">
                {eventData?.name}
              </h1>
              <p className="text-white_ultraDark text-[18px] font-inter">
                {eventData?.description}
              </p>
              <div
                className={`w-[145px] h-[48px] hidden lg:block ${
                  eventData?.isEnd ? "opacity-50 pointer-events-none" : ""
                }`}
              >
                <ApplyNow_btn />
              </div>
            </div>

            <div className="mr-20">
              <div className="mt-20 flex flex-col gap-6">
                <div>
                  <h3 className="font-[500] text-xl text-black_dark">Slots:</h3>
                  <h5 className="text-white_ultraDark">{eventData?.slots}</h5>
                </div>
                <div>
                  <h3 className="font-[500] text-xl text-black_dark">
                    Register:
                  </h3>
                  <h5 className="text-white_ultraDark">
                    {eventData?.registerDeadline}
                  </h5>
                </div>
                <div>
                  <h3 className="font-[500] text-xl text-black_dark">Date:</h3>
                  <h5 className="text-white_ultraDark">
                    {eventData?.eventDate}
                  </h5>
                </div>
                <div
                  className={`w-[145px] h-[48px] block lg:hidden mt-4 ${
                    eventData?.isEnd ? "opacity-50 pointer-events-none" : ""
                  }`}
                >
                  <ApplyNow_btn />
                </div>
              </div>
            </div>
          </div>

          {eventData?.guests && eventData.guests.length > 0 && (
            <div className="mt-32 w-11/12 mx-auto pb-20">
              <h4 className="opacity-60 uppercase text-[14px] text-black_dark">
                Guests
              </h4>
              <h1 className="text-4xl md:text-5xl font-jakarta font-[500] text-black_dark py-4">
                Meet Our Guests
              </h1>
              <div className="xl:mr-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-[10%] mt-6 md:mt-12">
                {eventData.guests.map((guest: Guest) => (
                  <Teacher_card
                    name={guest.fullName}
                    workPosition={guest.positionWithCompany}
                    photo={guest.photo}
                    key={guest.id}
                    connect={guest.linkedinUrl || ""}
                  />
                ))}
              </div>
            </div>
          )}

          {eventData?.photos &&
            eventData.photos.length > 0 &&
            eventData.status === "FUTURE" && (
              <motion.div ref={ref} className="pt-10 w-11/12 mx-auto pb-20 ">
                <h4 className="opacity-60 uppercase text-[14px] text-black_dark">
                  Gallery
                </h4>
                <h1 className="text-4xl md:text-5xl font-jakarta font-[500] text-black_dark py-4">
                  What we did
                </h1>
                <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10 lg:gap-5">
                  {eventData.photos.map((photo: string, index: number) => (
                    <motion.div
                      variants={item}
                      initial="hidden"
                      animate="visible"
                      key={index}
                      className="w-full h-[250px] sm:h-[306px] rounded-2xl overflow-hidden"
                      onClick={() => handleOpenFullScreen(photo)}
                    >
                      <img
                        className="w-full h-full object-cover rounded-2xl"
                        src={photo}
                        alt={`Event Photo ${index + 1}`}
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
        </div>
      </div>
      <div className="h-screen relative -z-[2]">
        <Footer />
      </div>
      {fullScreenImage && (
        <motion.div
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center"
          onClick={handleCloseFullScreen}
        >
          <motion.div
            className="relative h-[80vh] aspect-video rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, translateY: -200 }}
            animate={{ opacity: 1, translateY: 0 }}
            exit={{ opacity: 0 }}
          >
            <div className="w-full h-full">
              <img
                src={fullScreenImage}
                alt="Full Screen Event Photo"
                className="w-11/12 mx-auto object-contain rounded-2xl"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
