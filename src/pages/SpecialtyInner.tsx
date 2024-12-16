import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import FAQ from "../components/FAQ";
import ApplyNow_btn from "../components/ApplyNow_btn";
import Teachers_section from "../components/Teachers_section";
import data from "../datas/FAQdata.json";
import Graduates_section from "../components/Graduates_section";
import Syllabus_section from "../components/Syllabus_section";
import FormSection from "../components/FormSection";

const SpecialtyInner = () => {
  const { id = "" } = useParams();
  console.log(id);

  const categoryData = data.find((item) => item.category === id);

  const desc = categoryData?.description || [];

  return (
    <div>
      <Navbar isDark={true} />
      <div className="w-11/12 mx-auto">
        {/*  */}
        <div className=" w-full h-auto md:h-[448px] px-10 sm:px-10 md:px-20 py-10 md:py-[100px] mt-10 md:mt-14 bg-blue_ultraDark rounded-[20px] md:rounded-[32px] relative text-white">
          <div className="absolute -bottom-0 right-10 w-[300px] h-[300px] blur-[200px] rounded-full bg-gradient-to-br from-blue-500/50 via-purple-400/40 to-transparent pointer-events-none z-0"></div>
          <p className="ont-[600] text-[64px] ">{id}</p>
          <p className="mt-2">{desc}</p>
          <div className="w-[145px] h-[48px] mt-12">
            <ApplyNow_btn>Apply Now</ApplyNow_btn>
          </div>
        </div>
        <div className="mt-24">
          <Syllabus_section category={id} />
        </div>
        <div className="mt-40">
          <Teachers_section category={id} />
        </div>
        <div className="mt-24">
          <Graduates_section category={id} />
        </div>
        <div className="mt-24">
          <FAQ category={id} />
          <FormSection />
        </div>
      </div>
    </div>
  );
};

export default SpecialtyInner;
