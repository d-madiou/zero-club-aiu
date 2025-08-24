"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Users, Briefcase, Filter } from "lucide-react"
import TechNexus from '../assets/images/nexus.png'
import { FaRotateLeft } from "react-icons/fa6"

function AllClubs() {
  const [currentPage, setCurrentPage] = useState(1)
  const [nationality, setNationality] = useState("Nationality")
  const [program, setProgram] = useState("Program")
  const [yearOfGraduation, setYearOfGraduation] = useState("Year of Graduation")
  
  const navigate = useNavigate()

  // Dummy data for clubs
  const allClubsData = Array.from({ length: 78 }, (_, i) => ({
    id: i + 1,
    logo: "/placeholder.svg?height=64&width=64",
    name: "TechNexus",
    category: "Tech",
    members: "5/5 Members",
  }))

  const itemsPerPage = 9
  const totalPages = Math.ceil(allClubsData.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const currentClubs = allClubsData.slice(startIndex, startIndex + itemsPerPage)

  const handleClubClick = (clubId) => {
    navigate(`/club-details/${clubId}`)
  }

  return (
    <div className="bg-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header with Filters */}
        <div className="flex justify-between items-center mb-6 ">
            <div>
            <h1 className="text-2xl font-bold text-gray-800">
                All clubs
                <span className="block w-16 h-1 bg-[#F0AD4E] mt-1"></span>
            </h1>
            </div>

            {/* Filter Controls */}
            <div className="flex items-center space-x-4 border border-[#46A4A3] px-4 py-1 rounded-md">
            <div className="flex items-center">
                <Filter className="w-4 h-4 text-gray-500 mr-2" />
                <span className="text-sm text-gray-600">Filter By</span>
            </div>

            <select
                value={nationality}
                onChange={(e) => setNationality(e.target.value)}
                className="px-3 py-2 border-l border-[#46A4A3] text-sm focus:outline-none focus:border-[#4AAEA3]"
            >
                <option>Nationality</option>
                <option>Guinea</option>
                <option>Mauritania</option>
                <option>Myanmar</option>
                <option>Nigeria</option>
                <option>Algeria</option>
            </select>

            <select
                value={program}
                onChange={(e) => setProgram(e.target.value)}
                className="px-3 py-2 border-l border-[#46A4A3] text-sm focus:outline-none focus:border-[#4AAEA3]"
            >
                <option>Program</option>
                <option>SCI</option>
                <option>BBA</option>
                <option>Economics</option>
                <option>LC</option>
                <option>Foundation</option>
            </select>

            <select
                value={yearOfGraduation}
                onChange={(e) => setYearOfGraduation(e.target.value)}
                className="px-3 py-2 border-l border-r border-[#46A4A3] text-sm focus:outline-none focus:border-[#4AAEA3]"
            >
                <option>Year of Graduation</option>
                <option>2024</option>
                <option>2025</option>
                <option>2026</option>
                <option>2027</option>
            </select>

            <div className="flex items-center justify-center">
                <FaRotateLeft className="text-red-500"/>
                <button className="ml-2 text-red-500 rounded-md text-sm cursor-pointer transition-colors">
                    Reset Filter
                </button>
            </div>
            </div>
        </div>

        {/* Clubs Grid with Blue Border */}
        <div className="border-2 border-[#4AAEA3] rounded-lg bg-white p-6">
          {/* Clubs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentClubs.map((club) => (
              <div
                key={club.id}
                onClick={() => handleClubClick(club.id)}
                className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow cursor-pointer hover:bg-gray-50"
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-black rounded-lg p-2">
                    <img src={TechNexus} alt={`${club.name} Logo`} className="w-16 h-16 rounded-md object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-800">{club.name}</h3>
                    <div className="flex items-center space-x-2 text-gray-500 mt-1">
                      <Briefcase className="w-4 h-4" />
                      <span className="text-sm">{club.category}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-500 mt-1">
                      <Users className="w-4 h-4" />
                      <span className="text-sm">{club.members}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center space-x-2">
              {/* Pagination dots */}
              <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      currentPage === page ? "bg-[#4AAEA3]" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="text-sm text-gray-600">Showing 1-09 of 78</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllClubs