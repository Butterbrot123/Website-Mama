import Image from 'next/image'

import Foto from '@/public/images/foto.jpg'
import FeatImage03 from '@/public/images/brosche.png'
import FeatImage04 from '@/public/images/glas.png'
import FeatImage05 from '@/public/images/asia.png'

export default function Zigzag() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-8 pb-16 sm:pb-20">
      <div className="py-12 md:py-20 sm:pb-44">
        

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            
            <h1 className="h2 mb-4 text-zinc-900 ">Woran sind wir interessiert?</h1>
          {/* Items  <p className="text-xl text-gray-700">catering to diverse needs and challenges with unparalleled versatility.</p>   */}
          </div>

          {/* Items */}
          <div className="grid gap-20">

            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={Foto} width={400} height={400} alt="Features 01" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  
                  <h3 className="h3 mb-3 text-zinc-900 ">Fotos, Fotoalben, Postkarten und Postkartenalben</h3>
                  <p className="text-xl text-gray-400 mb-4">Unser Interesse an Fotos ist vielfältig und umfasst eine breite Palette von Themen, darunter Aufnahmen aus Kriegs- oder Friedenszeiten, Kunstfotografien, historische Fotos, Kolonieaufnahmen, Bilder aus aller Welt, private Aufnahmen sowie künstlerische Werke. 
                  Wir schätzen die Einzigartigkeit jedes Bildes und sind stolz darauf, mit Museen, Archiven und privaten Sammlern zusammenzuarbeiten, um diese faszinierende Vielfalt zu bewahren und zu teilen. </p>
                    {/* Content 
                  <ul className="text-lg text-gray-400 -mb-2">

                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-blue-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span> Flere år erfaring</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Stationeret i Tyskland</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>ensuring timely completion and delivery.</span>
                    </li>
                  </ul>
   */}
                </div>
              </div>
            </div>

            {/* 2nd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage03} width={540} height={405} alt="Features 02" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  
                  <h3 className="h3 mb-3 text-zinc-900">Schmuck aller Art</h3>
                   <p className="text-xl text-gray-400 mb-4"> Unser Unternehmen erwirbt Schmuckstücke aus allen Epochen, sowohl Modeschmuck als auch traditionellen Schmuck, denn wir schätzen den einzigartigen Wert jedes einzelnen Stücks.
                    Selbst reparaturbedürftigen Schmuck erwerben wir gerne und kooperieren mit erfahrenen Goldschmieden, um die notwendigen Reparaturen fachgerecht durchführen zu lassen. </p> 
                  <ul className="text-lg text-gray-400 -mb-2">
                 
                  </ul>
                </div>
              </div>
            </div>

            {/* 3rd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage05} width={540} height={405} alt="Features 03" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  
                  <h3 className="h3 mb-3 text-zinc-900"> Asiatisches Antik</h3>
                  <p className="text-xl text-gray-400 mb-4">Wir hegen eine besondere Leidenschaft für asiatische Antiquitäten aller Art, die durch unsere familiäre Geschichte und langjährige Erfahrung geprägt ist. 
                  Unser Interesse erstreckt sich über ein breites Spektrum von chinesischen Vasen, Kleidung, Schmuck, Skulpturen, Porzellan in allen Variationen bis hin zu Bildern, Malereien, Fotos, Briefen und Briefmarken.</p>
                  <ul className="text-lg text-gray-400 -mb-2">
                    
                    {/* <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Amet consectetur adipiscing elit</span>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>

             {/* 2nd item */}
             <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage04} width={540} height={405} alt="Features 02" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  
                  <h3 className="h3 mb-3 text-zinc-900">Dänisches Design</h3>
                   <p className="text-xl text-gray-400 mb-4"> Wir haben eine besondere Verbindung zu Dänemark, die sich durch langjährige Aufenthalte dort entwickelt hat. 
                   Zusätzlich sind wir sehr an dänischem Design, Schmuck aller Art, Möbeln, Lampen und vielem mehr interessiert. 
                   Dabei liegt unser Fokus besonders auf bekannten Marken und Designern wie Royal Copenhagen, Holmegaard, Teak & Palisander, Poul Henningsen, Kai Kristiansen, Kay Bojesen, Louis Poulsen, Verner Panton, Fritz Henningsen, Hans Bølling, Arne Jacobsen und vielen anderen.</p> 
                  <ul className="text-lg text-gray-400 -mb-2">
                 
                  </ul>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
