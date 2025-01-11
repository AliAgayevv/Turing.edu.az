import { Link } from "react-router-dom";
import { eventsData } from "../datas/eventsData";
import Events_card from "../components/Events_card";
import svg from "../assets/eventsSparkle.svg";
import { useBreakpoint } from "../hooks/useBreakpoint";

export default function Events() {
  const isMobile = useBreakpoint(640);

  return (
    <div className="w-11/12 mx-auto py-10 overflow-hidden">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
        <div>
          <h3 className="uppercase text-white_dark">Events</h3>
          <h1 className="text-3xl md:text-5xl font-jakarta font-[500] text-white py-4 flex">
            Upcoming Events
            <img src={svg} />
          </h1>
        </div>
        {!isMobile && (
          <div className="text-white bg-transparent w-full sm:w-[145px] h-[56px]">
            <Link to={"/events"}>
              <button className="border border-black_light px-8 py-4 bg-blue_dark w-full h-full text-white rounded-full">
                See All
              </button>
            </Link>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 mt-12">
        {eventsData.slice(0, 6).map((event) => (
          <Link to={event.linkForLearnMore} key={event.id}>
            <Events_card {...event} isDark={true} />
          </Link>
        ))}
        {isMobile && (
          <div className="text-white bg-transparent w-full sm:w-[145px] h-[56px]">
            <Link to="/events">
              <button className="border border-black_light px-8 py-4 bg-blue_dark w-full h-full text-white rounded-full">
                See All
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
