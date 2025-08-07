import { Link } from 'react-router-dom'
import About from "../components/About"
import Banner from "../components/Banner"
import Blog from "../components/Blog"
import EventInfo from "../components/EventInfo"
import EventType from "../components/EventType"


function Home() {
  return (
    <div className="flex flex-col min-h-screen font-[roboto] ">

      {/* Hero Section */}
      <div className="relative h-[500px] md:h-[700px] w-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://i.pinimg.com/736x/47/7e/aa/477eaaecca42cf679a8ba7c05a09b457.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative h-full flex flex-col items-center justify-center text-center px-4 md:px-12">
          <h1 className="text-3xl md:text-[56px] font-bold text-white mb-9">
            A step towards the future of <br />
            <span className="relative">
              innovation!
              <span className="absolute bottom-2 left-0 w-full h-2 bg-[#F0AD4E]"></span>
            </span>
          </h1>

          <p className="text-white text-[18px] md:text-base max-w-2xl mb-8">
            Join us for an exciting journey where it meets creativity. Register now to connect, compete, and collaborate
            with like-minded innovators.
          </p>

          <div className="flex space-x-4">
            <Link to='/register' className="px-7 py-2 bg-[#4A8F8F] text-white rounded-md font-medium hover:bg-opacity-90 transition-all">
              Get Started
            </Link>
            <Link to='/login' className="px-7 py-2 bg-transparent text-white border border-[#E4A251] rounded-md font-medium hover:bg-opacity-30 transition-all">
              Login
            </Link>
          </div>
        </div>
      </div>
      
      <About />
      
      <Banner />
      
      <EventInfo /> 
     
       <EventType />
      
      <Blog />
      
      <div className="bg-[#46A4A3] font-[Roboto] mt-16 pt-6 pb-6">
        <div className="container mx-auto px-4 py-10 max-w-7xl">
          <div className=" text-center flex items-center flex-col">
            <h2 className="text-[48px] font-bold text-white mb-4">
               Join the Excitement Today!
            </h2>
            <p className="text-white text-[18px] mb-6">
              Create or join a team and dive into the thrilling world of tech competitions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to='/register' className="px-6 py-2 bg-white text-[#46A4A3] rounded-[4px] font-medium hover:bg-opacity-90 transition-all">
                Get Started
                </Link>
              <Link to='/login' className="px-8 py-2 border border-white text-white rounded-[4px] font-medium hover:bg-gray-50 hover:text-black transition-all">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
      </div>
  )
}

export default Home
