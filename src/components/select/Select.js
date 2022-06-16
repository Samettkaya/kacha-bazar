import React from "react";

const Select = () => {
  return (
    <div className="text-sm ">
      <select className="py-0 text-sm font-serif font-medium block w-full rounded border-0 bg-white pr-10 cursor-pointer focus:ring-0">
        <option className="px-3" value="All" hidden="">
          Sort By Price
        </option>
        <option className="px-3" value="Low">
          Low to High
        </option>
        <option className="px-3" value="High">
          High to Low
        </option>
      </select>
    </div>
  );
};

export default Select;
