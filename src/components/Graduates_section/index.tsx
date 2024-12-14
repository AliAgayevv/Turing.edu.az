import React from "react";
import Reels_card from "../Reels_card";
import data from "../../datas/FAQdata.json";
import Graduates_card from "../Graduates_card";

export default function Graduates_section({ category }) {
  const categoryData = data.find((item) => item.category === category);

  const graduates = categoryData?.graduates || [];
  return (
    <div>
      <h1 className="text-4xl md:text-5xl font-jakarta font-[500] text-black_dark py-4">
        Honoring Our Graduates
        <br />
        in <span className="text-blue_light">Turing Academy</span>
      </h1>
      <div className="grid grid-cols-4 mt-12 gap-6">
        {/* <Graduates_card /> */}
        {graduates.map((item) => (
          <Graduates_card
            studentName={item.name}
            coverPhoto={item.photo}
            github={item.github}
            connect={item.connect}
            videoUrl={""}
            desc={item.desc}
          />
        ))}
      </div>
    </div>
  );
}
