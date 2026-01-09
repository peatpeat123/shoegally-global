import Header from '../components/Header'
import Footer from '../components/Footer'

function Shipping() {
  return (
    <div className="min-h-screen bg-white">
      <Header onSearch={() => {}} />
      
      <main className="container mx-auto px-6 lg:px-12 py-20 md:py-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-black tracking-tight leading-tight mb-12">
            Shipping
          </h1>
          
          <div className="space-y-16">
            <section>
              <h2 className="text-2xl md:text-3xl font-light text-black mb-6 tracking-wide">
                การจัดส่ง
              </h2>
              <div className="space-y-6 text-gray-700 font-light leading-relaxed text-lg">
                <div className="border-l-2 border-black pl-6">
                  <p className="text-xl font-light text-black mb-2">
                    จัดส่งฟรี
                  </p>
                  <p className="text-gray-600">
                    เรามีบริการจัดส่งฟรีสำหรับทุกออเดอร์ ไม่มีค่าจัดส่งเพิ่มเติม
                  </p>
                </div>
                
                <div className="border-l-2 border-black pl-6 mt-8">
                  <p className="text-xl font-light text-black mb-2">
                    บริการส่งด่วน (แมส)
                  </p>
                  <p className="text-gray-600">
                    สำหรับลูกค้าที่ต้องการใช้ด่วน เรามีบริการส่งแมส (EMS) ให้บริการ
                    กรุณาติดต่อเราล่วงหน้าก่อนสั่งซื้อเพื่อแจ้งความต้องการใช้บริการส่งด่วน
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-light text-black mb-6 tracking-wide">
                ระยะเวลาการจัดส่ง
              </h2>
              <div className="space-y-4 text-gray-700 font-light leading-relaxed text-lg">
                <p>
                  ระยะเวลาการจัดส่งปกติจะใช้เวลาประมาณ 3-5 วันทำการ ขึ้นอยู่กับพื้นที่จัดส่ง
                </p>
                <p>
                  สำหรับบริการส่งด่วน (EMS) ระยะเวลาการจัดส่งจะเร็วกว่าการจัดส่งปกติ
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-light text-black mb-6 tracking-wide">
                ข้อมูลเพิ่มเติม
              </h2>
              <div className="space-y-4 text-gray-700 font-light leading-relaxed text-lg">
                <p>
                  หากมีคำถามเกี่ยวกับการจัดส่งหรือต้องการใช้บริการส่งด่วน กรุณาติดต่อเราผ่านช่องทางที่ระบุไว้ในหน้า{' '}
                  <a href="/contact" className="text-black underline hover:text-gray-600 transition-colors">
                    Contact
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

export default Shipping


