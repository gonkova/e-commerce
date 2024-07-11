import React from "react";
import { FiPlus } from "react-icons/fi";

const SeeAllCategoriesButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      className="mt-4 text-base font-semibold text-purple cursor-pointer duration-300 ease-in-out"
    >
      <span className="flex items-center">
        <FiPlus className="text-purple text-xl" />
        <span className="ml-4">See all categories</span>
      </span>
    </button>
  );
};

export default SeeAllCategoriesButton;

