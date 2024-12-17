import { IStepProps } from "../../const/types";

export default function Steps_box({
  stepTitle,
  stepType,
  stepDetail,
}: IStepProps) {
  return (
    <div className="w-full max-w-[415px] h-auto rounded-2xl border p-4 sm:p-6">
      {/* Step Title */}
      <span className="border px-2 py-1 rounded-lg text-white_ultraDark text-[14px]">
        {stepTitle}
      </span>

      {/* Step Content */}
      <div className="mt-4 sm:mt-6">
        <p className="text-white_ultraDark text-[12px]">
          {stepType.toUpperCase()}
        </p>
        <p className="text-black_darktext-[18px] font-[500] leading-snug">
          {stepDetail}
        </p>
      </div>
    </div>
  );
}
