import React from 'react'
import { FaArrowDown, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { FiArrowUpRight } from 'react-icons/fi'
import { GrInstagram } from 'react-icons/gr'
import { TiSocialLinkedin } from 'react-icons/ti'
import TechCarousel from '../ui/TechCarousel'

export default function Hero() {
  return (
  <section className="w-full mx-auto h-[80vh] bg-radial-[at_0%_80%] from-emerald-700 to-teal-950 to-55%
                   text-white p-8 relative overflow-hidden rounded-b-[3vw] flex items-center">
    {/* Grid: 2 columnas (texto/imagen)*/}
    <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      {/* Columna Texto */}
      <div className="flex w-full flex-col justify-center gap-2 mt-15">
        <h1 className="text-3xl md:text-6xl leading-tight">
          Creamos <span className="font-extrabold text-emerald-200">Software</span> y soluciones digitales.
        </h1>
        <p className="text-md md:text-xl">
          Somos una empresa en crecimiento de <span className="font-extrabold">desarrollo de software</span>, 
          especializada en <span className="font-extrabold">soluciones digitales.</span>
        </p>

        {/* Botón principal */}
        <div className="flex flex-wrap gap-4 mt-6">
          <button className="border-1 border-teal-200/30 bg-linear-to-t from-teal-700 opacity-90 to-emerald-800 hover:opacity-100 cursor-pointer text-teal-100 px-8 py-3 rounded-lg font-semibold transition flex items-center ">
            Hablemos <FiArrowUpRight className="text-xl ml-2" />
          </button>
        </div>

        {/* Redes sociales */}
        <div className="flex gap-4 mt-6">
          <a href="#" className="p-3 bg-teal-300/10 hover:bg-teal-300/20 rounded-full transition">
            <FaFacebookF />
          </a>
          <a href="#" className="p-3 bg-teal-300/10 hover:bg-teal-300/20 rounded-full transition">
            <GrInstagram />
          </a>
          <a href="#" className="p-3 bg-teal-300/10 hover:bg-teal-300/20 rounded-full transition">
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      {/* Columna Imagen */}
      <div className="w-full md:w-[60%] h-full mx-auto flex justify-center items-center ">
        <img
          src="/images/0.png"
          alt="Hero"
          className="h-full w-auto object-contain hidden md:block mx-auto opacity-50 rotate-35"
        />
      </div>

      {/* Fila completa: Carrusel (ocupa ambas columnas en md+) */}
      <div className="col-span-1 md:col-span-2 mt-12">
        <TechCarousel />
      </div>
    </div>

    {/* Botón scroll-down */}
    <button className="absolute z-10 bottom-6 left-6 animate-bounce p-3 rounded-full border border-white text-white hover:bg-white/20 transition">
      <FaArrowDown size={20} />
    </button>
  </section>

  )
}
