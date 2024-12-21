import { useState } from "react";
import Navbar from "../components/Navbar";
import Reels_card from "../components/Reels_card";
import data from "../datas/graduates.json";
import LoadMore_btn from "../components/LoadMore_btn";
import FormSection from "../components/FormSection";
import Footer from "../components/Footer";

const PAGE_SIZE = 8; // Her seferinde gösterilecek öğe sayısı

export default function AllGraduates() {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  // Load More button handler
  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + PAGE_SIZE);
  };

  return (
    <div className="h-screen">
      <Navbar isDark={true} />
      <div className="w-screen bg-white z-[50]">
        <div className="w-11/12 mx-auto ">
          <div className="pt-24">
            <h2 className="font-[500] font-jakarta text-5xl text-black_dark">
              Our Graduates
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10 px-6 gap-6 bg-white w-full">
              {/* Send items with spread */}
              {data.slice(0, visibleCount).map((item) => (
                <Reels_card
                  key={item.id}
                  category={item.category}
                  studentName={item.name}
                  desc={item.desc}
                  videoUrl={item?.videoUrl || ""}
                  coverPhoto={item.coverPhoto}
                />
              ))}
            </div>
            {visibleCount < data.length && (
              <div className="text-center pt-8 flex justify-center items-center bg-white">
                <div className="w-[146px] h-[48px]" onClick={handleLoadMore}>
                  <LoadMore_btn>Load More</LoadMore_btn>
                </div>
              </div>
            )}
            {/* Add the white background to the next section */}
            <div className="pt-20 bg-white pb-20">
              <FormSection />
            </div>
          </div>
        </div>
      </div>
      <div className=" h-screen relative -z-[2]">
        <Footer />
      </div>
    </div>
  );
}
