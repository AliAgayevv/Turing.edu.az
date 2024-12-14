import AllGraduates from "../../pages/AllGraduates";
import Community from "../../pages/Community";
import Event from "../../pages/Event";
import Home from "../../pages/Home";
import Reels from "../../pages/Reels";
import Schoolarship from "../../pages/Schoolarship";
import Specialty from "../../pages/Specialty";
import SpecialtyInner from "../../pages/SpecialtyInner";

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
    path: "/specialty/:id",
    element: <SpecialtyInner />,
  },
  {
    path: "/schoolarship",
    element: <Schoolarship />,
  },
  {
    path: "/reels",
    element: <Reels />,
  },
  {
    path: "/graduates",
    element: <AllGraduates />,
  },
  {
    path: "/events",
    element: <Event />,
  },
  {
    path: "/community",
    element: <Community />,
  },
];
