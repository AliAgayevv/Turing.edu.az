import Slider from "react-slick";
import FormSection from "../components/FormSection";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    "./src/assets/sliderLogo.png",
    "./src/assets/sliderPhoto2.png",
    "./src/assets/sliderLogo.png",
    "./src/assets/sliderLogo.png",
    "./src/assets/sliderLogo.png",
    "./src/assets/sliderLogo.png",
  ];

  return (
    <div className="pb-20 w-full pt-20">
      <h4 className="opacity-60 uppercase text-[14px] text-black_dark">
        Partners
      </h4>
      <h1 className="text-4xl md:text-5xl font-jakarta font-[500] text-black_dark py-4 pb-12">
        Together Strong
      </h1>
      <Slider {...sliderSettings} className="mb-12">
        {partners.map((logo, index) => (
          <div
            key={index}
            className="max-h-[100px] border w-[114px] sm:w-[90px] md:w-[100px] lg:w-[114px] h-auto min-h-32 flex-shrink-0 mx-4 flex justify-center items-center"
          >
            <img
              src={logo}
              alt={`Partner ${index + 1}`}
              className="w-full object-cover flex justify-center items-center max-h-[100px] h-full p-2 sm:p-1"
            />
          </div>
        ))}
      </Slider>

      <FormSection />
    </div>
  );
}
