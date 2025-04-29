import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react"
import Logo1 from "../assets/images/Logo1.png"
import Logo2 from "../assets/images/Logo2.png"
import Logo3 from "../assets/images/Logo3.png"
import LogoImage from "../assets/images/logo3zero.png"
import Logo4 from "../assets/images/Logo4.png"
import Logo5 from "../assets/images/Logo5.png"
import Logo6 from "../assets/images/Logo6.png"

function Footer() {
  return (
    <footer className="bg-white py-8 font-[Roboto]">
      <div className="container mx-auto px-4 md:mx-8">
       
        <div className="flex flex-col md:flex-row items-center justify-between gap-15 mb-8">
         
          <div className="flex-1 max-w-full md:max-w-[40%]">
            <img src={LogoImage || "/placeholder.svg"} alt="3ZERO Club Logo" className="h-12 md:h-16 mb-4 md:mb-8" />
            <p className="text-sm leading-relaxed text-[#1C3A6A] text-[13.06px]">
              The 3ZERO Club is an initiative towards achieving the Nobel Peace Laureate Professor Muhammad Yunus's
              vision of creating a world of three zeros — zero net carbon emission, zero wealth concentration for ending
              poverty, and zero unemployment by unleashing entrepreneurship in all.
            </p>
          </div>

          <div className="flex-1 max-w-full md:max-w-[42%]">
            <div className="space-y-4">
             
              <div>
                <p className="text-[#4AAEA3] mb-2 text-[13.06px]">Powered by</p>
                <div className="flex flex-wrap items-center gap-4">
                  <img src={Logo1 || "/placeholder.svg"} alt="Logo 1" className="h-10 md:h-13" />
                  <img src={Logo2 || "/placeholder.svg"} alt="Logo 2" className="h-6 md:h-8" />
                  <img src={Logo3 || "/placeholder.svg"} alt="Logo 3" className="h-5 md:h-7" />
                </div>
              </div>


              <div>
                <p className="text-[#4AAEA3] mb-2 text-[13.06px]">Supported by</p>
                <div className="flex flex-wrap items-center gap-4">
                  <img src={Logo4 || "/placeholder.svg"} alt="Logo 4" className="h-4 md:h-5" />
                  <img src={Logo5 || "/placeholder.svg"} alt="Logo 5" className="h-8 md:h-10" />
                </div>
              </div>

              <div>
                <p className="text-[#4AAEA3] mb-2 text-[13.06px]">Technology partner</p>
                <div className="flex items-center gap-4">
                  <img src={Logo6 || "/placeholder.svg"} alt="Logo 6" className="h-12 md:h-15" />
                  <div className="flex flex-col items-start">
                    <p className="text-[9.8px]">Grameen</p>
                    <p className="text-[9.8px]">Digital</p>
                    <p className="text-[9.8px]">Healthcare</p>
                    <p className="text-[9.8px]">Solution</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

       
          <div className="flex-1 max-w-full md:max-w-[25%]">
            <div className="flex flex-wrap gap-3 mb-4">
              <a href="#" className="p-2 bg-[#4AAEA3] text-white rounded-full hover:bg-[#3d9a91] transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 bg-[#4AAEA3] text-white rounded-full hover:bg-[#3d9a91] transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 bg-[#4AAEA3] text-white rounded-full hover:bg-[#3d9a91] transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 bg-[#4AAEA3] text-white rounded-full hover:bg-[#3d9a91] transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 bg-[#4AAEA3] text-white rounded-full hover:bg-[#3d9a91] transition-colors">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
            <p className="text-sm">3Z Global Centre</p>
            <p className="text-sm">Email: connect@3zero.club</p>
          </div>
        </div>

        
        <div className="pt-4 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="#" className="text-[#4AAEA3] hover:text-[#4AAEA3] transition-colors">
              Home
            </a>
            <a href="#" className="text-[#4AAEA3] hover:text-[#4AAEA3] transition-colors">
              Events
            </a>
            <a href="#" className="text-[#4AAEA3] hover:text-[#4AAEA3] transition-colors">
              Teams
            </a>
          </div>
          <hr className="h-3 mb-3 text-[#4AAEA3] w-[60%] md:-mb-2 mx-5"/>
          <p className="text-sm text-gray-600">© 2025. 3ZERO Trust. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
