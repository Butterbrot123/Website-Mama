'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false)

  const trigger = useRef<HTMLButtonElement>(null)
  const mobileNav = useRef<HTMLDivElement>(null)

  // Close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = (event: MouseEvent): void => {
      const target = event.target as Node
      if (!mobileNav.current || !trigger.current) return
      if (!mobileNavOpen || mobileNav.current.contains(target) || trigger.current.contains(target)) return
      setMobileNavOpen(false)
    }
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  }, [mobileNavOpen])

  // Close the mobile menu if the ESC key is pressed
  useEffect(() => {
    const keyHandler = (event: KeyboardEvent): void => {
      if (!mobileNavOpen || event.key !== 'Escape') return
      setMobileNavOpen(false)
    }
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  }, [mobileNavOpen])

  return (
    <div className="md:hidden">
      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`hamburger ${mobileNavOpen ? 'active' : ''}`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <svg
          className="w-6 h-6 fill-current text-gray-300 hover:text-gray-200 transition duration-150 ease-in-out"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="4" width="24" height="2" rx="1" />
          <rect y="11" width="24" height="2" rx="1" />
          <rect y="18" width="24" height="2" rx="1" />
        </svg>
      </button>

      {/* Mobile navigation */}
      <nav
        id="mobile-nav"
        ref={mobileNav}
        className={`absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out ${mobileNavOpen ? 'max-h-screen opacity-1' : 'max-h-0 opacity-80'}`}
      >
        <ul className="bg-gray-800 px-4 py-2">
          <li>
            <Link href="/" className="flex font-medium w-full text-white-600 hover:text-gray-200 py-2 justify-center" onClick={() => setMobileNavOpen(false)}>
              Startseite
            </Link>
          </li>
          <li>
            <Link
              href="/About"
              className="font-medium w-full inline-flex items-center justify-center border border-transparent px-4 py-2 my-2 rounded-sm text-white hover:text-green-600 transition duration-150 ease-in-out"
              onClick={() => setMobileNavOpen(false)}
            >
              Über uns
            </Link>
          </li>
          <li>
            <Link
              href="/Services"
              className="font-medium w-full inline-flex items-center justify-center border border-transparent px-4 py-2 my-2 rounded-sm text-white hover:text-green-600 transition duration-150 ease-in-out"
              onClick={() => setMobileNavOpen(false)}
            >
              Unser Service
            </Link>
          </li>
          <li>
            <Link
              href="/Buying"
              className="font-medium w-full inline-flex items-center justify-center border border-transparent px-4 py-2 my-2 rounded-sm text-white hover:text-green-600 transition duration-150 ease-in-out"
              onClick={() => setMobileNavOpen(false)}
            >
              Ankauf
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="font-medium w-full inline-flex items-center justify-center border border-transparent px-4 py-2 my-2 rounded-sm text-white hover:text-green-600 transition duration-150 ease-in-out"
              onClick={() => setMobileNavOpen(false)}
            >
              Kontakt
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
