import React from "react";
import Requirements from "./Requirements";

export default function () {
  return (
    <>
    <div >
 
    <div className=" rounded-md shadow-xl mx-6 my-4 bg-[#FFFFFF] p-2 md:mx-auto md:w-1/2 ">
        <div className=" flex ml-4 md:block">
          <img src="gucci.png" alt="" className=" my-3" />
          <div className=" ml-5 md:ml-0">
            <p className=" text-sm font-bold my-2  sm:text-xl md:text-2xl ">PR Intern • 6 months </p>
            <p className=" text-[#6B7280] text-[9px]   font-medium my-2 sm:text-[12px] md:text-[15px]">
              Gucci · Mumbai Metropolitan Region
            </p>
            <p className=" text-[#3E3E3E] text-[8px] my-2 mb-4 sm:text-[10px]  md:text-[13px]">
              3 Weeks ago Over 200 applicants
            </p>
          </div>
        </div>
        <div className=" flex justify-between  ml-4">
          <Requirements />
          <div className=" mt-3">
            <button className=" border-[1px] border-[#474747] rounded-2xl px-4 py-1 font-semibold text-[#3E3E3E]sm:px-6 md:px-8">Save</button>
            <br />
            <button className=" border-[1px]  rounded-2xl px-3 py-1  mt-3 font-semibold bg-[#3272A8]  text-white sm:px-5 md:px-7">Apply</button>
          </div>
        </div>
      </div>
    </div>
   
    </>
  );
}
