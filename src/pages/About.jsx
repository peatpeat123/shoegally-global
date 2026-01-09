import Header from '../components/Header'
import Footer from '../components/Footer'

function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header onSearch={() => {}} />
      
      <main className="container mx-auto px-6 lg:px-12 py-20 md:py-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-black tracking-tight leading-tight mb-12">
            About
          </h1>
          
          <div className="space-y-16">
            <section>
              <h2 className="text-2xl md:text-3xl font-light text-black mb-6 tracking-wide">
                เกี่ยวกับ Shoegally
              </h2>
              <div className="space-y-4 text-gray-700 font-light leading-relaxed text-lg">
                <p>
                  Shoegally เป็นมากกว่าแบรนด์รองเท้าคุณภาพสูง เราเชื่อในพลังของความเป็นปัจเจกบุคคลและการแสดงออกที่แท้จริง
                </p>
                <p>
                  เราสร้างรองเท้าสำหรับจิตวิญญาณ ไม่ใช่แค่ตามฤดูกาล ที่ Shoegally ภารกิจของเราคือการสร้างแรงบันดาลใจให้คุณผ่านการออกแบบของเรา และส่งเสริมให้คุณสร้างแรงบันดาลใจให้ผู้อื่น
                </p>
                <p>
                  เราเชื่อว่าการเป็นตัวของตัวเอง การแสดงออกอย่างกล้าหาญ และการซื่อสัตย์ต่อตัวเองนั้นสำคัญ และสามารถส่งผลกระทบไม่เพียงแต่คนรอบข้างเท่านั้น แต่ยังรวมถึงคนรุ่นต่อไปด้วย
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-light text-black mb-6 tracking-wide">
                เกี่ยวกับรองเท้าของเรา
              </h2>
              <div className="space-y-4 text-gray-700 font-light leading-relaxed text-lg">
                <p>
                  รองเท้าของ Shoegally ถูกออกแบบมาให้มีความหลากหลายและเป็นอมตะ ช่วยให้คุณสามารถสไตล์ได้หลากหลายในทุกช่วงเวลา สะท้อนรสนิยมที่เป็นเอกลักษณ์ของคุณมากกว่าการตามเทรนด์หรือการเปลี่ยนแปลงตามฤดูกาล
                </p>
                <p>
                  เราเน้นความหลากหลายและความครอบคลุมในการออกแบบ โดยเสนอสินค้าแบบ unisex ในขนาดที่หลากหลาย ชิ้นงานของเราถูกออกแบบมาให้ใช้งานได้หลากหลายและเป็นอมตะ ทำให้คุณสามารถสไตล์ได้หลายวิธีในทุกช่วงเวลา
                </p>
                <p>
                  ทุกคู่ของรองเท้า Shoegally ถูกสร้างขึ้นด้วยความใส่ใจในรายละเอียดและความมุ่งมั่นในการสร้างสรรค์ผลงานที่มีคุณภาพ เพื่อให้คุณได้สัมผัสกับประสบการณ์การสวมใส่ที่เหนือกว่า
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-light text-black mb-6 tracking-wide">
                ปรัชญาของเรา
              </h2>
              <div className="space-y-4 text-gray-700 font-light leading-relaxed text-lg">
                <p>
                  ที่ Shoegally เราเชื่อว่ารองเท้าไม่ใช่แค่เครื่องแต่งกาย แต่เป็นส่วนหนึ่งของตัวตนที่ช่วยให้คุณแสดงออกถึงความเป็นตัวคุณได้อย่างเต็มที่
                </p>
                <p>
                  เรามุ่งมั่นที่จะสร้างสรรค์รองเท้าที่ไม่เพียงแต่สวยงามและทันสมัย แต่ยังสะท้อนถึงค่านิยมของเราในการส่งเสริมความเป็นปัจเจกบุคคลและความหลากหลาย
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

export default About


