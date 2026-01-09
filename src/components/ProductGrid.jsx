import ProductCard from './ProductCard'

function ProductGrid({ products, title = "Shop" }) {
  if (products.length === 0) {
    return (
      <div className="text-center py-24">
        <p className="text-gray-500 text-sm font-light tracking-wide uppercase">ไม่พบสินค้าที่ค้นหา</p>
      </div>
    )
  }

  return (
    <section id="shop" className="py-12 md:py-20 lg:py-32 px-4 md:px-6">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-black mb-8 md:mb-12 lg:mb-16 tracking-tight text-center md:text-left">
          {title}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 xl:gap-12">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductGrid

