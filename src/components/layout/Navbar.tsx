'use client';
import { useState } from 'react';
import { LuAlignLeft } from 'react-icons/lu';
import { IoClose } from 'react-icons/io5';
import { FaWhatsapp } from 'react-icons/fa';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="absolute top-2 md:top-4 left-0 right-0 z-100 flex justify-center items-center px-6 md:px-10 py-2">
      {/* Contenedor principal */}
      <div className="flex w-full max-w-7xl justify-between items-center">
        {/* Logotipo */}
        <div className="text-xl font-bold">
          <a href="#">
            <img
              src="/images/logocompleto.png"
              alt="Logo"
              className="h-6 w-auto object-contain"
            />
          </a>
        </div>

        {/* Navegación desktop */}
          <nav className="hidden md:flex items-center gap-8 text-lg font-normal text-gray-800 dark:text-gray-200">
            <a href="#services" className="hover:text-emerald-200 transition">Servicios</a>
            <a href="#portfolio" className="hover:text-emerald-200 transition">Portafolio</a>
            <a href="#about-us" className="hover:text-emerald-200 transition">Sobre Nosotros</a>
            <a href="/blog" className="hover:text-emerald-200 transition">Blog</a>
            <a href="#contact" className="hover:text-emerald-200 transition">Contacto</a>

            {/* Botón especial de WhatsApp */}
            <a
              href="https://wa.me/5491112345678" // reemplaza con tu número de WhatsApp
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 border-1 px-4 py-2 rounded-lg transition hover:bg-teal-100 hover:text-teal-900 duration-300 ease-in-out"
            >
              <FaWhatsapp className="text-2xl" />
              WhatsApp
            </a>
          </nav>

        {/* Botón Hamburguesa para móviles */}
        <button
          className="md:hidden text-3xl text-sky-50"
          onClick={() => setMenuOpen(true)}
        >
          <LuAlignLeft className="scale-100 hover:scale-105 transition-transform duration-300 ease-in-out"/>
        </button>
      </div>

      {/* Menú lateral móvil */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 w-3xs bg-teal-50 text-teal-950 flex flex-col items-start px-6 py-6 animate-slide-in overflow-y-auto">
          {/* Botón cerrar */}
          <button
            className="self-end text-4xl text-teal-950 mb-6"
            onClick={() => setMenuOpen(false)}>
            <IoClose className="scale-100 hover:scale-105 transition-transform duration-300 ease-in-out" />
          </button>

         {/* Navegación móvil */}
          <nav className="flex flex-col gap-4 text-lg w-full font-medium text-sm">
            <a href="#services" onClick={() => setMenuOpen(false)} className="hover:text-sky-300 transition">Servicios</a>
            <a href="#portfolio" onClick={() => setMenuOpen(false)} className="hover:text-sky-300 transition">Portafolio</a>
            <a href="#about-us" onClick={() => setMenuOpen(false)} className="hover:text-sky-300 transition">Sobre Nosotros</a>
            <a href="/blog" onClick={() => setMenuOpen(false)} className="hover:text-sky-300transition">Blog</a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-sky-300transition">Contacto</a>

            {/* Botón WhatsApp en móvil */}
            <a
              href="https://wa.me/5491112345678"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2  py-2 rounded-lg transition hover:text-emerald-900 text-emerald-500 "
              onClick={() => setMenuOpen(false)}
            >
              <FaWhatsapp className="text-2xl" />
              WhatsApp
            </a>
          </nav>
        </div>
      )}
</header>

  );
}
