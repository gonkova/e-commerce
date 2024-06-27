import { Suspense } from "react"

import { listRegions } from "@lib/data"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"
import { FaHeart, FaShoppingCart, FaYoutube, FaTwitter } from "react-icons/fa"
import { PiInstagramLogoLight } from "react-icons/pi"
import { FaUser, FaSquareFacebook } from "react-icons/fa6"
import Image from "next/image"
import shopping_bags from "/public/images/shopping-bags.png"

export default async function Nav() {
  const regions = await listRegions().then((regions) => regions)

  return (
    <div className="sticky top-0 inset-x-0 z-50 group  ">
      <div className="bg-white flex flex-row items-center justify-between p-4 px-6 md:px-20">
        <div className="flex flex-row items-center space-x-4">
          <FaSquareFacebook className="text-xl text-lightGray cursor-pointer" />
          <FaTwitter className="text-xl text-lightGray cursor-pointer" />
          <FaYoutube className="text-xl text-lightGray cursor-pointer" />
          <PiInstagramLogoLight className="text-xl text-lightGray cursor-pointer" />
        </div>
        <div className="flex flex-row items-center space-x-4">
          <h4 className="text-gray text-base cursor-pointer">Order tracking</h4>
          <h4 className="text-gray text-base cursor-pointer">Help</h4>
        </div>
      </div>
      <hr className=" border-lightGrayishBlue hidden md:block" />
      <header className="relative h-16 mx-auto border-b duration-200 bg-white border-ui-border-base">
        <nav className="content-container txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular">
          <div className="flex-1 basis-0 h-full flex items-center">
            <div className="h-full">
              <SideMenu regions={regions} />
            </div>
          </div>

          <div className="flex items-center h-full">
            <LocalizedClientLink
              href="/"
              className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase"
              data-testid="nav-store-link"
            >
              <div className="flex items-center space-x-">
                Store
                <Image
                  src={shopping_bags}
                  alt=""
                  width={70}
                  height={70}
                  className="mx-auto  max-w-full p-2 cursor-pointer object-cover"
                />
              </div>
            </LocalizedClientLink>
          </div>

          <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
            <div className="hidden small:flex items-center gap-x-6 h-full">
              {process.env.FEATURE_SEARCH_ENABLED && (
                <LocalizedClientLink
                  className="hover:text-ui-fg-base"
                  href="/search"
                  scroll={false}
                  data-testid="nav-search-link"
                >
                  Search
                </LocalizedClientLink>
              )}
              <LocalizedClientLink
                className="hover:text-ui-fg-base"
                href="/account"
                data-testid="nav-account-link"
              >
                <div className="flex flex-row space-x-2 ">
                  <div className="w-12 h-12 rounded-full border border-lightGrayishBlue flex items-center justify-center">
                    <FaHeart className="text-lightGray3 text-sm" />
                  </div>
                  <div className="w-12 h-12 rounded-full border border-lightGrayishBlue flex items-center justify-center">
                    <FaUser className="text-lightGray3 text-sm" />
                  </div>
                </div>
              </LocalizedClientLink>
            </div>
            <Suspense
              fallback={
                <LocalizedClientLink
                  className="hover:text-ui-fg-base flex gap-2"
                  href="/cart"
                  data-testid="nav-cart-link"
                >
                  Cart (0)
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
          </div>
        </nav>
      </header>
    </div>
  )
}
