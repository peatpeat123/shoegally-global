import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Header({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch(searchTerm)
  }

  const handleLogoClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        <div className="flex items-center justify-between py-4 md:py-6">
          <div className="flex items-center">
            <Link
              to="/"
              onClick={handleLogoClick}
              className="text-xl md:text-2xl font-semibold tracking-tight text-black hover:text-gray-600 transition-colors cursor-pointer"
            >
              SHOEGALLY
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <a href="#shop" className="text-xs md:text-sm text-black hover:text-gray-600 transition-colors tracking-wide uppercase">
              SHOP
            </a>
            <Link to="/about" className="text-xs md:text-sm text-black hover:text-gray-600 transition-colors tracking-wide uppercase">
              ABOUT
            </Link>
            <Link to="/campaigns" className="text-xs md:text-sm text-black hover:text-gray-600 transition-colors tracking-wide uppercase">
              CAMPAIGNS
            </Link>
          </nav>

          <div className="flex items-center gap-2 md:gap-4">
            <form onSubmit={handleSubmit} className="hidden lg:block">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value)
                    onSearch(e.target.value)
                  }}
                  className="w-48 px-4 py-2 text-sm border-b border-gray-300 focus:outline-none focus:border-black transition-colors bg-transparent"
                />
                <svg
                  className="absolute right-2 top-2.5 h-4 w-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </form>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-black"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4">
            <nav className="flex flex-col gap-4">
              <a 
                href="#shop" 
                onClick={() => setIsMenuOpen(false)}
                className="text-sm text-black hover:text-gray-600 transition-colors tracking-wide uppercase"
              >
                SHOP
              </a>
              <Link 
                to="/about" 
                onClick={() => setIsMenuOpen(false)}
                className="text-sm text-black hover:text-gray-600 transition-colors tracking-wide uppercase"
              >
                ABOUT
              </Link>
              <Link 
                to="/campaigns" 
                onClick={() => setIsMenuOpen(false)}
                className="text-sm text-black hover:text-gray-600 transition-colors tracking-wide uppercase"
              >
                CAMPAIGNS
              </Link>
              <form onSubmit={handleSubmit} className="mt-2">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => {
                      setSearchTerm(e.target.value)
                      onSearch(e.target.value)
                    }}
                    className="w-full px-4 py-2 text-sm border-b border-gray-300 focus:outline-none focus:border-black transition-colors bg-transparent"
                  />
                  <svg
                    className="absolute right-2 top-2.5 h-4 w-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </form>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header

