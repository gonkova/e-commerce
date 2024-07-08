'use client'
import React, { useState } from "react"
import { ImageWithAlt } from "types/medusa"

type CustomImageGalleryProps = {
  images: ImageWithAlt[]
}

const CustomImageGallery: React.FC<CustomImageGalleryProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0])

  return (
    <div>
      <div className="large-image-container mb-4">
        <img src={selectedImage.url} alt={selectedImage.alt} className="w-full" />
      </div>
      <div className="thumbnail-container flex space-x-4">
        {images.slice(0, 3).map((image, index) => (
          <div key={index} className="thumbnail" onClick={() => setSelectedImage(image)}>
            <img src={image.url} alt={image.alt} className="w-24 cursor-pointer" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default CustomImageGallery
