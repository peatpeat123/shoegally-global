import ProductCard from './ProductCard'

function ProductGrid({ products, title = "Shop", noTopPadding = false, noBottomPadding = false }) {
  if (products.length === 0) {
    return (
      <div className="text-center py-24">
        <p className="text-gray-500 text-sm font-light tracking-wide uppercase">ไม่พบสินค้าที่ค้นหา</p>
      </div>
    )
  }

  return (
    <section id="shop" className={`${noTopPadding ? 'pt-0' : 'pt-8 sm:pt-12 md:pt-16 lg:pt-20 xl:pt-32'} ${noBottomPadding ? 'pb-4 sm:pb-6 md:pb-8' : 'pb-8 sm:pb-12 md:pb-16 lg:pb-20 xl:pb-32'} px-4 sm:px-6`}>
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-black mb-6 sm:mb-8 md:mb-12 lg:mb-16 tracking-tight text-center md:text-left">
          {title}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-12">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductGrid

