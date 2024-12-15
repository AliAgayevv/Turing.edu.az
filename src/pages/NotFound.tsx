import fourPNG from "../assets/vectors/4.png";
import zeroPNG from "../assets/vectors/0.png";
import fourRotated from "../assets/vectors/4Rotated.png";
import arrowLeft from "../assets/vectors/arrow-left.png";

export default function NotFound() {
  return (
    <div className="flex justify-center flex-col items-center h-screen text-center bg-blue_ultraDark text-white  z-[3] ">
      <div className="flex items-center flex-col mb-20 gap-3">
        <h1 className="font-jakarta font-[600] text-6xl">Oops!</h1>
        <h2 className="font-jakarta font-[600] text-[40px] z-[2]">
          Looks like you're lost...
        </h2>
        <h4 className="text-white_lightMedium w-[555px] z-[2]">
          We couldn't find the page you're looking for, but great things are
          still waiting for you. Head back to the homepage and keep exploring!
        </h4>
        <button className="border border-black_light w-[141px] h-[56px] rounded-full p-4 flex gap-3">
          <img src={arrowLeft} alt="" />
          Go home
        </button>
      </div>
      <div className="flex absolute -bottom-5 gap-10">
        <img src={fourPNG} />
        <img src={zeroPNG} />
        <img src={fourRotated} />
      </div>
    </div>
  );
}
