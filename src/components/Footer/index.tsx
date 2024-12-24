import { IoLogoInstagram } from "react-icons/io5";
import {
  FaFacebook,
  FaLinkedinIn,
  FaTiktok,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import footerPhoto from "../../assets/vectors/footerPhoto.png";
import { eventsData } from "../../datas/eventsData";
import schoolarshipData from "../../datas/schoolarShip.json";

// TODO ADD HOVER (DIZAYN GOZLENILIR)

import turingLogo from "../../assets/turingFooterLogo.png";
import { Link } from "react-router";

const logoData = [
  {
    name: "Instagram",
    icon: <IoLogoInstagram />,
    link: "https://www.instagram.com/turing.edu.az/",
  },
  {
    name: "Facebook",
    icon: <FaFacebook />,
    link: "https://www.facebook.com/turingacademyaz/",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/school/turingeduaz/",
  },
  {
    name: "TikTok",
    icon: <FaTiktok />,
    link: "https://www.tiktok.com/@turing.edu.az",
  },
  { name: "WhatsApp", icon: <FaWhatsapp />, link: "https://wa.link/9opjm0" },
  {
    name: "YouTube",
    icon: <FaYoutube />,
    link: "https://www.youtube.com/@turingacademyaz",
  },
];

let eventsForShow = [];
eventsData.map((event) =>
  !event.isEnd && eventsForShow.length < 4 ? eventsForShow.push(event) : null
);

let schoolarshipForShow = [];
let schoolarshipForShowLinks = [];

schoolarshipData.map(
  (data) =>
    schoolarshipForShow.push(data.id) &&
    schoolarshipForShowLinks.push(data.route)
);

const menuData = {
  upcomingEvents: eventsForShow,
  // academy: ["About us", "Community", "Instructors", "Graduates", "Partners"],
  academy: [
    { title: "About us", link: "#" },
    { title: "Community", link: "/community" },
    { title: "Instructors", link: "#" },
    { title: "Graduates", link: "/graduates" },
    { title: "Partners", link: "#" },
  ],
  events: ["Seminar", "Workshop", "Hackaton", "Gallery"],
  fieldsOfStudy: schoolarshipForShow,
};

export default function Footer() {
  return (
    //     <div className="fixed bottom-0 left-0 w-full bg-blue_ultraDark z-10 text-white_lightMedium">
    //   <div className="container mx-auto p-6">
    //     {/* Footer Content */}
    //   </div>
    // </div>
    <div className="fixed h-screen bottom-0 -z-[1] bg-blue_ultraDark w-full text-white_lightMedium p-6 md:p-10 lg:px-20 lg:pt-16 flex flex-col sm:flex-row justify-between pointer-events-auto">
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
            <a key={index} href={item.link} target="_blank">
              <div className="w-[44px] h-[44px] flex justify-center items-center rounded-full border border-[#30364A]">
                {item.icon}
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Links Section */}
      <div className="grid grid-cols-2 gap-6 md:gap-10 sm:flex lg:justify-between lg:gap-24 mt-10 lg:mt-0">
        {/* Upcoming Events */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4 lg:mb-6">
            Upcoming Events
          </h3>
          <ul className="flex flex-col gap-3 lg:gap-4">
            {menuData.upcomingEvents.map((event, index) => (
              <Link to={event.linkForLearnMore}>
                <li
                  className="text-white_ultraMedium hover:underline underline-offset-4"
                  key={index}
                >
                  {event.eventName}
                </li>
              </Link>
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
              <Link to={item.link}>
                <li
                  className="text-white_ultraMedium hover:underline underline-offset-4"
                  key={index}
                >
                  {item.title}
                </li>
              </Link>
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
              <Link to={schoolarshipForShowLinks[index]}>
                <li
                  className="text-white_ultraMedium hover:underline underline-offset-4"
                  key={index}
                >
                  {field}
                </li>
              </Link>
            ))}
            <Link to="/schoolarship">
              <li className="text-white_ultraMedium hover:underline underline-offset-4">
                Scholarships
              </li>
            </Link>
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
