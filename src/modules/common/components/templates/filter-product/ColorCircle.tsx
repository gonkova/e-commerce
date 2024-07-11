import React from "react";
import clsx from "clsx";

const ColorCircle = ({
  color,
  selected,
  onClick,
}: {
  color: string;
  selected: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className={clsx(
        "w-7 h-7 rounded-full cursor-pointer transition-outline duration-200 ease-in-out",
        selected ? "outline outline-1 outline-offset-4" : ""
      )}
      style={{
        backgroundColor: color,
        outlineColor: selected ? color : "none",
      }}
    ></div>
  );
};

export default ColorCircle;
