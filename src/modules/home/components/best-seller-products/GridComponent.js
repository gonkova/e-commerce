"use client"
import { useState } from "react"
import { FaHeart, FaStar, FaEye, FaShoppingCart } from "react-icons/fa"
import Image from "next/image"
import bitmap_2 from "/public/images/bitmap-2.png"
import bitmap from "/public/images/bitmap.png"
import bitmap_4 from "/public/images/bitmap-4.png"
import bitmap_1 from "/public/images/bitmap-1.png"
import bitmap_3 from "/public/images/bitmap-3.png"
import bitmap_6 from "/public/images/bitmap-6.png"
import bitmap_5 from "/public/images/bitmap-5.png"
import bitmap_7 from "/public/images/bitmap-7.png"
import { Button } from "@medusajs/ui"

const GridComponent = () => {
  const products = [
    {
      id: 1,
      text: "SALE",
      src: bitmap_2,
      paragraph: "Men Fashion",
      title: "Samsung Galaxy Watch 3",
      price: "1,725.00",
      rating: 5,
      buttons: [
        { text: "Add to cart", bgColor: "bg-purple" },
        { text: "Quick view", bgColor: "text-lightGray" },
      ],
    },
    {
      id: 2,
      text: "",
      src: bitmap_7,
      paragraph: "Men Fashion",
      title: "Apple Watch 4 2020",
      price: "1,725.00",
      rating: 5,
      buttons: [
        { text: "Add to cart", bgColor: "bg-purple" },
        { text: "Quick view", bgColor: "text-lightGray" },
      ],
    },
    {
      id: 3,
      text: "SALE",
      src: bitmap,
      paragraph: "Men Fashion",
      title: "iPhone XS Max Pro",
      price: "1,725.00",
      rating: 5,
      buttons: [
        { text: "Add to cart", bgColor: "bg-purple" },
        { text: "Quick view", bgColor: "text-lightGray" },
      ],
    },
    {
      id: 4,
      text: "",
      src: bitmap_4,
      paragraph: "Men Fashion",
      title: "Beats by Dre C 3450",
      price: "1,725.00",
      rating: 5,
      buttons: [
        { text: "Add to cart", bgColor: "bg-purple" },
        { text: "Quick view", bgColor: "text-lightGray" },
      ],
    },
    {
      id: 5,
      text: "",
      src: bitmap_1,
      paragraph: "Men Fashion",
      title: "Airpods 2nd Gen",
      price: "1,725.00",
      rating: 5,
      buttons: [
        { text: "Add to cart", bgColor: "bg-purple" },
        { text: "Quick view", bgColor: "text-lightGray" },
      ],
    },
    {
      id: 6,
      text: "SALE",
      src: bitmap_3,
      paragraph: "Men Fashion",
      title: "Garmin Watch Fit X",
      price: "1,725.00",
      rating: 5,
    },
    {
      id: 7,
      text: "",
      src: bitmap_6,
      paragraph: "Men Fashion",
      title: "Women Yellow Turtleneck",
      price: "1,725.00",
      rating: 5,
      buttons: [
        { text: "Add to cart", bgColor: "bg-purple" },
        { text: "Quick view", bgColor: "text-lightGray" },
      ],
    },
    {
      id: 8,
      text: "SALE",
      src: bitmap_5,
      paragraph: "Men Fashion",
      title: "Harman Kardon Speaker",
      price: "1,725.00",
      rating: 5,
    },
  ]

  const [hoveredProductId, setHoveredProductId] = useState(null)

  const handleProductHover = (productId) => {
    setHoveredProductId(productId)
  }

  const handleProductLeave = () => {
    setHoveredProductId(null)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen md:pb-20 pb-20 overflow-hidden">
      <div className="w-full -mt-20  max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        {products.map((product) => (
          <div
            key={product.id}
            className={`relative group p-4 flex flex-col items-start cursor-pointer border border-lightGrayishBlue rounded-lg shadow-sm  ${
              hoveredProductId === product.id ? "z-50" : "z-10"
            }`}
            onMouseEnter={() => handleProductHover(product.id)}
            onMouseLeave={handleProductLeave}
          >
            <div className="flex justify-between w-full h-6 mb-2">
              {product.text ? (
                <>
                  <span
                    className={`text-red text-xs ${
                      product.text === "SALE" ? "bg-bgRed px-2 py-1" : ""
                    }`}
                  >
                    {product.text}
                  </span>
                  <FaHeart className="text-lightGray2 hover:text-dark cursor-pointer" />
                </>
              ) : (
                <FaHeart className="text-lightGray2 hover:text-dark cursor-pointer ml-auto" />
              )}
            </div>
            <Image
              src={product.src}
              alt={product.title}
              width={180}
              height={180}
              className="w-auto h-[180px] mx-auto object-cover mt-5 mb-2"
            />
            <p className="text-lightGray mb-2 text-xs mt-5">
              {product.paragraph}
            </p>
            <div className="text-dark text-base font-bold mb-2">
              {product.title}
            </div>
            <div className="flex justify-between items-center w-full mb-2">
              <span className="text-secondary text-sm font-bold">
                &#36;{product.price}
              </span>
              <div className="flex space-x-1">
                {[...Array(product.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow" />
                ))}
                {[...Array(5 - product.rating)].map((_, i) => (
                  <FaStar key={i} className="text-gray-300" />
                ))}
              </div>
            </div>

            <div className="w-full absolute mt-[105%]  md:mt-[125%] left-0 right-0 p-4 hidden group-hover:flex flex-col gap-3 z-50 bg-white">
              <Button className="w-full py-2 bg-purple text-white text-base  border-0 hover:bg-dark">
                <FaShoppingCart className="mr-2 text-lg" /> Add to cart
              </Button>
              <Button className="w-full  bg-transparent text-base border border-gray text-gray hover:border-0 hover:bg-purple hover:text-white">
                <FaEye className="mr-2 text-lg" /> Quick view
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default GridComponent
