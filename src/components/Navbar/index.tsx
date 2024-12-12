import turingLogo from "../../assets/Turing-logo.png";
import ApplyNow_btn from "../ApplyNow_btn";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-blue_ultraDark px-4 py-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between">
        <img className="w-24 h-auto" src={turingLogo} alt="Turing Logo" />

        <button
          className="md:hidden text-white_solid"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          Menu
        </button>

        <div
          className={`w-full md:flex md:w-auto md:items-center ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col md:flex-row md:gap-6 lg:gap-10 text-white_solid mt-4 md:mt-0">
            <li className="py-2 md:py-0">
              <a href="#academy">Academy</a>
            </li>
            <li className="py-2 md:py-0">
              <a href="#fields">Fields Of Study</a>
            </li>
            <li className="py-2 md:py-0">
              <a href="#events">Events</a>
            </li>
            <li className="py-2 md:py-0">
              <a href="#programs">Scholarship Programs</a>
            </li>
          </ul>
        </div>

        <div className="flex items-center mt-4 md:mt-0">
          <select
            className="bg-transparent text-white_solid mr-4"
            name="language"
            id="language"
          >
            <option value="en">EN</option>
            <option value="az">AZ</option>
          </select>
          <ApplyNow_btn>Apply Now</ApplyNow_btn>
        </div>
      </div>
    </nav>
  );
}
