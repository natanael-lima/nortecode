import React from 'react';
import { FaHeartbeat } from 'react-icons/fa';
import Image from 'next/image';

export default function AboutUs() {
  return (
      
      <section id="about" className="h-[70%] py-16  w-full px-6 text-center">
        {/* Sobre Nosotros */}
        <h2 className="text-3xl font-bold mb-6 text-zinc-700">Sobre Nosotros</h2>
        <p className="text-lg">
          Somos <span className="font-bold">Lima, Loto y Gaitán</span>, un equipo de
          apasionados por la tecnología. Nuestra misión es crear soluciones digitales
          que transformen negocios y nuestra visión es ser referentes en innovación.
        </p>
        <div className="mt-8 flex justify-center">
          <img
            src="/equipo.jpg"
            alt="Nuestro equipo"
            className="rounded-2xl shadow-lg w-72"
          />
        </div>
    </section>
  );
}