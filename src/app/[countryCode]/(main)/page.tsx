import { Product } from "@medusajs/medusa"
import { Metadata } from "next"

import { getCollectionsList, getProductsList, getRegion } from "@lib/data"
import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import { ProductCollectionWithPreviews } from "types/global"
import { cache } from "react"
import Benefit from "@modules/home/components/benefit"
import BestSellerProducts from "@modules/home/components/best-seller-products"
import SectionPromo from "@modules/home/components/promo"
import ProductsCategory from "@modules/home/components/products-category"
import SectionBlog from "@modules/home/components/blog"
import SectionBrandLogo from "@modules/home/components/brand-logo"

export const metadata: Metadata = {
  title: "STORE",
  description: " ",
}

const getCollectionsWithProducts = cache(
  async (
    countryCode: string
  ): Promise<ProductCollectionWithPreviews[] | null> => {
    const { collections } = await getCollectionsList(0, 3)

    if (!collections) {
      return null
    }

    const collectionIds = collections.map((collection) => collection.id)

    await Promise.all(
      collectionIds.map((id) =>
        getProductsList({
          queryParams: { collection_id: [id] },
          countryCode,
        })
      )
    ).then((responses) =>
      responses.forEach(({ response, queryParams }) => {
        let collection

        if (collections) {
          collection = collections.find(
            (collection) => collection.id === queryParams?.collection_id?.[0]
          )
        }

        if (!collection) {
          return
        }

        collection.products = response.products as unknown as Product[]
      })
    )

    return collections as unknown as ProductCollectionWithPreviews[]
  }
)

export default async function Home({
  params: { countryCode },
}: {
  params: { countryCode: string }
}) {
  const collections = await getCollectionsWithProducts(countryCode)
  const region = await getRegion(countryCode)

  if (!collections || !region) {
    return null
  }

  return (
    <>
      <Hero />
      <Benefit />
      <BestSellerProducts />
      <SectionPromo />
      <ProductsCategory />
      <div className="py-2 md:mb-20 mx-auto px-4 md:px-16 w-full max-w-7xl mt-16 md:-mt-5  ">
        <ul className=" mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-x-20">
          <FeaturedProducts collections={collections} region={region} />
        </ul>
      </div>
      <SectionBlog />
      <SectionBrandLogo />
      
    </>
  )
}
