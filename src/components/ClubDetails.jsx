"use client"

import { useState } from "react"
import { Filter, Linkedin, Instagram, Mail, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react"
import TechNexus from '../assets/images/nexus.png'
import { members } from "../assets/techNexusData"
import { FaRotateLeft } from "react-icons/fa6"

function ClubDetails() {
  const [nationality, setNationality] = useState("Nationality")
  const [program, setProgram] = useState("Programs")
  const [yearOfGraduation, setYearOfGraduation] = useState("Year of Graduation")

  const historyData = [
    { event: "Workshop", date: "2025 - 2 - 18", place: "Auditorium" },
    { event: "Workshop", date: "2025 - 2 - 18", place: "Auditorium" },
    { event: "Workshop", date: "2025 - 2 - 18", place: "Auditorium" },
    { event: "Workshop", date: "2025 - 2 - 18", place: "Auditorium" },
    { event: "Workshop", date: "2025 - 2 - 18", place: "Auditorium" },
  ]

  const leader = members.find((member) => member.role === "Leader")

  return (
    <div className="bg-white min-h-screen font-[Roboto]">
      <div className="flex justify-between items-center mb-6 ">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              TechNexus
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

      <main className="p-8 bg-white">
        {/* Club Logo and Info Section - Horizontal Layout */}
        <div className="flex items-start space-x-8 mb-8">
          <div className="flex justify-center lg:justify-start">
              <img src={TechNexus} alt="TechNexus Logo" className="relative w-full max-w-sm md:max-w-lg lg:max-w-none lg:w-120 h-40 md:h-80 lg:h-86 rounded-xl" />
            </div>
          <div className="flex-1 pt-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">TechNexus</h2>
            <hr className="mb-4 text-gray-400"/>
            <div className="mb-6">
              <h3 className="text-[24px] font-semibold text-black mb-2">Overview</h3>
              <p className="text-[#656565] text-[18px] leading-relaxed max-w-lg">
                Whether you're looking for a strong team or want to showcase your own, this is where top-performing teams shine.
              </p>
            </div>
            <div className="flex items-center justify-between max-w-lg mt-20">
              <span className="bg-[#46A4A3] text-white text-sm font-medium px-[8px] py-[4px]">Tech</span>
              <div className="flex items-center space-x-4 text-[#46A4A3]">
                <Mail size={20} className="cursor-pointer hover:text-teal-800" />
                <Linkedin size={20} className="cursor-pointer hover:text-teal-800" />
                <Instagram size={20} className="cursor-pointer hover:text-teal-800" />
              </div>
            </div>
          </div>
        </div>

        {/* Members and History Section - Side by Side */}
        <div className="flex gap-8">
          {/* Left Side - Members and Key Person */}
          <div className="w-80 space-y-6">
            {/* Members Section */}
            <div className="bg-white rounded-lg">
              <div className="p-6">
                <h3 className="text-lg font-semibold text[#272727] mb-4">Members</h3>
                <div className="space-y-4">
                  {members.map((member, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <img
                        src={member.image|| "/api/placeholder/40/40"}
                        alt={member.image}
                        className="w-10 h-10 rounded-md object-cover"
                      />
                      <div>
                        <p className="font-medium text-sm text-[#272727]">{member.name}</p>
                    <p className="text-xs text-[#272727]">{member.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            
              <div className="p-6">
                <h3 className="text-lg font-semibold text-[#272727] mb-4">Key person</h3>
                {leader && (
                  <div className="flex items-center space-x-3">
                    <img
                      src={leader.image || "/api/placeholder/40/40"}
                      alt={leader.name}
                      className="w-10 h-10 rounded-md object-cover"
                    />
                    <div>
                      <p className="font-medium text-sm text-[#272727]">{leader.name}</p>
                      <p className="text-xs text-[#272727]">{leader.role}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Side - History Table */}
          <div className="flex-1 bg-white rounded-lg border border-[#46A4A3] overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800">History</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider">Events</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider">Place</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider">Detail</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {historyData.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-gray-600 font-medium">{item.event}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-600">{item.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-600">{item.place}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button className="border border-[#46A4A3] rounded px-3 py-1 text-xs text-[#46A4A3] hover:bg-teal-50 font-medium">
                          Detail
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex justify-center items-center py-4 border-t border-gray-200">
              <div className="flex items-center space-x-6">
                <button className="text-gray-400 hover:text-gray-700">
                  <ChevronLeft size={20} />
                </button>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                  <div className="w-2 h-2 rounded-full bg-[#46A4A3]"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                </div>
                <button className="text-gray-400 hover:text-gray-700">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ClubDetails