import React from "react";
import { useNavigate } from "react-router-dom"; // useNavigate'ı import ediyoruz
import ApplyNow_btn from "../ApplyNow_btn";
import LearnMore_btn from "../LearnMore_btn";

interface IProps {
  category: string;
  img: string;
  desc: string;
  title: string;
  hiddenText: string;
  route: string; // Yönlendirme yapılacak URL parametresi
}

const SpecialtyCard: React.FC<IProps> = ({
  category,
  img,
  desc,
  title,
  hiddenText,
  route, // URL'yi alıyoruz
}) => {
  const navigate = useNavigate(); // useNavigate hook'unu kullanıyoruz

  // Kart tıklandığında yönlendirme yapacak fonksiyon
  const handleCardClick = () => {
    navigate(route); // Yönlendirme yapılacak URL'ye yönlendiriyoruz
  };

  return (
    <div
      className="border group h-[411px] w-[306px] bg-white rounded-2xl p-4 flex flex-col gap-5 font-inter overflow-hidden relative"
      onClick={handleCardClick} // Kart tıklanabilir hale geliyor
    >
      <div className="h-[274px] w-[274px] p-2 rounded-lg flex items-center justify-center transition-all duration-300 delay-200 group-hover:scale-[0.56] group-hover:-translate-y-[55px] group-hover:-translate-x-[60px]">
        <img
          src={img}
          alt={title}
          className="h-full w-full object-cover transition-all duration-300 delay-200"
        />
      </div>

      <div>
        <button
          disabled
          className="group-hover:-translate-y-[105px] flex h-[26px] w-[66px] justify-center items-center text-[#01030E] bg-[#F8F9FA] rounded-lg border mb-4 text-[14px] font-[400] opacity-70 transition-all duration-300 delay-300"
        >
          {category}
        </button>

        <h3 className="group-hover:-translate-y-[110px] mb-[6px] font-[500] transition-all duration-300 delay-300">
          {title}
        </h3>

        <p className="p-1 text-[12px] group-hover:translate-y-20 text-[#01030E] opacity-80 font-[400] transition-all duration-500 delay-300">
          {desc}
        </p>

        <p className="absolute -bottom-20 group-hover:-translate-y-36 group-hover:-translate-x-1 p-1 text-[12px] text-[#01030E] opacity-80 font-[400] transition-all duration-300 delay-300">
          {hiddenText}
        </p>

        <div className="absolute -bottom-16 left-0 right-0 flex gap-4 justify-center items-center transition-all duration-300 delay-500 group-hover:-translate-y-[80px]">
          <div className="w-[129px] h-[46px]">
            <LearnMore_btn>Learn More</LearnMore_btn>
          </div>
          <div className="w-[129px] h-[46px]">
            <ApplyNow_btn>Apply Now</ApplyNow_btn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialtyCard;
