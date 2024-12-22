import { useState } from "react";
import playVector from "../../assets/vectors/play.png";
import { IStudentsInfoProps } from "../../const/types";

export default function Reels_card({
  category,
  studentName,
  desc,
  videoUrl,
  coverPhoto,
}: IStudentsInfoProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleTogglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div
      className=" h-[529px] w-[306px] rounded-2xl p-4 border relative group"
      onClick={handleTogglePlay}
    >
      {/* Video/Photo Section */}
      <div className="w-[274px] h-[392px] bg-blue-50 rounded-[10px] relative">
        {!isPlaying ? (
          <img
            src={coverPhoto}
            className="w-full h-full rounded-[10px] object-cover cursor-pointer"
            alt="Cover"
          />
        ) : (
          <iframe
            className="w-full h-full border-none rounded-[10px]"
            src={videoUrl}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
            style={{ border: "none" }}
            title="YouTube Video"
          ></iframe>
        )}
        {!isPlaying && (
          <button className="absolute w-16 h-16 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white rounded-full flex items-center justify-center">
            <img src={playVector} alt="Play Button" />
          </button>
        )}

        {/* Hover Buttons */}
      </div>

      {/* Description Section */}
      <div className="h-[85px] w-full flex flex-col mt-4 gap-3">
        <button className="bg-white_ultraLight border-white_medium text-blue_lightMedium border rounded-lg px-10 py-1.5 flex justify-center items-center w-[59px] h-[29px]">
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
        <div>
          <h4 className="font-[500] text-[18px] text-black_ultraDark">
            {studentName}
          </h4>
          <p className="text-[12px] text-black_ultraLight">{desc}</p>
        </div>
      </div>
    </div>
  );
}
