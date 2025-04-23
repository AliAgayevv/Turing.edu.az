import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import FAQ from "../components/FAQ";
import ApplyNow_btn from "../components/ApplyNow_btn";
import Teachers_section from "../components/Teachers_section";
import Graduates_section from "../components/Graduates_section";
import Syllabus_section from "../components/Syllabus_section";
import FormSection from "../components/FormSection";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { useGetSpecialityByIdQuery } from "../store/services/specialityApi";

const SpecialtyInner = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const { id } = useParams();
  const { data, isLoading, error } = useGetSpecialityByIdQuery(id);

  const handleGoForm = () => {
    const formElement = document.getElementById("form");
    if (formElement) {
      const formBottomPosition =
        formElement.offsetTop + formElement.offsetHeight;
      window.scrollTo({
        top: formBottomPosition - window.innerHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="h-screen">
      <Navbar isDark={true} />
      <div className="w-screen bg-white">
        <div className="w-11/12 mx-auto h-auto bg-white">
          <div className="w-full h-auto md:h-[448px] px-10 sm:px-10 md:px-20 py-10 md:py-[100px] pt-10 md:pt-14 bg-blue_ultraDark rounded-[20px] md:rounded-[32px] relative text-white">
            <div className="absolute -bottom-0 right-10 w-[300px] h-[300px] blur-[200px] rounded-full bg-gradient-to-br from-blue-500/50 via-purple-400/40 to-transparent pointer-events-none z-0"></div>

            {isLoading ? (
              <p className="text-xl">Loading specialty details...</p>
            ) : error ? (
              <p className="text-xl">
                Error loading specialty. Please try again later.
              </p>
            ) : data ? (
              <>
                <p className="font-[600] text-[64px]">{data.title || id}</p>
                <p className="mt-2">{data.description}</p>
              </>
            ) : (
              <p className="font-[600] text-[64px]">{id}</p>
            )}

            <div className="w-[145px] h-[48px] mt-12" onClick={handleGoForm}>
              <ApplyNow_btn />
            </div>
          </div>

          {!isLoading && data && (
            <>
              <div className="mt-24 overflow-hidden">
                <Syllabus_section category={id} modules={data.modules} />
              </div>

              <div className="mt-40">
                <Teachers_section category={id} teachers={data.teachers} />
              </div>

              <div className="mt-24 overflow-hidden">
                <Graduates_section category={id} graduates={data.graduates} />
              </div>

              <div className="mt-24 w-full h-auto overflow-hidden">
                <FAQ id={id} faqData={data.faq} />
                <FormSection applyLink={data.applyLink} />
              </div>
            </>
          )}
        </div>
      </div>
      <div className="h-screen relative -z-[2]">
        <Footer />
      </div>
    </div>
  );
};

export default SpecialtyInner;
