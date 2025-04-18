import { useRef, useState } from "react";
import { motion } from "framer-motion";
import ApplyNow_btn from "../components/ApplyNow_btn";
import exampleVideo from "../assets/videos/exampleVideo.mp4";
import Navbar from "../components/Navbar";
import bgTuringVector from "../assets/vectors/turing-hero-left-top-vector.png";
import WatchNow_btn from "../components/WatchNow_btn";
import useOutsideClick from "../hooks/outsideClick";
import { useGetHomeContentQuery } from "../store/services/homeSlice";

// Define interface for home content response
interface HomeContent {
  motto: string;
  mottoDescription: string;
  headerVideoUrl: string;
}

export default function Hero(): JSX.Element {
  const [isApplyNowClicked, setIsApplyNowClicked] = useState<boolean>(false);

  // Type the API response
  const { data, isLoading, error } = useGetHomeContentQuery({});

  const handleCloseModal = (): void => {
    setIsApplyNowClicked(false);
  };

  const modalRef = useRef<HTMLDivElement | null>(null);

  useOutsideClick(modalRef, handleCloseModal);

  const handleGoForm = (): void => {
    const formElement = document.getElementById("form");

    if (formElement) {
      const formBottomPosition =
        formElement.offsetTop + formElement.offsetHeight;
      window.scrollTo({
        top: formBottomPosition - window.innerHeight,
        behavior: "smooth",
      });
    }
  };

  // Default content to use while loading or if there's an error
  const defaultContent: HomeContent = {
    motto: "Loading...",
    mottoDescription: "Please wait while we load the content.",
    headerVideoUrl: exampleVideo,
  };

  // Content to display - use data if available, otherwise use default content
  const content: HomeContent = data ? (data as HomeContent) : defaultContent;

  // Show error message if there was an error loading the content
  if (error) {
    console.error("Error loading home content:", error);
  }

  return (
    <div className="h-screen flex flex-col relative overflow-hidden">
      {!isApplyNowClicked && <Navbar isDark={false} />}

      <div className="flex flex-col items-center justify-center h-auto z-50">
        <div>
          <h1 className="text-white_solid text-4xl sm:text-5xl md:text-6xl text-center mb-4 pt-[125px] font-semibold font-jakarta">
            {content.motto}
          </h1>
          {/* Left top light effect */}
          <div className="absolute -top-10 -left-20 w-[200px] h-[300px] bg-gradient-to-br from-white/30 to-transparent blur-[120px] rounded-full pointer-events-none z-0"></div>
          {/* Right bottom light effect */}
          <div className="absolute -bottom-0 -right-10 w-[200px] h-[300px] bg-gradient-to-br from-white/30 to-transparent blur-[120px] rounded-full pointer-events-none z-0"></div>
          <img
            className="absolute -left-2 md:left-0 top-10 md:top-0 -z-10"
            src={bgTuringVector}
            alt="Background vector"
          />

          <p className="text-[12px] md:text-base text-white_lightMedium text-center max-w-2xl mb-8 px-4 font-inter">
            {content.mottoDescription}
          </p>

          <div className="flex flex-row gap-4 pb-12 items-center justify-center">
            <div
              className="h-[56px] w-[150px] sm:w-[169px]"
              onClick={handleGoForm}
            >
              <ApplyNow_btn />
            </div>
            <div
              className="h-[56px] w-[150px] sm:w-[169px] cursor-pointer"
              onClick={() => setIsApplyNowClicked(true)}
            >
              <WatchNow_btn>Watch Now</WatchNow_btn>
            </div>
          </div>
        </div>
        <div className="max-w-[3000px] px-4 pt-[70px] overflow-hidden h-[55vh] relative">
          <motion.div
            initial={{ translateY: 400, opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-[520px] lg:w-[1120px] h-[300px] relative md:h-[65vh] md:w-[1250px] lg:h-[55vh] pt-8 rounded-[50px] overflow-hidden border-8 md:border-[20px] border-[#212B45]"
          >
            <video
              playsInline
              className="absolute top-0 left-0 w-full h-full object-center lg:object-cover rounded-2xl overflow-hidden"
              src={content.headerVideoUrl}
            />
          </motion.div>
        </div>
        {isApplyNowClicked && (
          <div className="w-screen bg-blue_ultraDark h-screen z-[70] fixed inset-0">
            <motion.div
              ref={modalRef}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "100%" }}
              exit={{ opacity: 0, height: 0 }}
              className="z-50 w-11/12 mx-auto h-10 flex items-center justify-center"
            >
              <div className="rounded-[50px] overflow-hidden border-8 md:border-[20px] border-[#212B45]">
                <video
                  className="w-full h-2/6 object-cover"
                  src={content.headerVideoUrl}
                  autoPlay
                  controls
                  playsInline
                />
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}
