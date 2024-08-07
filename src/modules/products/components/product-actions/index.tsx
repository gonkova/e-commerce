"use client"

import { Region } from "@medusajs/medusa"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import { Button } from "@medusajs/ui"
import { isEqual } from "lodash"
import { useParams } from "next/navigation"
import { useEffect, useMemo, useRef, useState } from "react"
import { FaShoppingCart } from "react-icons/fa"

import { useIntersection } from "@lib/hooks/use-in-view"
import { addToCart } from "@modules/cart/actions"
import Divider from "@modules/common/components/divider"
import OptionSelect from "@modules/products/components/option-select"
import CartItemSelect from "@modules/cart/components/cart-item-select"  // Импортиране на CartItemSelect

import MobileActions from "../mobile-actions"
import ProductPrice from "../product-price"

type ProductActionsProps = {
  product: PricedProduct
  region: Region
  disabled?: boolean
}

export type PriceType = {
  calculated_price: string
  original_price?: string
  price_type?: "sale" | "default"
  percentage_diff?: string
}

export default function ProductActions({
  product,
  region,
  disabled,
}: ProductActionsProps) {
  const [options, setOptions] = useState<Record<string, string>>({})
  const [quantity, setQuantity] = useState(1)
  const [isAdding, setIsAdding] = useState(false)

  const countryCode = useParams().countryCode as string

  const variants = product.variants

  // initialize the option state
  useEffect(() => {
    const optionObj: Record<string, string> = {}

    for (const option of product.options || []) {
      Object.assign(optionObj, { [option.id]: undefined })
    }

    setOptions(optionObj)
  }, [product])

  // memoized record of the product's variants
  const variantRecord = useMemo(() => {
    const map: Record<string, Record<string, string>> = {}

    for (const variant of variants) {
      if (!variant.options || !variant.id) continue

      const temp: Record<string, string> = {}

      for (const option of variant.options) {
        temp[option.option_id] = option.value
      }

      map[variant.id] = temp
    }

    return map
  }, [variants])

  // memoized function to check if the current options are a valid variant
  const variant = useMemo(() => {
    let variantId: string | undefined = undefined

    for (const key of Object.keys(variantRecord)) {
      if (isEqual(variantRecord[key], options)) {
        variantId = key
      }
    }

    return variants.find((v) => v.id === variantId)
  }, [options, variantRecord, variants])

  // if product only has one variant, then select it
  useEffect(() => {
    if (variants.length === 1 && variants[0].id) {
      setOptions(variantRecord[variants[0].id])
    }
  }, [variants, variantRecord])

  // update the options when a variant is selected
  const updateOptions = (update: Record<string, string>) => {
    setOptions({ ...options, ...update })
  }

  // check if the selected variant is in stock
  const inStock = useMemo(() => {
    // If we don't manage inventory, we can always add to cart
    if (variant && !variant.manage_inventory) {
      return true
    }

    // If we allow back orders on the variant, we can add to cart
    if (variant && variant.allow_backorder) {
      return true
    }

    // If there is inventory available, we can add to cart
    if (variant?.inventory_quantity && variant.inventory_quantity > 0) {
      return true
    }

    // Otherwise, we can't add to cart
    return false
  }, [variant])

  const actionsRef = useRef<HTMLDivElement>(null)

  const inView = useIntersection(actionsRef, "0px")

  // add the selected variant to the cart
  const handleAddToCart = async () => {
    if (!variant?.id) return null

    setIsAdding(true)

    await addToCart({
      variantId: variant.id,
      quantity,
      countryCode,
    })

    setIsAdding(false)
  }

  // handler for changing quantity
  const handleQuantityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setQuantity(Number(e.target.value))
  }
  

  return (
    <>
      <div className="flex flex-col gap-y-2" ref={actionsRef}>
        <div className="flex items-center space-x-4">
          <div>
            <div>
              {product.variants.length > 1 && (
                <div className="flex flex-col gap-y-4">
                  {(product.options || []).map((option) => {
                    return (
                      <div key={option.id}>
                        <OptionSelect
                          option={option}
                          current={options[option.id]}
                          updateOption={updateOptions}
                          title={option.title}
                          data-testid="product-options"
                          disabled={!!disabled || isAdding}
                        />
                      </div>
                    )
                  })}
                  <Divider />
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col  mb-5">
            <p className="text-gray text-sm mb-2">Quantity</p>
            <CartItemSelect
          value={quantity} 
          onChange={handleQuantityChange} 
            className="w-16 h-10 border border-lightGray bg-transparent text-gray text-base font-bold rounded-lg"
        >
          {Array.from({ length: 10 }, (_, i) => (
            <option value={i + 1} key={i}>
              {i + 1}
            </option>
          ))}
        </CartItemSelect>
          </div>
        </div>

        <div className="mt-2 flex flex-col md:flex-row">
          <div className="w-full px-auto flex flex-col gap-4 md:gap-0 md:flex-row md:space-x-4">
            <div className="flex justify-between md:space-x-4">
              <ProductPrice
                product={product}
                variant={variant}
                region={region}
              />
              <button className="w-32 h-12 border border-indigoBlue bg-transparent text-indigoBlue text-base font-bold rounded-lg">
                Купи
              </button>
            </div>
            <div>
              <Button
                onClick={handleAddToCart}
                disabled={!inStock || !variant || !!disabled || isAdding}
                variant="primary"
                className="w-80 px-auto md:w-48 h-12 flex items-center justify-center bg-purple"
                isLoading={isAdding}
                data-testid="add-product-button"
              >
                {!variant ? (
                  "Select variant"
                ) : !inStock ? (
                  "Изчерпано"
                ) : (
                  <>
                    Добави в количката
                    <FaShoppingCart className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>

        <MobileActions
          product={product}
          variant={variant}
          region={region}
          options={options}
          updateOptions={updateOptions}
          inStock={inStock}
          handleAddToCart={handleAddToCart}
          isAdding={isAdding}
          show={!inView}
          optionsDisabled={!!disabled || isAdding}
        />
      </div>
    </>
  )
}
