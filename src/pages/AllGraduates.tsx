import { useState } from "react";
import Navbar from "../components/Navbar";
import Reels_card from "../components/Reels_card";
import data from "../datas/graduates.json";
import LoadMore_btn from "../components/LoadMore_btn";
import FormSection from "../components/FormSection";

const PAGE_SIZE = 8; // Her seferinde gösterilecek öğe sayısı

export default function AllGraduates() {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  // Load More butonuna tıklandığında çalışacak fonksiyon
  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + PAGE_SIZE);
  };

  return (
    <div className="w-11/12 mx-auto">
      <Navbar isDark={true} />
      <div className="h-screen mt-24">
        <h2 className="font-[500] font-jakarta text-5xl text-black_dark">
          Our Graduates
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 px-6 gap-6">
          {data.slice(0, visibleCount).map((item) => (
            <Reels_card
              key={item.id} // Benzersiz bir anahtar ekleyin
              category={item.category}
              studentName={item.name}
              desc={item.desc}
              videoUrl={item?.videoUrl || ""} // Boş string yerine item.videoUrl ekleyebilirsiniz
              coverPhoto={item.coverPhoto}
            />
          ))}
        </div>
        {visibleCount < data.length && (
          <div className="text-center mt-8 flex justify-center items-center">
            <div className="w-[146px] h-[48px]" onClick={handleLoadMore}>
              <LoadMore_btn>Load More</LoadMore_btn>
            </div>
          </div>
        )}
        <div className="mt-20">
          <FormSection />
        </div>
      </div>
    </div>
  );
}
