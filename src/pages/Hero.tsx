import ApplyNow_btn from "../components/ApplyNow_btn";
import exampleVideo from "../assets/videos/exampleVideo.mp4";
import Navbar from "../components/Navbar";
import bgTuringVector from "../assets/vectors/turing-hero-left-top-vector.png";
import WatchNow_btn from "../components/WatchNow_btn";

export default function Hero() {
  const handleGoForm = () => {
    document.getElementById("form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      <Navbar isDark={false} />

      <div className="flex flex-col items-center justify-center px-4 py-8 h-[800px]">
        <h1 className="text-white_solid text-[32px] sm:text-5xl md:text-6xl text-center mb-4 mt-[125px]">
          #BirAddımÖndə
        </h1>
        {/* Left top light effect */}
        <div className="absolute -top-10 -left-20 w-[200px] h-[300px] bg-gradient-to-br from-white/30 to-transparent blur-[120px] rounded-full pointer-events-none z-0"></div>
        {/* Right bottom light effect */}
        <div className="absolute -bottom-0 -right-10 w-[200px] h-[300px] bg-gradient-to-br from-white/30 to-transparent blur-[120px] rounded-full pointer-events-none z-0"></div>
        <img
          className="absolute left-0 top-0 w-full h-full object-cover"
          src={bgTuringVector}
          alt="Turing Vector"
        />

        <p className="text-[12px] md:text-base text-white_lightMedium text-center max-w-2xl mb-8 px-4">
          Learn highly demanded skills through practical courses, created by
          trusted industry professionals, that focus on real-world applications.
        </p>

        <div className="flex flex-row gap-4 mb-12">
          <div
            className="h-[56px] w-[150px] sm:w-[169px]"
            onClick={handleGoForm}
          >
            <ApplyNow_btn>Apply now</ApplyNow_btn>
          </div>
          <div className="h-[56px] w-[150px] sm:w-[169px]">
            <WatchNow_btn>Watch Now</WatchNow_btn>
          </div>
        </div>

        {/* TODO: OVERFLOW PROBELM IN MOBILE */}
        <div className=" max-w-[3000px] px-4 mt-[10px] overflow-hidden h-[324px]">
          <div className="w-[600px] lg:w-[1120px] h-[300px] relative lg:h-[320px] mt-8 rounded-[50px] overflow-hidden border-8 md:border-[20px] border-[#212B45]">
            <video
              controls
              className="absolute top-0 left-0 w-full h-full object-center lg:object-cover rounded-2xl overflow-hidden"
              src={exampleVideo}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
