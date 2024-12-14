import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import FAQ from "../components/FAQ";
import Form from "../components/Form";
import ApplyNow_btn from "../components/ApplyNow_btn";
import Teachers_section from "../components/Teachers_section";
import data from "../datas/FAQdata.json";

const SpecialtyInner = () => {
  const { id } = useParams();
  console.log(id);

  const categoryData = data.find((item) => item.category === id);

  const desc = categoryData?.description || [];

  return (
    <div>
      <Navbar isDark={true} />
      <div className="w-11/12 mx-auto">
        {/*  */}
        <div className="w-full h-[448px] px-20 py-[100px] mt-14 bg-blue_ultraDark rounded-[32px] relative text-white">
          <div className="absolute -bottom-0 right-10 w-[300px] h-[300px] blur-[200px] rounded-full bg-gradient-to-br from-blue-500/50 via-purple-400/40 to-transparent pointer-events-none z-0"></div>
          <p className="ont-[600] text-[64px] ">{id}</p>
          <p className="mt-2">{desc}</p>
          <div className="w-[145px] h-[48px] mt-12">
            <ApplyNow_btn>Apply Now</ApplyNow_btn>
          </div>
        </div>
        <div className="my-40 w-11/12 mx-auto">
          <Teachers_section category={id} />
        </div>
        <FAQ category={id} />
        <Form />
      </div>
    </div>
  );
};

export default SpecialtyInner;
