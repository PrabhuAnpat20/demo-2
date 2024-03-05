"use client";

// import { useClient } from "next/client";
import React, { useState } from "react";
import InternCard from "../components/InternCard";
import FilterCard from "../components/FilterCard";
import DropDownFilterCard from "../components/DropDownFlterCard";

export default function Page() {
  // Use useState to manage the state of showFilter
  const [showFilter, setShowFilter] = useState(false);

  // Use useClient to mark the component as a client-side component
  // useClient();

  const handleFilterEvent = () => {
    setShowFilter(!showFilter);
  };

  return (
    <>
      <div className="block md:flex mt-[10px]">
        <div>
          <button
            className=" inline-block md:hidden rounded-md border border-black  px-5 py-2 md:ml-[50%]"
            onClick={handleFilterEvent}
          >
            Filter
          </button>
          {showFilter && <DropDownFilterCard />}
          <InternCard />
          <InternCard />
        </div>
        <div className=" hidden md:block">
          <FilterCard />
        </div>
      </div>
    </>
  );
}
