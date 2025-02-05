import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Top area: Blocks */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">
            {/* 1st block */}
            <div className="md:col-span-4 lg:col-span-5">
              <div className="mb-2">
                {/* Logo */}
                <Link href="/" className="inline-block" aria-label="Cruip">
                  <h3 className="h1 mb-4 mt-3" data-aos="fade-up"><strong className='text-blue-900'>Saijers Antik</strong></h3>
                </Link>
              </div>
              <div className="text-gray-400">Saijers Antik ist ein renommiertes Antiquitätenhändler-Unternehmen, das sich durch seine Expertise in der Branche auszeichnet. Wir kaufen eine breite Palette an Waren, darunter Postkarten, Fotos, Schmuck, Militaria und vieles mehr. </div>
            </div>

            {/* 2nd and 3rd blocks (empty for spacing) */}
            <div className="md:col-span-8 lg:col-span-7 grid sm:grid-cols-3 gap-8">
              <div className="hidden sm:block"></div>
              <div className="hidden sm:block"></div>

              {/* 4th block (Company column) */}
              <div className="text-sm">
                <h6 className="text-gray-200 font-medium mb-1">Index</h6>
                <ul>
                  <li className="mb-1">
                    <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Startseite</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/About" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Über Uns</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/Services" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Services</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/Buying" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Ankauf</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/contact" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Kontakt</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom area */}
          <div className="md:flex md:items-center md:justify-between">
            {/* Social links */}
            <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
              <li className="ml-4">
                <Link href="/" className="flex justify-center items-center text-white bg-gray-800 hover:text-gray-100 hover:bg-blue-800 rounded-full transition duration-150 ease-in-out" aria-label="Facebook">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                  </svg>
                </Link>
              </li>
              <li className="ml-4">
                <Link href="/" className="flex justify-center items-center text-white bg-gray-800 hover:text-gray-100 hover:bg-blue-800 rounded-full transition duration-150 ease-in-out" aria-label="Instagram">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20.145" cy="11.892" r="1" />
                    <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
                    <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
                  </svg>
                </Link>
              </li>
            </ul>
            {/* Copyrights note */}
            <div className="text-gray-400 text-sm mr-4">&copy; Sayers-antik.de All rights reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
