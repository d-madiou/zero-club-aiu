import { members } from '../assets/techNexusData.jsx'
import { GalleryImage } from '../assets/techNexusData.jsx'
import TechNexus from '../assets/images/TechNexus.svg'
import { FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

function Team() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl mt-8">
      {/* ======= MAIN CONTENT GRID ======= */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 xl:gap-24">
        
        {/* ======= LEFT SIDE - HERO IMAGE ======= */}
        <div className="flex justify-center lg:justify-start">
          <div
            className="relative w-full max-w-sm md:max-w-lg lg:max-w-none lg:w-full h-60 md:h-80 lg:h-96 rounded-2xl shadow-lg"
            style={{
              backgroundImage: `url(${TechNexus})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>

        {/* ======= RIGHT SIDE - TEAM INFORMATION ======= */}
        <div className="space-y-6">
          {/* Team Title */}
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
              TechNexus
            </h2>
            <hr className="border-gray-300 mb-6" />
          </div>

          {/* ======= MEMBERS SECTION ======= */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-700">Members</h3>
            <div className="space-y-3">
              {members.map((member) => (
                <div key={member.id} className="flex items-center space-x-3">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-10 h-10 rounded-md object-cover flex-shrink-0"
                  />
                  <div className="min-w-0">
                    <p className="font-medium text-sm text-gray-900 truncate">
                      {member.name}
                    </p>
                    <p className="text-xs text-gray-500 truncate">
                      {member.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ======= SOCIAL MEDIA SECTION ======= */}
          <div className="flex justify-center lg:justify-end space-x-4 pt-4">
            <FaLinkedinIn className="text-teal-500 w-5 h-5 hover:text-teal-600 cursor-pointer transition-colors" />
            <FaInstagram className="text-teal-500 w-5 h-5 hover:text-teal-600 cursor-pointer transition-colors" />
            <FaTwitter className="text-teal-500 w-5 h-5 hover:text-teal-600 cursor-pointer transition-colors" />
          </div>
        </div>
      </div>

      {/* ======= OVERVIEW SECTION ======= */}
      <div className="mt-16">
        {/* Overview Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <h3 className="text-xl font-bold text-gray-800">Overview</h3>
          <span className="bg-teal-500 text-white px-3 py-1 rounded text-sm font-medium w-fit">
            New
          </span>
        </div>

        {/* Overview Description */}
        <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 max-w-4xl">
          Whether you're looking for a strong team or want to showcase your own, this is where top-performing teams
          shine. Discover the most innovative and high-achieving groups that are leading the way in their fields!
        </p>

        {/* ======= GALLERY SECTION ======= */}
        <div className="flex flex-col space-y-8 mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {GalleryImage.map((gallery, index) => (
                <div
                  key={index}
                  className="aspect-video bg-gray-200 rounded-md overflow-hidden group"
                >
                  <img
                    src={gallery.gallery || "/placeholder.svg"}
                    alt={`Team activity ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div> 
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {GalleryImage.map((gallery, index) => (
                <div
                  key={index}
                  className="aspect-video bg-gray-200 rounded-md overflow-hidden group"
                >
                  <img
                    src={gallery.gallery || "/placeholder.svg"}
                    alt={`Team activity ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Team