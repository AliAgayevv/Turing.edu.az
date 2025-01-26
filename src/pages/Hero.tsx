import { useRef, useState } from "react";
import { motion } from "framer-motion";
import ApplyNow_btn from "../components/ApplyNow_btn";
import exampleVideo from "../assets/videos/exampleVideo.mp4";
import Navbar from "../components/Navbar";
import bgTuringVector from "../assets/vectors/turing-hero-left-top-vector.png";
import WatchNow_btn from "../components/WatchNow_btn";
import useOutsideClick from "../hooks/outsideClick";

export default function Hero() {
  const [isApplyNowClicked, setIsApplyNowClicked] = useState(false);

  const handleCloseModal = () => {
    setIsApplyNowClicked(false);
  };

  const modalRef = useRef(null);

  useOutsideClick(modalRef, handleCloseModal);

  const handleGoForm = () => {
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

  return (
    <div className="h-screen flex flex-col relative overflow-hidden">
      {!isApplyNowClicked && <Navbar isDark={false} />}

      <div className="flex flex-col items-center justify-center h-auto z-50">
        <div>
          <h1 className="text-white_solid text-[32px] sm:text-5xl md:text-6xl text-center mb-4 pt-[125px]">
            #BirAddımÖndə
          </h1>
          {/* Left top light effect */}
          <div className="absolute -top-10 -left-20 w-[200px] h-[300px] bg-gradient-to-br from-white/30 to-transparent blur-[120px] rounded-full pointer-events-none z-0"></div>
          {/* Right bottom light effect */}
          <div className="absolute -bottom-0 -right-10 w-[200px] h-[300px] bg-gradient-to-br from-white/30 to-transparent blur-[120px] rounded-full pointer-events-none z-0"></div>
          <img
            className=" absolute -left-2 md:left-0 top-10 md:top-0 -z-10"
            src={bgTuringVector}
          ></img>

          <p className="text-[12px] md:text-base text-white_lightMedium text-center max-w-2xl mb-8 px-4">
            Learn highly demanded skills through practical courses, created by
            trusted industry professionals, that focus on real-world
            applications.
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
        <div className=" max-w-[3000px] px-4 pt-[70px] overflow-hidden h-[55vh] relative ">
          <motion.div
            initial={{ translateY: 400, opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-[520px]  lg:w-[1120px] h-[300px] relative  md:h-[65vh] md:w-[1250px]  lg:h-[55vh] pt-8 rounded-[50px] overflow-hidden border-8 md:border-[20px] border-[#212B45] "
          >
            <video
              className="absolute top-0 left-0 w-full h-full object-center lg:object-cover rounded-2xl overflow-hidden"
              src={exampleVideo}
            />
          </motion.div>
        </div>
        {isApplyNowClicked && (
          <div className="w-screen bg-blue_ultraDark h-screen z-[70] fixed inset-0 ">
            <motion.div
              ref={modalRef}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "100%" }}
              exit={{ opacity: 0, height: 0 }}
              className=" z-50 w-11/12 mx-auto h-10 flex items-center justify-center"
            >
              <div className=" rounded-[50px] overflow-hidden border-8 md:border-[20px] border-[#212B45]">
                <video
                  className="w-full h-2/6 object-cover "
                  src={exampleVideo}
                  autoPlay
                  controls
                />
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}
