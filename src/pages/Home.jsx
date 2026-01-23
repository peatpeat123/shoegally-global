import { useState } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Collection from '../components/Collection'
import ProductGrid from '../components/ProductGrid'
import Footer from '../components/Footer'
import { products } from '../data/products'

function Home() {
  const [filteredProducts, setFilteredProducts] = useState(products)

  const handleSearch = (searchTerm) => {
    if (!searchTerm.trim()) {
      setFilteredProducts(products)
      return
    }
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFilteredProducts(filtered)
  }

  return (
    <div className="min-h-screen bg-transparent">
      <Header onSearch={handleSearch} />
      
      <Hero />
      
      <Collection
        title="ABOUT SHOEGALLY"
        description={`Established in 2019, Shoegally BKK is a refined footwear house from Bangkok, devoted to the art of timeless craftsmanship and contemporary elegance. Every creation begins with premium genuine cow leather, thoughtfully selected for its rich texture and enduring quality — including luxurious suede finishes that add a subtle touch of sophistication.\n\nDesigned and crafted in partnership with our dedicated ateliers, each pair embodies a perfect harmony between modern design sensibility and meticulous handcraft. Shoegally BKK represents a quiet confidence — footwear made not just to be worn, but to be experienced.`}
        image="/images/IMG_0724.JPG"
        noTopPadding={true}
        noBottomPadding={true}
      />
      
      <ProductGrid products={filteredProducts} title="Shop" noTopPadding={true} noBottomPadding={true} />
      
      <Collection
        title="THE STORY BEHIND SHOEGALLY"
        subtitle="We make boots for the soul, not the season."
        description={`Shoegally เป็นมากกว่าแบรนด์รองเท้าคุณภาพสูง เราเชื่อในพลังของความเป็นปัจเจกบุคคล\n\nเราเชื่อว่าการเป็นตัวของตัวเอง การแสดงออกอย่างกล้าหาญ และการซื่อสัตย์ต่อตัวเองนั้นสำคัญ และสามารถส่งผลกระทบไม่เพียงแต่คนรอบข้างเท่านั้น แต่ยังรวมถึงคนรุ่นต่อไปด้วย`}
        image="/images/IMG_0722.JPG"
        imagePosition="bottom"
        noTopPadding={true}
        noBottomPadding={false}
      />
      
      <Footer noTopMargin={true} />
    </div>
  )
}

export default Home

