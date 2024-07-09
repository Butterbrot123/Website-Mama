import Link from 'next/link';

export default function Features() {
  return (
    // Call to Action Section
    <section
      className="bg-blue-900 text-black py-40 text-center mt-10"
      style={{ backgroundImage: "url('/images/hunde2.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="max-w-screen-lg mx-auto">
        <h1 className="text-4xl font-bold mb-4">
          Wollen Sie mehr erfahren von uns?
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Lassen Sie uns in einem kostenlosen Gespräch kennenlernen.
          <br />
          Wir beantworten Ihnen Ihre Fragen und wir finden die passende Lösung für Sie.
        </p>
        <Link href="/contact">
          <button className="bg-zinc-900 hover:bg-sky-900 duration-300 hover:scale-105 hover:shadow-lg text-white px-8 py-5  font-bold transition">
            Jetzt Kontaktieren
          </button>
        </Link>
      </div>
    </section>
  );
}
