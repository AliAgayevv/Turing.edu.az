import { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";

import image1 from "../assets/photos/communityBGPHOTOS/photo1.jpeg";
import image2 from "../assets/photos/communityBGPHOTOS/photo2.jpeg";
import image3 from "../assets/photos/communityBGPHOTOS/photo3.jpeg";
import image4 from "../assets/photos/communityBGPHOTOS/photo4.png";
import image5 from "../assets/photos/communityBGPHOTOS/photo5.png";
import image6 from "../assets/photos/communityBGPHOTOS/photo6.jpeg";
import imageCentered from "../assets/photos/communityBGPHOTOS/photoCenter.jpeg";

// import vector1 from "../assets/vectors/communityFirstVector.png";
// import vector2 from "../assets/vectors/positiveEnergyVector.png";
// import vector3 from "../assets/vectors/wavesBeforeVector.png";
// import vector4 from "../assets/vectors/teachLiveVector.png";
import CursorEffect from "../utils/CursorEffect";
import CommunitySlider from "../components/CommunitySlider";
import CommunityAdvantages from "../components/CommunityAdvantages";
import gsap from "gsap";
import { useBreakpoint } from "../hooks/useBreakpoint";
import ResponsiveImageGrid from "../components/CommunityGridImages";
import exampleVideo from "../assets/videos/community-video.mp4";
import Footer from "../components/Footer";
import ResizingDiv from "../components/ResizeAnimation";
import { useGetCommunityContentQuery } from "../store/services/communityApi";

const MuhitComponent = () => {
  const isMobile = useBreakpoint(1024);
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isMobile) return;
      if (!containerRef.current) return;

      const { clientX, clientY } = e;
      const { width, height, left, top } =
        containerRef.current.getBoundingClientRect();

      const x = (clientX - left - width / 2) / width;
      const y = (clientY - top - height / 2) / height;

      imagesRef.current.forEach((image, index) => {
        if (image) {
          const moveX = x * (10 + index * 10); // Hareketin şiddetini belirliyoruz
          const moveY = y * (10 + index * 10);

          image.style.transform = `translate(${moveX}px, ${moveY}px) rotate(${
            index % 2 === 0 ? "-15deg" : "10deg"
          })`;
        }
      });
    };

    const container = containerRef.current;
    container?.addEventListener("mousemove", (e) =>
      handleMouseMove(e as MouseEvent)
    );

    return () => container?.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="relative h-screen flex justify-center items-center overflow-x-hidden lg:mt-20 xl:mt-0"
      ref={containerRef}
    >
      <div className="text-center z-10">
        <h1 className="text-white text-[5rem] md:text-[10rem] font-bold">
          Mühit
        </h1>
        <p className="text-gray-300 text-sm md:text-lg md:-mt-[40px]">
          Learn highly demanded skills through practical courses, <br />
          created by trusted industry professionals, that focus on real-world
          applications.
        </p>
      </div>

      <div className="absolute inset-0 flex justify-center items-center overflow-x-hidden overflow-hidden">
        <img
          src={image1}
          ref={(el) => (imagesRef.current[0] = el)}
          alt="Community 1"
          className=" absolute w-[120px] h-[211px] md:w-[237px] md:h-[323px] object-cover rounded-[24px] left-0 top-20 lg:top-10 lg:left-40 xl:top-20 xl:left-48 2xl:top-16 2xl:left-60 rotate-[-15deg] "
        />
        <img
          src={imageCentered}
          ref={(el) => (imagesRef.current[1] = el)}
          alt="Community 2"
          className=" absolute w-[114px] md:w-[260px] md:h-[354px] h-[156px] object-cover rounded-[24px] top-40 -right-5 lg:top-10 lg:right-40 xl:top-20 xl:right-44 2xl:top-20 2xl:right-52 rotate-[10deg] "
        />
        <img
          src={imageCentered}
          ref={(el) => (imagesRef.current[2] = el)}
          alt="Community 3"
          className=" absolute w-[132px] h-[180px] object-cover md:w-[214px] md:h-[292px] rounded-[24px] bottom-20 left-0 lg:-bottom-20 lg:left-60  xl:-bottom-6 xl:left-[26rem] 2xl:bottom-5 2xl:left-[30rem] -rotate-[15deg] "
        />
        <img
          src={image4}
          ref={(el) => (imagesRef.current[3] = el)}
          alt="Community 4"
          className=" absolute w-[184px] h-[250px] md:w-[146px] md:h-[200px] rounded-[24px] -bottom-5 right-4 lg:bottom-0 lg:right-60 xl:bottom-16 xl:right-[32rem] 2xl:bottom-28 2xl:right-[36rem] rotate-[10deg] "
        />
      </div>
    </div>
  );
};

export default function Community() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useBreakpoint(1024);

  const { data: communityContent } = useGetCommunityContentQuery({});

  const handleMouseMove = (event: { clientX: any; clientY: any }) => {
    if (isMobile) return;
    const { clientX, clientY } = event;
    if (!containerRef.current) return;
    const container = containerRef.current.getBoundingClientRect();
    const centerX = container.left + container.width / 2;
    const centerY = container.top + container.height / 2;

    const distanceX = (clientX - centerX) / container.width;
    const distanceY = (clientY - centerY) / container.height;

    gsap.to(containerRef.current, {
      rotateX: 30 * distanceY,
      rotateY: 50 * distanceX,
      duration: 0.5,
      ease: "power1.out",
    });
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    gsap.to(containerRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: "power1.out",
    });
  };

  return (
    <div className="bg-blue_ultraDark min-h-screen overflow-x-hidden">
      <CursorEffect />
      <Navbar isDark={false} />
      <div className=" z-0 relative overflow-hidden h-[calc(100vh-15vh)] xl:mt-0 mt-10">
        <div className=" perspective-[1000px]">
          <div
            className="absolute h-[700px] w-[1000px] translate-x-[-50%] translate-y-[-50%] left-[50%] top-[50%] "
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            ref={containerRef}
          >
            <div>
              <img
                src={communityContent?.topSliderPhotos[0] ?? image1}
                alt="community image"
                className="max-w-[207px] max-h-[216px] object-cover absolute top-[70px] left-[50px] rotate-on-cursor opacity-40 rounded-xl"
              />
            </div>
            <div>
              <img
                src={communityContent?.topSliderPhotos[1] ?? image2}
                alt="community image"
                className="max-w-[323px] max-h-[189px] object-cover absolute top-[20px] left-[300px] rotate-on-cursor opacity-40 rounded-xl"
              />
            </div>
            <div>
              <img
                src={communityContent?.topSliderPhotos[2] ?? image3}
                alt="community image"
                className="max-w-[323px] max-h-[150px] object-cover absolute top-[60px] right-[50px] rotate-on-cursor opacity-40 rounded-xl"
              />
            </div>
            <div>
              <img
                src={communityContent?.topSliderPhotos[3] ?? image4}
                alt="community image"
                className="max-w-[165px] max-h-[312px] object-cover absolute bottom-[150px] right-[40px] rotate-on-cursor opacity-40 rounded-xl"
              />
            </div>
            <div>
              <img
                src={communityContent?.topSliderPhotos[4] ?? image5}
                alt="community image"
                className="w-[554px] h-[149px] object-cover absolute bottom-[40px] left-[200px] rotate-on-cursor opacity-40 rounded-xl"
              />
            </div>
            <div>
              <img
                src={communityContent?.topSliderPhotos[5] ?? image6}
                alt="community image"
                className="max-w-[190px] max-h-[175px] absolute top-[320px] left-[70px] rotate-on-cursor opacity-40 rounded-xl"
              />
            </div>
            <div>
              <img
                src={communityContent?.topSliderPhotos[6] ?? imageCentered}
                alt="community image"
                className="max-w-[438px] max-h-[233px] object-cover absolute top-[240px] left-[340px] rotate-on-cursor opacity-40 rounded-xl"
              />
            </div>
          </div>

          <div className="z-20 text-center pointer-events-none absolute translate-x-[-50%] translate-y-[-50%] left-[50%] top-[50%]">
            <h1 className="text-white text-6xl md:text-8xl font-bold">
              {communityContent?.environmentBannerText
                ? communityContent.environmentBannerText
                : "Mühit"}
            </h1>
          </div>
        </div>
      </div>
      <div className="text-white flex flex-col w-5/6 mt-10 xl:mt-0 xl:w-2/6 mx-auto">
        <h4 className="text-left opacity-60 uppercase">Mühit</h4>
        <h1 className="font-jakarta font-[500] text-white xl:text-[26px] text-[20px]">
          <span className="text-blue_light">Turing Academy </span>
          olaraq sizlərə bir addım öndə olan mühitimizi təqdim edirik falan
        </h1>
      </div>
      <div className="mt-36 md:h-[350px] xl:h-[400px] h-[1750px]">
        <CommunitySlider />
      </div>
      <div className="md:mt-20 h-[2200px] md:h-[1650px] md:mb-[500px] lg:mb-0">
        <CommunityAdvantages />
        <MuhitComponent />
      </div>
      <div className="h-[1000px]">
        <ResponsiveImageGrid />
      </div>

      <div>
        <div className="w-11/12 mx-auto mb-10">
          <ResizingDiv />
        </div>
        <div className="flex justify-end">
          <h2 className="text-right text-[20px] w-screen pr-10 text-white font-inter">
            Modern design are the key to success. <br /> Everything that is most
            beautiful is in nature.
          </h2>
        </div>
        <h1
          className="text-white font-montserrat mt-10 w-11/12 mx-auto font-[600] uppercase"
          id="community-footer-above-text"
        >
          {communityContent?.bottomMessage
            ? communityContent.bottomMessage
            : ""}
        </h1>
        <div className="relative h-[428px] mt-8">
          <video
            className="w-screen h-full object-cover rounded-2xl"
            src={communityContent?.communityVideoUrl ?? exampleVideo}
            autoPlay
            playsInline
            loop={true}
          />
          <div className="bg-black/60 absolute inset-0"></div>
          <div className="h-screen relative">
            <Footer forCommunity={true} />
          </div>
        </div>
      </div>
    </div>
  );
}
