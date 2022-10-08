import React from "react";
import { FaSearch } from "react-icons/fa";
const Heading = ({ searchValue, handleChange, handleSearch }) => {
  return (
    <div>
      <div className=" flex items-center justify-between p-4 flex-wrap">
        <h1 className=" text-3xl font-semibold text-zinc-600">List of Data </h1>

        <div
          className=" flex items-center gap-2 flex-wrap border border-fuchsia-700
         py-2 px-4 rounded-md"
        >
          <input
            className=" outline-none text-zinc-600 "
            type="text"
            placeholder="Search "
            value={searchValue}
            onChange={handleChange}
          />
          <button onClick={handleSearch}>
            <FaSearch className=" text-fuchsia-700" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Heading;
