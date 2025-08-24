"use client"

import { useState } from "react"
import { Filter } from "lucide-react"
import { FaRotateLeft } from "react-icons/fa6"

function Members() {
  const [currentPage, setCurrentPage] = useState(1)
  const [nationality, setNationality] = useState("Nationality")
  const [program, setProgram] = useState("Program")
  const [yearOfGraduation, setYearOfGraduation] = useState("Year of Graduation")

  const membersData = Array.from({ length: 78 }, (_, i) => ({
    studentId: `202312${String(34 + i).padStart(2, "0")}`,
    program: "Computer Science",
    name: "Ahmad Al-Faraj",
    nationality: "Omani",
    yearOfGraduation: "2026 - 2 - 18",
    status: "Business",
  }))

  const itemsPerPage = 10
  const totalPages = Math.ceil(membersData.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const currentMembers = membersData.slice(startIndex, startIndex + itemsPerPage)

  return (
    <div className="bg-white p-6 font-[Roboto]">
      <div className="max-w-7xl mx-auto">
        {/* Header with Filters */}
        <div className="flex justify-between items-center mb-6 ">
            <div>
            <h1 className="text-2xl font-bold text-gray-800">
                Members
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

        {/* Members Table with Blue Border */}
        <div className="border-2 border-[#4AAEA3] rounded-lg bg-white">
          {/* Table Header */}
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800">All Members</h2>
          </div>

          {/* Table Content */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Student ID</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Program</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Name</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Nationality</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Year of Graduation</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {currentMembers.map((member, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-900">{member.studentId}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{member.program}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{member.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{member.nationality}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{member.yearOfGraduation}</td>
                    <td className="px-6 py-4 text-sm">
                      <span className="px-3 py-1 text-gray-700 rounded-full text-xs font-medium">
                        {member.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200">
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

            <div className="text-sm text-gray-600">Showing 1-10 of 78</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Members
