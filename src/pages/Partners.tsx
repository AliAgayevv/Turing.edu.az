import React from "react";
import Slider from "react-slick";
import FormSection from "../components/FormSection";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image from "../assets/photos/elvira.jpeg";
import { style } from "framer-motion/client";

export default function Partners() {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
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
    "./src/assets/sliderLogo.png",
    "./src/assets/sliderLogo.png",
    "./src/assets/sliderLogo.png",
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
            className="border w-[14px] h-[92px] flex-shrink-0 mx-4 flex justify-center items-center" // Add margin-x to create gaps
          >
            <img
              src={logo}
              alt={`Partner ${index + 1}`}
              className="w-full object-cover h-full p-5"
            />
          </div>
        ))}
      </Slider>
      <FormSection />
    </div>
  );
}
