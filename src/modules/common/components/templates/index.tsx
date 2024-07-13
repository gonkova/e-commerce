import React from "react"
import { Suspense } from "react"
import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import FilterSortComponent from "./filter-product/FilterSortComponent"
import CustomPaginatedProducts from "./custom-paginated-products"
import FilterProducts from "./filter-product"
import { Pagination } from "@modules/store/components/pagination" // Ensure the correct path

interface FilterProductsTemplateProps {
  sortBy?: SortOptions
  page?: string
  totalPages: number
  countryCode: string
}

const FilterProductsTemplate: React.FC<FilterProductsTemplateProps> = ({
  sortBy = "created_at",
  page,
  totalPages,
  countryCode,
}) => {
  const pageNumber = page ? parseInt(page) : 1

  return (
    <div
      className="mt-10 flex flex-col small:flex-row small:items-start py-6 content-container "
      data-testid="category-container"
    >
      <div>
        <FilterProducts />
      </div>
      <div className="w-full">
        <div className="mt-10 md:mt-0 mb-8 text-2xl-semi flex justify-end items-center">
          <FilterSortComponent />
        </div>
        <Suspense fallback={<SkeletonProductGrid />}>
          <CustomPaginatedProducts
            sortBy={sortBy}
            page={pageNumber}
            countryCode={countryCode}
          />
        </Suspense>
        <Pagination
          page={pageNumber}
          totalPages={totalPages}
          data-testid="pagination-component"
        />
      </div>
    </div>
  )
}

export default FilterProductsTemplate
