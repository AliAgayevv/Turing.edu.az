interface IProps {
  stepTitle: string;
  stepType: string;
  stepDetail: string;
}

export default function Steps_box({ stepTitle, stepType, stepDetail }: IProps) {
  return (
    <div className="w-[415px] h-[125px] rounded-2xl border p-4">
      <span className="border px-2 py-1 rounded-lg text-white_ultraDark text-[14px]">
        {stepTitle}
      </span>
      <div className="mt-6">
        <p className="text-white_ultraDark text-[12px]">
          {stepType.toUpperCase()}
        </p>
        <p className="text-black_dark text-[18px] font-[500]">{stepDetail}</p>
      </div>
    </div>
  );
}
