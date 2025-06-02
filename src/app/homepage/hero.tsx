export default function HeroSection() {
  return (
    <section className="relative w-full max-w-[1440px] mx-auto h-[700px] overflow-hidden">
      {/* Background with gradient overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/home/maplive.png")',
          backgroundBlendMode: 'overlay'
        }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/25 to-white/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center mt-8 h-full text-center px-4 md:px-12 lg:px-24">
        <h1 className="text-3xl md:text-4xl lg:text-[42px] font-bold max-w-4xl">
          India's First AI-Powered{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5B5DE6] to-[#921294]">
            Job Portal
          </span>{' '}
          with
        </h1>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mt-2">
          Real-Time Hiring Near You.
        </h2>

        {/* Job Cards */}
        <div className="absolute w-full h-full top-0 left-0 pointer-events-none">
          {/* Myntra Card */}
          <div className="absolute top-[20%] right-[15%] bg-white rounded-lg p-4 shadow-lg animate-float-1 w-[280px]">
            <div className="flex items-center gap-3">
              <img src="/home/logo1.png" alt="Myntra" className="w-8 h-8" />
              <div className="flex-1">
                <h3 className="font-medium text-base">Marketing Executive</h3>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span>Norway, EU</span>
                  <span>•</span>
                  <span>$85K-125K</span>
                </div>
              </div>
            </div>
          </div>

          {/* Microsoft Card */}
          <div className="absolute top-[40%] left-[25%] bg-white rounded-lg p-4 shadow-lg animate-float-2 w-[280px]">
            <div className="flex items-center gap-3">
              <img src="/home/logo2.png" alt="Microsoft" className="w-8 h-8" />
              <div className="flex-1">
                <h3 className="font-medium text-base">UI/UX Designer</h3>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span>New York, US</span>
                  <span>•</span>
                  <span>$120K-150K</span>
                </div>
              </div>
            </div>
          </div>

          {/* Webflow Card */}
          <div className="absolute top-[30%] right-[30%] bg-white rounded-lg p-4 shadow-lg animate-float-3 w-[280px]">
            <div className="flex items-center gap-3">
              <img src="/home/logo3.png" alt="Webflow" className="w-8 h-8" />
              <div className="flex-1">
                <h3 className="font-medium text-base">Software Engineer</h3>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span>New Delhi, India</span>
                  <span>•</span>
                  <span>$100K-170K</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}