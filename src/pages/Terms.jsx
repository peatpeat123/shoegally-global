import Header from '../components/Header'
import Footer from '../components/Footer'

function Terms() {
  return (
    <div className="min-h-screen bg-white">
      <Header onSearch={() => {}} />
      
      <main className="container mx-auto px-6 lg:px-12 py-20 md:py-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-black tracking-tight leading-tight mb-12">
            Terms & Conditions
          </h1>
          
          <div className="space-y-12 text-gray-700 font-light leading-relaxed text-lg">
            <section>
              <h2 className="text-2xl md:text-3xl font-light text-black mb-6 tracking-wide">
                การยอมรับข้อกำหนด
              </h2>
              <p>
                การเข้าถึงและใช้งานเว็บไซต์ Shoegally หมายความว่าคุณยอมรับและตกลงที่จะปฏิบัติตามข้อกำหนดและเงื่อนไขเหล่านี้ 
                หากคุณไม่เห็นด้วยกับข้อกำหนดใดๆ กรุณาอย่าใช้งานเว็บไซต์ของเรา
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-light text-black mb-6 tracking-wide">
                เกี่ยวกับสินค้า
              </h2>
              <p>
                Shoegally มุ่งมั่นในการนำเสนอสินค้ารองเท้าคุณภาพสูง ทุกสินค้าถูกคัดสรรและตรวจสอบคุณภาพก่อนจำหน่าย 
                อย่างไรก็ตาม สีและรายละเอียดของสินค้าอาจแตกต่างกันเล็กน้อยจากที่แสดงบนหน้าจอ ขึ้นอยู่กับการตั้งค่าจอภาพและอุปกรณ์ของคุณ
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-light text-black mb-6 tracking-wide">
                การสั่งซื้อและชำระเงิน
              </h2>
              <p>
                การสั่งซื้อสินค้าผ่านเว็บไซต์ถือเป็นการเสนอซื้อจากคุณ Shoegally ขอสงวนสิทธิ์ในการยอมรับหรือปฏิเสธคำสั่งซื้อใดๆ 
                การชำระเงินจะต้องทำตามวิธีการที่ระบุไว้ในเว็บไซต์
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-light text-black mb-6 tracking-wide">
                การจัดส่ง
              </h2>
              <p>
                Shoegally มีบริการจัดส่งฟรีสำหรับทุกออเดอร์ ระยะเวลาการจัดส่งจะขึ้นอยู่กับพื้นที่และวิธีการจัดส่งที่เลือก 
                สำหรับบริการส่งด่วน (EMS) กรุณาติดต่อเราล่วงหน้าก่อนสั่งซื้อ
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-light text-black mb-6 tracking-wide">
                การคืนสินค้าและการเปลี่ยนสินค้า
              </h2>
              <p>
                หากสินค้ามีข้อบกพร่องหรือไม่ตรงตามที่สั่งซื้อ กรุณาติดต่อเราภายใน 7 วันหลังจากได้รับสินค้า 
                สินค้าต้องอยู่ในสภาพเดิมและไม่มีการใช้งาน เราจะดำเนินการคืนเงินหรือเปลี่ยนสินค้าให้ตามความเหมาะสม
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-light text-black mb-6 tracking-wide">
                สิทธิ์ในทรัพย์สินทางปัญญา
              </h2>
              <p>
                เนื้อหา รูปภาพ โลโก้ และการออกแบบทั้งหมดในเว็บไซต์นี้เป็นทรัพย์สินของ Shoegally 
                ห้ามทำซ้ำ แก้ไข หรือเผยแพร่โดยไม่ได้รับอนุญาตจากเรา
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-light text-black mb-6 tracking-wide">
                การเปลี่ยนแปลงข้อกำหนด
              </h2>
              <p>
                Shoegally ขอสงวนสิทธิ์ในการแก้ไข เปลี่ยนแปลง หรืออัพเดทข้อกำหนดและเงื่อนไขนี้ได้ตลอดเวลา 
                การเปลี่ยนแปลงจะมีผลทันทีหลังจากประกาศบนเว็บไซต์
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-light text-black mb-6 tracking-wide">
                ติดต่อเรา
              </h2>
              <p>
                หากมีคำถามเกี่ยวกับข้อกำหนดและเงื่อนไขนี้ กรุณาติดต่อเราผ่านช่องทางที่ระบุไว้ในหน้า{' '}
                <a href="/contact" className="text-black underline hover:text-gray-600 transition-colors">
                  Contact
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

export default Terms


