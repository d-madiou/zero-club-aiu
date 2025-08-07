import { Link } from 'react-router-dom'

function Banner() {
    return (
      <div className="bg-white font-[Roboto] mt-16">
        <div className="container mx-auto px-4 py-10 max-w-7xl">
          <div className="max-w-2xl">
            <h2 className="text-[48px] font-bold mb-3">
              Join the <span className="text-black font-extrabold border-b-5 border-[#E4A251]">3ZERO CLUB</span> Today!
            </h2>
            <p className="text-black text-[18px] mb-6">
              Unlock exclusive access to competitions, networking, and resources that elevate your tech experience.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to='/register' className="px-6 py-2 bg-[#4AAEA3] text-white rounded-[4px] font-medium hover:bg-opacity-90 transition-all">
                Get Started
              </Link>
              <Link to='/login' className="px-6 py-2 border border-[#F0AD4E] text-[#F0AD4E] rounded-[4px] font-medium hover:bg-gray-50 transition-all">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default Banner
  