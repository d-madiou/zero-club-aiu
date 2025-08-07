import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import { Link } from "react-router-dom"
import LogoImage from "../assets/images/logo3zero.png"

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState({})
  const [loginMessage, setLoginMessage] = useState({ text: "", type: "" })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  // Basic client-side validation
  const validateForm = () => {
    const newErrors = {}
    if (!formData.email) {
      newErrors.email = "Email is required."
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid."
    }
    if (!formData.password) {
      newErrors.password = "Password is required."
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters."
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (validateForm()) {
      console.log("Login data:", formData)
      // Simulate a successful login for frontend testing
      setLoginMessage({ text: "Login successful!", type: "success" })
      // In a real app, you would make an API call here.
      // E.g., api.post('/login', formData).then(...)
    } else {
      setLoginMessage({ text: "Please correct the errors in the form.", type: "error" })
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-[Roboto]">
      <div className="max-w-md w-full p-8 space-y-8 bg-white rounded-xl shadow-lg">
        <div>
          <img className="mx-auto h-12 w-auto" src={LogoImage} alt="Club Hub Logo" />
          <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
            Log In to Your Account
            <span className="block w-16 h-1 bg-[#F0AD4E] mt-2 mx-auto"></span>
          </h2>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {loginMessage.text && (
            <div
              className={`p-4 rounded-md text-sm ${
                loginMessage.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
              }`}
            >
              {loginMessage.text}
            </div>
          )}
          <div className="space-y-6">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-[#4AAEA3] focus:border-[#4AAEA3] sm:text-sm"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleInputChange}
              />
              {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  className="appearance-none relative block w-full px-3 py-2 pr-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-[#4AAEA3] focus:border-[#4AAEA3] sm:text-sm"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-gray-400" />
                  ) : (
                    <Eye className="h-4 w-4 text-gray-400" />
                  )}
                </button>
              </div>
              {errors.password && <p className="mt-2 text-sm text-red-600">{errors.password}</p>}

              {/* Forgot Password Link */}
              <div className="mt-2 text-right">
                <a href="#" className="text-sm text-[#F0AD4E] hover:text-[#e09c3a] font-medium">
                  Forgot Password?
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
