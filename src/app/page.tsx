"use client";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
//import OurServices from "@/components/OurServices";
import Pricing from "@/components/Portfolio";
import AboutUs from "@/components/AboutUs";
import Space from "@/components/Space";
import OurServices from "@/components/OurServices";
import Portfolio from "@/components/Portfolio";



export default function Page() {

  return (
      <main className="min-h-screen w-full bg-indigo-100 text-white">
        
          {/* Contenedor flex para centrar vertical y horizontalmente */}
          <div className="flex items-center">
            <Hero />
          </div>
           {/* Contenido centrado y más angosto */}
            <Header/>
            <section className="py-12">
              
              <AboutUs />
              <OurServices />
              <Portfolio/>
              <Contact />
            </section>
          <Footer />
      </main>

  );
}

