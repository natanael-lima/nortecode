"use client";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Space from "@/components/Space";
import Portfolio from "@/components/Portfolio";
import { Services } from "@/components/Services";



export default function Page() {

  return (
      <main className="min-h-screen w-full bg-sky-50 text-black">
        
          {/* Contenedor flex para centrar vertical y horizontalmente */}
          <div className="flex items-center">
            <Hero />
          </div>
           {/* Contenido centrado y más angosto */}
            <Header/>
            <section className="py-12">
              <Services />
              <Portfolio/>
              <AboutUs />
              <Contact />
            </section>
          <Footer />
      </main>

  );
}

