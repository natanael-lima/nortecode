"use client";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import AboutUs from "@/components/sections/AboutUs";
import { Services } from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Hero from "@/components/sections/Hero";
import MaintenanceNotice from "@/components/ui/MaintenanceNotice";



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
              <MaintenanceNotice />
              <Portfolio/>
              <AboutUs />
              <MaintenanceNotice />
              <Contact />
            </section>
          <Footer />
      </main>

  );
}

