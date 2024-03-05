import React from "react";
import RolesContainer from "./OptionsContainer";

const FilterCard = () => {
  return (
    <div>
      <div className="border boder-white bg-white  shadow-xl rounded-md w-[300px] h-auto ml-[110%] mt-[38px] text-[#888888]">
        <input
          type="text"
          placeholder="Filter"
          className="  text-[#888888] border-2 border-[#888888]  ml-[15px] bg-gray-100 p-2 mt-[20px] w-[260px] rounded-full "
        ></input>
        <p className="mx-2 mt-3">Roles</p>
        <RolesContainer />
        <p className="mx-2">Stipend</p>
        <RolesContainer />
      </div>
    </div>
  );
};

export default FilterCard;
