import fourPNG from "../assets/vectors/4.png";
import zeroPNG from "../assets/vectors/0.png";
import fourRotated from "../assets/vectors/4Rotated.png";
import arrowLeft from "../assets/vectors/arrow-left.png";
import { Link } from "react-router-dom"; // Correct import for react-router-dom v6+

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-screen text-center bg-blue_ultraDark text-white relative overflow-hidden">
      {/* Light Effects */}
      <div className="absolute -top-10 -left-10 w-[150px] h-[200px] md:w-[200px] md:h-[300px] bg-gradient-to-br from-white/30 to-transparent blur-[100px] md:blur-[120px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute -bottom-10 -right-10 w-[150px] h-[200px] md:w-[200px] md:h-[300px] bg-gradient-to-br from-white/30 to-transparent blur-[100px] md:blur-[120px] rounded-full pointer-events-none z-0"></div>

      {/* Text Section */}
      <div className="flex flex-col gap-6 md:gap-8 mb-12 z-10 px-4 items-center justify-center">
        <h1 className="font-jakarta font-[600] text-5xl md:text-6xl">Oops!</h1>
        <h2 className="font-jakarta font-[600] text-2xl md:text-4xl">
          Looks like you're lost...
        </h2>
        <h4 className="text-white_lightMedium max-w-xs md:max-w-lg text-sm md:text-base">
          We couldn't find the page you're looking for, but great things are
          still waiting for you. Head back to the homepage and keep exploring!
        </h4>
        <Link to="/">
          <button className="border border-black_light w-[120px] md:w-[141px] h-[48px] md:h-[56px] rounded-full p-3 md:p-4 flex items-center justify-center gap-2 md:gap-3 hover:bg-black_light hover:text-white transition-all">
            <img src={arrowLeft} alt="Arrow Left" className="w-4 md:w-5" />
            <span className="text-sm md:text-base">Go home</span>
          </button>
        </Link>
      </div>

      {/* 404 Images */}
      <div className="flex absolute bottom-5 md:-bottom-4 lg:-bottom-12 gap-4 md:gap-10 z-0">
        <img src={fourPNG} alt="4" className="w-40 md:w-60 lg:w-full" />
        <img src={zeroPNG} alt="0" className="w-40 md:w-60 lg:w-full" />
        <img
          src={fourRotated}
          alt="4 Rotated"
          className="w-40 md:w-60 lg:w-full"
        />
      </div>
    </div>
  );
}
