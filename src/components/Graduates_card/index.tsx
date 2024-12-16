import { FaLinkedinIn } from "react-icons/fa";
import { useState } from "react";
import playVector from "../../assets/vectors/play.png";
import { IStudentsInfoProps } from "../../const/types";

export default function Graduates_card({
  studentName,
  desc,
  coverPhoto,
  videoUrl,
  github,
  connect,
}: IStudentsInfoProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleTogglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div
      className="w-full h-auto  rounded-2xl p-4 border relative"
      onClick={handleTogglePlay}
    >
      <div className="w-full min-h-[300px] aspect-square bg-blue-50 rounded-[10px] relative">
        {!isPlaying ? (
          <img
            src={coverPhoto}
            className="w-full h-full rounded-[10px] object-cover cursor-pointer"
            alt="Cover"
          />
        ) : (
          //   <iframe
          //     src={videoUrl}
          //     className="w-full h-full rounded-[10px] object-cover"
          //   />
          <iframe
            className="w-full h-full border-none"
            src={videoUrl}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
            style={{ border: "none" }}
            title="YouTube Video"
          ></iframe>
        )}
        {!isPlaying && (
          <button className="absolute w-16 h-16 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-white rounded-full flex items-center justify-center">
            <img src={playVector} />
          </button>
        )}
      </div>
      <div className="h-[85px] w-full flex flex-col mt-4 gap-3">
        <div>
          <h4 className="font-[500] text-[18px] text-black_ultraDark">
            {studentName}
          </h4>
          <div className="flex justify-between mt-3">
            <p className="text-[12px] text-black_ultraLight">{desc}</p>
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full border flex justify-center items-center">
                <FaLinkedinIn />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
