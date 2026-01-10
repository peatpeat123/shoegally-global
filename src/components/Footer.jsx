import { Link } from 'react-router-dom'

function Footer({ noTopMargin = false }) {
  return (
    <footer className={`border-t border-gray-200 ${noTopMargin ? 'mt-0' : 'mt-8 sm:mt-12 md:mt-16 lg:mt-20'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12 mb-8 sm:mb-12 md:mb-16">
          <div>
            <h4 className="text-xs uppercase tracking-wider text-black mb-4 sm:mb-6 font-light">CUSTOMER CARE</h4>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-600 font-light">
              <li><Link to="/size-guide" className="hover:text-black transition-colors">Size Guide</Link></li>
              <li><Link to="/contact" className="hover:text-black transition-colors">Contact</Link></li>
              <li><Link to="/shipping" className="hover:text-black transition-colors">Shipping</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-wider text-black mb-4 sm:mb-6 font-light">OFFICE</h4>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-600 font-light">
              <li><Link to="/about" className="hover:text-black transition-colors">About</Link></li>
              <li><a href="#" className="hover:text-black transition-colors">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-wider text-black mb-4 sm:mb-6 font-light">CONNECT</h4>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-600 font-light">
              <li><a href="https://www.instagram.com/shoegallybkk/" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">Instagram</a></li>
              <li><a href="https://www.facebook.com/p/Yoon-Phusanu-Wongsavanischakorn-61557644887422/" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">Facebook</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-wider text-black mb-4 sm:mb-6 font-light">LEGAL</h4>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-600 font-light">
              <li><Link to="/terms" className="hover:text-black transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="hover:text-black transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 sm:gap-6">
            <p className="text-xs text-gray-500 font-light uppercase tracking-wider text-center md:text-left w-full md:w-auto">
              &copy; 2024 Shoegally
            </p>
            <div className="w-full md:w-auto max-w-md mx-auto md:mx-0">
              <form className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email..."
                  className="flex-1 px-3 sm:px-4 py-2 text-xs sm:text-sm border-b border-gray-300 focus:outline-none focus:border-black transition-colors bg-transparent font-light"
                />
                <button
                  type="submit"
                  className="px-4 sm:px-6 py-2 text-xs sm:text-sm border border-black text-black hover:bg-black hover:text-white transition-all duration-300 uppercase tracking-wider font-light whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-[10px] sm:text-xs text-gray-500 mt-2 font-light text-center sm:text-left">
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

