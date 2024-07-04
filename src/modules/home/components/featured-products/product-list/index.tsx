import { Text } from "@medusajs/ui";
import { ProductPreviewType } from "types/global";
import { retrievePricedProductById } from "@lib/data";
import { getProductPrice } from "@lib/util/get-product-price";
import { Region } from "@medusajs/medusa";
import LocalizedClientLink from "@modules/common/components/localized-client-link";
import Thumbnail from "@modules/products/components/thumbnail";
import PreviewPrice from "@modules/products/components/product-preview/price";

export default async function ProductList({
  productList,
  isFeatured,
  region,
  textPosition = "default",
  textSize = "medium",
  thumbnailSize = "small",
  customWidth,
  customHeight,
}: {
  productList: ProductPreviewType;
  isFeatured?: boolean;
  region: Region;
  textPosition?: "default" | "alternative";
  textSize?: "small" | "medium" | "large";
  thumbnailSize?: "custom" | "small" | "medium" | "large" | "full" | "square";
  customWidth?: string;
  customHeight?: string;
}) {
  const pricedProduct = await retrievePricedProductById({
    id: productList.id,
    regionId: region.id,
  }).then((product) => product);

  if (!pricedProduct) {
    return null;
  }

  const { cheapestPrice } = getProductPrice({
    product: pricedProduct,
    region,
  });

  const textSizeClass =
    textSize === "small"
      ? "text-sm"
      : textSize === "large"
      ? "text-lg"
      : "text-base";

  return (
    <LocalizedClientLink
      href={`/products/${productList.handle}`}
      className="group"
    >
      <div
        className={`flex items-start ${
          textPosition === "alternative" ? "md:flex-row md:items-center" : ""
        }`}
        data-testid="product-wrapper"
      >
        <Thumbnail
          thumbnail={productList.thumbnail}
          size={thumbnailSize}
          customWidth={customWidth}
          customHeight={customHeight}
          isFeatured={isFeatured}
        />
        <div className={`mt-4  md:ml-4 ${textPosition === "alternative" ? "md:mt-0 ml-10 md:ml-6" : ""}`}>
          <Text className={`text-ui-fg-subtle ${textSizeClass}`} data-testid="product-title">
            {productList.title}
          </Text>
          {cheapestPrice && (
            <PreviewPrice price={cheapestPrice} />
          )}
        </div>
      </div>
    </LocalizedClientLink>
  );
}
