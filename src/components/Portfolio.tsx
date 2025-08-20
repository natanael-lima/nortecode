import React from 'react';
import { FaCheck, FaWhatsapp } from 'react-icons/fa';

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-16 bg-gray-50 w-full px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Portafolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-white shadow rounded-2xl p-4">Proyecto 1</div>
          <div className="bg-white shadow rounded-2xl p-4">Proyecto 2</div>
          <div className="bg-white shadow rounded-2xl p-4">Proyecto 3</div>
        </div>
      </section>
  )
}