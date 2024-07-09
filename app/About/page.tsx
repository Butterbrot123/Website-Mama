
import Image from "next/image";
import aboutImgSrc from "../../public/images/wir2.jpg";
import Footer from "@/components/ui/footer";
import Hero from "./hero";

export const metadata = {
    title: 'über Uns - Saijers Antikankauf',
    description: 'Lernen Sie uns Kennen und erfahren Sie mehr über unsere Arbeit',
  }

export default function AboutUs() {
    return(
        <>
        <Hero />
        <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Page header */}

          
          <div className="max-w-6xl mx-start pb-12 md:pb-20">
            <h1 className="h1 mb-4 text-zinc-900 ">Über uns</h1>
            <p className="text-xl text-green-600">Was machen wir? und wie machen wir das?</p>
          </div>
          <div className="max-w-6xl mx-start pb-12 md:pb-20">
            <Image src={aboutImgSrc} alt={"image here"} width={1100} height={600}/>
          </div>
          <div className="max-w-6xl mx-start pb-12 md:pb-20">
          <h1 className="h2 mb-4 text-zinc-900">Zwei Generationen mit Leidenschaft für Design und Antik</h1>
            <p className="text-xl text-gray-400">Das Unternehmen wird bis heute von den Werten und der Leidenschaft der Familie für Antiquitäten, Kunst, Design und Handel geleitet. 
            Diese Werte sind tief in unserer Arbeitsweise verwurzelt und werden von Generation zu Generation weitergegeben. 
            In Zusammenarbeit mit der vorherigen Generation und unter der liebevollen Anleitung meiner Mutter, Ines Saijers, setzen wir diese Tradition fort.</p>
          </div>

 
          <div className="max-w-6xl mx-start pb-12 md:pb-20">
          <h1 className="h2 mb-4 text-zinc-900">Unsere Vision für die Zukunft</h1>
            <p className="text-xl text-gray-400">Unsere Unternehmensvision ruht auf den Fundamenten von Tradition, Wertschätzung, Glaubwürdigkeit, Kompetenz und langjähriger Erfahrung. 
            Zugleich glauben wir fest daran, dass die Zukunft formbar ist und wir sie durch unsere Visionen mitgestalten können. 
            Unser Ziel ist es, die Tradition und Kultur zu bewahren und dabei Respekt für das Kunsthandwerk unserer Vergangenheit zu zeigen.</p>
          </div>

    
          <div className="max-w-6xl mx-start pb-12 md:pb-20">
          <h1 className="h2 mb-4 text-zinc-900">Professionalität, Ehrlichkeit und Arbeitsdisziplin</h1>
            <p className="text-xl text-gray-400">Die Grundpfeiler unseres Unternehmens waren damals Professionalität, Ehrlichkeit und Arbeitsdisziplin, die mit der Leidenschaft für Antiquitäten und Handel einhergingen. 
            Die Familiengeschichte der Saijers reicht bis ins 17. Jahrhundert zurück, als Händler in Amsterdam, den Niederlanden. 
            Über Generationen hinweg haben wir uns dem Handel mit Kolonialwaren gewidmet. 
            Diese lange Tradition prägt unseren Umgang mit Antiquitäten und betont die Bedeutung eines fairen Handels.</p>
          </div>
          
         
        </div>
      </div>
      <Footer/>
        </section>  
        </>
    )
}