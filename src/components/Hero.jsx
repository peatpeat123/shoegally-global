function Hero() {
  return (
    <section 
      className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[90vh] overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(/images/SHOEGALLY.jpg)'
      }}
    >
      {/* Button positioned at bottom right - elegant positioning */}
      <div className="absolute bottom-8 sm:bottom-10 md:bottom-12 lg:bottom-16 xl:bottom-20 right-6 sm:right-8 md:right-12 lg:right-16 xl:right-20 z-10">
        <a
          href="#shop"
          className="inline-block border border-white/90 text-white px-5 sm:px-6 md:px-8 lg:px-10 py-2.5 sm:py-3 md:py-3.5 text-xs sm:text-sm md:text-sm tracking-wider uppercase hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-md bg-black/30 font-light"
        >
          Discover the Collection
        </a>
      </div>
    </section>
  )
}

export default Hero

