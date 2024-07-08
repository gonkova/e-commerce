import React from "react";
import { Button } from "@medusajs/ui";
import Image from "next/image";
import icon from "/public/images/category/icon.svg";
import camera from "/public/images/category/camera.svg";
import computer from "/public/images/category/computer.svg";
import fashion from "/public/images/category/fashion.svg";
import controller from "/public/images/category/controller.svg";
import ball from "/public/images/category/ball.svg";

export default function ProductsCategory() {
  return (
    <div className=" mt-10 md:mt-16  py-2 mx-auto  md:px-10 w-full max-w-7xl md:h-[397px] flex flex-col gap-10">
      <div className="flex justify-between px-14 mt-10">
        <h2 className="text-[28px] font-bold">Category</h2>
        <button className="text-secondary text-base font-semibold px-4 rounded-lg border border-secondary  hover:bg-secondary hover:text-white">
          View All
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-6 items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-2">
          <Image
            src={icon}
            width={56}
            height={56}
            alt=""
            className="w-[36px] h-[36px] object-cover cursor-pointer"
          />
          <p className="text-sm font-bold text-dark">Category Name</p>
          <p className="text-lightGray text-sm">2,3k items</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
        <Image
            src={camera}
            width={56}
            height={56}
            alt=""
            className="w-[36px] h-[36px] object-cover cursor-pointer"
          />
          <p className="text-sm font-bold text-dark">Category Name</p>
          <p className="text-lightGray text-sm">2,3k items</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
        <Image
            src={computer}
            width={56}
            height={56}
            alt=""
           className="w-[36px] h-[36px] object-cover cursor-pointer"
          />
          <p className="text-sm font-bold text-dark">Category Name</p>
          <p className="text-lightGray text-sm">2,3k items</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
        <Image
            src={fashion}
            width={56}
            height={56}
            alt=""
             className="w-[36px] h-[36px] object-cover cursor-pointer"
          />
          <p className="text-sm font-bold text-dark">Category Name</p>
          <p className="text-lightGray text-sm">2,3k items</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
        <Image
            src={controller}
            width={56}
            height={56}
            alt=""
            className="w-[36px] h-[36px] object-cover cursor-pointer"
          />
          <p className="text-sm font-bold text-dark">Category Name</p>
          <p className="text-lightGray text-sm">2,3k items</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
        <Image
            src={ball}
            width={56}
            height={56}
            alt=""
            className="w-[36px] h-[36px] object-cover cursor-pointer"
          />
          <p className="text-sm font-bold text-dark">Category Name</p>
          <p className="text-lightGray text-sm">2,3k items</p>
        </div>
      </div>
    </div>
  );
}
