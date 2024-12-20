import Navbar from "../components/Navbar";
import image1 from "../assets/photos/communityBGPHOTOS/photo1.jpeg";
import image2 from "../assets/photos/communityBGPHOTOS/photo2.jpeg";
import image3 from "../assets/photos/communityBGPHOTOS/photo3.jpeg";
import image4 from "../assets/photos/communityBGPHOTOS/photo4.png";
import image5 from "../assets/photos/communityBGPHOTOS/photo5.png";
import image6 from "../assets/photos/communityBGPHOTOS/photo6.jpeg";
import imageCentered from "../assets/photos/communityBGPHOTOS/photoCenter.jpeg";

// const images = [image1, image2, image3, image4, image5, image6, imageCentered];

export default function Community() {
  return (
    <div className=" bg-blue_ultraDark h-screenz-0">
      <Navbar isDark={false} />
      <div className="w-11/12 mx-auto text-white text-4xl relative ">
        <div className="flex z-10 absolute top-[110px] left-[200px] opacity-40">
          <img src={image1} className="w-[207px] h-[216px] object-cover" />
        </div>
        <div className="flex z-10 absolute top-[40px] left-[440px] opacity-40">
          <img src={image2} className="w-[323px] h-[189px] object-cover" />
        </div>
        <div className="flex z-10 absolute top-[125px] left-[850px] opacity-40">
          <img src={image3} className="w-[323px] h-[150px] object-cover" />
        </div>
        <div className="flex z-10 absolute top-[375px] left-[950px] opacity-40">
          <img src={image4} className="w-[165px] h-[312px] object-cover" />
        </div>
        <div className="flex z-10 absolute top-[585px] left-[350px] opacity-40">
          <img src={image5} className="w-[554px] h-[149px] object-cover" />
        </div>
        <div className="flex z-10 absolute top-[400px] left-[200px] opacity-40">
          <img src={image6} className="w-[159px] h-[135px] object-cover" />
        </div>
        <div className="flex z-10 absolute top-[320px] left-[444px] opacity-40 ">
          <img
            src={imageCentered}
            className="w-[438px] h-[233px] object-cover"
          />
        </div>
      </div>
      <div className=" z-20 flex justify-center items-center h-screen">
        <div className="font-montserrat font-bold text-[120px] leading-[120px] text-center">
          <h1 className="text-white/50">Innovate</h1>
          <h1 className="text-white/80">Explore</h1>
          <h1 className="text-white">Excel</h1>
        </div>
      </div>
    </div>
  );
}
