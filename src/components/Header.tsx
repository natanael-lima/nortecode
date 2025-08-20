'use client';
import { useState } from 'react';
import { LuAlignLeft } from 'react-icons/lu';
import { IoClose } from 'react-icons/io5';
import { FaWhatsapp } from 'react-icons/fa';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute top-8 left-0 right-0 z-50 flex justify-center items-center px-6 md:px-12 py-4">
    {/* Contenedor principal */}
    <div className="flex w-full max-w-7xl justify-between items-center">
      
      {/* Logotipo */}
      <div className="text-xl font-bold">
        <a href="#">
          <img
            src="/images/logo-v2.png"
            alt="Logo"
            className="h-15 w-auto object-contain"
          />
        </a>
      </div>

    {/* Navegación desktop */}
    <nav className="hidden md:flex items-center gap-10 text-lg font-medium text-gray-800 dark:text-gray-200">
      <a href="#" className="hover:text-sky-300 transition">Inicio</a>
      <a href="#" className="hover:text-sky-300 transition">Sobre Nosotros</a>
      <a href="#" className="hover:text-sky-300 transition">Servicios</a>
      <a href="#" className="hover:text-sky-300 transition">Portafolio</a>
      <a href="#" className="hover:text-sky-300 transition">Blog</a>
      <a href="#" className="hover:text-sky-300 transition">Contacto</a>

      {/* Botón especial de WhatsApp */}
      <a
        href="https://wa.me/5491112345678" // reemplaza con tu número de WhatsApp
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 border-2 border-sky-50 text-sky-50 px-4 py-2 rounded-full transition hover:bg-sky-50 hover:text-sky-900"
      >
        <FaWhatsapp className="text-2xl" />
        WhatsApp
      </a>
    </nav>

    {/* Botón Hamburguesa para móviles */}
    <button
      className="md:hidden text-3xl text-lime-500"
      onClick={() => setMenuOpen(true)}
    >
      <LuAlignLeft />
    </button>
  </div>

  {/* Menú lateral móvil */}
  {menuOpen && (
    <div className="fixed inset-0 z-50 bg-zinc-900 text-white flex flex-col items-start px-6 py-6 animate-slide-in">
      {/* Botón cerrar */}
      <button
        className="self-end text-3xl text-lime-400 mb-6"
        onClick={() => setMenuOpen(false)}
      >
        <IoClose />
      </button>

      {/* Navegación móvil */}
      <nav className="flex flex-col gap-6 text-lg w-full font-medium">
        <a href="#" onClick={() => setMenuOpen(false)} className="hover:text-lime-500 transition">Inicio</a>
        <a href="#" onClick={() => setMenuOpen(false)} className="hover:text-lime-500 transition">Sobre Nosotros</a>
        <a href="#" onClick={() => setMenuOpen(false)} className="hover:text-lime-500 transition">Servicios</a>
        <a href="#" onClick={() => setMenuOpen(false)} className="hover:text-lime-500 transition">Portafolio</a>
        <a href="#" onClick={() => setMenuOpen(false)} className="hover:text-lime-500 transition">Blog</a>
        <a href="#" onClick={() => setMenuOpen(false)} className="hover:text-lime-500 transition">Ponerse en Contacto</a>

        {/* Botón WhatsApp en móvil */}
        <a
          href="https://wa.me/5491112345678"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 border-2 border-lime-500 text-lime-500 px-4 py-2 rounded-full transition hover:bg-lime-500 hover:text-white mt-4"
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
