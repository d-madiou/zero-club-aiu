import { ChevronDown } from 'lucide-react'
import { default as React, useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import LogoImage from "../assets/images/logo3zero.png"
import Mustafa from "../assets/images/Mustapha.png"

function NavBar() {
  // This is a placeholder state to simulate a logged-in user.
  // In a real application, this would come from an authentication context or a global state management library.
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Set to true to test the logged-in view.

  // Sample user data
  const user = {
    name: "Mustafa Yahya",
    role: "student",
    profilePicture: Mustafa,
  };

  const languages = [
    {code: 'en', name: "English"},
    {code: 'fr', name: 'Francais'},
    {code: 'ar', name: 'العربية'},
    {code: 'es', name: 'Español'},
    {code: 'de', name: 'Deutsch'},
    {code: 'it', name: 'Italiano'},
    {code: 'pt', name: 'Português'},
    {code: 'ja', name: '日本語'},
  ]

  const [selectedLanguage, setSelectedLanguage] = useState(languages[0])
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setIsLanguageOpen(!isLanguageOpen)
  }

  const selectLanguage = (language) => {
    setSelectedLanguage(language)
    setIsLanguageOpen(false)
  }

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };
  
  return (
    <nav className='flex items-center justify-between font-[Roboto] py-3 px-4 mr-5 ml-5'>
      <div className='flex items-center'>
        <img src={LogoImage} alt="logo" className='h-8 md:h-12'/>
      </div>

      {/* Mobile menu and functionality */}
      <div className='md:hidden flex items-center'>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className='text-black'>
          {isMobileMenuOpen ? <FaTimes/> : <FaBars />}
        </button>
        {isMobileMenuOpen && (
          <div className='absolute top-10 left-0 w-full bg-white shadow-lg p-4 z-50'>
            <Link to="/" className='block py-2' onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <Link to="/team" className='block py-2' onClick={() => setIsMobileMenuOpen(false)}>Teams</Link>
            <Link to="/events" className='block py-2' onClick={() => setIsMobileMenuOpen(false)}>Events</Link>

            {/* Mobile menu conditional rendering for logged-in user */}
            <div className='flex items-center mt-2 space-x-4'>
              {isLoggedIn ? (
                <>
                  <Link to="/createclub" className="block px-4 py-2 border border-[#4AAEA3] text-[#4AAEA3] rounded-md font-medium cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}>
                    Create a Club
                  </Link>
                  <div className="relative">
                    <img src={user.profilePicture} alt="Profile" className="h-10 w-10 rounded-full cursor-pointer" onClick={toggleProfileMenu} />
                    {isProfileMenuOpen && (
                      <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                        <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100" onClick={() => { setIsProfileMenuOpen(false); setIsMobileMenuOpen(false); }}>
                          View Profile
                        </Link>
                        <button className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100" onClick={() => { setIsLoggedIn(false); setIsProfileMenuOpen(false); setIsMobileMenuOpen(false); }}>
                          Logout
                        </button>
                      </div>
                    )}
                  </div>
                  {/* Language dropdown in mobile */}
                  <div className="relative ml-4">
                    <div className="flex items-center cursor-pointer" onClick={toggleLanguage}>
                      <span className="font-medium">{selectedLanguage.code.toUpperCase()}</span>
                      <ChevronDown className="h-4 w-4 ml-1" />
                    </div>
                    {isLanguageOpen && (
                      <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                        {languages.map((language) => (
                          <div 
                            key={language.code}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => selectLanguage(language)}
                          >
                            {language.name}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <>
                  <Link to="/login" className='px-8 py-2 border border-[#F0AD4E] rounded-md font-medium cursor-pointer' onClick={() => setIsMobileMenuOpen(false)}>Login</Link>
                  <Link to="/register" className='px-8 py-2 bg-[#4AAEA3] text-white rounded-md font-medium cursor-pointer' onClick={() => setIsMobileMenuOpen(false)}>Register</Link>
                  <select className='border border-gray-300 rounded-md px-1 py-2' value={selectedLanguage.code} onChange={(e) => selectLanguage(languages.find(l => l.code === e.target.value))}>
                    {languages.map((lang) => (
                      <option key={lang.code} value={lang.code}>{lang.name}</option>
                    ))}
                  </select>
                </>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Desktop Menu */}
      <div className='hidden md:flex items-center space-x-10'>
        <Link to="/" className='font-medium text-black hover:text-[#4AAEA3]'>Home</Link>
        <Link to="/team" className='font-medium text-black hover:text-[#4AAEA3]'>Teams</Link>
        <Link to="/events" className='font-medium text-black hover:text-[#4AAEA3]'>Events</Link>
      </div>

      {/* Desktop Conditional rendering for logged-in user */}
      <div className='hidden md:flex items-center space-x-4'>
        {isLoggedIn ? (
          <>
            <Link to="/createclub" className="px-4 py-2 border border-[#4AAEA3] text-[#4AAEA3] rounded-md font-medium cursor-pointer transition-colors hover:bg-[#4AAEA3] hover:text-white">
              Create a Club
            </Link>
            <div className="relative">
              <div className="flex items-center cursor-pointer" onClick={toggleProfileMenu}>
                <img src={user.profilePicture} alt="Profile" className="h-10 w-10 rounded-full" />
                <span className="ml-2 font-medium text-gray-800">{user.name}</span>
                <ChevronDown className="h-4 w-4 ml-1" />
              </div>
              {isProfileMenuOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                  <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setIsProfileMenuOpen(false)}>
                    View Profile
                  </Link>
                  <button className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100" onClick={() => { setIsLoggedIn(false); setIsProfileMenuOpen(false); }}>
                    Logout
                  </button>
                </div>
              )}
            </div>
            {/* Language dropdown */}
            <div className="relative">
              <div className="flex items-center ml-4 cursor-pointer" onClick={toggleLanguage}>
                <span className="font-medium">{selectedLanguage.code.toUpperCase()}</span>
                <ChevronDown className="h-4 w-4 ml-1" />
              </div>
              {isLanguageOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                  {languages.map((language) => (
                    <div 
                      key={language.code}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => selectLanguage(language)}
                    >
                      {language.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </>
        ) : (
          <>
            <Link to="/login" className='px-8 py-2 border border-[#F0AD4E] rounded-md font-medium cursor-pointer transition-colors hover:bg-[#F0AD4E] hover:text-white'>Login</Link>
            <Link to="/register" className='px-8 py-2 bg-[#4AAEA3] text-white rounded-md font-medium cursor-pointer transition-colors hover:bg-[#3d9a91]'>Register</Link>
            <div className="relative">
              <div className="flex items-center ml-4 cursor-pointer" onClick={toggleLanguage}>
                <span className="font-medium">{selectedLanguage.code.toUpperCase()}</span>
                <ChevronDown className="h-4 w-4 ml-1" />
              </div>
              {isLanguageOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                  {languages.map((language) => (
                    <div 
                      key={language.code}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => selectLanguage(language)}
                    >
                      {language.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </>
        )}
      </div>       
    </nav>
  )
}

export default NavBar
