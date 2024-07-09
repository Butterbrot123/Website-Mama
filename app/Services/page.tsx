import Footer from "@/components/ui/footer";
import Hero from "./hero";
import Image from 'next/image';
import Einschätzung from "@/public/images/einschätzung.png";
import Beratung from "@/public/images/beratung.jpg";
import Moving from "@/public/images/moving.jpg";
import Suche from "@/public/images/suche.jpg";

export const metadata = {
    title: 'Unsere Dienstleistungen - Saijers Antik & Design',
    description: 'Ankauf von Antiquitäten, Desing und Schmuck und Beratung und Schätzung',
}

export default function Web3Page() {
    return (
        <>
            <section className="relative">
                <Hero />
          
                <section>
                    <div className="max-w-6xl mx-auto px-8 pb-16 sm:pb-20">
                        <div className="py-12 md:py-20 sm:pb-44">
                            {/* Section header */}
                            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                                     {/* 2nd item  <h1 className="h2 mb-4 text-zinc-900">Unser Service</h1>       2nd item */}
                            </div>

                            {/* Items */}
                            <div className="grid gap-20">
                                {/* 1st item */}
                                <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                                    {/* Image */}
                                    <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                                        <Image className="max-w-full mx-auto md:max-w-none h-auto" src={Einschätzung} width={400} height={400} alt="Features 01" />
                                    </div>
                                    {/* Content */}
                                    <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                                        <div className="md:pr-4 lg:pr-12 xl:pr-16">
                                            <h3 className="h3 mb-3 text-zinc-900">Einschätzung Ihrer Kostbarkeiten</h3>
                                            <p className="text-xl text-gray-400 mb-4">Wenn Sie noch nicht bereit sind, sich von Ihren Kostbarkeiten zu trennen und gerne mehr über ihre Wertgegenstände erfahren möchten, dann besuchen wir Sie gerne kostenlos zu Hause. Unser Ziel ist es, Ihnen eine umfassende Beratung und Bewertung Ihrer Objekte anzubieten, damit Sie ein besseres Verständnis für deren Wert und Bedeutung erhalten. Unsere Experten stehen Ihnen zur Verfügung, um Ihre Fragen zu beantworten und Ihnen bei Bedarf Empfehlungen zu geben.
                                          </p>
                                        </div>
                                    </div>
                                </div>

                                {/* 2nd item */}
                                <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                                    {/* Image */}
                                    <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                                        <Image className="max-w-full mx-auto md:max-w-none h-auto" src={Moving} width={540} height={405} alt="Features 02" />
                                    </div>
                                    {/* Content */}
                                    <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                                        <div className="md:pl-4 lg:pl-12 xl:pl-16">
                                            <h3 className="h3 mb-3 text-zinc-900">Haushaltsauflösungen</h3>
                                            <p className="text-xl text-gray-400 mb-4">Wir bieten Haushaltsauflösungen mit Wertanrechnungen an, und wir verstehen, dass dies eine sehr persönliche und vertrauliche Angelegenheit ist. Ob es sich um die Räumung einer Wohnung, einen Umzug ins Seniorenheim oder einen Todesfall handelt, wir behandeln jeden Fall mit äußerster Diskretion.

Unser Ziel ist es, sicherzustellen, dass bei der Räumung keine wertvollen Antiquitäten übersehen oder versehentlich entsorgt werden. Mit unserem geschulten Auge für besondere alte Gegenstände wie Gemälde, Skulpturen oder Schmuck können wir Ihnen dabei helfen, Klarheit zu erlangen. Wir bewerten den Wert Ihrer Antiquitäten und unterstützen Sie dabei, ein besseres Verständnis für die Hinterlassenschaften zu entwickeln.
                                           </p>
                                        </div>
                                    </div>
                                </div>

                                {/* 3rd item */}
                                <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                                    {/* Image */}
                                    <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                                        <Image className="max-w-full mx-auto md:max-w-none h-auto" src={Suche} width={540} height={405} alt="Features 03" />
                                    </div>
                                    {/* Content */}
                                    <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                                        <div className="md:pr-4 lg:pr-12 xl:pr-16">
                                            <h3 className="h3 mb-3 text-zinc-900">Suchaufträge</h3>
                                            <p className="text-xl text-gray-400 mb-4">Wenn Sie nach etwas Bestimmtem suchen, können wir Ihnen gerne weiterhelfen, indem wir uns auf die Suche machen. Wir unterstützen Sie gerne dabei, das passende Objekt zu finden, das Ihren Anforderungen entspricht. Lassen Sie uns einfach wissen, wonach Sie suchen, sei es ein bestimmtes Antiquitätenstück, ein Kunstwerk oder ein Sammlerobjekt, und wir werden unser Bestes tun, um es für Sie zu finden.</p>
                                        </div>
                                    </div>
                                </div>
                                  {/* 2nd item */}
                                  <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                                    {/* Image */}
                                    <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                                        <Image className="max-w-full mx-auto md:max-w-none h-auto" src={Beratung} width={540} height={405} alt="Features 02" />
                                    </div>
                                    {/* Content */}
                                    <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                                        <div className="md:pl-4 lg:pl-12 xl:pl-16">
                                            <h3 className="h3 mb-3 text-zinc-900">Beratung</h3>
                                            <p className="text-xl text-gray-400 mb-4">Wir bieten Haushaltsauflösungen mit Wertanrechnungen an, und wir verstehen, dass dies eine sehr persönliche und vertrauliche Angelegenheit ist. Ob es sich um die Räumung einer Wohnung, einen Umzug ins Seniorenheim oder einen Todesfall handelt, wir behandeln jeden Fall mit äußerster Diskretion.

Unser Ziel ist es, sicherzustellen, dass bei der Räumung keine wertvollen Antiquitäten übersehen oder versehentlich entsorgt werden. Mit unserem geschulten Auge für besondere alte Gegenstände wie Gemälde, Skulpturen oder Schmuck können wir Ihnen dabei helfen, Klarheit zu erlangen. Wir bewerten den Wert Ihrer Antiquitäten und unterstützen Sie dabei, ein besseres Verständnis für die Hinterlassenschaften zu entwickeln.
                                           </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </section>
        </>
    );
}
