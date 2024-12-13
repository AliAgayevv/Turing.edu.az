import icon from "../../assets/vectors/watchVideoIcon.png";

// TODO: Sorush gor buttonlar bucur olsa duzdu?

export default function WatchNow_btn({ children }) {
  return (
    <button className="w-full h-full rounded-full border text-white font-[500] border-[#4A5567] flex gap-2 justify-center items-center">
      <img src={icon} />
      {children}
    </button>
  );
}
