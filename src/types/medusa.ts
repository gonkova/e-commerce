import { Image as MedusaImage, ProductVariant, Region as MedusaRegion } from "@medusajs/medusa"

export type ImageWithAlt = Omit<MedusaImage, 'beforeInsert'> & {
  alt: string
}

export type Variant = Omit<ProductVariant, "beforeInsert">

export interface Region extends Omit<MedusaRegion, "beforeInsert"> {}

export type CalculatedVariant = ProductVariant & {
  calculated_price: number
  calculated_price_type: "sale" | "default"
  original_price: number
}
