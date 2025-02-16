import Slider from "react-slick";
import FormSection from "../components/FormSection";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import photo1 from "../assets/vectors/partners/partner1.svg.svg";
import photo2 from "../assets/vectors/partners/partner2.svg.svg";
import photo3 from "../assets/vectors/partners/partner3.svg.svg";
import photo4 from "../assets/vectors/partners/partner4.svg.svg";
import photo5 from "../assets/vectors/partners/partner5.svg.svg";
import photo6 from "../assets/vectors/partners/partner6.svg";
import photo7 from "../assets/vectors/partners/partner7.svg";

// TODO:  mobilde logolarin boyun azald margin veya padding azalt, mobilde

export default function Partners() {
  const sliderSettings = {
    dots: false,
    centerMode: true,
    infinite: true,
    speed: 10000,
    slidesToShow: 5,
    slidesToScroll: 3,
    cssEase: "linear",
    pauseOnHover: false,
    autoplay: true,
    autoplaySpeed: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const partners = [
    photo1,
    photo2,
    photo3,
    photo4,
    photo5,
    photo6,
    photo7,
    photo3,
  ];

  return (
    <div className="w-full pt-24 mb-20">
      <h4 className="opacity-60 uppercase text-[14px] text-black_dark">
        Partners
      </h4>
      <h1 className="text-4xl md:text-5xl font-jakarta font-[500] text-black_dark pb-10">
        Together Strong
      </h1>
      <Slider {...sliderSettings} className="-mb-10 mt-10">
        {partners.map((logo, index) => (
          <div
            key={index}
            className="max-h-[100px] border w-[114px] sm:w-[90px] md:w-[100px] lg:w-[114px] h-auto min-h-20 flex-shrink-0 mx-4 flex justify-center items-center"
          >
            <img
              src={logo}
              alt={`${index}`}
              className={`w-full object-contain flex justify-center items-center mx-auto max-h-[100px] max-w-[400px] h-full sm:p-1 `}
            />
          </div>
        ))}
      </Slider>

      <FormSection />
    </div>
  );
}
