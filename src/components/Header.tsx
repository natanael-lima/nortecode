'use client';
import { useState } from 'react';
import { LuAlignLeft } from 'react-icons/lu';
import { IoClose } from 'react-icons/io5';
import { FaWhatsapp } from 'react-icons/fa';
import { MdKeyboardArrowDown } from 'react-icons/md';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="absolute top-2 md:top-4 left-0 right-0 z-50 flex justify-center items-center px-6 md:px-10 py-2">
      {/* Contenedor principal */}
      <div className="flex w-full max-w-7xl justify-between items-center">
        {/* Logotipo */}
        <div className="text-xl font-bold">
          <a href="#">
            <img
              src="/images/logo-v2.png"
              alt="Logo"
              className="h-12 w-auto object-contain"
            />
          </a>
        </div>

        {/* Navegación desktop */}
          <nav className="hidden md:flex items-center gap-8 text-lg font-normal text-gray-800 dark:text-gray-200">
            <a href="#" className="hover:text-sky-400 transition">Inicio</a>
            <a href="#" className="hover:text-sky-400 transition">Sobre Nosotros</a>
            
            {/* Dropdown de Servicios */}
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-sky-300 transition">
                Servicios <MdKeyboardArrowDown
                  className="transition-transform duration-200 group-hover:rotate-180"/>
              </button>
              
                <div className="absolute left-0 mt-0 hidden group-hover:block bg-white dark:bg-sky-950 shadow-lg rounded-lg w-72">
                 <ul className="flex flex-col text-gray-800 dark:text-gray-200">
                    <li><a href="#" className="block px-4 py-2 hover:bg-sky-50 dark:hover:bg-sky-700 hover:rounded-lg">Landing Page</a></li>
                    <li><a href="#" className="block px-4 py-2 hover:bg-sky-50 dark:hover:bg-sky-700">Aplicaciones Web</a></li>
                    <li><a href="#" className="block px-4 py-2 hover:bg-sky-50 dark:hover:bg-sky-700">Aplicaciones de Escritorio</a></li>
                    <li><a href="#" className="block px-4 py-2 hover:bg-sky-50 dark:hover:bg-sky-700">E-Commerce</a></li>
                    <li><a href="#" className="block px-4 py-2 hover:bg-sky-50 dark:hover:bg-sky-700">Punto de Venta (POS)</a></li>
                    <li><a href="#" className="block px-4 py-2 hover:bg-sky-50 dark:hover:bg-sky-700">Sistemas de Gestión</a></li>
                    <li><a href="#" className="block px-4 py-2 hover:bg-sky-50 dark:hover:bg-sky-700">CMS & Blogs</a></li>
                    <li><a href="#" className="block px-4 py-2 hover:bg-sky-50 dark:hover:bg-sky-700 ">Integraciones con APIs</a></li>
                    <li><a href="#" className="block px-4 py-2 hover:bg-sky-50 dark:hover:bg-sky-700 hover:rounded-lg">Soporte & Mantenimiento</a></li>
                  </ul>
               
                </div>
              
            </div>
            <a href="#" className="hover:text-sky-400 transition">Portafolio</a>
            <a href="#" className="hover:text-sky-400 transition">Blog</a>
            <a href="#" className="hover:text-sky-400 transition">Contacto</a>

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
          className="md:hidden text-3xl text-sky-50"
          onClick={() => setMenuOpen(true)}
        >
          <LuAlignLeft className="scale-100 hover:scale-105 transition-transform duration-300 ease-in-out"/>
        </button>
      </div>

      {/* Menú lateral móvil */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-indigo-950 text-white flex flex-col items-start px-6 py-6 animate-slide-in overflow-y-auto">
          {/* Botón cerrar */}
          <button
            className="self-end text-4xl text-sky-50 mb-6"
            onClick={() => setMenuOpen(false)}
          >
            <IoClose className="scale-100 hover:scale-105 transition-transform duration-300 ease-in-out" />
          </button>

         {/* Navegación móvil */}
          <nav className="flex flex-col gap-4 text-lg w-full font-medium">
            <a href="#" onClick={() => setMenuOpen(false)} className="hover:text-sky-300 transition">Inicio</a>
            <a href="#" onClick={() => setMenuOpen(false)} className="hover:text-sky-300 transition">Sobre Nosotros</a>
            
            {/* Dropdown Servicios en móvil */}
            <div className="w-full">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center w-full hover:text-sky-300 transition focus"
              >
                <span>Servicios</span>
                <MdKeyboardArrowDown
                  className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                />
              </button>

              {servicesOpen && (
                <ul className="mt-2 ml-4 flex flex-col gap-2 text-base text-gray-200">
                  <li><a href="#" className="block px-2 py-1 hover:text-sky-400">Landing Page</a></li>
                  <li><a href="#" className="block px-2 py-1 hover:text-sky-400">Aplicaciones Web</a></li>
                  <li><a href="#" className="block px-2 py-1 hover:text-sky-400">Aplicaciones de Escritorio</a></li>
                  <li><a href="#" className="block px-2 py-1 hover:text-sky-400">E-Commerce</a></li>
                  <li><a href="#" className="block px-2 py-1 hover:text-sky-400">POS (Punto de Venta)</a></li>
                  <li><a href="#" className="block px-2 py-1 hover:text-sky-400">Sistemas de Gestión</a></li>
                  <li><a href="#" className="block px-2 py-1 hover:text-sky-400">CMS & Blogs</a></li>
                  <li><a href="#" className="block px-2 py-1 hover:text-sky-400">Integraciones con APIs</a></li>
                  <li><a href="#" className="block px-2 py-1 hover:text-sky-400">Soporte & Mantenimiento</a></li>
                </ul>
              )}
            </div>

            <a href="#" onClick={() => setMenuOpen(false)} className="hover:text-sky-300 transition">Portafolio</a>
            <a href="#" onClick={() => setMenuOpen(false)} className="hover:text-sky-300transition">Blog</a>
            <a href="#" onClick={() => setMenuOpen(false)} className="hover:text-sky-300transition">Contacto</a>

            {/* Botón WhatsApp en móvil */}
            <a
              href="https://wa.me/5491112345678"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border-2 border-sky-100 text-sky-100 px-4 py-2 rounded-full transition hover:bg-sky-100 hover:text-sky-900 mt-6"
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
