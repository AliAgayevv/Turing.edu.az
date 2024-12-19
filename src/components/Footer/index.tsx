// TODO: TABLET VERSIOYN IYRENCDI
// TODO: FOOTER CLICK EDILE BILMIR

import { IoLogoInstagram } from "react-icons/io5";
import {
  FaFacebook,
  FaLinkedinIn,
  FaTiktok,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import footerPhoto from "../../assets/vectors/footerPhoto.png";

import turingLogo from "../../assets/turingFooterLogo.png";

const logoData = [
  { name: "Instagram", icon: <IoLogoInstagram />, link: "#" },
  { name: "Facebook", icon: <FaFacebook />, link: "#" },
  { name: "LinkedIn", icon: <FaLinkedinIn />, link: "#" },
  { name: "TikTok", icon: <FaTiktok />, link: "#" },
  { name: "WhatsApp", icon: <FaWhatsapp />, link: "#" },
  { name: "YouTube", icon: <FaYoutube />, link: "#" },
];

const menuData = {
  upcomingEvents: [
    { title: "III Design Competition", link: "#" },
    { title: "II Hackaton", link: "#" },
    { title: "IV Design Competition", link: "#" },
  ],
  academy: ["About us", "Community", "Instructors", "Graduates", "Partners"],
  events: ["Seminar", "Workshop", "Hackaton", "Gallery"],
  fieldsOfStudy: [
    "UX/UI Design",
    "Back-end Development",
    "Front-end Development",
    "Computer Science",
    "Scholarship",
  ],
};

export default function Footer() {
  return (
    //     <div className="fixed bottom-0 left-0 w-full bg-blue_ultraDark z-10 text-white_lightMedium">
    //   <div className="container mx-auto p-6">
    //     {/* Footer Content */}
    //   </div>
    // </div>
    <div className="fixed h-screen bottom-0 -z-40 bg-blue_ultraDark w-full text-white_lightMedium p-6 md:p-10 lg:px-20 lg:pt-16 flex flex-col lg:flex-row justify-between pointer-events-auto">
      {/* Left Section: Logo, Description, and Social Icons */}
      <div className="flex flex-col gap-6">
        <img
          src={turingLogo}
          alt="Turing Academy Logo"
          className="w-28 lg:w-36"
        />
        <p className="text-sm leading-relaxed lg:w-[306px]">
          Learn highly demanded skills through practical courses, created by
          trusted industry professionals.
        </p>
        {/* Social Media Icons */}
        <div className="grid grid-cols-3 w-[164px] gap-3">
          {logoData.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-[44px] h-[44px] flex justify-center items-center rounded-full border border-[#30364A]">
                {item.icon}
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Links Section */}
      <div className="grid grid-cols-2 gap-6 md:gap-10 lg:flex lg:justify-between lg:gap-24 mt-10 lg:mt-0">
        {/* Upcoming Events */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4 lg:mb-6">
            Upcoming Events
          </h3>
          <ul className="flex flex-col gap-3 lg:gap-4">
            {menuData.upcomingEvents.map((event, index) => (
              <li className="text-white_ultraMedium" key={index}>
                <a href={event.link} className="hover:underline">
                  {event.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Academy */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4 lg:mb-6">
            Academy
          </h3>
          <ul className="flex flex-col gap-3 lg:gap-4">
            {menuData.academy.map((item, index) => (
              <li className="text-white_ultraMedium" key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Events */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4 lg:mb-6">
            Events
          </h3>
          <ul className="flex flex-col gap-3 lg:gap-4">
            {menuData.events.map((event, index) => (
              <li className="text-white_ultraMedium" key={index}>
                {event}
              </li>
            ))}
          </ul>
        </div>

        {/* Fields of Study */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4 lg:mb-6">
            Fields of Study
          </h3>
          <ul className="flex flex-col gap-3 lg:gap-4">
            {menuData.fieldsOfStudy.map((field, index) => (
              <li className="text-white_ultraMedium" key={index}>
                {field}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Background Image */}
      <div className="absolute bottom-0 left-0 -z-10">
        <img src={footerPhoto} alt="Footer Background" />
      </div>

      {/* Bottom Section */}
      <div className="absolute bottom-0 left-0 w-full px-6 md:px-8 py-1 lg:py-10">
        <div className="flex lg:flex-row justify-between items-center text-white text-xs lg:text-sm font-[600]">
          <p>©2024 All rights reserved.</p>
          <p>
            Created by{" "}
            <a
              href="https://www.youtube.com"
              className="underline cursor-pointer"
            >
              SHI Studio.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
