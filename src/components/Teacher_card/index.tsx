import { FaLinkedinIn } from "react-icons/fa";
import { ITeacherProps } from "../../const/types";

export default function Teacher_card({
  name,
  workPosition,
  photo,
  connect,
}: ITeacherProps) {
  return (
    <div className="border rounded-2xl w-full h-auto flex flex-col items-center p-4 sm:p-6 bg-white transition-shadow duration-300">
      {/* Image Section */}
      <div className="w-full min-h-[300px] aspect-square flex items-center justify-center">
        <img
          src={photo}
          className="w-full h-full object-cover rounded-[15px]"
          alt={name}
        />
      </div>

      {/* Details Section */}
      <div className="w-full flex justify-between items-center mt-4">
        <div>
          <h4 className="font-[500] text-base sm:text-lg text-black_dark">
            {name}
          </h4>
          <p className="text-xs sm:text-sm opacity-80 text-black_dark">
            {workPosition}
          </p>
        </div>

        {/* LinkedIn Button */}
        <a href={connect} target="_blank" rel="noopener noreferrer">
          <div className="w-8 h-8 rounded-full border flex justify-center items-center hover:bg-gray-100 transition duration-200">
            <FaLinkedinIn className="text-sm sm:text-base" />
          </div>
        </a>
      </div>
    </div>
  );
}
