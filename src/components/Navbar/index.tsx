import { Link } from "react-router";
import turingLogo from "../../assets/Turing-logo.png";
import turingLogoWhite from "../../assets/turing-logo-white.png";
import ApplyNow_btn from "../ApplyNow_btn";
import { useState } from "react";

export default function Navbar({ isDark }) {
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

        <button
          className={`md:hidden ${
            isDark ? "text-blue_ultraDark" : "text-white_solid"
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          Menu
        </button>

        <div
          className={`w-full md:flex md:w-auto md:items-center ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
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
            {/* </Link> */}
            <li
              className={`py-2 md:py-0 ${
                isDark ? "text-blue_ultraDark" : "text-white_solid"
              } `}
            >
              Fields Of Study
            </li>
            {/* <Link to={}> */}
            <li
              className={`py-2 md:py-0 ${
                isDark ? "text-blue_ultraDark" : "text-white_solid"
              } `}
            >
              Events
            </li>
            {/* </Link> */}
            {/* <Link to={}> */}
            <Link to={"/schoolarship"}>
              <li
                className={`py-2 md:py-0 ${
                  isDark ? "text-blue_ultraDark" : "text-white_solid"
                } `}
              >
                Scholarship Programs
              </li>
            </Link>
            {/* </Link> */}
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
