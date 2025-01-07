import data from "../../datas/FAQdata.json";
import Graduates_card from "../Graduates_card";

interface IProps {
  category: string | number;
}

export default function Graduates_section({ category }: IProps) {
  const categoryData = data.find((item) => item.category === category);

  const graduates = categoryData?.graduates || [];
  return (
    <div>
      <h4 className="opacity-60 uppercase text-[14px] text-black_dark">
        Our graduates
      </h4>
      <h1 className="text-4xl md:text-5xl font-jakarta font-[500] text-black_dark py-4">
        Honoring Our Graduates
        <br />
        in <span className="text-blue_light">Turing Academy</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {graduates.slice(0, 4).map((item) => (
          <Graduates_card key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
