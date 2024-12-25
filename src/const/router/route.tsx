import AllEvents from "../../pages/AllEvents";
import AllGraduates from "../../pages/AllGraduates";
import Community from "../../pages/Community";
import EventsInner from "../../pages/EventsInner";
import Home from "../../pages/Home";
import Schoolarship from "../../pages/Schoolarship";
import SchoolarshipInner from "../../pages/SchoolarshipInner";
import Specialty from "../../pages/Specialty";
import SpecialtyInner from "../../pages/SpecialtyInner";
import NotFound from "../../pages/NotFound";

export const ROUTES = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/specialty",
    element: <Specialty />,
  },
  {
    path: "/events",
    element: <AllEvents />,
  },
  {
    path: "/events/:id",
    element: <EventsInner />,
  },
  {
    path: "/specialty/:id",
    element: <SpecialtyInner />,
  },
  {
    path: "/schoolarship",
    element: <Schoolarship />,
  },
  {
    path: "/schoolarship/:id",
    element: <SchoolarshipInner />,
  },
  {
    path: "/graduates",
    element: <AllGraduates />,
  },
  {
    path: "/community",
    element: <Community />,
  },

  {
    path: "*",
    element: <NotFound />,
  },
];
