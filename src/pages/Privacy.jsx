import Header from '../components/Header'
import Footer from '../components/Footer'

function Privacy() {
  return (
    <div className="min-h-screen bg-transparent">
      <Header onSearch={() => {}} />
      
      <main className="container mx-auto px-6 lg:px-12 py-20 md:py-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-black tracking-tight leading-tight mb-12">
            Privacy Policy
          </h1>
          
          <div className="space-y-12 text-gray-700 font-light leading-relaxed text-lg">
            <section>
              <h2 className="text-2xl md:text-3xl font-light text-black mb-6 tracking-wide">
                ข้อมูลส่วนบุคคล
              </h2>
              <p>
                Shoegally ให้ความสำคัญกับการปกป้องข้อมูลส่วนบุคคลของคุณ เราเก็บรวบรวมข้อมูลส่วนบุคคลที่จำเป็นเท่านั้น 
                เช่น ชื่อ ที่อยู่ อีเมล และเบอร์โทรศัพท์ เพื่อใช้ในการให้บริการและติดต่อกับคุณ
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-light text-black mb-6 tracking-wide">
                การใช้ข้อมูล
              </h2>
              <p>
                ข้อมูลส่วนบุคคลที่เรารวบรวมจะถูกใช้เพื่อ:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4 mt-4">
                <li>ดำเนินการสั่งซื้อและจัดส่งสินค้า</li>
                <li>ติดต่อกับคุณเกี่ยวกับคำสั่งซื้อและบริการ</li>
                <li>ส่งข้อมูลข่าวสารและโปรโมชั่น (หากคุณสมัครรับ)</li>
                <li>ปรับปรุงและพัฒนาบริการของเรา</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-light text-black mb-6 tracking-wide">
                การปกป้องข้อมูล
              </h2>
              <p>
                Shoegally ใช้มาตรการรักษาความปลอดภัยที่เหมาะสมเพื่อปกป้องข้อมูลส่วนบุคคลของคุณจากการเข้าถึง 
                การเปิดเผย การเปลี่ยนแปลง หรือการทำลายโดยไม่ได้รับอนุญาต อย่างไรก็ตาม ไม่มีวิธีการส่งข้อมูลผ่านอินเทอร์เน็ต 
                หรือระบบจัดเก็บข้อมูลใดๆ ที่ปลอดภัย 100% เราไม่สามารถรับประกันความปลอดภัยที่สมบูรณ์แบบได้
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-light text-black mb-6 tracking-wide">
                การเปิดเผยข้อมูล
              </h2>
              <p>
                Shoegally จะไม่ขาย แลกเปลี่ยน หรือให้เช่าข้อมูลส่วนบุคคลของคุณแก่บุคคลที่สาม 
                เราอาจเปิดเผยข้อมูลเมื่อจำเป็นตามกฎหมาย หรือเมื่อเชื่อว่าการเปิดเผยนั้นจำเป็นเพื่อปกป้องสิทธิ์ 
                ความปลอดภัย หรือทรัพย์สินของเรา
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-light text-black mb-6 tracking-wide">
                Cookies
              </h2>
              <p>
                เว็บไซต์ของเราใช้ cookies เพื่อปรับปรุงประสบการณ์การใช้งานของคุณ Cookies คือไฟล์ขนาดเล็กที่ถูกเก็บไว้ในอุปกรณ์ของคุณ 
                เพื่อช่วยให้เว็บไซต์จดจำการตั้งค่าและการใช้งานของคุณ คุณสามารถตั้งค่าเบราว์เซอร์ให้ปฏิเสธ cookies ได้ 
                แต่การทำเช่นนี้อาจส่งผลต่อการใช้งานเว็บไซต์บางส่วน
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-light text-black mb-6 tracking-wide">
                สิทธิ์ของคุณ
              </h2>
              <p>
                คุณมีสิทธิ์ในการเข้าถึง แก้ไข หรือลบข้อมูลส่วนบุคคลของคุณที่เรามีอยู่ 
                หากคุณต้องการใช้สิทธิ์เหล่านี้ กรุณาติดต่อเราผ่านช่องทางที่ระบุไว้ในหน้า{' '}
                <a href="/contact" className="text-black underline hover:text-gray-600 transition-colors">
                  Contact
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-light text-black mb-6 tracking-wide">
                การเปลี่ยนแปลงนโยบายความเป็นส่วนตัว
              </h2>
              <p>
                Shoegally ขอสงวนสิทธิ์ในการแก้ไขหรืออัพเดทนโยบายความเป็นส่วนตัวนี้ได้ตลอดเวลา 
                การเปลี่ยนแปลงจะมีผลทันทีหลังจากประกาศบนเว็บไซต์ เราขอแนะนำให้คุณตรวจสอบหน้านี้เป็นประจำ
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-light text-black mb-6 tracking-wide">
                ติดต่อเรา
              </h2>
              <p>
                หากมีคำถามเกี่ยวกับนโยบายความเป็นส่วนตัวนี้ กรุณาติดต่อเราผ่านช่องทางที่ระบุไว้ในหน้า{' '}
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

export default Privacy



