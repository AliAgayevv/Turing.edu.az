import { useParams } from "react-router";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import ApplyNow_btn from "../components/ApplyNow_btn";
import Steps_box from "../components/Steps_box";
import LongFAQ from "../components/LongFAQ";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { xToCenter } from "../utils/motionAnimations";
import { useGetScholarshipByIdQuery } from "../store/services/scholarshipApi";

// Define interfaces for the data structure
interface FaqItem {
  question: string;
  answer: string;
}

interface ScholarshipStep {
  stepNumber: number;
  title: string;
  description: string;
}

interface ScholarshipData {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  coverPhotoUrl: string;
  applyLink: string;
  registerDeadline: string;
  slotsLeft: number;
  faq: FaqItem[];
  steps: ScholarshipStep[];
}

// Define the expected props for Steps_box component
interface StepBoxProps {
  stepType: number;
  stepTitle: string;
  stepDetail: string;
}

const item = xToCenter(20);

export default function ScholarshipInner() {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, error } = useGetScholarshipByIdQuery(id);
  const scholarshipData = data as ScholarshipData | undefined;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  console.log("Scholarship data", scholarshipData);

  // Convert backend step format to the format expected by Steps_box component
  const formatStepsForComponent = (): StepBoxProps[] => {
    if (!scholarshipData?.steps) return [];

    return scholarshipData.steps.map((step) => ({
      stepType: step.stepNumber,
      stepTitle: step.title,
      stepDetail: step.description,
    }));
  };

  // Handle apply button click
  const handleApply = () => {
    if (scholarshipData?.applyLink) {
      window.open(scholarshipData.applyLink, "_blank");
    }
  };

  // Format date for display
  const formatDate = (dateString?: string): string => {
    if (!dateString) return "N/A";

    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (isLoading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="h-screen"
      >
        <Navbar isDark={true} />
        <div className="w-screen bg-white flex justify-center items-center py-32">
          <p className="text-xl">Loading scholarship details...</p>
        </div>
      </motion.div>
    );
  }

  if (error || !scholarshipData) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="h-screen"
      >
        <Navbar isDark={true} />
        <div className="w-screen bg-white flex justify-center items-center py-32">
          <p className="text-xl">
            Error loading scholarship. Please try again later.
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="h-screen"
    >
      <Navbar isDark={true} />
      <div className="w-screen bg-white">
        <div className="mx-auto w-11/12 pt-5">
          <div className="w-full px-10 sm:px-10 md:px-20 py-10 md:py-[100px] pt-10 md:pt-14 bg-blue_ultraDark rounded-[20px] md:rounded-[32px] relative text-white">
            <div className="absolute -bottom-0 right-10 w-[300px] blur-[200px] rounded-full bg-gradient-to-br from-blue-500/50 via-purple-400/40 to-transparent pointer-events-none z-0"></div>
            <p className="font-[600] text-[64px]">{scholarshipData.title}</p>
            <p className="mt-2">{scholarshipData.subtitle}</p>
          </div>

          <div className="mt-16 md:mt-24 flex flex-col md:flex-row gap-10 md:justify-between md:items-center">
            <div className="flex flex-col">
              <h3 className="uppercase text-white_dark">About Program</h3>
              <div className="pr-10">
                <h1 className="text-[32px] sm:text-[40px] md:text-5xl font-jakarta font-[500] text-black_medium py-2 sm:py-4">
                  {scholarshipData.title}
                </h1>
                <p className="w-full max-w-[745px] text-[14px] sm:text-[16px] md:text-[18px] text-white_ultraDark leading-relaxed mt-5 md:mt-0 sm:px-0">
                  {scholarshipData.description}
                </p>
                <div
                  className="w-[145px] h-[48px] mt-6 hidden md:block"
                  onClick={handleApply}
                >
                  <ApplyNow_btn />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6 mr-24 bg-white">
              <div>
                <h3 className="font-[500] text-xl text-black_dark">Slots:</h3>
                <h5 className="text-white_ultraDark">
                  {scholarshipData.slotsLeft > 0
                    ? scholarshipData.slotsLeft
                    : "No slots available"}
                </h5>
              </div>
              <div>
                <h3 className="font-[500] text-xl text-black_dark">
                  Register Deadline:
                </h3>
                <h5 className="text-white_ultraDark">
                  {formatDate(scholarshipData.registerDeadline)}
                </h5>
              </div>
            </div>

            <div
              className="w-[145px] h-[48px] mt-0 block md:hidden"
              onClick={handleApply}
            >
              <ApplyNow_btn />
            </div>
          </div>

          {scholarshipData.steps && scholarshipData.steps.length > 0 && (
            <div className="mt-24">
              <h3 className="uppercase text-white_dark">Steps</h3>
              <h1 className="text-[36px] md:text-5xl font-jakarta font-[500] text-black_medium py-4">
                You will go through these Steps
              </h1>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={item}
                className="flex flex-col md:flex-row gap-6 mt-6"
              >
                {formatStepsForComponent().map((step, index) => (
                  <Steps_box
                    key={index}
                    stepDetail={step.stepDetail}
                    stepTitle={step.stepTitle}
                    stepType={step.stepType}
                  />
                ))}
              </motion.div>
            </div>
          )}

          {scholarshipData.faq && scholarshipData.faq.length > 0 && (
            <div className="pb-20">
              <div className="text-[32px] pt-20 pb-5">
                <h2 className="hidden md:block text-center">
                  Frequently asked questions (FAQ)
                </h2>
                <h2 className="block md:hidden">FAQ</h2>
                <p className="text-black_light text-[14px] text-left md:text-center">
                  We're here to support your design journey.
                </p>
              </div>
              <LongFAQ faqData={scholarshipData.faq} id={scholarshipData.id} />
            </div>
          )}
        </div>
      </div>
      <div className="h-screen relative -z-[2]">
        <Footer />
      </div>
    </motion.div>
  );
}
