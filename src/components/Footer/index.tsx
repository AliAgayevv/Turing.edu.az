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

import turingLogo from "../../assets/turingFooterLogo.png";
import { Link } from "react-router";
import { IEvent, IScholarship } from "../../const/types";

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

let eventsForShow: any = [];
eventsData.map((event) =>
  !event.isEnd && eventsForShow.length < 4 ? eventsForShow.push(event) : null
);

let schoolarshipForShow: any = [];
let schoolarshipForShowLinks: any = [];

schoolarshipData.map(
  (data) =>
    schoolarshipForShow.push(data.id) &&
    schoolarshipForShowLinks.push(data.route)
);

const menuData = {
  upcomingEvents: eventsForShow,
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

export default function Footer({ forCommunity = false }) {
  return (
    <div
      className={`${
        forCommunity
          ? "block md:block md:h-[800px] md:justify-between"
          : "md:fixed md:h-screen"
      } "  h-[1200px]  bottom-0 -z-[1] bg-blue_ultraDark w-full text-white_lightMedium p-6 md:p-10 lg:px-20 lg:pt-16 flex flex-col sm:flex-row md:justify-between  pointer-events-auto`}
    >
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
        <div className="grid grid-cols-3 w-[164px] gap-3">
          {logoData.map((item, index) => (
            <a key={index} href={item.link} target="_blank">
              <div className="w-[44px] h-[44px] hover:bg-blue_medium flex justify-center items-center rounded-full border border-[#30364A]">
                {item.icon}
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:grid  md:grid-cols-4 gap-6 md:gap-10 lg:justify-between lg:gap-24 mt-10 lg:mt-0">
        <div>
          <h3 className="text-white text-lg font-semibold mb-4 lg:mb-6">
            Upcoming Events
          </h3>
          <ul className="flex flex-col gap-3 lg:gap-4">
            {menuData.upcomingEvents.map((event: IEvent, index: number) => (
              <Link key={event.id} to={event.linkForLearnMore}>
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

        <div>
          <h3 className="text-white text-lg font-semibold mb-4 lg:mb-6">
            Academy
          </h3>
          <ul className="flex flex-col gap-3 lg:gap-4">
            {menuData.academy.map((item, index) => (
              <Link key={item.title} to={item.link}>
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

        <div>
          <h3 className="text-white text-lg font-semibold mb-4 lg:mb-6">
            Fields of Study
          </h3>
          <ul className="flex flex-col gap-3 lg:gap-4">
            {menuData.fieldsOfStudy.map(
              (field: IScholarship, index: number) => (
                <Link key={index} to={schoolarshipForShowLinks[index]}>
                  <li
                    className="text-white_ultraMedium hover:underline underline-offset-4"
                    key={index}
                  >
                    {field}
                  </li>
                </Link>
              )
            )}
            <Link to="/schoolarship">
              <li className="text-white_ultraMedium hover:underline underline-offset-4">
                Scholarships
              </li>
            </Link>
          </ul>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 -z-10">
        <img className="w-screen" src={footerPhoto} alt="Footer Background" />
      </div>

      <div className="absolute bottom-0 hidden md:flex md:justify-between left-0 px-6 md:px-8 py-1 lg:py-10">
        <div className="flex justify-between items-center text-white text-xs lg:text-sm font-[600]">
          <p>©2024 All rights reserved.</p>
          <p className=" absolute bottom-10 2xl:-right-[1350px] xl:-right-[1200px]">
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
      <div className=" absolute flex md:hidden -bottom-[440px] left-[30vw]">
        <div className="flex justify-between items-center text-white text-xs lg:text-sm font-[600] text-center">
          <p>©2024 All rights reserved.</p>
          <p className=" absolute bottom-6 right-4">
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
