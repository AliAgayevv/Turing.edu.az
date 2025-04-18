// ! TODO: Specialty Card tezeden animasiya olunsun gsap veya frammer ile daha responsive formada ve daha duzgun.

import Navbar from "../components/Navbar";
import SpecialtyCard from "../components/Specialty_card";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { useGetScholarshipQuery } from "../store/services/scholarshipApi";

// TODO: ELEMENT SG OLDU

export default function Schoolarship() {
  window.scrollTo({ top: 0, behavior: "smooth" });

  const { data } = useGetScholarshipQuery({});

  console.log("Scholarship data", data);

  // const [selectedCategory, setSelectedCategory] = useState("all");

  // const handleSelect = (category: string) => {
  //   setSelectedCategory(category);
  // };
  return (
    <motion.div
      transition={{
        duration: 0.5,
        delay: 0.2,
        ease: "easeInOut",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="z-[50]  h-screen"
    >
      <Navbar isDark={true} />
      <div className="w-screen lg:h-screen bg-white ">
        <div className="mx-auto w-11/12 pt-24 pb-20">
          <h1 className="font-jakarta font-[500] text-5xl">
            Active Scholarship Programs
          </h1>
          <div className="flex gap-3 mt-10">
            {/* <div className="inline-flex items-center gap-2 h-11 p-1 bg-[#f9f9f9]/50 rounded-lg border border-[#d9d9db] cursor-pointer mt-8"> */}
            {/* {fixCategory.map((category) => (
                <div
                  key={category}
                  onClick={() => handleSelect(category)}
                  className={`px-3 py-1 rounded-md text-nowrap ${
                    selectedCategory === category
                      ? "bg-white border-[#d9d9db] border-[1.5px] text-black_dark opacity-70"
                      : "text-[#6C737F] border-transparent text-[14px]"
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </div>
              ))} */}
            {/* </div> */}
          </div>
          <div className="flex flex-col gap-5 md:grid  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6 md:gap-7">
            {data &&
              data.map((item: any) => (
                <Link to={`/schoolarship/${item.id}`}>
                  <SpecialtyCard
                    id={item.id}
                    key={item.id}
                    category={item.slotsLeft}
                    img={item.coverPhotoUrl}
                    desc={item.subtitle}
                    title={item.title}
                    hiddenText={item.description}
                    route={item.route}
                  />
                </Link>
              ))}
          </div>
        </div>
      </div>
      <div className="h-screen relative -z-[2]">
        <Footer />
      </div>
    </motion.div>
  );
}
