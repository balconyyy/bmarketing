"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={`py-4 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold text-[#04063E]">
              <span className="text-[#FF0054]">be</span>marketing
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-6">
              <Link
                href="/"
                className={`font-medium hover:text-[#FF0054] ${pathname === "/" ? "text-[#FF0054]" : "text-[#04063E]"}`}
              >
                HOME
              </Link>
              <Link
                href="/about-me"
                className={`flex items-center font-medium hover:text-[#FF0054] ${pathname === "/about-me" ? "text-[#FF0054]" : "text-[#04063E]"}`}
              >
                ABOUT ME
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-1 h-4 w-4"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </Link>
              <Link
                href="/packages"
                className={`flex items-center font-medium hover:text-[#FF0054] ${pathname === "/packages" ? "text-[#FF0054]" : "text-[#04063E]"}`}
              >
                PACKAGES
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-1 h-4 w-4"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </Link>
              <Link
                href="/how-i-work"
                className={`font-medium hover:text-[#FF0054] ${pathname === "/how-i-work" ? "text-[#FF0054]" : "text-[#04063E]"}`}
              >
                HOW I WORK
              </Link>
              <Link
                href="/contact"
                className={`font-medium hover:text-[#FF0054] ${pathname === "/contact" ? "text-[#FF0054]" : "text-[#04063E]"}`}
              >
                CONTACT
              </Link>
            </nav>

            <Link
              href="/product/marketing-outsourcing"
              className="px-5 py-2 bg-white text-[#FF0054] rounded-md hover:bg-[#FF0054] hover:text-white transition-colors font-medium"
            >
              Buy now
            </Link>
          </div>

          <button className="md:hidden text-[#04063E]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg z-50">
          <nav className="flex flex-col p-4">
            <Link
              href="/"
              className={`py-3 font-medium hover:text-[#FF0054] border-b border-gray-100 ${pathname === "/" ? "text-[#FF0054]" : "text-[#04063E]"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              HOME
            </Link>
            <Link
              href="/about-me"
              className={`py-3 font-medium hover:text-[#FF0054] border-b border-gray-100 ${pathname === "/about-me" ? "text-[#FF0054]" : "text-[#04063E]"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              ABOUT ME
            </Link>
            <Link
              href="/packages"
              className={`py-3 font-medium hover:text-[#FF0054] border-b border-gray-100 ${pathname === "/packages" ? "text-[#FF0054]" : "text-[#04063E]"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              PACKAGES
            </Link>
            <Link
              href="/how-i-work"
              className={`py-3 font-medium hover:text-[#FF0054] border-b border-gray-100 ${pathname === "/how-i-work" ? "text-[#FF0054]" : "text-[#04063E]"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              HOW I WORK
            </Link>
            <Link
              href="/contact"
              className={`py-3 font-medium hover:text-[#FF0054] border-b border-gray-100 ${pathname === "/contact" ? "text-[#FF0054]" : "text-[#04063E]"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              CONTACT
            </Link>
            <Link
              href="/product/marketing-outsourcing"
              className="mt-4 px-5 py-2 bg-[#FF0054] text-white rounded-md text-center font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Buy now
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
