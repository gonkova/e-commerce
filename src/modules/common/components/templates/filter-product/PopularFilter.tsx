import React, { useState, ChangeEvent } from "react"
import { FaStar } from "react-icons/fa"

const PopularFilter = () => {
  const [filters, setFilters] = useState({
    sale: false,
    newArrivals: false,
    bestSellers: false,
    topRated: false,
  })

  const handleFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target
    setFilters({
      ...filters,
      [name]: checked,
    })
  }

  return (
    <div className="p-4 border border-gray-300 rounded-lg">
      <h3 className="text-sm font-bold mb-5">Popular Filter</h3>
      <div className="flex flex-col gap-2">
        <label className="flex items-center text-gray">
          <input
            type="checkbox"
            name="sale"
            checked={filters.sale}
            onChange={handleFilterChange}
            className="mr-2"
          />
          <FaStar className="text-yellow mr-2" />4 star or upper
        </label>
        <label className="flex items-center text-gray">
          <input
            type="checkbox"
            name="newArrivals"
            checked={filters.newArrivals}
            onChange={handleFilterChange}
            className="mr-2"
          />
          Same day delivery
        </label>
        <label className="flex items-center text-gray">
          <input
            type="checkbox"
            name="bestSellers"
            checked={filters.bestSellers}
            onChange={handleFilterChange}
            className="mr-2"
          />
          Super seller
        </label>
        <label className="flex items-center text-gray">
          <input
            type="checkbox"
            name="topRated"
            checked={filters.topRated}
            onChange={handleFilterChange}
            className="mr-2"
          />
          Sale Product
        </label>
      </div>
    </div>
  )
}

export default PopularFilter
