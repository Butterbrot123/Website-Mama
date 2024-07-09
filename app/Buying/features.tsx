"use client";

import Uhr from "@/public/images/uhr2.png";
import Spielzeug from "@/public/images/spielzeug.png";
import Dokument from "@/public/images/dokument.png";
import Anstecknadel from "@/public/images/anstecknadel.png";
import Füller from "@/public/images/füller.png";
import Orden from "@/public/images/orden.png";
import Briefmarken from "@/public/images/briefmarken.png";
import Postkarte from "@/public/images/postkarten-klein.png";
import Image from "next/image";
import Schmuck from "@/public/images/brosche.png";
import Design from "@/public/images/design.png";
import Münze from "@/public/images/münze.png";
import Buch from "@/public/images/buch.png";
import Geld from "@/public/images/geld.png";
import Pommern from "@/public/images/pommern.png";
import Kolonien from "@/public/images/kolonien.png";
import Kriegerinnerungen from "@/public/images/kriegerinnerungen.png";
import Ostpreußen from "@/public/images/ostpreußen.png";
import Mediallen from "@/public/images/mediallen.jpg";
import Schlesien from "@/public/images/schlesien.png";
import Platten from "@/public/images/platten.png";
import Besteck from "@/public/images/besteck.png";
import Briefe from "@/public/images/old-letters.png";
import { useState } from "react";

export default function Features() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null); // Specify the type as number or null

  const handleMouseEnter = (index: number) => { // Explicitly specify the type as number
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <section className="px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center min-h-screen py-12 md:py-20 lg:py-4">
        <div className="max-w-6xl mx-start pb-12 md:pb-20">
          <h1 className="h1 mb-4 text-zinc-900 ">Was wir gerne einkaufen</h1>
          <p className="text-xl text-green-600">
            Woran sind wir besonders interessiert?
          </p>
        </div>

        {/* Items */}
        <div
          className=" mt-16 sm:grid-cols-2 grid-cols-1 gap-14 grid md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none"
          data-aos-id-blocks
        >
          {/* 1st item */}
          <div
            className="relative flex flex-col items-center bg-white p-6 rounded-lg shadow-lg"
            data-aos="fade-up"
            data-aos-anchor="[data-aos-id-blocks]"
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="mb-6">
              <Image
                className={`max-w-full h-auto transition-transform duration-300 transform ${
                  hoveredIndex === 0 ? "" : "grayscale"
                }`}
                src={Briefe}
                layout="responsive"
                alt="Features 01"
              />
            </div>
            <h4 className="h4 text-slate-900 mb-2">Alte Briefe</h4>
            <p className="text-lg text-gray-400 text-center">
              Wir sind spezialisiert auf den Ankauf alter Briefe jeglicher Art,
              die sich über die ganze Welt verteilt haben. Unser Interesse
              erstreckt sich auch auf Korrespondenzen im Zusammenhang mit
              historischen Ereignissen und Persönlichkeiten.{" "}
            </p>
          </div>

          {/* 2nd item */}
          <div
            className="relative flex flex-col items-center bg-white p-6 rounded-lg shadow-lg"
            data-aos="fade-up"
            data-aos-anchor="[data-aos-id-blocks]"
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="mb-6">
              <Image
                className={`max-w-full h-auto transition-transform duration-300 transform ${
                  hoveredIndex === 1 ? "" : "grayscale"
                }`}
                src={Uhr}
                layout="responsive"
                alt="Features 02"
              />
            </div>
            <h4 className="h4 text-slate-900 mb-2">Uhren</h4>
            <p className="text-lg text-gray-400 text-center">
              Die Zeit begleitet uns durch alle Epochen und ist ein wertvolles
              Accessoire, das niemals vergessen werden sollte. Wir kaufen sowohl
              moderne als auch traditionelle Uhren aber auch Taschenuhren{" "}
            </p>
          </div>

          {/* 3rd item */}
          <div
            className="relative flex flex-col items-center bg-white p-6 rounded-lg shadow-lg"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-anchor="[data-aos-id-blocks]"
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="mb-6">
              <Image
                className={`max-w-full h-auto transition-transform duration-300 transform ${
                  hoveredIndex === 2 ? "" : "grayscale"
                }`}
                src={Orden}
                layout="responsive"
                alt="Features 03"
              />
            </div>
            <h4 className="h4 text-slate-900 mb-2">Orden</h4>
            <p className="text-lg text-gray-400 text-center">
              Wir kaufen Orden aller Art an, von alten deutschen Orden aus dem
              Ersten und Zweiten Weltkrieg über Orden der Bundeswehr und DDR bis
              hin zu internationalen Orden und Ehrenzeichen.{" "}
            </p>
          </div>

          {/* 4rd item */}
          <div
            className="relative flex flex-col items-center bg-white p-6 rounded-lg shadow-lg"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-anchor="[data-aos-id-blocks]"
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="mb-6">
              <Image
                className={`max-w-full h-auto transition-transform duration-300 transform ${
                  hoveredIndex === 3 ? "" : "grayscale"
                }`}
                src={Anstecknadel}
                layout="responsive"
                alt="Features 03"
              />
            </div>
            <h4 className="h4 text-slate-900 mb-2">Ansteckandeln</h4>
            <p className="text-lg text-gray-400 text-center">
            Wir kaufen alte Vereinsabzeichen, militärische Ehrenzeichen, Werbepins oder besondere Sammlerstücke  {" "}
            </p>
          </div>

          {/* 5rd item */}
          <div
            className="relative flex flex-col items-center bg-white p-6 rounded-lg shadow-lg"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-anchor="[data-aos-id-blocks]"
            onMouseEnter={() => handleMouseEnter(4)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="mb-6">
              <Image
                className={`max-w-full h-auto transition-transform duration-300 transform ${
                  hoveredIndex === 4 ? "" : "grayscale"
                }`}
                src={Schmuck}
                layout="responsive"
                alt="Features 03"
              />
            </div>
            <h4 className="h4 text-slate-900 mb-2">Schmuck</h4>
            <p className="text-lg text-gray-400 text-center">
              Wir kaufen Modeschmuck, echten Schmuck sowie reparaturbedürftigen
              und Antikschmuck an.{" "}
            </p>
          </div>

          {/* 6rd item */}
          <div
            className="relative flex flex-col items-center bg-white p-6 rounded-lg shadow-lg"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-anchor="[data-aos-id-blocks]"
            onMouseEnter={() => handleMouseEnter(5)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="mb-6">
              <Image
                className={`max-w-full h-auto transition-transform duration-300 transform ${
                  hoveredIndex === 5 ? "" : "grayscale"
                }`}
                src={Postkarte}
                layout="responsive"
                alt="Features 03"
              />
            </div>
            <h4 className="h4 text-slate-900 mb-2">Postkarten</h4>
            <p className="text-lg text-gray-400 text-center">
            Wir kaufen Postkarten aller Art aus allen Zeiten und Ländern. Egal ob antike, historische, thematische oder seltene Postkarten – wir sind interessiert! .{" "}
            </p>
          </div>

        {/* 7th item */}
<div
  className="relative flex flex-col items-center bg-white p-6 rounded-lg shadow-lg"
  data-aos="fade-up"
  data-aos-delay="200"
  data-aos-anchor="[data-aos-id-blocks]"
  onMouseEnter={() => handleMouseEnter(6)}
  onMouseLeave={handleMouseLeave}
>
  <div className="mb-6">
    <Image
      className={`max-w-full h-auto transition-transform duration-300 transform ${
        hoveredIndex === 6 ? "" : "grayscale"
      }`}
      src={Füller}
      layout="responsive"
      alt="Features 03"
    />
  </div>
  <h4 className="h4 text-slate-900 mb-2">Füller</h4>
  <p className="text-lg text-gray-400 text-center">
  Egal, ob es sich um seltene Antiquitäten oder aktuelle Modelle handelt – wir kaufen Ihre Füller zu fairen Preisen an.
  </p>
</div>

{/* 8th item */}
<div
  className="relative flex flex-col items-center bg-white p-6 rounded-lg shadow-lg"
  data-aos="fade-up"
  data-aos-delay="200"
  data-aos-anchor="[data-aos-id-blocks]"
  onMouseEnter={() => handleMouseEnter(7)}
  onMouseLeave={handleMouseLeave}
>
  <div className="mb-6">
    <Image
      className={`max-w-full h-auto transition-transform duration-300 transform ${
        hoveredIndex === 7 ? "" : "grayscale"
      }`}
      src={Dokument}
      layout="responsive"
      alt="Features 03"
    />
  </div>
  <h4 className="h4 text-slate-900 mb-2">Dokumente</h4>
  <p className="text-lg text-gray-400 text-center">
  Wir erwerben eine Vielzahl von Dokumenten, darunter Zeugnisse, Auszeichnungen, Pässe, Urkunden, amtliche Schriftstücke, Aufzeichnungen, Mitteilungen von Behörden, Zertifikate, Ausweise, Mitgliedsbücher sowie Dokumente aus Kriegs- und Friedenszeiten.
  </p>
</div>

{/* 9th item */}
<div
  className="relative flex flex-col items-center bg-white p-6 rounded-lg shadow-lg"
  data-aos="fade-up"
  data-aos-delay="200"
  data-aos-anchor="[data-aos-id-blocks]"
  onMouseEnter={() => handleMouseEnter(8)}
  onMouseLeave={handleMouseLeave}
>
  <div className="mb-6">
    <Image
      className={`max-w-full h-auto transition-transform duration-300 transform ${
        hoveredIndex === 8 ? "" : "grayscale"
      }`}
      src={Buch}
      layout="responsive"
      alt="Features 03"
    />
  </div>
  <h4 className="h4 text-slate-900 mb-2">Alte Bücher</h4>
  <p className="text-lg text-gray-400 text-center">
  Unser Fachgebiet liegt im Ankauf historischer Bücher, insbesondere solcher mit wertvollen Signaturen, aber auch ohne  </p>
</div>

{/* 10th item */}
<div
  className="relative flex flex-col items-center bg-white p-6 rounded-lg shadow-lg"
  data-aos="fade-up"
  data-aos-delay="200"
  data-aos-anchor="[data-aos-id-blocks]"
  onMouseEnter={() => handleMouseEnter(9)}
  onMouseLeave={handleMouseLeave}
>
  <div className="mb-6">
    <Image
      className={`max-w-full h-auto transition-transform duration-300 transform ${
        hoveredIndex === 9 ? "" : "grayscale"
      }`}
      src={Münze}
      layout="responsive"
      alt="Features 03"
    />
  </div>
  <h4 className="h4 text-slate-900 mb-2">Münzen</h4>
  <p className="text-lg text-gray-400 text-center">
  Unser Unternehmen erwirbt Münzen unterschiedlichster Art, sowohl aus vergangenen Epochen als auch von verschiedenen Ländern weltweit
  </p>
</div>

{/* 11th item */}
<div
  className="relative flex flex-col items-center bg-white p-6 rounded-lg shadow-lg"
  data-aos="fade-up"
  data-aos-delay="200"
  data-aos-anchor="[data-aos-id-blocks]"
  onMouseEnter={() => handleMouseEnter(10)}
  onMouseLeave={handleMouseLeave}
>
  <div className="mb-6">
    <Image
      className={`max-w-full h-auto transition-transform duration-300 transform ${
        hoveredIndex === 10 ? "" : "grayscale"
      }`}
      src={Ostpreußen}
      layout="responsive"
      alt="Features 03"
    />
  </div>
  <h4 className="h4 text-slate-900 mb-2 text-center ">   Ostpreussen Erinnerungsstücke</h4>
  <p className="text-lg text-gray-400 text-center">
  Unser Unternehmen kauft Erinnerungsstücke aus Ostpreußen aus Friedens- sowie Kriegszeiten.
  </p>
</div>

{/* 12th item */}
<div
  className="relative flex flex-col items-center bg-white p-6 rounded-lg shadow-lg"
  data-aos="fade-up"
  data-aos-delay="200"
  data-aos-anchor="[data-aos-id-blocks]"
  onMouseEnter={() => handleMouseEnter(11)}
  onMouseLeave={handleMouseLeave}
>
  <div className="mb-6">
    <Image
      className={`max-w-full h-auto transition-transform duration-300 transform ${
        hoveredIndex === 11 ? "" : "grayscale"
      }`}
      src={Pommern}
      layout="responsive"
      alt="Features 03"
    />
  </div>
  <h4 className="h4 text-slate-900 mb-2 text-center ">    Pommern Erinnerungsstücke</h4>
  <p className="text-lg text-gray-400 text-center">
  Unser Unternehmen kauft Erinnerungsstücke aus Pommern aus Friedens- sowie Kriegszeiten.
  </p>
</div>

{/* 13th item */}
<div
  className="relative flex flex-col items-center bg-white p-6 rounded-lg shadow-lg"
  data-aos="fade-up"
  data-aos-delay="200"
  data-aos-anchor="[data-aos-id-blocks]"
  onMouseEnter={() => handleMouseEnter(12)}
  onMouseLeave={handleMouseLeave}
>
  <div className="mb-6">
    <Image
      className={`max-w-full h-auto transition-transform duration-300 transform ${
        hoveredIndex === 12 ? "" : "grayscale"
      }`}
      src={Schlesien}
      layout="responsive"
      alt="Features 03"
    />
  </div>
  <h4 className="h4 text-slate-900 mb-2 text-center">    Schlesien Erinnerungsstücke</h4>
  <p className="text-lg text-gray-400 text-center">
  Unser Unternehmen kauft Erinnerungsstücke aus Schlesien aus Friedens- sowie Kriegszeiten.
  </p>
</div>

{/* 14th item */}
<div
  className="relative flex flex-col items-center bg-white p-6 rounded-lg shadow-lg"
  data-aos="fade-up"
  data-aos-delay="200"
  data-aos-anchor="[data-aos-id-blocks]"
  onMouseEnter={() => handleMouseEnter(13)}
  onMouseLeave={handleMouseLeave}
>
  <div className="mb-6">
    <Image
      className={`max-w-full h-auto transition-transform duration-300 transform ${
        hoveredIndex === 13 ? "" : "grayscale"
      }`}
      src={Kolonien}
      layout="responsive"
      alt="Features 03"
    />
  </div>
  <h4 className="h4 text-slate-900 mb-2 text-center ">    kolonien Erinnerungsstücke</h4>
  <p className="text-lg text-gray-400 text-center">
  Unser Unternehmen erwirbt eine Vielzahl von Objekten aus den Kolonien, insbesondere aus asiatischen Gebieten wie China, sowie aus deutschen, niederländischen und englischen Kolonien. Dazu gehören Fotos, Briefe, Skulpturen, Bilder und vieles mehr.  </p>
</div>

{/* 15th item */}
<div
  className="relative flex flex-col items-center bg-white p-6 rounded-lg shadow-lg"
  data-aos="fade-up"
  data-aos-delay="200"
  data-aos-anchor="[data-aos-id-blocks]"
  onMouseEnter={() => handleMouseEnter(14)}
  onMouseLeave={handleMouseLeave}
>
  <div className="mb-6">
    <Image
      className={`max-w-full h-auto transition-transform duration-300 transform ${
        hoveredIndex === 14 ? "" : "grayscale"
      }`}
      src={Mediallen}
      layout="responsive"
      alt="Features 03"
    />
  </div>
  <h4 className="h4 text-slate-900 mb-2">  Mediallen</h4>
  <p className="text-lg text-gray-400 text-center">
  Unser Unternehmen erwirbt Medaillen jeglicher Art, sowohl aus Friedens- als auch aus Kriegszeiten  </p>
</div>

{/* 16th item */}
<div
  className="relative flex flex-col items-center bg-white p-6 rounded-lg shadow-lg"
  data-aos="fade-up"
  data-aos-delay="200"
  data-aos-anchor="[data-aos-id-blocks]"
  onMouseEnter={() => handleMouseEnter(15)}
  onMouseLeave={handleMouseLeave}
>
  <div className="mb-6">
    <Image
      className={`max-w-full h-auto transition-transform duration-300 transform ${
        hoveredIndex === 15 ? "" : "grayscale"
      }`}
      src={Platten}
      layout="responsive"
      alt="Features 03"
    />
  </div>
  <h4 className="h4 text-slate-900 mb-2">  Schallplatten</h4>
  <p className="text-lg text-gray-400 text-center">
  Zusätzlich kaufen wir auch Schallplatten, insbesondere aus den Genres Rock und Pop, aus den 50er, 60er, 70er und 80er Jahren.  </p>
</div>



          {/* 17nd item */}
          <div
            className="relative flex flex-col items-center bg-white p-6 rounded-lg shadow-lg"
            data-aos="fade-up"
            data-aos-anchor="[data-aos-id-blocks]"
            onMouseEnter={() => handleMouseEnter(16)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="mb-6">
              <Image
                className={`max-w-full h-auto transition-transform duration-300 transform ${
                  hoveredIndex === 16 ? "" : "grayscale"
                }`}
                src={Geld}
                layout="responsive"
                alt="Features 02"
              />
            </div>
            <h4 className="h4 text-slate-900 mb-2">Alte Geldscheinen</h4>
            <p className="text-lg text-gray-400 text-center">
              Wir kaufen Geldscheinen aus alle epochen und aller Welt{" "}
            </p>
          </div>

            {/* 18nd item */}
            <div
            className="relative flex flex-col items-center bg-white p-6 rounded-lg shadow-lg"
            data-aos="fade-up"
            data-aos-anchor="[data-aos-id-blocks]"
            onMouseEnter={() => handleMouseEnter(17)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="mb-6">
              <Image
                className={`max-w-full h-auto transition-transform duration-300 transform ${
                  hoveredIndex === 17 ? "" : "grayscale"
                }`}
                src={Kriegerinnerungen}
                layout="responsive"
                alt="Features 02"
              />
            </div>
            <h4 className="h4 text-slate-900 mb-2">Kriegerinnerungen</h4>
            <p className="text-lg text-gray-400 text-center">
            Wir kaufen Kriegserinnerungsstücke aus dem Ersten und Zweiten Weltkrieg, darunter Uniformen, Auszeichnungen und vieles mehr {" "}
            </p>
          </div>

    
        
    {/* 19rd item */}
    <div
            className="relative flex flex-col items-center bg-white p-6 rounded-lg shadow-lg"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-anchor="[data-aos-id-blocks]"
            onMouseEnter={() => handleMouseEnter(18)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="mb-6">
              <Image
                className={`max-w-full h-auto transition-transform duration-300 transform ${
                  hoveredIndex === 18 ? "" : "grayscale"
                }`}
                src={Besteck}
                layout="responsive"
                alt="Features 03"
              />
            </div>
            <h4 className="h4 text-slate-900 mb-2">Bestecke</h4>
            <p className="text-lg text-gray-400 text-center">
            Wir kaufen Bestecke jeglicher Art, sowohl antike als auch moderne, einzeln oder als Sammlungen. {" "}
            </p>
          </div>


          {/* 20rd item */}
          <div
            className="relative flex flex-col items-center bg-white p-6 rounded-lg shadow-lg"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-anchor="[data-aos-id-blocks]"
            onMouseEnter={() => handleMouseEnter(19)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="mb-6">
              <Image
                className={`max-w-full h-auto transition-transform duration-300 transform ${
                  hoveredIndex === 19 ? "" : "grayscale"
                }`}
                src={Design}
                layout="responsive"
                alt="Features 03"
              />
            </div>
            <h4 className="h4 text-slate-900 mb-2">Dänisch Design</h4>
            <p className="text-lg text-gray-400 text-center">
            Wir sind spezialisiert auf den Ankauf von dänischem Design, einschließlich Vasen, Porzellan, Möbeln, Lampen, Teak und vielem mehr.  {" "}
            </p>
          </div>

 {/* 21rd item */}
 <div
            className="relative flex flex-col items-center bg-white p-6 rounded-lg shadow-lg"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-anchor="[data-aos-id-blocks]"
            onMouseEnter={() => handleMouseEnter(20)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="mb-6">
              <Image
                className={`max-w-full h-auto transition-transform duration-300 transform ${
                  hoveredIndex === 20 ? "" : "grayscale"
                }`}
                src={Briefmarken}
                layout="responsive"
                alt="Features 03"
              />
            </div>
            <h4 className="h4 text-slate-900 mb-2">Briefmarken</h4>
            <p className="text-lg text-gray-400 text-center">
            Wir erwerben Briefmarken aller Art, unabhängig von Zeit und Herkunft, einschließlich ganzer Sammlungen.{" "}
            </p>
          </div>



     {/* 22nd item */}
          <div
            className="relative flex flex-col items-center bg-white p-6 rounded-lg shadow-lg"
            data-aos="fade-up"
            data-aos-anchor="[data-aos-id-blocks]"
            onMouseEnter={() => handleMouseEnter(21)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="mb-6">
              <Image
                className={`max-w-full h-auto transition-transform duration-300 transform ${
                  hoveredIndex === 21 ? "" : "grayscale"
                }`}
                src={Spielzeug}
                layout="responsive"
                alt="Features 02"
              />
            </div>
            <h4 className="h4 text-slate-900 mb-2">Altes Spielzeug</h4>
            <p className="text-lg text-gray-400 text-center">
            Wir erwerben altes Spielzeug, darunter alte Puppenhäuser, Elastolin, Blechspielzeug, Lineol und vieles mehr {" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
