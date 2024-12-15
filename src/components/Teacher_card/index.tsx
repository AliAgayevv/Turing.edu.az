import { FaLinkedinIn } from "react-icons/fa";
import { ITeacherProps } from "../../const/types";

export default function Teacher_card({
  name,
  workPosition,
  photo,
  connect,
}: ITeacherProps) {
  return (
    <div className="border rounded-2xl w-[306px] h-[373px] justify-center flex flex-col">
      <div className=" w-[306px] h-[300px] flex items-center justify-center rounded-full">
        <img
          src={photo}
          className="w-full h-full p-4 object-cover rounded-[15px]"
        />
      </div>
      <div className="px-5 flex justify-between items-end">
        <div>
          <h4 className="font-[500] text-[18px] text-black_dark">{name}</h4>
          <p className="text-[12px] opacity-80 text-black_dark">
            {workPosition}
          </p>
        </div>
        <a href={connect} target="_blank">
          <div className="w-8 h-8 rounded-full border flex justify-center items-center">
            <FaLinkedinIn />
          </div>
        </a>
      </div>
    </div>
  );
}
