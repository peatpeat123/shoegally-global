function Collection({ title, subtitle, description, image, imagePlaceholder, buttonText = "Shop Now" }) {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-32 px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-20 items-center">
          <div className="space-y-4 sm:space-y-6">
            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-black tracking-tight leading-tight">
                {title}
              </h2>
              {subtitle && (
                <p className="text-lg sm:text-xl md:text-2xl text-gray-700 font-light">
                  {subtitle}
                </p>
              )}
            </div>
            {description && (
              <div className="space-y-3 sm:space-y-4 text-gray-600 leading-relaxed max-w-lg text-sm sm:text-base">
                {description.split('\n').map((paragraph, index) => (
                  <p key={index} className="font-light">
                    {paragraph}
                  </p>
                ))}
              </div>
            )}
            <a
              href="#shop"
              className="inline-block border border-black text-black px-6 sm:px-8 py-2 sm:py-3 text-xs sm:text-sm tracking-wider uppercase hover:bg-black hover:text-white transition-all duration-300 mt-6 sm:mt-8"
            >
              {buttonText}
            </a>
          </div>
          
          <div className="relative aspect-square bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
            {image ? (
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-12">
                  <div className="w-48 h-48 mx-auto mb-6 bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500 text-6xl font-light">SG</span>
                  </div>
                  {imagePlaceholder && (
                    <p className="text-gray-500 text-sm uppercase tracking-wider">{imagePlaceholder}</p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Collection

