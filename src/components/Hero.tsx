import React from 'react'
import { FaArrowDown, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { FiArrowUpRight } from 'react-icons/fi'
import { GrInstagram } from 'react-icons/gr'
import { TiSocialLinkedin } from 'react-icons/ti'

export default function Hero() {
  return (
  <section className="w-[100%] mx-auto h-[90vh] flex justify-center md:flex-row items-center
                      bg-radial-[at_25%_25%] from-sky-700 to-indigo-950 to-75% text-white 
                      p-8 relative overflow-hidden rounded-b-[3vw]">
       {/* Contenido */}                 
      <div className="flex w-full max-w-7xl justify-between items-center">
        {/* Texto a la izquierda */}
        <div className="flex w-full flex-col justify-center gap-2 mt-15">
          <h1 className="text-3xl md:text-6xl leading-tight">
            Creamos <span className="font-extrabold">Software</span> y soluciones digitales que hacen crecer tu 
            <span className="font-extrabold"> Negocio</span>.
          </h1>
          <p className="text-md md:text-xl">
            Somos una empresa en crecimiento de <span className="font-extrabold">desarrollo de software</span>, 
            especializada en <span className="font-extrabold">soluciones digitales</span>, 
            <span className="font-extrabold">integraciones modernas</span> y 
            <span className="font-extrabold"> tecnologías innovadoras</span> para hacer crecer tu proyecto.
          </p>
          {/* Botón principal */}
          <div className="flex flex-wrap gap-4 mt-6">
            <button className="bg-sky-700 hover:bg-sky-600/95 text-sky-100 px-8 py-3 rounded-full font-semibold transition flex items-center">
              Hablemos <FiArrowUpRight className="text-xl ml-2" />
            </button>
          </div>
          {/* Redes sociales */}
          <div className="flex gap-4 mt-6">
            <a href="#" className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition">
              <FaFacebookF />
            </a>
            <a href="#" className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition">
              <GrInstagram  />
            </a>
            <a href="#" className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Imagen a la derecha */}
        <div className="w-full md:w-[75%] h-full flex justify-center items-center">
          <img
            src="/images/2.png"
            alt="Hero"
            className="h-[100%] w-auto object-contain"
          />
        </div>
        {/* Botón scroll-down */}
        <button className="absolute bottom-6 left-6 animate-bounce p-3 rounded-full border border-white text-white hover:bg-white/20 transition">
          <FaArrowDown size={20} />
        </button>
      </div>
    </section>
  )
}
