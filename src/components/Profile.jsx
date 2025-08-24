import { useState } from "react"
import { ChevronDown } from "lucide-react"
import Mustafa from "../assets/images/Mustapha.png"
import { FaPen } from "react-icons/fa6"

function Profile() {
  const [formData, setFormData] = useState({
    fullName: "Mustafa Yahya",
    studentId: "20201234",
    email: "Gamil@gmail.com",
    programme: "Computer Science",
    nationality: "Mauritania",
    intake: "25 January 2020",
    schoolCentre: "Computer Science",
    expectedGraduation: "25 January 2027",
  })

  const [isEditing, setIsEditing] = useState(false)

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex items-center justify-center font-[Roboto]">
      <div className="bg-white rounded-2xl border-1 border-[#46A4A3] p-8 w-full max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-xl font-semibold text-gray-800">
            Student Profile
            <span className="block w-20 h-0.5 bg-[#4AAEA3] mt-1"></span>
          </h1>
        </div>

        <div className="flex gap-8">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative">
              <img
                src={Mustafa}
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover"
              />
              <div className="absolute bottom-2 right-2 w-6 h-6 bg-[#4AAEA3] rounded-full flex items-center justify-center">
                {/* <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 5V19M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg> */}
                <FaPen className="text-white"/>
              </div>
            </div>
          </div>

          {/* Form Fields */}
          <div className="flex-1 grid grid-cols-2 gap-x-12 gap-y-6">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                value={formData.fullName}
                onChange={(e) => handleInputChange("fullName", e.target.value)}
                disabled={!isEditing}
                className="w-full px-3 py-2 text-gray-300 bg-transparent border rounded-xl border-gray-200 focus:border-[#4AAEA3] focus:outline-none disabled:bg-transparent"
              />
            </div>

            {/* Student ID */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Student ID</label>
              <input
                type="text"
                value={formData.studentId}
                onChange={(e) => handleInputChange("studentId", e.target.value)}
                disabled={!isEditing}
                className="w-full px-3 py-2 text-gray-300 bg-transparent border rounded-xl border-gray-100 focus:border-[#4AAEA3] focus:outline-none disabled:bg-transparent"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                disabled={!isEditing}
                className="w-full px-3 py-2 text-gray-300 bg-transparent border rounded-xl border-gray-200 focus:border-[#4AAEA3] focus:outline-none disabled:bg-transparent"
              />
            </div>

            {/* Programme */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Programme</label>
              <div className="relative">
                <select
                  value={formData.programme}
                  onChange={(e) => handleInputChange("programme", e.target.value)}
                  disabled={!isEditing}
                  className="w-full px-3 py-2 text-gray-300 bg-transparent border rounded-xl border-gray-200 focus:border-[#4AAEA3] focus:outline-none disabled:bg-transparent appearance-none"
                >
                  <option value="Computer Science">Computer Science</option>
                  <option value="Business Administration">Business Administration</option>
                  <option value="Engineering">Engineering</option>
                </select>
                <ChevronDown
                  size={16}
                  className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                />
              </div>
            </div>

            {/* Nationality */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Nationality</label>
              <div className="relative">
                <select
                  value={formData.nationality}
                  onChange={(e) => handleInputChange("nationality", e.target.value)}
                  disabled={!isEditing}
                  className="w-full px-3 py-2 text-gray-300 bg-transparent border rounded-xl border-gray-200 focus:border-[#4AAEA3] focus:outline-none disabled:bg-transparent appearance-none"
                >
                  <option value="Mauritania">Mauritania</option>
                  <option value="Oman">Oman</option>
                  <option value="UAE">UAE</option>
                  <option value="Saudi Arabia">Saudi Arabia</option>
                </select>
                <ChevronDown
                  size={16}
                  className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                />
              </div>
            </div>

            {/* Intake */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Intake</label>
              <div className="relative">
                <select
                  value={formData.intake}
                  onChange={(e) => handleInputChange("intake", e.target.value)}
                  disabled={!isEditing}
                  className="w-full px-3 py-2 text-gray-300 bg-transparent border rounded-xl border-gray-200 focus:border-[#4AAEA3] focus:outline-none disabled:bg-transparent appearance-none"
                >
                  <option value="25 January 2020">25 January 2020</option>
                  <option value="25 January 2021">25 January 2021</option>
                  <option value="25 January 2022">25 January 2022</option>
                </select>
                <ChevronDown
                  size={16}
                  className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                />
              </div>
            </div>

            {/* School/Centre */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">School / Centre</label>
              <div className="relative">
                <select
                  value={formData.schoolCentre}
                  onChange={(e) => handleInputChange("schoolCentre", e.target.value)}
                  disabled={!isEditing}
                  className="w-full px-3 py-2 text-gray-300 bg-transparent border rounded-xl border-gray-200 focus:border-[#4AAEA3] focus:outline-none disabled:bg-transparent appearance-none"
                >
                  <option value="Computer Science">Computer Science</option>
                  <option value="Business Studies">Business Studies</option>
                  <option value="Engineering">Engineering</option>
                </select>
                <ChevronDown
                  size={16}
                  className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                />
              </div>
            </div>

            {/* Expected year of Graduation */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Expected year of Graduation</label>
              <div className="relative">
                <select
                  value={formData.expectedGraduation}
                  onChange={(e) => handleInputChange("expectedGraduation", e.target.value)}
                  disabled={!isEditing}
                  className="w-full px-3 py-2 text-gray-300 bg-transparent border rounded-xl border-gray-300 focus:border-[#4AAEA3] focus:outline-none disabled:bg-transparent appearance-none"
                >
                  <option value="25 January 2027">25 January 2027</option>
                  <option value="25 January 2026">25 January 2026</option>
                  <option value="25 January 2025">25 January 2025</option>
                </select>
                <ChevronDown
                  size={16}
                  className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Edit Button */}
        <div className="flex justify-end mt-8">
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="bg-[#46A4A3] hover:bg-[#3d9a91] text-white px-8 py-2 rounded-md font-medium transition-colors"
          >
            {isEditing ? "Save" : "Edit"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Profile
