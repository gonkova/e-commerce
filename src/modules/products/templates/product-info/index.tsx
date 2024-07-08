'use client'
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing";
import { Heading, Text } from "@medusajs/ui";
import LocalizedClientLink from "@modules/common/components/localized-client-link";
import React, { useState } from "react";

type ProductInfoProps = {
  product: PricedProduct;
};

const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  const [expanded, setExpanded] = useState(false);

  if (!product.description) {
    return null; // Return null or handle the case where description is not present
  }

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const description = expanded ? product.description : `${product.description.substring(0, 200)}...`;
  const showButton = product.description.length > 200; 
  return (
    <div id="product-info">
      <div className="flex flex-col gap-y-4 lg:max-w-[500px] mx-auto">
        {product.collection && (
          <LocalizedClientLink
            href={`/collections/${product.collection.handle}`}
            className="text-medium text-ui-fg-muted hover:text-ui-fg-subtle"
          >
            {product.collection.title}
          </LocalizedClientLink>
        )}
        <Heading level="h2" className="text-3xl leading-10 text-ui-fg-base" data-testid="product-title">
          {product.title}
        </Heading>

        <Text className="text-medium text-ui-fg-subtle" data-testid="product-description">
          {description}
          {showButton && !expanded && (
            <button onClick={toggleExpanded} className="text-sm text-ui-fg-muted hover:text-ui-fg-subtle cursor-pointer focus:outline-none ml-2">
              Прочети още
            </button>
          )}
          {expanded && (
            <button onClick={toggleExpanded} className="text-sm text-ui-fg-muted hover:text-ui-fg-subtle cursor-pointer focus:outline-none ml-2">
              Скрий текста
            </button>
          )}
        </Text>
      </div>
    </div>
  );
};

export default ProductInfo;
