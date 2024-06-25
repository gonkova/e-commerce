import React from "react"
import Image from "next/image"
import asus from "/public/images/brand/asus.svg"
import xiaomi from "/public/images/brand/xiaomi.svg"
import samsung from "/public/images/brand/samsung.svg"
import sony from "/public/images/brand/sony.svg"
import wacom from "/public/images/brand/wacom.svg"
import apple from "/public/images/brand/apple.svg"

const LogoSlider = () => {
  return (
    <div class="flex overflow-hidden space-x-12 group">
      <div class="flex space-x-8 animate-loop-scroll group-hover:paused">
        <Image
          loading="lazy"
          src={asus}
          alt=""
          width={80}
          height={20}
          className="max-w-none h-20 "
        />
        <Image
          loading="lazy"
          src={xiaomi}
          alt=""
          width={80}
          height={20}
          className="max-w-none h-20 "
        />
        <Image
          loading="lazy"
          src={samsung}
          alt=""
          width={80}
          height={20}
          className="max-w-none h-20 "
        />
        <Image
          loading="lazy"
          src={sony}
          alt=""
          width={80}
          height={20}
          className="max-w-none h-20 "
        />
        <Image
          loading="lazy"
          src={wacom}
          alt=""
          width={80}
          height={20}
          className="max-w-none h-20 "
        />
        <Image
          loading="lazy"
          src={apple}
          alt=""
          width={80}
          height={20}
          className="max-w-none h-20 "
        />
      </div>
      <div
        class="flex space-x-8 animate-loop-scroll group-hover:paused"
        aria-hidden="true"
      >
        <Image
          loading="lazy"
          src={asus}
          alt=""
          width={80}
          height={20}
          className="max-w-none h-20 "
        />
        <Image
          loading="lazy"
          src={xiaomi}
          alt=""
          width={80}
          height={20}
          className="max-w-none h-20 "
        />
        <Image
          loading="lazy"
          src={samsung}
          alt=""
          width={80}
          height={20}
          className="max-w-none h-20 "
        />
        <Image
          loading="lazy"
          src={sony}
          alt=""
          width={80}
          height={20}
          className="max-w-none h-20 "
        />
        <Image
          loading="lazy"
          src={wacom}
          alt=""
          width={80}
          height={20}
          className="max-w-none h-20 "
        />
        <Image
          loading="lazy"
          src={apple}
          alt=""
          width={80}
          height={20}
          className="max-w-none h-20 "
        />
      </div>
    </div>
  )
}

export default LogoSlider
