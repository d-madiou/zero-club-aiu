import React from 'react'
import { FaCalendarAlt, FaInstagram, FaLinkedinIn, FaClock, FaTwitter } from 'react-icons/fa'
import { FaLocationArrow } from 'react-icons/fa6'
import EventsImage from '../assets/images/EventPage.png'
import TechNexusLogo from '../assets/images/TechNexus.svg'

function Events() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl mt-8 font-[Roboto]">
      {/* ======= MAIN CONTENT GRID ======= */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 xl:gap-24">
        
        {/* ======= LEFT SIDE - EVENT IMAGE ======= */}
        <div className="flex justify-center lg:justify-start">
          <div
            className="relative w-full max-w-sm md:max-w-lg lg:max-w-none lg:w-full h-60 md:h-80 lg:h-97 rounded-2xl shadow-lg"
            style={{
              backgroundImage: `url(${EventsImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>

        {/* ======= RIGHT SIDE - EVENT INFORMATION ======= */}
        <div className="space-y-6">
          
          {/* ======= EVENT HEADER ======= */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 leading-tight">
                Cybersecurity & Data Science Workshop
              </h2>
              <span className="bg-teal-500 text-white px-3 py-1 rounded-xl text-sm font-medium w-fit">
                Tech
              </span>
            </div>
            <hr className="border-gray-300" />
          </div>

          {/* ======= EVENT OVERVIEW ======= */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-700">Overview</h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Whether you're looking for a strong team or want to showcase your own, this is where top-performing teams shine.
            </p>
          </div>

          {/* ======= EVENT DETAILS ======= */}
          <div className="space-y-4">
            <div className="space-y-3">
              
              {/* Date */}
              <div className="flex items-center space-x-3">
                <FaCalendarAlt className="text-teal-500 w-5 h-5 flex-shrink-0" />
                <span className="text-gray-700 text-sm md:text-base">29 June - 30 June 2025</span>
              </div>
              
              {/* Time */}
              <div className="flex items-center space-x-3">
                <FaClock className="text-teal-500 w-5 h-5 flex-shrink-0" />
                <span className="text-gray-700 text-sm md:text-base">09:30 AM - 11:30 AM</span>
              </div>
              
              {/* Location */}
              <div className="flex items-center space-x-3">
                <FaLocationArrow className="text-teal-500 w-5 h-5 flex-shrink-0" />
                <span className="text-gray-700 text-sm md:text-base">Auditorium</span>
              </div>
              
            </div>
          </div>

          {/* ======= FOOTER SECTION ======= */}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-6">
            
            {/* ======= SOCIAL MEDIA SECTION ======= */}
            <div className="flex flex-col space-y-3">
              <h4 className="text-sm font-semibold text-gray-700">Follow Us</h4>
              <div className="flex space-x-4">
                <FaLinkedinIn className="text-teal-500 w-5 h-5 hover:text-teal-600 cursor-pointer transition-colors" />
                <FaInstagram className="text-teal-500 w-5 h-5 hover:text-teal-600 cursor-pointer transition-colors" />
                <FaTwitter className="text-teal-500 w-5 h-5 hover:text-teal-600 cursor-pointer transition-colors" />
              </div>
            </div>
            
            {/* ======= HOST INFORMATION ======= */}
            <div className="flex flex-col space-y-3">
              <h4 className="text-sm font-semibold text-gray-700">Hosted By</h4>
              <div className="flex items-center space-x-3">
                <img
                  src={TechNexusLogo}
                  alt="TechNexus Logo"
                  className="w-12 h-12 object-cover rounded-md flex-shrink-0"
                />
                <div className="min-w-0">
                  <h5 className="text-base font-semibold text-gray-800">TechNexus</h5>
                  <p className="text-sm text-gray-500">Tech Team</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Events