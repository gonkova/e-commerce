import React from "react";
import Image from "next/image";
import { AiOutlineDown } from "react-icons/ai";
import SeeAllCategoriesButton from "./SeeAllCategoriesButton";

const CategoryFilter = ({
  categories,
  handleChange,
  handleSeeAllCategories,
  selectedCategory,
}: {
  categories: { value: string; label: string; imageSrc: string }[]
  selectedCategory: string
  handleChange: (value: string) => void
  handleSeeAllCategories: () => void 
}) => {
  return (
    <div data-testid="category-filter" className="w-full">
      <h2 className="text-sm font-bold mb-5">Category</h2>
      <div className="flex flex-col items-start gap-4">
        {categories.map((category) => (
          <div
            key={category.value}
            onClick={() => handleChange(category.value)}
            className="flex items-center space-x-3 cursor-pointer">
            <div className="flex items-center w-6 h-6">
              <Image
                src={category.imageSrc}
                alt={category.label}
                width={16}
                height={16}
                className="object-cover"
              />
            </div>
            <div className="flex items-center justify-between w-[180px]">
              <span className="flex-1 text-gray">{category.label}</span>
              <AiOutlineDown className="ml-2 text-gray"/>
            </div>
          </div>
        ))}
      </div>
      <div>
        <SeeAllCategoriesButton onClick={handleSeeAllCategories} />
      </div>
    </div>
  );
};

export default CategoryFilter;
