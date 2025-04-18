import { IChildrenProps } from "../../const/types";
import "./index.css";
export default function SeeAll_btn({ children }: IChildrenProps) {
  return (
    <div className="nav-cta button button-outlined border rounded-full p-2 w-full h-full">
      <span className="button-inner">
        <span className="button-inner-static">
          <p className="">{children}</p>
        </span>
        <span className="button-inner-hover">
          <p>{children}</p>
        </span>
      </span>
    </div>
    // <button className="border-[#4a5567]  border rounded-full p-2 w-full h-full">
    //   {children}
    // </button>
  );
}
