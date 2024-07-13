import React, { ChangeEvent } from "react"
import { FaDollarSign } from "react-icons/fa"

const PriceFilter = ({
  minPrice,
  maxPrice,
  handleMinPriceChange,
  handleMaxPriceChange,
}: {
  minPrice: string
  maxPrice: string
  handleMinPriceChange: (event: ChangeEvent<HTMLInputElement>) => void
  handleMaxPriceChange: (event: ChangeEvent<HTMLInputElement>) => void
}) => {
  return (
    <div>
      <h3 className="text-sm font-bold mb-5">Price value</h3>
      <div className="flex items-center mb-4">
        <div className="flex items-center justify-center w-10 h-9 bg-lightGrayishBlue rounded-l-lg">
          <div className="flex items-center justify-center w-5 h-5 bg-gray rounded-full">
            <FaDollarSign className="text-lightGray" />
          </div>
        </div>
        <input
          type="number"
          placeholder="Set Min. Price"
          value={minPrice}
          onChange={handleMinPriceChange}
          data-testid="min-price-filter"
          className="p-1.5 border rounded-r-lg text-sm "
        />
      </div>
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}
      >
        <div className="flex items-center justify-center w-10 h-9 bg-lightGrayishBlue rounded-l-lg">
          <div className="flex items-center justify-center w-5 h-5 bg-gray rounded-full">
            <FaDollarSign className="text-lightGray" />
          </div>
        </div>
        <input
          type="number"
          placeholder="Set Max. Price"
          value={maxPrice}
          onChange={handleMaxPriceChange}
          data-testid="max-price-filter"
          className="p-1.5 border rounded-r-lg text-sm "
        />
      </div>
      <div className="w-[150px] h-4 flex items-center justify-center  mt-2">
        <span>{minPrice && maxPrice ? `$${minPrice} -  ${maxPrice}` : ""}</span>
      </div>
      <div className="flex flex-col gap-5 mt-1">
        <div className="w-[200px] flex flex-row items-center space-x-4">
          <div className="flex-1 flex items-center justify-center border border-lightGrayishBlue  rounded-lg h-10 text-indigoBlue">
            $0-150
          </div>
          <div className="flex-1 flex items-center justify-center border border-lightGrayishBlue  rounded-lg h-10  text-indigoBlue">
            $150-300
          </div>
        </div>
        <div className="w-[200px] flex flex-row items-center space-x-4">
          <div className="flex-1 flex items-center justify-center border border-lightGrayishBlue  rounded-lg h-10  text-gray">
            $300-500
          </div>
          <div className="flex-1 flex items-center justify-center border border-lightGrayishBlue  rounded-lg h-10  text-gray">
            $500-1k
          </div>
        </div>
      </div>
    </div>
  )
}

export default PriceFilter
