import React from "react"
import { Button } from "@medusajs/ui"
import Image from "next/image"
import blog_item from "/public/images/blog-item.png"
import blog_item_1 from "/public/images/blog-item-1.png"
import blog_item_2 from "/public/images/blog-item-2.png"

export default function SectionBlog() {
  const posts = [
    {
      src: blog_item,
      date: "07 July 2020",
      title: "Types of Blouse In Catalog fashion",
      description:
        "In order to discuss the general function of the logo, we must firstly identify and define the environment…",
    },
    {
      src: blog_item_1,
      date: "20 Mar 2022",
      title: "Types of Blouse In Catalog fashion",
      description:
        "In order to discuss the general function of the logo, we must firstly identify and define the environment…",
    },
    {
      src: blog_item_2,
      date: "07 Jun 2024",
      title: "Types of Blouse In Catalog fashion",
      description:
        "In order to discuss the general function of the logo, we must firstly identify and define the environment…",
    },
  ]

  return (
    <div className="py-2 mx-auto  md:px-10 w-full max-w-7xl ">
      <div className="flex flex-col md:flex-row items-center md:justify-between px-4 md:px-14 mt-14">
        <div>
          <h2 className="text-3xl text-center md:text-left md:text-4xl font-bold mb-4">
            Read our blog
          </h2>
          <p className="text-base text-lightGray text-center mb-6 md:mb-0">
            Check our latest article to get meaningfull content or tips for
            shopping
          </p>
        </div>
        <button className="text-secondary text-base font-semibold px-4 py-2 rounded-lg border border-secondary  hover:bg-secondary hover:text-white">
        More on blogs
        </button>
      </div>
      <div className="grid grid-col-1 md:grid-cols-3 gap-10 md:gap-6 px-12 mt-14 mb-14">
        {posts.map((p, index) => (
          <div key={index} className=" mx-auto flex flex-col gap-3 md:gap-5">
            <Image
              src={p.src}
              alt=""
              width={350} 
              height={200}
              className="w-full h-auto md:w-[350px] md:h-[200px] rounded-lg mx-auto  object-cover cursor-pointer "
            />
            <p className="text-secondary text-sm">{p.date}</p>
            <h2 className="text-base md:text-lg font-bold ">{p.title}</h2>
            <p className="text-lightGray text-sm">{p.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
