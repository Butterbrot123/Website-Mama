import Image from 'next/image';
import headerBackground from '@/public/images/starthintergrund.jpg';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-screen bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 top-10">
        <Image
          src={headerBackground}
          layout="fill"
          objectFit="cover"
          alt="Header Background"
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
          {/* Hero content */}
          <div className="relative text-zinc-900 pt-100 mx-auto pb-10 md:pt-40 md:pb-16">
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <h1 className="h1 font-outfit mb-4" data-aos="fade-up">Saijers Antikankauf</h1>
              <p className="text-xl text-zinc-900 mb-8" data-aos="fade-up" data-aos-delay="200">
                ANKAUF VON KLASSISCHEM DESIGN, ANTIK UND SCHMUCK
              </p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
                <Link href="/contact">
                  <a className="bg-zinc-900 hover:bg-sky-900 duration-300 hover:scale-105 hover:shadow-lg text-white px-8 py-5 font-bold transition block">
                    Jetzt Kontaktieren
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
