import Community from "../../pages/Community";
import Event from "../../pages/Event";
import Home from "../../pages/Home";
import Reels from "../../pages/Reels";
import Schoolarship from "../../pages/Schoolarship";
import Specialty from "../../pages/Specialty";

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
    path: "/schoolarship",
    element: <Schoolarship />,
  },
  {
    path: "/reels",
    element: <Reels />,
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
