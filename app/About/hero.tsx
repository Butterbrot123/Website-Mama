import Image from 'next/image';
import headerBackground from '@/public/images/hunde.jpg';

export default function Hero() {
  return (
    <section className="relative h-screen   bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center overflow-hidden">
      <Image
        src={headerBackground}
        layout="fill"
        objectFit="cover"
        alt="Header Background"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
          <div className="relative text-zinc-900 pt-10 mx-auto pb-10 md:pt-20 md:pb-16 flex flex-col justify-center"> {/* Flexbox-Eigenschaften hinzugefügt */}
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="h1 font-outfit mb-" data-aos="fade-up">Über Uns</h1>
              {/* Content hier   <p className="text-xl text-zinc-900 mb-8" data-aos="fade-up" data-aos-delay="200">LERNEN SIE UNS BESSER KENNEN</p> */}
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
                {/* Content hier */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
