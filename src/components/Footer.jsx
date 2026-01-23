import { Link } from 'react-router-dom'

function Footer({ noTopMargin = false }) {
  return (
    <footer className={`${noTopMargin ? 'mt-0' : 'mt-4 sm:mt-6 md:mt-8 lg:mt-10'} relative`} style={{
      backgroundImage: 'url(/src/image/f2.png)',
      backgroundPosition: 'bottom center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-8 sm:py-12 md:py-16 relative z-10">
        <div className="text-center py-6 sm:py-8 md:py-10 mb-8 sm:mb-12">
          <h2 className="font-balenciaga text-base sm:text-lg md:text-xl lg:text-2xl font-black tracking-[-0.02em] text-white" style={{
            fontFamily: "'Work Sans', 'Helvetica Neue', 'Arial Black', sans-serif",
            fontWeight: 900,
            letterSpacing: '-0.03em',
          }}>
            SHOEGALLY
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12 mb-8 sm:mb-12 md:mb-16 mx-auto max-w-2xl md:max-w-full">
          <div>
            <h4 className="text-xs uppercase tracking-wider text-white mb-4 sm:mb-6 font-semibold">CUSTOMER CARE</h4>
            <ul className="space-y-1 sm:space-y-1.5 text-xs sm:text-sm text-white font-light">
              <li><Link to="/size-guide" className="hover:text-gray-300 transition-colors">Size Guide</Link></li>
              <li><Link to="/contact" className="hover:text-gray-300 transition-colors">Contact</Link></li>
              <li><Link to="/shipping" className="hover:text-gray-300 transition-colors">Shipping</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-wider text-white mb-4 sm:mb-6 font-semibold">OFFICE</h4>
            <ul className="space-y-1 sm:space-y-1.5 text-xs sm:text-sm text-white font-light">
              <li><Link to="/about" className="hover:text-gray-300 transition-colors">About</Link></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-wider text-white mb-4 sm:mb-6 font-semibold">CONNECT</h4>
            <ul className="space-y-1 sm:space-y-1.5 text-xs sm:text-sm text-white font-light">
              <li><a href="https://www.instagram.com/shoegallybkk/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">Instagram</a></li>
              <li><a href="https://www.facebook.com/p/Yoon-Phusanu-Wongsavanischakorn-61557644887422/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">Facebook</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-wider text-white mb-4 sm:mb-6 font-semibold">LEGAL</h4>
            <ul className="space-y-1 sm:space-y-1.5 text-xs sm:text-sm text-white font-light">
              <li><Link to="/terms" className="hover:text-gray-300 transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 sm:gap-6">
            <p className="text-xs text-white font-light uppercase tracking-wider text-center md:text-left w-full md:w-auto">
              &copy; 2024 Shoegally
            </p>
            <div className="w-full md:w-auto max-w-md mx-auto md:mx-0">
              <form className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email..."
                  className="flex-1 px-3 sm:px-4 py-2 text-xs sm:text-sm border-b border-white focus:outline-none focus:border-white transition-colors bg-transparent font-light text-white placeholder-gray-300"
                />
                <button
                  type="submit"
                  className="px-4 sm:px-6 py-2 text-xs sm:text-sm border border-white text-white hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-wider font-light whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-[10px] sm:text-xs text-white mt-2 font-light text-center sm:text-left">
                Sign up for news, early access, and rare updates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

