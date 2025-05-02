import { clubs } from "../assets/techNexusData.jsx"

//all values and colors are coming from the figma design
const About = () => {
  return (
    <div className="container mx-auto px-4 py-10 max-w-7xl mt-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/*this is the content on the left */}
        <div className="relative md:top-25">
          <div>
            <p className="text-[16px] font-[Roboto]">Top Performing Teams</p>
          </div>
          <h2 className="text-[48px] font-bold mb-4">
            Join the{" "}
            <span className="relative">
              Elite<span className="absolute bottom-2 left-0 w-full h-2 bg-[#4AAEA3]"></span>
            </span>{" "}
            Teams Making an Impact
          </h2>
          <p className="text-[18px] text-gray-700 mb-4">
            Whether you're looking for a strong team or want to showcase your own, this is where top-performing teams
            shine. Discover the most innovative and high-achieving groups that are leading the way in their fields!
          </p>
        </div>
        {/*this is the content on the right */}
        <div className="col-span-1 md:col-span-2 md:ml-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* this is the card clubs */}
            {clubs.map((club) => (
              <div key={club.id} className="border w-[360px] h-[272px] md:w-[390px] md:h-[292px] border-black rounded-[20px] p-6">
                <div className="flex justify-between mb-2">
                  <span className="font-bold">{club.id}</span>
                  <span className="text-black border-b-5 border-[#E4A251] font-medium">{club.category}</span>
                </div>
                <div>
                  <img
                    src={club.logo || "/placeholder.svg"}
                    alt={club.name}
                    className="w-[200px] h-[120px] object-contain mt-6"
                  />
                </div>
                <div className="border-t-3 border-black mt-4 pt-4">
                  <h3 className="font-medium">{club.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
