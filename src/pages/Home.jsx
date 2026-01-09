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
    <div className="min-h-screen bg-white">
      <Header onSearch={handleSearch} />
      
      <Hero />
      
      <Collection
        title="THE CLASSIC COLLECTION"
        subtitle="Timeless Elegance Meets Modern Craftsmanship"
        description={`ในคอลเลกชันนี้ เราเชิญคุณเข้าสู่โลกแห่งความหรูหราแบบเรียบง่ายและความมั่นใจที่สง่างาม\n\nเรานำเสนอรองเท้าคลาสสิกที่ได้รับการออกแบบใหม่ให้รู้สึกทั้งเป็นเอกลักษณ์ของ Shoegally และเป็นอมตะเหมือนเดิม`}
        imagePlaceholder="Classic Collection"
        buttonText="Discover the Collection"
      />
      
      <ProductGrid products={filteredProducts} title="Shop" />
      
      <Collection
        title="THE STORY BEHIND SHOEGALLY"
        subtitle="We make boots for the soul, not the season."
        description={`Shoegally เป็นมากกว่าแบรนด์รองเท้าคุณภาพสูง เราเชื่อในพลังของความเป็นปัจเจกบุคคล\n\nเราเชื่อว่าการเป็นตัวของตัวเอง การแสดงออกอย่างกล้าหาญ และการซื่อสัตย์ต่อตัวเองนั้นสำคัญ และสามารถส่งผลกระทบไม่เพียงแต่คนรอบข้างเท่านั้น แต่ยังรวมถึงคนรุ่นต่อไปด้วย`}
        imagePlaceholder="Our Story"
        buttonText="Learn More"
      />
      
      <Footer />
    </div>
  )
}

export default Home

