import Image from 'next/image'
import Stol from '@/public/images/wir.png'

export default function Zigzag() {
  return (
    <section>
    <div className="max-w-6xl mx-auto px-8 pb-16 sm:pb-20">
      <div className="py-8 md:py-12 sm:pb-16"> {/* Reduced padding here */}
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center pb-8 md:pb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-gray-800 font-bold mb-4">Wer sind wir?</h1>
        </div>

          {/* Items */}
          <div className="grid gap-12 md:gap-20">

            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1 relative overflow-hidden" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto transition-transform duration-300 transform hover:scale-105" src={Stol} width={400} height={400} alt="Features 01" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl text-gray-800  font-bold mb-3">Willkommen</h3>
                  <p className="text-lg md:text-xl text-gray-400 mb-4">Wir, Ines Saijers und Merle Saijers, sind erfahrene Antiquitätenhändler mit langjähriger Expertise im Handel von Antiquitäten und Kunsthandwerk auf nationalen und internationalen Märkten. 
                  Unser engagiertes Team bietet Ihnen professionelle Dienstleistungen für Objekte aller Art an.
                   Unser Ziel ist es, Ihnen dabei zu helfen, das bestmögliche Ergebnis zu erzielen</p>
                  <ul className="text-lg md:text-xl text-gray-400 mb-4">
             
              {/* Content    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Stationeret i Tyskland</span>
                    </li>

                    */}
                  
                  </ul>

                  <div className="text-left pt-4"> {/* Added padding class "pt-4" */}
  <a href="/About" className="text-white bg-slate-900 hover:bg-blue-900 w-full mb-4 sm:w-auto sm:mb-0 py-2 px-4">
    Mehr Erfahren
  </a>
</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
