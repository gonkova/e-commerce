import { Text } from "@medusajs/ui"
import { ProductPreviewType } from "types/global"
import { retrievePricedProductById } from "@lib/data"
import { getProductPrice } from "@lib/util/get-product-price"
import { Region } from "@medusajs/medusa"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "../thumbnail"
import PreviewPrice from "../product-preview/price"
import { FaHeart, FaShoppingCart } from "react-icons/fa"

export default async function CustomProductPreview({
  productPreview,
  isFeatured,
  region,
}: {
  productPreview: ProductPreviewType
  isFeatured?: boolean
  region: Region
}) {
  const pricedProduct = await retrievePricedProductById({
    id: productPreview.id,
    regionId: region.id,
  }).then((product) => product)

  if (!pricedProduct) {
    return null
  }

  const { cheapestPrice } = getProductPrice({
    product: pricedProduct,
    region,
  })

  return (
    <LocalizedClientLink
      href={`/products/${productPreview.handle}`}
      className="group"
    >
      <div
        data-testid="product-wrapper"
        className="relative  flex flex-col items-center"
      >
        <div className="w-10 h-10 rounded-full border border-lightGrayishBlue flex items-center justify-center ml-52 z-10">
          <FaHeart className="text-lightGray3 text-sm hover:text-red" />
        </div>
        <Thumbnail
          thumbnail={productPreview.thumbnail}
          size="small"
          isFeatured={isFeatured}
        />
        <div className="flex flex-col txt-compact-medium mt-4 justify-between w-[200px]">
          <div className="flex items-center justify-between gap-x-2">
            {cheapestPrice && <PreviewPrice price={cheapestPrice} />}
            <div className="w-12 h-8 rounded-lg border border-lightGrayishBlue flex items-center justify-center text-red text-xs bg-bgRed">
             SALE
            </div>
          </div>
          <div>
            <Text className="text-ui-fg-subtle" data-testid="product-title">
              {productPreview.title}
            </Text>
          </div>
        </div>
        <div className="flex items-center justify-center mt-2 w-full">
          <button className="hidden group-hover:flex absolute z-50 bottom-0 w-full translate-y-full items-center justify-center bg-purple text-white px-3 py-2 rounded">
            <FaShoppingCart className="mr-2" /> View Store
          </button>
        </div>
      </div>
    </LocalizedClientLink>
  )
}
