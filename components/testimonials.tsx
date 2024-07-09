
export default function Testimonials() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-8 pb-16 sm:pb-20 ">
      <div className="py-12 md:py-20 sm:pb-44">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4 text-gray-800 parsienne">Was andere über uns sagen</h2>
            <p className="text-xl text-gray-400">Erfahrung sagt mehr als Worte. Das sagen unsere Kunden:</p>
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">

            {/* 1st testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-200" data-aos="fade-up">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                 
                  <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-blue-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
              </div>
              <blockquote className="text-lg text-gray-600 grow">—  Die Mitarbeiter des Familienunternehmens Saijers zeichnen sich durch ihre gründliche Arbeitsweise und ihr umfangreiches Fachwissen über Antiquitäten aus. Sie arbeiten äußerst diskret und zuverlässig und bringen stets eine Prise Humor mit. Zudem bieten sie faire Preise für ihre Dienstleistungen an.
              </blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-800 not-italic"> DE Andreas Brix - Antikhändler </cite>
              </div>
            </div>

            {/* 2nd testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-200" data-aos="fade-up" data-aos-delay="200">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-blue-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
              </div>
              <blockquote className="text-lg text-gray-800 grow">— Für meine Tiny Houses bin ich stets auf der Suche nach Equipment, um diesen eine besondere Note zu verleihen. Ich habe bei Frau Saijers Holzmarias und Jugendstilfenster gesucht, die sie mir zu einem fairen Preis vermittelt hat. Ich war sehr zufrieden mit der Arbeit von Saijers. Alles verlief reibungslos, und ich werde ihre Dienste gerne wieder in Anspruch nehmen.</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-800 not-italic"> SE Jan Wiechmann - Projektmanager für Tiny Houses und Bauunternehmen </cite> - 
              </div>
            </div>

            {/* 3rd testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-200" data-aos="fade-up" data-aos-delay="400">
              <div>
                <div className="relative inline-flex flex-col mb-4">
               
                  <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-blue-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
              </div>
              <blockquote className="text-lg text-gray-600 grow">Ich habe bei Saijers Schmuck getauscht, da der Schmuck meiner Großmutter nicht ganz meinen Vorstellungen entsprach. Bei Saijers habe ich diesen verkauft und dafür neue Schmuckstücke erworben, und sogar noch Geld zurückbekommen. Ich war sehr zufrieden mit ihrem Service. .</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className=" text-gray-800 not-italic"> SE Yemanyah Willowah - Yoga Lehrerin und Projektleiterin </cite> 
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
