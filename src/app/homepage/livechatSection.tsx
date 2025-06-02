export default function LiveChatSection() {
    return (
      <section className="w-full max-w-[1440px] mx-auto px-4 md:px-12 lg:px-24 py-16 bg-[#EFF0F0]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5B5DE6] to-[#921294]">Live Chat</span>{' '}with Recruiters
            </h2>
            <p className="text-lg text-gray-700">
              Connect instantly with recruiters for quicker hiring decisions.
            </p>
            <button className="bg-gradient-to-r from-[#5B5DE6] to-[#921294] text-white px-6 py-3 rounded-full shadow-md hover:scale-105 transition-transform">
              Explore Now
            </button>
          </div>
  
          {/* Right Column - Static Image */}
          <div className="flex justify-center">
            <img
              src="/home/livechat.png"
              alt="Live Chat UI Mockup"
              className="rounded-2xl shadow-lg w-full max-w-[400px] h-auto"
            />
          </div>
        </div>
      </section>
    );
  }
  