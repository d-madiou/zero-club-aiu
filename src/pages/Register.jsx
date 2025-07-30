import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import { Link } from "react-router-dom"

function Register() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "",
    dateOfBirth: "",
    studentId: "",
    password: "",
    confirmPassword: "",
    country: "",
  })

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

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
            Create Account
            <span className="block w-26 h-1 bg-[#F0AD4E] mt-2"></span>
          </h2>
        </div>

        <form className="mt-8 space-y-6 " onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                First Name <span className="text-[#EF4444]">*</span>
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-[#4AAEA3] focus:border-[#4AAEA3] focus:z-10 sm:text-sm"
                placeholder="Enter your first name"
                value={formData.firstName}
                onChange={handleInputChange}
              />
            </div>

            {/* Last Name */}
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                Last Name <span className="text-[#EF4444]">*</span>
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-[#4AAEA3] focus:border-[#4AAEA3] focus:z-10 sm:text-sm"
                placeholder="Enter your last name"
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email <span className="text-[#EF4444]">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-[#4AAEA3] focus:border-[#4AAEA3] focus:z-10 sm:text-sm"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone <span className="text-[#EF4444]">*</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-[#4AAEA3] focus:border-[#4AAEA3] focus:z-10 sm:text-sm"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>

            {/* Gender */}
            <div>
              <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-2">
                Gender <span className="text-[#EF4444]">*</span>
              </label>
              <select
                id="gender"
                name="gender"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 text-gray-900 rounded-md focus:outline-none focus:ring-[#4AAEA3] focus:border-[#4AAEA3] focus:z-10 sm:text-sm"
                value={formData.gender}
                onChange={handleInputChange}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
                <option value="prefer-not-to-say">Prefer not to say</option>
              </select>
            </div>

            {/* Date of Birth */}
            <div>
              <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700 mb-2">
                Date of Birth
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

            {/* Student ID */}
            <div>
              <label htmlFor="studentId" className="block text-sm font-medium text-gray-700 mb-2">
                Student ID
              </label>
              <input
                id="studentId"
                name="studentId"
                type="text"
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-[#4AAEA3] focus:border-[#4AAEA3] focus:z-10 sm:text-sm"
                placeholder="Enter your student ID"
                value={formData.studentId}
                onChange={handleInputChange}
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password <span className="text-[#EF4444]">*</span>
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  className="appearance-none relative block w-full px-3 py-2 pr-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-[#4AAEA3] focus:border-[#4AAEA3] focus:z-10 sm:text-sm"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-gray-400" />
                  ) : (
                    <Eye className="h-4 w-4 text-gray-400" />
                  )}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                Confirm Password <span className="text-[#EF4444]">*</span>
              </label>
              <div className="relative">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  required
                  className="appearance-none relative block w-full px-3 py-2 pr-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-[#4AAEA3] focus:border-[#4AAEA3] focus:z-10 sm:text-sm"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-4 w-4 text-gray-400" />
                  ) : (
                    <Eye className="h-4 w-4 text-gray-400" />
                  )}
                </button>
              </div>
            </div>

            {/* Country */}
            <div>
              <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
                Country <span className="text-[#EF4444]">*</span>
              </label>
              <select
                id="country"
                name="country"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 text-gray-900 rounded-md focus:outline-none focus:ring-[#4AAEA3] focus:border-[#4AAEA3] focus:z-10 sm:text-sm"
                value={formData.country}
                onChange={handleInputChange}
              >
                <option value="">Select Country</option>
                <option value="us">United States</option>
                <option value="uk">United Kingdom</option>
                <option value="ca">Canada</option>
                <option value="au">Australia</option>
                <option value="de">Germany</option>
                <option value="fr">France</option>
                <option value="in">India</option>
                <option value="jp">Japan</option>
                <option value="cn">China</option>
                <option value="br">Brazil</option>
              </select>
            </div>
          </div>

          <div className="mt-8">
            <Link to="/login"
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium  text-white bg-[#4A8F8F] hover:bg-[#3d9a91] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4AAEA3] transition-colors"
            >
              Register
            </Link>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="font-medium text-[#F0AD4E] hover:text-[#e09c3a]">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
