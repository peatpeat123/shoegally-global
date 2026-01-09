import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Campaigns() {
  // ตัวอย่าง campaigns - ในอนาคตสามารถดึงข้อมูลจาก API หรือ data file
  const campaigns = [
    // Placeholder สำหรับ campaigns ในอนาคต
    // {
    //   id: 1,
    //   title: "THE MCQUEEN EDIT - PART 1",
    //   subtitle: "Effortless Masculinity Meets Timeless Luxury",
    //   description: "In this first chapter of the McQueen Edit, we invite you into a world where rugged elegance and quiet confidence take center stage.",
    //   image: null,
    //   link: "/campaigns/mcqueen-edit-1"
    // }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header onSearch={() => {}} />
      
      <main className="container mx-auto px-6 lg:px-12 py-20 md:py-32">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-black tracking-tight leading-tight mb-12">
            Campaigns
          </h1>
          
          {campaigns.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mt-16">
              {campaigns.map((campaign) => (
                <Link
                  key={campaign.id}
                  to={campaign.link}
                  className="group block"
                >
                  <div className="relative aspect-square bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden mb-4">
                    {campaign.image ? (
                      <img
                        src={campaign.image}
                        alt={campaign.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center p-8">
                          <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg flex items-center justify-center">
                            <span className="text-gray-500 text-4xl font-light">SG</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-light text-black tracking-wide group-hover:text-gray-600 transition-colors">
                      {campaign.title}
                    </h3>
                    {campaign.subtitle && (
                      <p className="text-sm text-gray-500 font-light">
                        {campaign.subtitle}
                      </p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="mt-16 space-y-12">
              <div className="text-center py-24 border-b border-gray-200">
                <p className="text-gray-500 text-lg font-light tracking-wide">
                  Campaigns กำลังจะมาถึงเร็วๆ นี้
                </p>
                <p className="text-gray-400 text-sm font-light mt-4">
                  Stay tuned for our upcoming campaigns
                </p>
              </div>

              {/* Placeholder structure สำหรับ campaigns ในอนาคต */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="group cursor-pointer opacity-30">
                    <div className="relative aspect-square bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden mb-4">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center p-8">
                          <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg flex items-center justify-center">
                            <span className="text-gray-500 text-4xl font-light">SG</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-light text-black tracking-wide">
                        Campaign Title
                      </h3>
                      <p className="text-sm text-gray-500 font-light">
                        Campaign subtitle
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

export default Campaigns


