import { useEffect } from "react";
import Navbar from "../components/Navbar";
import LearnMoreBtn from "../components/LearnMore_btn";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import SpecialtyCard from "../components/Specialty_card";
import { useGetSpecialityQuery } from "../store/services/specialityApi";

export default function Specialty() {
  const { data, isLoading, isError } = useGetSpecialityQuery({});

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (isLoading) {
    return <div className="text-center py-20 text-white">Loading...</div>;
  }

  if (isError || !data) {
    return (
      <div className="text-center py-20 text-red-500">
        Error loading specialties.
      </div>
    );
  }

  const specialties = Array.isArray(data) ? data : [];

  return (
    <div className="h-screen">
      <Navbar isDark={true} />
      <div className="w-screen bg-white">
        <div className="mx-auto w-11/12 h-auto py-[100px] px-4 sm:px-8 mb-20 bg-white">
          <h1 className="font-jakarta font-[500] text-3xl sm:text-5xl text-black_dark">
            Fields of Study
          </h1>

          {/* Grid of all specialties */}
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 xl:gap-32">
            {specialties.map((specialty) => (
              <Link to={`/specialty/${specialty.id}`} key={specialty.id}>
                <SpecialtyCard {...specialty} />
              </Link>
            ))}
          </div>

          {/* Call-to-action box */}
          <div className="w-full h-auto rounded-2xl border border-white_medium mt-6 flex flex-col sm:flex-row justify-between items-center p-6">
            <div className="mb-4 sm:mb-0">
              <span className="font-[500] text-base text-black_ultraDark">
                Not sure what to choose?{" "}
              </span>
              <p className="text-[14px] opacity-60 text-black_dark">
                10 suallıq sorğumuza qatıl, potensialına uyğun ixtisası daha
                sürətli öyrən.
              </p>
            </div>
            <div className="w-full sm:w-[145px] h-[48px]">
              <LearnMoreBtn>Start test</LearnMoreBtn>
            </div>
          </div>
        </div>
      </div>
      <div className="h-screen relative -z-[2]">
        <Footer />
      </div>
    </div>
  );
}
