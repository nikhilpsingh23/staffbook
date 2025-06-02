import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className="w-full max-w-[1440px] h-[80px] mx-auto flex items-center justify-between px-8 border-b border-gray-200 font-montserrat">
      <div className="flex items-center gap-2 pl-4">
        <Image 
          src="/logo.png"
          alt="Staff Book Logo"
          width={200}
          height={80}
          className="object-contain"
        />
      </div>
      
      <div className="hidden md:flex items-center gap-8 ml-auto">
        <a href="#" className="text-gray-700 hover:text-purple-600 font-semibold">Jobs</a>
        <a href="#" className="text-gray-700 hover:text-purple-600 font-semibold">Features</a>
        <a href="#" className="text-gray-700 hover:text-purple-600 font-semibold">Networking</a>
        <a href="#" className="text-gray-700 hover:text-purple-600 font-semibold">Services</a>
        <button className="bg-gradient-to-r from-[#5B5DE6] to-[#921294] text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity font-semibold ml-4">
          Sign up
        </button>
      </div>
    </nav>
  )
}

export default Navbar