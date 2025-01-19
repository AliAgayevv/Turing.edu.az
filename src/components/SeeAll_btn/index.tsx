import { IChildrenProps } from "../../const/types";
import "./index.css";
export default function SeeAll_btn({ children }: IChildrenProps) {
  return (
    <a className="nav-cta button button-outlined border rounded-full p-2 w-full h-full">
      <span className="button-inner">
        <span className="button-inner-static">
          <p className="">{children}</p>
        </span>
        <span className="button-inner-hover">
          <p>{children}</p>
        </span>
      </span>
    </a>
    // <button className="border-[#4a5567]  border rounded-full p-2 w-full h-full">
    //   {children}
    // </button>
  );
}

{
  /* <a href="#" class="nav-cta button button-outlined">
                    <span class="button-inner">
                        <span class="button-inner-static">
                            <p> Get in touch</p>
                        </span>
                        <span class="button-inner-hover">
                            <p>Get in touch</p>
                        </span>
                    </span>

                </a> */
}
