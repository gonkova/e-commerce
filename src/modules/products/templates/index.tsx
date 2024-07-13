import { Region as MedusaRegion } from "@medusajs/medusa"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import React, { Suspense } from "react"
import ProductActions from "@modules/products/components/product-actions"
import ProductOnboardingCta from "@modules/products/components/product-onboarding-cta"
import ProductTabs from "@modules/products/components/product-tabs"
import RelatedProducts from "@modules/products/components/related-products"
import ProductInfo from "@modules/products/templates/product-info"
import SkeletonRelatedProducts from "@modules/skeletons/templates/skeleton-related-products"
import { notFound } from "next/navigation"
import ProductActionsWrapper from "./product-actions-wrapper"
import CustomImageGallery from "./product-info/CustomImageGallery"
import { ImageWithAlt } from "types/medusa"

type ProductTemplateProps = {
  product: PricedProduct
  region: MedusaRegion
  countryCode: string
}

const ProductTemplate: React.FC<ProductTemplateProps> = ({
  product,
  region,
  countryCode,
}) => {
  if (!product || !product.id) {
    return notFound()
  }

  const images = product.images ?? []

  const imagesWithAlt: ImageWithAlt[] = images.map((image, index) => ({
    id: image.id,
    created_at: image.created_at,
    updated_at: image.updated_at,
    deleted_at: image.deleted_at,
    url: image.url,
    metadata: image.metadata,
    alt: `Product image ${index + 1}`,
  }))

  return (
    <>
      <div
        className="content-container flex flex-col md:flex-row md:items-start py-6 relative"
        data-testid="product-container"
      >
        <div className="md:w-1/2 w-full relative mb-8 md:mb-0">
          <CustomImageGallery images={imagesWithAlt} />
        </div>
        <div className="md:w-1/2 flex flex-col gap-6 md:pl-8">
          <div className="flex flex-col gap-6">
            <ProductInfo product={product} />
          </div>
          <div className="flex flex-col gap-12 md:sticky md:top-48 md:py-0 py-8 mx-auto gap-y-4 md:max-w-[500px]">
            <ProductOnboardingCta />
            <Suspense
              fallback={
                <ProductActions
                  disabled={true}
                  product={product}
                  region={region}
                />
              }
            >
              <ProductActionsWrapper id={product.id} region={region} />
            </Suspense>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-10 px-6 md:px-32 mx-auto md:mt-10">
        <div>{product.description}</div>
        <ProductTabs product={product} />
      </div>
      <div
        className="content-container my-16 md:my-32"
        data-testid="related-products-container"
      >
        <Suspense fallback={<SkeletonRelatedProducts />}>
          <RelatedProducts product={product} countryCode={countryCode} />
        </Suspense>
      </div>
    </>
  )
}

export default ProductTemplate
