'use client';
import React from "react";
import Image from "next/image";
import icon from '/public/images/benefit/icon.svg';
import icon_1 from '/public/images/benefit/icon-1.svg';
import icon_2 from '/public/images/benefit/icon-2.svg';
import icon_3 from '/public/images/benefit/icon-3.svg';

const benefits = [
  {
    src: icon,
    title: "Free Shipping",
    description: "Free delivery for all orders",
  },
  {
    src: icon_1,
    title: "Money Guarantee",
    description: "30 days money back",
  },
  {
    src: icon_2,
    title: "24/7 Support",
    description: "Friendly 24/7 support",
  },
  {
    src: icon_3,
    title: "Secure Payment",
    description: "All cards accepted",
  },
];

export default function Benefit() {
  return (
    <div className=" py-2 mx-auto md:px-10 w-full max-w-7xl h-auto md:h-[124px] mt-24 md:mt-8">
      <div className="mx-auto px-4 md:px-10 grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-20">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-center space-x-2 md:space-x-4">
            <Image
              src={benefit.src}
              alt={benefit.title}
              width={30} 
              height={30}
              className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] object-cover cursor-pointer"
            />
            <div>
              <h2 className="text-base md:text-lg font-bold">{benefit.title}</h2>
              <p className="text-mediumGray text-xs md:text-base">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
