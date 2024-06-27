import React from 'react';
import LogoSlider from './LogoSlider';
import Image from 'next/image';
import asus from '/public/images/brand/asus.svg';
import xiaomi from '/public/images/brand/xiaomi.svg';
import samsung from '/public/images/brand/samsung.svg';
import sony from '/public/images/brand/sony.svg';
import wacom from '/public/images/brand/wacom.svg';
import apple from '/public/images/brand/apple.svg';



export default function SectionBrandLogo() {
  return (
    <div className=" md:mt-4 py-2 mx-auto md:px-10 w-full max-w-7xl h-[120px] flex flex-col md:flex-row items-center justify-around">
    <div className="flex flex-col md:flex-row p-3 md:p-8 ">
          <div className="w-full md:flex justify-between items-center gap-5 md:gap-10 hidden">
            <Image
              src={asus}
              alt=""
              width={32}
              height={32}
              className="w-auto h-5 md:w-auto md:h-32 cursor-pointer"
            />
             <Image
              src={xiaomi}
              alt=""
              width={32}
              height={32}
              className="w-auto h-5 md:w-auto md:h-32 cursor-pointer"
            />
            <Image
              src={samsung}
              alt=""
              width={32}
              height={32}
              className="w-auto h-5 md:w-auto md:h-32 cursor-pointer"
            />
             <Image
              src={sony}
              alt=""
              width={32}
              height={32}
              className="w-auto h-5 md:w-auto md:h-32 cursor-pointer"
            />
              <Image
              src={wacom}
              alt=""
              width={32}
              height={32}
              className="w-auto h-5 md:w-auto md:h-32 cursor-pointer"
            />
             <Image
              src={apple}
              alt=""
              width={32}
              height={32}
              className="w-auto h-5 md:w-auto md:h-32 cursor-pointer"
            />
          </div>
          <div className="md:hidden w-full -mt-16 h-[80px]">
            <LogoSlider />
          </div>
        </div>
        </div>
  )
}
