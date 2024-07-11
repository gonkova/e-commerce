import React, { ChangeEvent } from "react"
import ColorCircle from "./ColorCircle"

const ColorFilter = ({
  colors,
  selectedColor,
  handleChange,
}: {
  colors: { value: string; label: string }[]
  selectedColor: string
  handleChange: (event: ChangeEvent<HTMLInputElement>, value: string) => void
}) => {
  const handleClick = (value: string) => {
    handleChange({ target: { value } } as ChangeEvent<HTMLInputElement>, value)
  }

  return (
    <div className="w-[240px]">
      <h3 className="text-sm font-bold mb-5">Product Color</h3>
      <div className="grid grid-cols-4 gap-2">
        {colors.map(color => (
          <ColorCircle
            key={color.value}
            color={color.value}
            selected={color.value === selectedColor}
            onClick={() => handleClick(color.value)}
          />
        ))}
      </div>
    </div>
  )
}

export default ColorFilter
