import Header from '../components/Header'
import Footer from '../components/Footer'

function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <Header onSearch={() => {}} />
      
      <main className="container mx-auto px-6 lg:px-12 py-20 md:py-32">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-black tracking-tight leading-tight mb-8">
            Contact
          </h1>
          
          <div className="space-y-12 mt-16">
            <div className="border-b border-gray-200 pb-8">
              <h2 className="text-xl md:text-2xl font-light text-black mb-6 tracking-wide">
                ติดต่อเรา
              </h2>
              <div className="space-y-4 text-gray-700 font-light leading-relaxed">
                <p className="text-lg">
                  <span className="text-gray-500">ชื่อ:</span> คุณ ยุ่น ภูษณุ วงศาวณิชชากร
                </p>
                <p className="text-lg">
                  <span className="text-gray-500">เบอร์โทรศัพท์:</span>{' '}
                  <a 
                    href="tel:0942614566" 
                    className="text-black hover:text-gray-600 transition-colors underline"
                  >
                    094-261-4566
                  </a>
                </p>
                <div className="text-lg">
                  <span className="text-gray-500">ที่อยู่:</span>
                  <div className="mt-2 text-gray-700 font-light leading-relaxed">
                    <p>หมู่บ้านอมรชัย 3 ซอย 4/1</p>
                    <p>บ้านเลขที่ 294 ซ.บรมราชชนนี72 ถ.บรมราชชนนี</p>
                    <p>แขวงศาลาธรรมสพน์ เขตทวีวัฒนา กรุงเทพฯ 10170</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <p className="text-gray-600 font-light leading-relaxed">
                สำหรับคำถามหรือข้อมูลเพิ่มเติมเกี่ยวกับสินค้า กรุณาติดต่อเราผ่านช่องทางที่ระบุไว้ด้านบน
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

export default Contact

