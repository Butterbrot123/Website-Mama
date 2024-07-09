import Image from 'next/image';
import headerBackground from '@/public/images/service-header.jpg';

export default function Hero() {
  return (
    <section className="relative h-screen bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={headerBackground}
          layout="fill"
          objectFit="cover"
          alt="Header Background"
          className="w-full h-full object-cover"
          priority
        />
      </div>
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Hero content */}
          <div className="text-center text-zinc-900 pt-20 pb-10 md:pt-40 md:pb-16">
            {/* Section header */}
            <div className="max-w-3xl mx-auto pb-12 md:pb-16">
              <h1 className="h1 font-outfit mb-4" data-aos="fade-up">
                Unser Service
              </h1>
              <p className="text-xl text-zinc-900 mb-8" data-aos="fade-up" data-aos-delay="200">
                Womit wir Ihnen helfen können
              </p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
                {/* Additional content if needed */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
