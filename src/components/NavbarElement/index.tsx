import { Link } from "react-router";

interface INavbarElementProps {
  id: number;
  title: string;
  description: string;
  route: string;
  isDark: boolean;
}

export default function NavbarElement({
  title,
  description,
  route,
  isDark,
}: INavbarElementProps) {
  return (
    <Link to={route}>
      <div
        className={`w-[20wv] h-[15vh] ${
          !isDark ? "border-blue_lightMedium" : "border-white_lightMedium"
        }  border rounded-2xl p-4 text-white flex justify-between flex-col`}
      >
        <div className="flex flex-col gap-2 ">
          {" "}
          <h3
            className={`text-[18px] ${
              !isDark ? "text-white" : "text-black_dark"
            }`}
          >
            {title}
          </h3>
          <h5
            className={`opacity-80 text-[12px] ${
              !isDark ? "text-white" : "text-black_dark"
            }`}
          >
            {description}
          </h5>
        </div>
      </div>
    </Link>
  );
}
