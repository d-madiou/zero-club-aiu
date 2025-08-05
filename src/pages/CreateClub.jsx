import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import { Link } from "react-router-dom"
import keyPerson from "../components/members/keyPerson"

function CreateClub() {
     const [formData, setFormData] = useState({
        clubID: "",
        clubName: "",
        dateOfRegistration: "",
        cluster: "",
        advisor: "",
      })
    const[showConfirmPassword, setShowConfirmPassword] = useState(false);
    const[showPassword, setShowPassword] = useState(false);

    const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Registration data:", formData)
  }
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-[Roboto]">
          <div className="max-w-2xl w-full space-y-8">
            <div className="">
              <h2 className="text-3xl font-bold text-gray-900">
                Add Your Club
                <span className="block w-26 h-1 bg-[#F0AD4E] mt-2"></span>
              </h2>
            </div>
    
            <form className="mt-8 space-y-6 " onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    ClubID <span className="text-[#EF4444]">*</span>
                  </label>
                  <input
                    id="clubid"
                    name="ClubID"
                    type="text"
                    required
                    className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-[#4AAEA3] focus:border-[#4AAEA3] focus:z-10 sm:text-sm"
                    placeholder="Enter your ClubID"
                    value={formData.firstName}
                    onChange={handleInputChange}
                  />
                </div>
    
                {/* Last Name */}
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Club Name <span className="text-[#EF4444]">*</span>
                  </label>
                  <input
                    id="clubName"
                    name="clubName"
                    type="text"
                    required
                    className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-[#4AAEA3] focus:border-[#4AAEA3] focus:z-10 sm:text-sm"
                    placeholder="Enter your club name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                </div>
    
                {/* Date of Birth */}
                <div>
                  <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700 mb-2">
                    Date of Registration
                  </label>
                  <input
                    id="dateOfBirth"
                    name="dateOfBirth"
                    type="date"
                    className="appearance-none relative block w-full px-3 py-2 border border-gray-300 text-gray-900 rounded-md focus:outline-none focus:ring-[#4AAEA3] focus:border-[#4AAEA3] focus:z-10 sm:text-sm"
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                  />
                </div>
    
                {/* Password */}
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                    Cluster <span className="text-[#EF4444]">*</span>
                  </label>
                  <div className="relative">
                    <input
                      id="cluster"
                      name="cluster"
                      type="text"
                      required
                      className="appearance-none relative block w-full px-3 py-2 pr-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-[#4AAEA3] focus:border-[#4AAEA3] focus:z-10 sm:text-sm"
                      placeholder="Enter your password"
                      value={formData.cluster}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                    Advisor <span className="text-[#EF4444]">*</span>
                  </label>
                  <div className="relative">
                    <input
                      id="advisor"
                      name="advisor"
                      type="text"
                      required
                      className="appearance-none relative block w-full px-3 py-2 pr-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-[#4AAEA3] focus:border-[#4AAEA3] focus:z-10 sm:text-sm"
                      placeholder="Enter your password"
                      value={formData.advisor}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <keyPerson />
    
              </div>
    
              <div className="mt-8">
                <Link to="/login"
                  type="submit"
                  className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium  text-white bg-[#4A8F8F] hover:bg-[#3d9a91] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4AAEA3] transition-colors"
                >
                  Register
                </Link>
              </div>
            </form>
          </div>
        </div>
  )
}

export default CreateClub
