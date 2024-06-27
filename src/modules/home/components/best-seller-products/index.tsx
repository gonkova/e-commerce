import React from "react";
import GridComponent from "./GridComponent";

export default function BestSellerProducts() {

    
  return (
    <div className="py-2 mx-auto px-4 md:px-10  w-full max-w-7xl flex flex-col overflow-x-hidden mt-10 md:mt-5 md:pb-0">
      <div className="flex flex-col items-center justify-center gap-5 mt-10 md:mt-20">
        <h2 className=" text-3xl md:text-4xl font-bold">
          Best Seller Products
        </h2>
        <p className="text-lightGray text-base text-center">
          Check our best seller products
          <br className="block md:hidden" />
          on Elma website right now
        </p>
      </div>
      <div className="mt-10 w-full">
        <GridComponent  />
      </div>
    </div>
  );
}