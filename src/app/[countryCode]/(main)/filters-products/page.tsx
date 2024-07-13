import { Metadata } from "next";
import { SortOptions } from "@modules/store/components/refinement-list/sort-products";
import FilterProductsTemplate from "@modules/common/components/templates";

export const metadata: Metadata = {
  title: "Filter products",
  description: "",
};

type Params = {
  searchParams: {
    sortBy?: SortOptions;
    page?: string;
  };
  params: {
    countryCode: string;
  };
};

const totalPages = 10;

export default function FilterProductsPage({ searchParams, params }: Params) {
  const { sortBy, page } = searchParams;

  return (
    <FilterProductsTemplate 
      sortBy={sortBy}
      page={page}
      countryCode={params.countryCode}
      totalPages={totalPages} 
    />
  );
}
