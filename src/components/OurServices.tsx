import React, { useState } from 'react';
import { FaAngular, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiSpringboot } from 'react-icons/si';


export default function OurServices() {
  return (
    <section id="services" className="py-16 bg-gray-50 w-full px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="p-6 bg-white shadow rounded-2xl">Desarrollo de software a medida</div>
          <div className="p-6 bg-white shadow rounded-2xl">Aplicaciones web y móviles</div>
          <div className="p-6 bg-white shadow rounded-2xl">Integraciones y automatización</div>
          <div className="p-6 bg-white shadow rounded-2xl">Consultoría tecnológica</div>
        </div>
        <section id="tech" className="py-16 w-full px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Tecnologías</h2>
        <div className="flex justify-center gap-12 text-6xl text-pink-500">
          <FaReact />
          <FaAngular />
          <SiSpringboot />
          <FaNodeJs />
        </div>
      </section>
    </section>
      
  );
}