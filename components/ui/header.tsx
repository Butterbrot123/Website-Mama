import Link from 'next/link'
import MobileMenu from './mobile-menu'


export default function Header() {
  return (
    <header className="absolute  w-full z-30 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20 ">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Saijers Antikankauf">
             <h3 className="h3 mb-4 text-sky-900 mt-3 " data-aos="fade-up">Saijers Antikankauf</h3>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
            <li>
                <Link
                  href="/"
                  className="font-medium text-sky-900 hover:text-blue-700 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
              Startseite
                </Link>
              </li>
              <li>
                <Link
                  href="/About"
                  className="font-medium text-sky-900 hover:text-blue-700 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
              Über Uns
                </Link>
              </li>
              <li>
              <Link href="/Services" className="btn-sm text-sky-900 hover:text-linkHovertxt-500">
              Unser Service
              </Link>
              </li>
              <li>
              <Link href="/Buying" className="btn-sm text-sky-900 hover:text-linkHovertxt-500">
              Ankauf
              </Link>
              
              </li>
              <li>
              <Link href="/contact" className="btn-sm text-sky-900  hover:text-linkHovertxt-500">
              Kontakt
              </Link>
              
              </li>
            </ul>
          </nav>
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
