import Navbar from "../components/Navbar";
import Reels_card from "../components/Reels_card";
import FormSection from "../components/FormSection";
import Footer from "../components/Footer";
import fakeData from "../datas/graduates.json";

export default function Reels() {
  return (
    <div className="">
      <Navbar isDark={true} />
      <div className="w-screen bg-white">
        <div className="w-11/12 mx-auto h-auto">
          <h1 className="text-5xl font-jakarta font-[500] text-black_dark pt-[100px]">
            Our Graduates
          </h1>
          <div className="flex flex-col  md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-6 md:gap-y-6 bg-white h-auto">
            {fakeData.map((data) => (
              <Reels_card
                category={data.category}
                studentName={data.studentName}
                desc={data.desc}
                videoUrl={data.videoUrl}
                coverPhoto={data.coverPhoto}
              />
            ))}
          </div>

          <div className="flex justify-center items-center pt-6 bg-white">
            <button className="flex justify-center items-center border p-4 rounded-full">
              Load More
            </button>
          </div>

          <div className="pt-5 bg-white">
            <FormSection />
          </div>
        </div>
      </div>
      <div className="w-screen h-screen">
        <Footer />
      </div>
    </div>
  );
}
