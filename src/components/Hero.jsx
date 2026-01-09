function Hero() {
  return (
    <section className="relative w-full h-[70vh] sm:h-[80vh] md:h-[85vh] lg:h-[90vh] flex items-center justify-center bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="absolute inset-0 bg-black/5"></div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light mb-4 sm:mb-6 text-black tracking-tight leading-tight">
          SHOEGALLY
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 font-light max-w-2xl mx-auto leading-relaxed px-2">
          เราสร้างรองเท้าสำหรับจิตวิญญาณ ไม่ใช่แค่ตามฤดูกาล
        </p>
        <p className="text-sm sm:text-base md:text-lg text-gray-500 mb-8 sm:mb-12 font-light max-w-xl mx-auto px-2">
          At Shoegally, our mission is to inspire you with our designs and to encourage you to inspire others.
        </p>
        <a
          href="#shop"
          className="inline-block border border-black text-black px-6 sm:px-8 py-2 sm:py-3 text-xs sm:text-sm tracking-wider uppercase hover:bg-black hover:text-white transition-all duration-300"
        >
          Discover the Collection
        </a>
      </div>
    </section>
  )
}

export default Hero

