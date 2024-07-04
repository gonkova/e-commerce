
import { getCategoriesList, getCollectionsList } from "@lib/data"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import MedusaCTA from "@modules/layout/components/medusa-cta"
import { Text, clx } from "@medusajs/ui"
import React from "react";
import { GrGithub } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
import { PiInstagramLogoLight } from "react-icons/pi";
import { FaTwitter } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";

export default function Footer() {
  return (
   <footer className="bg-lightGrayishBlue w-full  md:mt-10">
     <div className="py-5 mx-auto md:px-20 w-full max-w-7xl h-auto md:h-[64px] gap-20">
      <div className="flex flex-col-reverse gap-2 md:flex-row items-center md:justify-between">
      <Text className="txt-compact-small">
              © {new Date().getFullYear()} Store. All rights reserved.
            </Text>
        <div className="flex flex-row items-center space-x-4">
          <FaSquareFacebook className="text-2xl md:text-xl text-lightGray cursor-pointer" />
          <FaTwitter className="text-2xl md:text-xl text-lightGray cursor-pointer" />
          <FaLinkedin className="text-2xl md:text-xl text-lightGray cursor-pointer"/>
          <PiInstagramLogoLight className="text-2xl md:text-xl text-lightGray cursor-pointer" />
          <GrGithub className="text-2xl md:text-xl text-lightGray cursor-pointer" />
        </div>
      </div>
    </div>
   </footer>
  );
}