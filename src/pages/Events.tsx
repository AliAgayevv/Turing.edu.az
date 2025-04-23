import { Link } from "react-router-dom";

import Events_card from "../components/Events_card";
import svg from "../assets/eventsSparkle.svg";
import { useBreakpoint } from "../hooks/useBreakpoint";
import { useGetEventsQuery } from "../store/services/eventApi";

export default function Events() {
  const isMobile = useBreakpoint(640);
  const { data: events, isLoading, isError } = useGetEventsQuery({});

  if (isLoading) return <div>Loading...</div>;
  if (isError || !events) return <div>Error loading events.</div>;

  console.log(events);

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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-5 lg:gap-x-0 mt-12">
        {events.slice(0, 6).map((event: any) => (
          <Link to={`/events/${event.id}`} key={event.id}>
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
