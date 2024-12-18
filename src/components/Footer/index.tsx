import { IoLogoInstagram } from "react-icons/io5";
import {
  FaFacebook,
  FaLinkedinIn,
  FaTiktok,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

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
    <div className="fixed bottom-0 -z-40 bg-blue_ultraDark w-full text-white_lightMedium p-10 lg:px-20 pt-16 flex justify-between">
      {/* Sol Bölüm */}
      <div className="flex flex-col gap-6">
        <img src={turingLogo} alt="Turing Academy Logo" className="w-36" />
        <p className="text-sm leading-relaxed w-[306px]">
          Learn highly demanded skills through practical courses, created by
          trusted industry professionals.
        </p>
        {/* Sosyal Medya İkonları */}
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
      <div className="flex justify-between gap-24">
        <div>
          <h3 className="text-white text-lg font-semibold mb-6">
            Upcoming Events
          </h3>
          <ul className="flex flex-col gap-4">
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
          <h3 className="text-white text-lg font-semibold mb-6">Academy</h3>
          <ul className="flex flex-col gap-4">
            {menuData.academy.map((item, index) => (
              <li className="text-white_ultraMedium" key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Events & Fields of Study */}
        <div className="flex flex-col gap-4">
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Events</h3>
            <ul className="flex flex-col gap-4">
              {menuData.events.map((event, index) => (
                <li className="text-white_ultraMedium" key={index}>
                  {event}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <h3 className="text-white text-lg font-semibold mb-6">
            Fields of Study
          </h3>
          <ul className="flex flex-col gap-4">
            {menuData.fieldsOfStudy.map((field, index) => (
              <li className="text-white_ultraMedium" key={index}>
                {field}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
