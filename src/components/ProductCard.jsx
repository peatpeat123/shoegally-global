import { useState } from 'react'

function ProductCard({ product }) {
  const [imageError, setImageError] = useState(false)

  const handleImageError = () => {
    setImageError(true)
  }

  const renderPlaceholder = () => (
    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 group-hover:from-gray-200 group-hover:to-gray-300 transition-all duration-500">
      <div className="text-center p-8 transform group-hover:scale-105 transition-transform duration-500">
        <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg flex items-center justify-center">
          <span className="text-gray-600 text-4xl font-light tracking-tight">{product.brand.charAt(0)}</span>
        </div>
        <p className="text-gray-500 text-xs uppercase tracking-wider font-light">{product.brand}</p>
      </div>
    </div>
  )

  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden bg-gray-50 aspect-square mb-3 md:mb-4">
        {product.image && !imageError ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={handleImageError}
            loading="eager"
          />
        ) : (
          renderPlaceholder()
        )}
        {product.isNew && (
          <div className="absolute top-2 right-2 md:top-4 md:right-4 bg-black text-white px-2 py-1 md:px-3 md:py-1 text-[10px] md:text-xs tracking-wider uppercase font-light">
            New
          </div>
        )}
      </div>
      <div className="space-y-0">
        <h3 className="text-xs md:text-sm font-light text-black tracking-wide uppercase line-clamp-2">
          {product.name}
        </h3>
        <p className="text-[10px] md:text-xs text-gray-500 font-light uppercase tracking-wider">
          {product.brand}
        </p>
        <div className="pt-2 md:pt-3">
          <p className="text-sm md:text-base font-light text-black">
            ฿{product.price.toLocaleString()}
          </p>
          {product.originalPrice && (
            <p className="text-[10px] md:text-xs text-gray-400 line-through font-light">
              ฿{product.originalPrice.toLocaleString()}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductCard

