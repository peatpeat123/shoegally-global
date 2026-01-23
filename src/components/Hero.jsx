function Hero() {
  return (
    <section 
      className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[90vh] overflow-hidden bg-cover bg-center bg-no-repeat -mt-20 sm:-mt-24 md:-mt-28"
      style={{
        backgroundImage: 'url(/images/SHOEGALLY.jpg)'
      }}
    >
      {/* Button positioned at bottom right - elegant positioning */}
      <div className="absolute bottom-8 sm:bottom-10 md:bottom-12 lg:bottom-16 xl:bottom-20 right-6 sm:right-8 md:right-12 lg:right-16 xl:right-20 z-10">
        <a
          href="#shop"
          className="inline-block text-white text-xs sm:text-sm md:text-sm tracking-wider uppercase hover:text-gray-300 transition-all duration-300 font-light"
        >
          ↓ LEARN MORE
        </a>
      </div>
    </section>
  )
}

export default Hero

