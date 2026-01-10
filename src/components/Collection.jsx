function Collection({ title, subtitle, description, image, imagePlaceholder, buttonText = null, noTopPadding = false, noBottomPadding = false, imagePosition = "center" }) {
  return (
    <section className={`${noTopPadding ? 'pt-4 sm:pt-6 md:pt-8' : 'pt-8 sm:pt-12 md:pt-16 lg:pt-20 xl:pt-32'} ${noBottomPadding ? 'pb-0' : 'pb-8 sm:pb-12 md:pb-16 lg:pb-20 xl:pb-32'} px-4 sm:px-6`}>
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-20 items-center">
          {/* Text content - order-2 on mobile, order-1 on desktop */}
          <div className="space-y-3 sm:space-y-4 md:space-y-6 order-2 md:order-1">
            <div className="space-y-2 sm:space-y-3 md:space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light text-black tracking-tight leading-tight">
                {title}
              </h2>
              {subtitle && (
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 font-light">
                  {subtitle}
                </p>
              )}
            </div>
            {description && (
              <div className="space-y-2 sm:space-y-3 md:space-y-4 text-gray-600 leading-relaxed max-w-lg text-xs sm:text-sm md:text-base">
                {description.split('\n').map((paragraph, index) => (
                  <p key={index} className="font-light">
                    {paragraph}
                  </p>
                ))}
              </div>
            )}
            {buttonText && (
              <a
                href="#shop"
                className="inline-block border border-black text-black px-4 sm:px-6 md:px-8 py-2 sm:py-3 text-xs sm:text-sm tracking-wider uppercase hover:bg-black hover:text-white transition-all duration-300 mt-4 sm:mt-6 md:mt-8"
              >
                {buttonText}
              </a>
            )}
          </div>
          
          {/* Image - order-1 on mobile, order-2 on desktop */}
          <div className="relative aspect-square bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden order-1 md:order-2 min-h-[250px] sm:min-h-[300px] md:min-h-0">
            {image ? (
              <img
                src={image}
                alt={title}
                className={`w-full h-full object-cover ${imagePosition === 'bottom' ? 'object-bottom' : imagePosition === 'top' ? 'object-top' : 'object-center'}`}
                loading="lazy"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8 sm:p-12">
                  <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto mb-4 sm:mb-6 bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500 text-4xl sm:text-5xl md:text-6xl font-light">SG</span>
                  </div>
                  {imagePlaceholder && (
                    <p className="text-gray-500 text-xs sm:text-sm uppercase tracking-wider">{imagePlaceholder}</p>
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

