import { useParams } from "react-router";
import Navbar from "../components/Navbar";
import ApplyNow_btn from "../components/ApplyNow_btn";
import data from "../datas/schoolarShip.json";
import Steps_box from "../components/Steps_box";
import LongFAQ from "../components/LongFAQ";
import Footer from "../components/Footer";

export default function SchoolarshipInner() {
  const { id } = useParams();
  const currentData = data.find((item) => item.id === id);
  return (
    <div className=" bg-white w-screen">
      <Navbar isDark={true} />
      <div className="mx-auto w-11/12 bg-white">
        <div className=" w-full h-auto md:h-[448px] px-10 sm:px-10 md:px-20 py-10 md:py-[100px] mt-10 md:mt-14 bg-blue_ultraDark rounded-[20px] md:rounded-[32px] relative text-white">
          <div className="absolute -bottom-0 right-10 w-[300px] h-[300px] blur-[200px] rounded-full bg-gradient-to-br from-blue-500/50 via-purple-400/40 to-transparent pointer-events-none z-0"></div>
          <p className="ont-[600] text-[64px] ">{id}</p>
          <p className="mt-2">{currentData?.desc}</p>
          <div className="w-[145px] h-[48px] mt-12">
            <ApplyNow_btn>Apply Now</ApplyNow_btn>
          </div>
        </div>
        <div className="mt-24 flex flex-col md:flex-row gap-10 md:justify-between md:items-center">
          {/* Left Section */}
          <div className="flex flex-col">
            <h3 className="uppercase text-white_dark">About Program</h3>
            <div className="pr-10">
              <h1 className="text-[32px] sm:text-[40px] md:text-5xl font-jakarta font-[500] text-black_medium py-2 sm:py-4">
                Turing Academy Scholarships
              </h1>
              <p className="w-full max-w-[745px] text-[14px] sm:text-[16px] md:text-[18px] text-white_ultraDark leading-relaxed mt-5 md:mt-0 sm:px-0">
                Our scholarships reward outstanding students in technology with
                financial support and mentorship. Eligible applicants should be
                enrolled or planning to enroll and show academic excellence and
                leadership.
              </p>
              {/* Apply Now for Desktop */}
              <div className="w-[145px] h-[48px] mt-6 hidden md:block">
                <ApplyNow_btn>Apply Now</ApplyNow_btn>
              </div>
            </div>
            {/* Apply Now for Mobile */}
          </div>

          {/* Right Section */}
          <div className="flex flex-col gap-6 mr-24 bg-white">
            <div>
              <h3 className="font-[500] text-xl text-black_dark">Slots:</h3>
              <h5 className="text-white_ultraDark">{currentData?.slotCount}</h5>
            </div>
            <div>
              <h3 className="font-[500] text-xl text-black_dark">Register:</h3>
              <h5 className="text-white_ultraDark">{currentData?.date}</h5>
            </div>
          </div>
          <div className="w-[145px] h-[48px] mt-0 block md:hidden">
            <ApplyNow_btn>Apply Now</ApplyNow_btn>
          </div>
        </div>
        <div className="mt-24">
          <h3 className="uppercase text-white_dark">Steps</h3>
          <h1 className="text-[36px] md:text-5xl font-jakarta font-[500] text-black_medium py-4">
            You will go through these Steps
          </h1>
          <div className="flex flex-col md:flex-row gap-6 mt-6">
            {currentData?.steps?.map((item) => (
              <Steps_box
                stepDetail={item.stepDetail}
                stepTitle={item.stepTitle}
                stepType={item.stepType}
              />
            ))}
          </div>
          <LongFAQ id={currentData?.id} />
        </div>
      </div>
      <div className="w-screen">
        <Footer />
      </div>
    </div>
  );
}
