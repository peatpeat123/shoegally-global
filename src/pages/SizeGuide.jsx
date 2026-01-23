import Header from '../components/Header'
import Footer from '../components/Footer'

function SizeGuide() {
  const sizes = [
    { eu: '40', uk: '6.5', us: '7', cm: '25.0' },
    { eu: '41', uk: '7.5', us: '8', cm: '26.0' },
    { eu: '42', uk: '8', us: '8.5', cm: '27.0' },
    { eu: '43', uk: '9', us: '9.5', cm: '28.0' },
    { eu: '44', uk: '9.5', us: '10', cm: '29.0' },
    { eu: '45', uk: '10.5', us: '11', cm: '30.0' },
    { eu: '46', uk: '11', us: '11.5', cm: '31.0' },
    { eu: '47', uk: '12', us: '12.5', cm: '32.0' },
  ]

  return (
    <div className="min-h-screen bg-transparent">
      <Header onSearch={() => {}} />
      
      <main className="container mx-auto px-6 lg:px-12 py-20 md:py-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-black tracking-tight leading-tight mb-12">
            Size Guide
          </h1>
          
          <div className="space-y-16">
            <section>
              <h2 className="text-2xl md:text-3xl font-light text-black mb-6 tracking-wide">
                ตารางขนาดรองเท้าบูทผู้ชาย
              </h2>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-gray-300">
                      <th className="text-left py-4 px-4 text-sm font-light uppercase tracking-wider text-black">EU</th>
                      <th className="text-left py-4 px-4 text-sm font-light uppercase tracking-wider text-black">UK</th>
                      <th className="text-left py-4 px-4 text-sm font-light uppercase tracking-wider text-black">US</th>
                      <th className="text-left py-4 px-4 text-sm font-light uppercase tracking-wider text-black">CM</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sizes.map((size, index) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                        <td className="py-4 px-4 text-gray-700 font-light">{size.eu}</td>
                        <td className="py-4 px-4 text-gray-700 font-light">{size.uk}</td>
                        <td className="py-4 px-4 text-gray-700 font-light">{size.us}</td>
                        <td className="py-4 px-4 text-gray-700 font-light">{size.cm}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-light text-black mb-6 tracking-wide">
                วิธีวัดขนาดเท้า
              </h2>
              <div className="space-y-4 text-gray-700 font-light leading-relaxed text-lg">
                <div className="space-y-3">
                  <p className="font-light text-black">ขั้นตอนที่ 1: เตรียมอุปกรณ์</p>
                  <p className="text-gray-600 pl-4">
                    - กระดาษ A4 หรือกระดาษแข็ง<br />
                    - ดินสอหรือปากกา<br />
                    - ไม้บรรทัดหรือสายวัด
                  </p>
                </div>
                
                <div className="space-y-3">
                  <p className="font-light text-black">ขั้นตอนที่ 2: วัดความยาวเท้า</p>
                  <p className="text-gray-600 pl-4">
                    1. ยืนบนกระดาษโดยให้เท้าทั้งสองข้างอยู่บนพื้นเรียบ<br />
                    2. วาดเส้นรอบเท้าด้วยดินสอ โดยให้ดินสอตั้งฉากกับกระดาษ<br />
                    3. วัดความยาวจากปลายนิ้วเท้าที่ยาวที่สุดไปจนถึงส้นเท้า (เป็นเซนติเมตร)<br />
                    4. ทำการวัดทั้งสองข้างและใช้ค่าที่มากกว่า
                  </p>
                </div>

                <div className="space-y-3">
                  <p className="font-light text-black">ขั้นตอนที่ 3: เลือกขนาด</p>
                  <p className="text-gray-600 pl-4">
                    ใช้ค่าความยาวที่วัดได้ (CM) เปรียบเทียบกับตารางขนาดด้านบนเพื่อเลือกขนาดที่เหมาะสม
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-light text-black mb-6 tracking-wide">
                คำแนะนำในการเลือกขนาด
              </h2>
              <div className="space-y-4 text-gray-700 font-light leading-relaxed text-lg">
                <div className="border-l-2 border-black pl-6">
                  <p className="font-light text-black mb-2">ขนาดที่เหมาะสม</p>
                  <p className="text-gray-600">
                    รองเท้าบูทควรมีพื้นที่ว่างประมาณ 0.5-1 เซนติเมตรที่ปลายเท้า เพื่อให้เท้าสบายและไม่บีบรัด
                  </p>
                </div>
                
                <div className="border-l-2 border-black pl-6 mt-6">
                  <p className="font-light text-black mb-2">การสวมถุงเท้า</p>
                  <p className="text-gray-600">
                    หากคุณสวมรองเท้าบูทพร้อมถุงเท้าหนา แนะนำให้เลือกขนาดใหญ่ขึ้น 0.5-1 ไซส์
                  </p>
                </div>

                <div className="border-l-2 border-black pl-6 mt-6">
                  <p className="font-light text-black mb-2">ความกว้างเท้า</p>
                  <p className="text-gray-600">
                    หากเท้าของคุณกว้างกว่าปกติ อาจต้องเลือกขนาดใหญ่ขึ้นเพื่อความสบาย
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-light text-black mb-6 tracking-wide">
                ข้อมูลเพิ่มเติม
              </h2>
              <div className="space-y-4 text-gray-700 font-light leading-relaxed text-lg">
                <p>
                  หากไม่แน่ใจในขนาดหรือต้องการคำแนะนำเพิ่มเติม กรุณาติดต่อเราผ่านช่องทางที่ระบุไว้ในหน้า{' '}
                  <a href="/contact" className="text-black underline hover:text-gray-600 transition-colors">
                    Contact
                  </a>
                </p>
                <p className="text-gray-500 text-base">
                  หมายเหตุ: ขนาดอาจแตกต่างกันเล็กน้อยขึ้นอยู่กับรุ่นและสไตล์ของรองเท้า
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

export default SizeGuide



