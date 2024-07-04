// ProductRail.tsx
import { Region } from "@medusajs/medusa"
import { Text } from "@medusajs/ui"
import InteractiveLink from "@modules/common/components/interactive-link"
import ProductList from "../product-list"
import { ProductCollectionWithPreviews } from "types/global"
import { AiOutlineRight } from "react-icons/ai";

export default function ProductRail({
  collection,
  region,
}: {
  collection: ProductCollectionWithPreviews
  region: Region
}) {
  const { products } = collection

  if (!products) {
    return null
  }

  return (
    <div className="content-container ">
        <div className="mb-10">
        <h2 className="font-bold text-[22px]">{collection.title}</h2>
        </div>
          <ul className="flex flex-col items-start w-full gap-10">
            {products &&
              products.map((product) => (
                <li key={product.id} >
                  <ProductList
                    productList={product}
                    region={region}
                    isFeatured
                    textPosition="alternative"
                    textSize="small"
                    thumbnailSize="custom"
                    customWidth="64px"  
                    customHeight="auto"
                  />
                </li>
              ))}
          </ul>
        <div className="mt-10 space-x-32 ">
          <InteractiveLink href={`/collections/${collection.handle}`}>
          <p className="text-blue text-base">Вижте още продукти...</p>
          </InteractiveLink>
        </div>
      </div>
  )
}
