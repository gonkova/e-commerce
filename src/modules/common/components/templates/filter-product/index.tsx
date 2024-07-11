'use client';
import React, { useState, ChangeEvent } from "react";
import CategoryFilter from "./CategoryFilter";
import ColorFilter from "./ColorFilter";
import PriceFilter from "./PriceFilter";
import PopularFilter from "./PopularFilter";  // Import the PopularFilter component
import Image from "next/image";
import icon from "/public/images/category/icon.svg";
import bitmap_4 from "/public/images/bitmap-4.png";
import computer from "/public/images/category/computer.svg";
import item_category from "/public/images/category/item-category.svg";
import camera from "/public/images/category/camera.svg";
import fashion from "/public/images/category/fashion.svg";

const FilterProducts: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('category1');
  const [selectedColor, setSelectedColor] = useState<string>('#ff0000');
  const [minPrice, setMinPrice] = useState<string>('');
  const [maxPrice, setMaxPrice] = useState<string>('');

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
  };

  const handleColorChange = (event: ChangeEvent<HTMLInputElement>, value: string) => {
    setSelectedColor(value);
  };

  const handleMinPriceChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMinPrice(event.target.value);
  };

  const handleMaxPriceChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(event.target.value);
  };

  const handleSeeAllCategories = () => {
    console.log("See all categories clicked");
    // Add your logic to handle the see all categories action
  };

  const categories = [
    { value: 'category 01', label: 'Category 01', imageSrc: bitmap_4 },
    { value: 'item Category 02', label: 'Item Category 02', imageSrc: computer },
    { value: 'category list 03', label: 'Category list 03', imageSrc: icon },
    { value: 'category  04', label: 'Category 04', imageSrc: item_category },
    { value: 'item Category 05', label: 'Item Category 05', imageSrc: camera },
    { value: 'category list 06', label: 'Category list 06', imageSrc: fashion },
  ];

  const colors = [
    { value: '#006fbb', label: 'MediumDodgerBlue' },
    { value: '#00ff00', label: 'LimeGreen' },
    { value: '#9c6ade', label: 'MediumLavender' },
    { value: '#47c1bf', label: 'TiffanyBlue' },
    { value: '#5c6ac4', label: 'IndigoBlue' },
    { value: '#eec200', label: 'yellow' },
    { value: '#f49342', label: 'Orange' },
  ];

  return (
    <div className="flex flex-col gap-10">
      <PopularFilter />  
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        handleChange={handleCategoryChange}
        handleSeeAllCategories={handleSeeAllCategories}
      />
      <PriceFilter
        minPrice={minPrice}
        maxPrice={maxPrice}
        handleMinPriceChange={handleMinPriceChange}
        handleMaxPriceChange={handleMaxPriceChange}
      />
      <ColorFilter
        colors={colors}
        selectedColor={selectedColor}
        handleChange={handleColorChange}
      />
      
    </div>
  );
};

export default FilterProducts;
