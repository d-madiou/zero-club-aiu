import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import { Link } from "react-router-dom"

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const [showPassword, setShowPassword] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Login data:", formData)
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-[Roboto]">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            Log In
            <span className="block w-16 h-1 bg-[#F0AD4E] mt-2"></span>
          </h2>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-6">
            {/* Email */}
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

              {/* Forgot Password Link */}
              <div className="mt-2">
                <a href="#" className="text-sm text-[#F0AD4E] hover:text-[#e09c3a] font-medium">
                  Forgot Password
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#4A8F8F] hover:bg-[#3d9a91] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4AAEA3] transition-colors"
            >
              Log In
            </button>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <Link to="/register" className="font-medium text-[#F0AD4E] hover:text-[#e09c3a]">
                Register Now
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
