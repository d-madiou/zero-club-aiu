import eventImage from "../assets/images/EventType.png"

function EventInfo() {
    return (
      <div className="container mx-auto px-4 py-10 max-w-7xl font-[roboto] mt-12">
        <div>
            <h3 className="text-[16px] mb-4">Join</h3>
          
          <h2 className="text-[48px] font-bold mb-8 relative inline-block ">
            Stay Ahead with the Latest Events
            <span className="absolute w-full h-1 -bottom-1 left-0 md:w-full md:h-2 bg-[#4AAEA3]"></span>
          </h2>
  
          <p className="text-[18px] mb-15 max-w-3xl">
            "From business summits to creative workshops, explore inspiring events that connect you with industry leaders
            and innovators worldwide!"
          </p>
          <div className="flex flex-col items-center md:flex-row gap-8">
            <div className="md:col-span-2">
           
              <div
                className="relative w-[356px] h-[240px] md:h-[420px] md:w-[632px] md:left-0 rounded-[16px]"
                style={{
                  backgroundImage: `url(${eventImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                
                <div className="absolute top-4 left-4 bg-white rounded-[8px] p-4 text-center w-24">
                  <div className="text-sm font-medium">Sat</div>
                  <div className="text-3xl font-bold">10</div>
                  <div className="text-sm">Feb 2024</div>
                </div>
              </div>
            </div>

            <div className="md:col-span-1 md:ml-4">
              <div className="bg-[#46A4A3] text-white px-3 py-1 text-[14px] inline-block mb-4">Tech</div>
              <h3 className="text-[24px] font-bold mb-4">Global Business Summit</h3>
              <p className="mb-8 text-[16px]">
                Connect with top industry leaders, gain insights on market trends, and unlock new opportunities for growth
                in London!"
              </p>
              <button className="bg-[#E4A251] hover:bg-[#e09c3a] text-black font-[600] px-6 py-3 text-[16px] rounded-[4px] transition-all">
                Reserve Your Seat Now
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default EventInfo
  