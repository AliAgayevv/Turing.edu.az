import React from "react";
import { useParams } from "react-router";
import Navbar from "../components/Navbar";
import ApplyNow_btn from "../components/ApplyNow_btn";
import data from "../datas/schoolarShip.json";

export default function SchoolarshipInner() {
  const { id } = useParams();
  return (
    <div className="mx-auto w-11/12">
      <Navbar isDark={true} />
      <div className="mx-auto w-11/12">
        <div className="w-full h-[448px] px-20 py-[100px] mt-14 bg-blue_ultraDark rounded-[32px] relative text-white">
          <div className="absolute -bottom-0 right-10 w-[300px] h-[300px] blur-[200px] rounded-full bg-gradient-to-br from-blue-500/50 via-purple-400/40 to-transparent pointer-events-none z-0"></div>
          <p className="ont-[600] text-[64px] ">{id}</p>
          <p className="mt-2">{}</p>
          <div className="w-[145px] h-[48px] mt-12">
            <ApplyNow_btn>Apply Now</ApplyNow_btn>
          </div>
        </div>
      </div>
    </div>
  );
}
