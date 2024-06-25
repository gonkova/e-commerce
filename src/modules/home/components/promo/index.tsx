import React from "react";
import { Button } from "@medusajs/ui";
import Image from "next/image";
import img_banner from "/public/images/banner/img-banner.png";

export default function SectionPromo() {
  return (
    <div className="bg-custombg1 mt-20 md:mt-10 bg-cover bg-no-repeat bg-center w-full md:w-[1110px] h-auto md:h-[338px] px-4 md:px-0 mx-auto ">
      <div className="flex flex-col-reverse md:flex-row items-center justify-around">
        <div>
          <Image
            src={img_banner}
            alt=''
            width={350}
            height={340}
            className="w-[350px] h-[340px] max-w-full  mt-4  object-cover"
          />
        </div>
        <div className="w full  mt-6 mb-10 flex flex-col md:items-start gap-3">
          <div className="text-primary text-sm ">FLASH SALE 7.7.7</div>
          <h2 className="text-4xl leading-[52px] font-bold">
          Lenovo Yoga X
            </h2>
          <p className="  text-lightGray text-base">
          Smarter and intuitive with the same expert design <br/>
          and detail. Plus combine innovative latest AI features
          </p>
          <div className="flex itens-center justify-center space-x-4 mt-4">
           <Button className="text-white bg-primary border-none text-base hover:bg-dark">Buy Now for &#36;750</Button>
           <p className="text-lightGray text-xl line-through py-3">&#36;1500,00</p>
          </div>
        
        </div>
      </div>
    </div>
  );
}
