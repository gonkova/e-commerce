import React from "react";
import { AiOutlineDown } from "react-icons/ai";

const FilterSortComponent: React.FC = () => {
  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm text-lightGray font-medium">Sort by:</span>
      <div className="relative inline-block">
        <div className="text-sm appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-8 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-600 cursor-pointer">
        Highest rating
        </div>
        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <AiOutlineDown className="w-3 h-3 text-gray" />
        </span>
      </div>
    </div>
  );
};

export default FilterSortComponent;
