import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Campaigns from './pages/Campaigns'
import Shipping from './pages/Shipping'
import SizeGuide from './pages/SizeGuide'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/campaigns" element={<Campaigns />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/size-guide" element={<SizeGuide />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </Router>
  )
}

export default App

