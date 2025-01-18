import { Link } from "react-router-dom";
import turingLogo from "../../assets/Turing-logo.png";
import turingLogoWhite from "../../assets/turing-logo-white.png";

import openNavbarResponsive from "../../assets/vectors/responsiveOpenMenu.png";
import { useEffect, useRef, useState } from "react";
import { INavbarProps } from "../../const/types";
import whiteOpenNavbarIcon from "../../assets/vectors/openNavbar.png";
import whiteCloseNavbarIcon from "../../assets/vectors/closeNavbar.png";
import blackOpenNavbarIcon from "../../assets/vectors/blackOpenNavbarIcon.png";
import blackCloseNavbarIcon from "../../assets/vectors/rotatedBlackOpenNavbarIcon.png";
import NavbarElement from "../NavbarElement";
import bgTuringVector from "../../assets/vectors/turing-hero-left-top-vector.png";
import { FaGripLines } from "react-icons/fa";

import closeNavbarResponsive from "../../assets/vectors/closeNavbarResponsive.png";
import useOutsideClick from "../../hooks/outsideClick";
import ApplyNowBtn from "../ApplyNow_btn";

const fakeData = [
  {
    id: 1,
    title: "UX/UI Design",
    description: "Design Intuitive Digital Experiences",
    route: "/schoolarship/UX-UI",
  },
  {
    id: 1,
    title: "UX/UI Design",
    description: "Design Intuitive Digital Experiences",
    route: "/schoolarship/UX-UI",
  },
  {
    id: 1,
    title: "UX/UI Design",
    description: "Design Intuitive Digital Experiences",
    route: "/schoolarship/UX-UI",
  },
  {
    id: 1,
    title: "UX/UI Design",
    description: "Design Intuitive Digital Experiences",
    route: "/schoolarship/UX-UI",
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
];

export default function Navbar({ isDark }: INavbarProps) {
  const menuRef = useRef(null);

  useOutsideClick(menuRef, () => {
    setIsMenuOpen(false);
  });
  const handleGoForm = () => {
    setIsResponsiveMenuOpen(false);

    const formElement = document.getElementById("form");

    if (formElement) {
      const formBottomPosition =
        formElement.offsetTop + formElement.offsetHeight;
      window.scrollTo({
        top: formBottomPosition - window.innerHeight,
        behavior: "smooth",
      });
    }
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isResponsiveMenuOpen, setIsResponsiveMenuOpen] = useState(false);
  const [toggleResponsive2ndMenu, setToggleResponsive2ndMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsResponsiveMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleResponsiveMenu = () => {
    setIsResponsiveMenuOpen(!isResponsiveMenuOpen);
  };

  return (
    <nav
      className={` ${
        !isDark ? "bg-transparent" : "bg-white"
      } px-10 py-5 md:py-4 md:px-6 lg:px-8 z-[90]`}
    >
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between">
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
              ref={menuRef}
              className={`${
                isDark
                  ? "text-white  bg-white"
                  : "text-black_dark bg-blue_ultraDark"
              } absolute top-20 w-screen bg-transparent h-[268px] left-0 z-10 backdrop-blur-lg `}
            >
              <div className="mx-auto w-11/12 h-full p-5">
                <div className="grid grid-cols-4 gap-6">
                  {fakeData.slice(0, 4).map((item) => (
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
            }  flex-col md:flex-row md:gap-6 lg:gap-10 hidden lg:flex text-white_solid mt-4 md:mt-0`}
          >
            <Link to={"/community"}>
              <li
                className={`py-2 md:py-0 ${
                  isDark ? "text-blue_ultraDark" : "text-white_solid"
                }`}
              >
                Academy
              </li>
            </Link>
            <li
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`py-2 md:py-0 flex items-center justify-center gap-2 cursor-pointer ${
                isDark ? "text-blue_ultraDark" : "text-white_solid"
              }`}
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
                }`}
              >
                Events
              </li>
            </Link>
            <Link to={"/schoolarship"}>
              <li
                className={`py-2 md:py-0 ${
                  isDark ? "text-blue_ultraDark" : "text-white_solid"
                }`}
              >
                Scholarship Programs
              </li>
            </Link>
          </ul>
        </div>

        <div className="lg:hidden flex items-center ">
          {!isDark ? (
            <img
              src={openNavbarResponsive}
              alt="Open Navbar"
              className="w-8 h-8 cursor-pointer"
              onClick={() => setIsResponsiveMenuOpen(!isResponsiveMenuOpen)}
            />
          ) : (
            <div
              className="w-20  h-20 cursor-pointer flex justify-center items-center text-2xl"
              onClick={() => setIsResponsiveMenuOpen(!isResponsiveMenuOpen)}
            >
              <FaGripLines width={100} height={100} />
            </div>
          )}
        </div>

        <div className=" items-center mt-4 md:mt-0 hidden lg:flex">
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
          <div
            className="hidden lg:block w-[145px] h-[45px]"
            onClick={handleGoForm}
          >
            <ApplyNowBtn />
          </div>
        </div>
      </div>

      {isResponsiveMenuOpen && (
        <div
          className={`fixed inset-0 ${
            !isDark ? "bg-blue_ultraDark" : "bg-blue_ultraDark"
          }  overflow-hidden z-50 lg:hidden w-screen `}
        >
          <img src={bgTuringVector} className=" absolute top-10 -z-40" />
          <div className="flex flex-col h-full p-6 w-screen">
            <div className="flex justify-between items-center mb-8">
              <div className="flex justify-between w-screen">
                <Link to="/" onClick={() => setIsResponsiveMenuOpen(false)}>
                  <img src={turingLogo} />
                </Link>

                <button
                  onClick={toggleResponsiveMenu}
                  className="text-white p-2 z-10"
                >
                  <img
                    src={closeNavbarResponsive}
                    alt="Close Navbar"
                    className="w-8 h-8"
                  />
                </button>
              </div>
            </div>

            <nav className="flex flex-col space-y-6">
              <Link to="/community" className="text-white text-xl">
                Academy
              </Link>
              <div
                className="flex items-center text-white text-xl"
                onClick={() =>
                  setToggleResponsive2ndMenu(!toggleResponsive2ndMenu)
                }
              >
                <Link
                  to="/fields"
                  className="text-white text-xl"
                  onClick={toggleResponsiveMenu}
                ></Link>
                Fields of Study
                {!toggleResponsive2ndMenu ? (
                  <img
                    src={whiteOpenNavbarIcon}
                    alt="Expand"
                    className="w-auto h-auto rotate-[270deg] ml-3"
                    onClick={() =>
                      setToggleResponsive2ndMenu(!toggleResponsive2ndMenu)
                    }
                  />
                ) : (
                  <img
                    src={whiteCloseNavbarIcon}
                    alt="Expand"
                    className="w-auto h-auto rotate-180 ml-3"
                    onClick={() =>
                      setToggleResponsive2ndMenu(!toggleResponsive2ndMenu)
                    }
                  />
                )}
              </div>
              {toggleResponsive2ndMenu && (
                <ul className="px-10 flex flex-col gap-2">
                  {fakeData.map((item) => (
                    <Link
                      to={item.route}
                      className="text-white text-xl"
                      onClick={toggleResponsiveMenu}
                    >
                      <li className="py-3">{item.title}</li>
                    </Link>
                  ))}
                </ul>
              )}
              <Link
                to="/events"
                className="text-white text-xl"
                onClick={toggleResponsiveMenu}
              >
                Events
              </Link>
              <Link
                to="/schoolarship"
                className="text-white text-xl"
                onClick={toggleResponsiveMenu}
              >
                Scholarship Programs
              </Link>
            </nav>
            <div className="mt-5" onClick={handleGoForm}>
              <ApplyNowBtn />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
