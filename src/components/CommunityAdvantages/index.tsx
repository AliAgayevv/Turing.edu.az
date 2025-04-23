import { motion } from "framer-motion";
import { useGetCommunityContentQuery } from "../../store/services/communityApi";

type AdvantageItem = {
  title: string;
  description: string;
  icon?: string;
  desc: string;
};

export default function CommunityAdvantages() {
  const { data, isLoading, isError } = useGetCommunityContentQuery({});

  isLoading && <div>Loading...</div>;
  isError && <div>Error loading data</div>;
  return (
    <div className="relative">
      <div className="w-11/12 mx-auto">
        <h3 className="uppercase text-white_dark">Turing Advantage</h3>
        <h1 className="text-4xl md:text-5xl font-semibold text-white py-4">
          <span className="text-sky-500">Turing Academy</span> offers a fun
          <br />& accessible learning experience.
        </h1>
      </div>

      <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 mt-[72px] gap-[48px] md:gap-[72px] md:px-8 lg:px-16">
        {data?.advantages.map((data: AdvantageItem, index: number) => (
          <motion.div
            initial="hidden"
            key={index}
            className="w-11/12 mx-auto relative z-10"
          >
            {data.icon && (
              <img src={data.icon} className="absolute -top-4 -left-3 -z-10" />
            )}
            <h4 className="font-[500] text-xl text-white">{data.title}</h4>
            <p className="text-[14px] text-[#A2A1A4] break-words">
              {data.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
