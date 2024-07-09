// page.tsx
import Footer from "@/components/ui/footer";
import Ware from "./features";
import Hero from "./hero";


export default function Web3Page() {
    return (
        <>
            <section className="relative">
                <metadata />
                <Hero />
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="pt-32 pb-12 md:pt-40 md:pb-20">
                        <Ware />
                        <Footer />
                    </div>
                </div>
            </section>
        </>
    );
}
