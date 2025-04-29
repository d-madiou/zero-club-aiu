import { ChevronDown } from 'lucide-react'
import { default as React, useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import LogoImage from "../assets/images/logo3zero.png"


function NavBar() {
    //this is the dictionary of the languages that we are going to use in the language selector
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
  //let's define the state of the selected language and the mobile menu
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0])
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)

  const toggleLanguage = () => {
    setIsLanguageOpen(!isLanguageOpen)
  }

  //this is the function that will be called when we select a language
  const selectLanguage = (language) => {
    setSelectedLanguage(language)
    setIsLanguageOpen(false)
  }
  return (
    <nav className='flex items-center justify-between font-[Roboto] py-3 px-4 mr-5 ml-5'>
      <div className='flex items-center'>
        <img src={LogoImage} alt="logo" className='h-8 md:h-12'/>
      </div>
      {/* This is the mobile menu with its funtionality */}
       <div className='md:hidden flex items-center'>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className='text-black'>
          {isMobileMenuOpen ? <FaTimes/> : <FaBars />}
        </button>
        {isMobileMenuOpen && (
          <div className='absolute top-16 left-0 w-full bg-white shadow-lg p-4 z-50'>
            <Link to="/" className='block py-2' onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <Link to="/" className='block py-2' onClick={() => setIsMobileMenuOpen(false)}>Teams</Link>
            <Link to="/" className='block py-2' onClick={() => setIsMobileMenuOpen(false)}>Events</Link>

            <div className='md:hidden flex items-center space-x-4 mt-2'>
                <button className='px-8 py-2 border border-[#F0AD4E] rounded-md font-medium cursor-pointer'>Login</button>
                <button className='px-8 py-2 bg-[#4AAEA3] text-white rounded-md font-medium cursor-pointer'>Register</button>
                <select className='border border-gray-300 rounded-md px-1 py-2'>
                {languages.map((lang) => (
                    <option key={lang.code} onClick={() => toggleLanguage(lang)}>{lang.name}</option>
                ))}
                </select>        
            </div>
          </div>
        )}
       </div>

        {/* Desktop Menu, where we have large and medium size */}
      <div className='hidden md:flex items-center space-x-10'>
        <Link to="/" className='font-medium text-black hover:text-[#4AAEA3]'>Home</Link>
        <Link to="/" className='font-medium text-black hover:text-[#4AAEA3]'>Teams</Link>
        <Link to="/" className='font-medium text-black hover:text-[#4AAEA3]'>Events</Link>
      </div>
      <div className='hidden md:flex items-center space-x-4'>
        <button className='px-8 py-2 border border-[#F0AD4E] rounded-md font-medium cursor-pointer'>Login</button>
        <button className='px-8 py-2 bg-[#4AAEA3] text-white rounded-md font-medium cursor-pointer'>Register</button>
        <div className="relative">
          <div 
            className="flex items-center ml-4 cursor-pointer" 
            onClick={toggleLanguage}
          >
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
      </div>      
    </nav>
  )
}

export default NavBar
