import { Megaphone, Users, Code, Monitor, BarChart, BookOpen, Briefcase, Headphones } from 'lucide-react'

const Categories = () => {
  const categories = [
    {
      title: "Marketing & Communications",
      jobs: "236 Jobs available",
      icon: Megaphone
    },
    {
      title: "Human Research & Development",
      jobs: "236 Jobs available",
      icon: Users
    },
    {
      title: "Design & Development",
      jobs: "236 Jobs available",
      icon: Code
    },
    {
      title: "Information & Technology",
      jobs: "236 Jobs available",
      icon: Monitor
    },
    {
      title: "Finance & Buisness",
      jobs: "236 Jobs available",
      icon: BarChart
    },
    {
      title: "Health & Education",
      jobs: "236 Jobs available",
      icon: BookOpen
    },
    {
      title: "Project Management & Software",
      jobs: "236 Jobs available",
      icon: Briefcase
    },
    {
      title: "Customer & Support Care",
      jobs: "236 Jobs available",
      icon: Headphones
    }
  ]

  return (
    <section className="w-full max-w-[1440px] mx-auto px-8 py-16 bg-[#EFF0F0]">
      <h1 className="text-[38px] font-semibold text-center mb-12">
        Jobs in most popular <span className="bg-gradient-to-r from-[#5B5DE6] to-[#921294] inline-block text-transparent bg-clip-text">Roles</span>
      </h1>
      
      <div className="flex flex-col gap-8">
        <div className="max-w-[1371px] w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8">
          {categories.slice(0, 4).map((category, index) => {
            const IconComponent = category.icon
            return (
              <div key={index} className="bg-white rounded-lg px-6 py-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-[#F6F6FE] rounded-full">
                  <IconComponent className="w-6 h-6 text-[#5B5DE6]" />
                </div>
                <div>
                  <h3 className="text-[16px] font-medium text-gray-800">{category.title}</h3>
                  <p className="text-gray-400 text-sm">{category.jobs}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="max-w-[1230px] w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8">
          {categories.slice(4).map((category, index) => {
            const IconComponent = category.icon
            return (
              <div key={index} className="bg-white rounded-lg px-6 py-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-[#F6F6FE] rounded-full">
                  <IconComponent className="w-6 h-6 text-[#5B5DE6]" />
                </div>
                <div>
                  <h3 className="text-[16px] font-medium text-gray-800">{category.title}</h3>
                  <p className="text-gray-400 text-sm">{category.jobs}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Categories