import arrow from "../../assets/vectors/arrow-right-top.png";

interface IProps {
  icon: string;
  title: string;
  desc: string;
}

export default function MutualChoices_card({ icon, title, desc }) {
  return (
    <div className="flex gap-5 p-4 w-[416px] flex-col h-[252px] bg-white border rounded-2xl">
      <div className=" w-12 p-3 h-12 rounded-full bg-[#f8f9fa] border flex justify-center items-center">
        <img src={icon} className="w-6 h-6" alt="title" />
      </div>
      <div>
        <h3 className="text-xl text-[#01030e] font-[500] font-inter">
          {title}
        </h3>
        <p className="text-black_ultraLight font-[400] text-[14px]">{desc}</p>
      </div>
      <button className="border p-3 flex justify-center items-center h-[38px] w-[130px] rounded-3xl gap-2.5">
        <p>Learn more</p>
        <img src={arrow} alt="" />
      </button>
    </div>
  );
}
