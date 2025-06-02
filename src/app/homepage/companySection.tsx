import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const TopCompanies = () => {
  const companies = [
    {
      category: "Marketing & Communications",
      logos: [
        "/home/logo1.png",
        "/home/logo2.png",
        "/home/logo3.png",
        "/home/logo4.png",
        "/home/logo5.png",
      ]
    },
    {
      category: "Marketing & Communications",
      logos: [
        "/home/logo1.png",
        "/home/logo2.png",
        "/home/logo3.png",
        "/home/logo4.png",
        "/home/logo5.png",
      ]
    },
    {
      category: "Marketing & Communications",
      logos: [
        "/home/logo1.png",
        "/home/logo2.png",
        "/home/logo3.png",
        "/home/logo4.png",
        "/home/logo5.png",
      ]
    },
    {
      category: "Marketing & Communications",
      logos: [
        "/home/logo1.png",
        "/home/logo2.png",
        "/home/logo3.png",
        "/home/logo4.png",
        "/home/logo5.png",
      ]
    }
  ]

  return (
    <section className="w-full max-w-[1440px] mx-auto px-8 bg-[#EFF0F0]">
      <div className="max-w-[1227px] mx-auto">
        <h2 className="text-[38px] font-semibold text-center mb-12">
          <span className="bg-gradient-to-r from-[#5B5DE6] to-[#921294] inline-block text-transparent bg-clip-text">Top</span> Companies Hiring
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {companies.map((company, index) => (
            <div 
              key={index} 
              className="w-[280px] h-[142px] bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="flex flex-col h-full justify-between">
                <h3 className="text-[16px] font-medium text-gray-800">{company.category}</h3>
                <div className="flex items-center text-gray-400 hover:text-gray-600 transition-colors">
                  <span className="mr-1">236 Jobs available</span>
                  <ArrowRight size={16} />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex -space-x-3 gap-4">
                    {company.logos.map((logo, logoIndex) => (
                      <div 
                        key={logoIndex} 
                        className="w-[41px] h-[41px]  border-2 border-white bg-white relative"
                      >
                        <Image 
                          src={logo} 
                          alt="Company logo" 
                          fill
                          sizes="41px"
                          className="object-contain p-1"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TopCompanies