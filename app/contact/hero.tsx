import Image from 'next/image';
import headerBackground from '@/public/images/brieftaube.jpg';

export default function Hero() {
  return (
    <section className="relative h-screen bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center overflow-hidden">
      <Image
        src={headerBackground}
        layout="fill"
        objectFit="cover"
        alt="Header Background"
      />
        <div className="absolute inset-0 flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
          {/* Hero content */}
          <div className="relative text-white pt-100 mx-auto pb-10 md:pt-40 md:pb-16">
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <h1 className="h1 font-outfit text-black mb-4" data-aos="fade-up">Kontakt</h1>
            
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
            
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
