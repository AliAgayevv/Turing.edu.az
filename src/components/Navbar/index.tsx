import { Link } from "react-router";
import turingLogo from "../../assets/Turing-logo.png";
import turingLogoWhite from "../../assets/turing-logo-white.png";
import ApplyNow_btn from "../ApplyNow_btn";
import { useState } from "react";
import { INavbarProps } from "../../const/types";
import whiteOpenNavbarIcon from "../../assets/vectors/openNavbar.png";
import whiteCloseNavbarIcon from "../../assets/vectors/closeNavbar.png";
import blackOpenNavbarIcon from "../../assets/vectors/blackOpenNavbarIcon.png";
import blackCloseNavbarIcon from "../../assets/vectors/rotatedBlackOpenNavbarIcon.png";
import NavbarElement from "../NavbarElement";

const fakeData = [
  {
    id: 1,
    title: "UX/UI Design",
    description: "Design Intuitive Digital Experiences",
    route: "/schoolarship/ux-ui",
  },
  {
    id: 2,
    title: "Frontend Development",
    description: "Learn Art",
    route: "/schoolarship/Frontend",
  },
  {
    id: 3,
    title: "Backend",
    description: "Kill Art",
    route: "/schoolarship/Backend",
  },
  {
    id: 4,
    title: "UX/UI Design",
    description: "Design Intuitive Digital Experiences",
    route: "/schoolarship/ux-ui",
  },
  {
    id: 5,
    title: "UX/UI Design",
    description: "Design Intuitive Digital Experiences",
    route: "/schoolarship/ux-ui",
  },
];

export default function Navbar({ isDark }: INavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-transparent px-4 py-4 md:px-6 lg:px-8">
      <div
        className={
          "max-w-7xl mx-auto flex flex-wrap items-center justify-between"
        }
      >
        <Link to={"/"}>
          <img
            className={`w-24 h-auto`}
            src={!isDark ? turingLogo : turingLogoWhite}
            alt="Turing Logo"
          />
        </Link>

        <div
          className={`w-full md:flex md:w-auto md:items-center ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          {isMenuOpen && (
            <div
              className={`${
                isDark ? "text-white" : "text-black_dark"
              } absolute top-20 w-screen bg-transparent h-[268px] left-0  z-10 backdrop-blur-lg`}
            >
              <div className="mx-auto w-11/12  h-full p-5">
                <div className="grid grid-cols-4 gap-6">
                  {fakeData.map((item) => (
                    <NavbarElement
                      key={item.id}
                      isDark={isDark}
                      title={item.title}
                      id={item.id}
                      description={item.description}
                      route={item.route}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
          <ul
            className={`${
              isDark ? "text-blue_ultraDark" : "text-white_solid"
            } flex flex-col md:flex-row md:gap-6 lg:gap-10 text-white_solid mt-4 md:mt-0`}
          >
            {/* <Link to={}> */}
            <li
              className={`py-2 md:py-0 ${
                isDark ? "text-blue_ultraDark" : "text-white_solid"
              } `}
            >
              Academy
            </li>
            <li
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`py-2 md:py-0  flex items-center justify-center gap-2 cursor-pointer ${
                isDark ? "text-blue_ultraDark" : "text-white_solid"
              } `}
            >
              Fields Of Study
              {!isMenuOpen ? (
                <img
                  src={!isDark ? whiteOpenNavbarIcon : blackOpenNavbarIcon}
                />
              ) : (
                <img
                  src={!isDark ? whiteCloseNavbarIcon : blackCloseNavbarIcon}
                />
              )}
            </li>
            <Link to={"/events"}>
              <li
                className={`py-2 md:py-0 ${
                  isDark ? "text-blue_ultraDark" : "text-white_solid"
                } `}
              >
                Events
              </li>
            </Link>
            <Link to={"/schoolarship"}>
              <li
                className={`py-2 md:py-0 ${
                  isDark ? "text-blue_ultraDark" : "text-white_solid"
                } `}
              >
                Scholarship Programs
              </li>
            </Link>
          </ul>
        </div>

        <div className="flex items-center mt-4 md:mt-0">
          {!isDark && (
            <select
              className="bg-transparent mr-4 text-white"
              name="language"
              id="language"
            >
              <option value="en">EN</option>
              <option value="az">AZ</option>
            </select>
          )}
          <div className="w-[145px] h-[45px]">
            <ApplyNow_btn>Apply Now</ApplyNow_btn>
          </div>
        </div>
      </div>
    </nav>
  );
}
