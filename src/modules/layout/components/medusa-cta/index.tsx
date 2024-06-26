import { Text } from "@medusajs/ui"

import Medusa from "../../../common/icons/medusa"
import NextJs from "../../../common/icons/nextjs"
import { GrGithub } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
import { PiInstagramLogoLight } from "react-icons/pi";
import { FaTwitter } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";

const MedusaCTA = () => {
  return (
    <Text className="flex gap-x-2 txt-compact-small-plus items-center">
     <div className="flex flex-row items-center space-x-4">
          <FaSquareFacebook className="text-2xl md:text-xl text-lightGray cursor-pointer" />
          <FaTwitter className="text-2xl md:text-xl text-lightGray cursor-pointer" />
          <FaLinkedin className="text-2xl md:text-xl text-lightGray cursor-pointer"/>
          <PiInstagramLogoLight className="text-2xl md:text-xl text-lightGray cursor-pointer" />
          <GrGithub className="text-2xl md:text-xl text-lightGray cursor-pointer" />
        </div>
    </Text>
  )
}

export default MedusaCTA
