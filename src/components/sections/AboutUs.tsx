import React from 'react';
import { FaAward, FaUsers } from 'react-icons/fa';
import Image from 'next/image';
import { FiTarget, FiZap } from 'react-icons/fi';
import { MdMiscellaneousServices } from 'react-icons/md';

export default function AboutUs() {
  return (
      
      <section id="about-us" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center py-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Sobre <span className="text-teal-700">Nosotros</span>
          </h1>
          <p className="text-lg text-gray-600/70 max-w-2xl mx-auto px-4">
            Generando soluciones a las empresas con software innovador desde 2025.
          </p>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-neutral-200/50  group overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Image Column */}
            <div className="relative h-64 lg:h-auto">
              <img
                src="/images/nosotros.png"
                alt="Professional team working together"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 "></div>
            </div>

            {/* Text Information Column */}
            <div className="p-2 lg:p-12">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4"> 
                  Liderando la innovación en software.
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Somos una empresa de desarrollo de software con visión de futuro, dedicada 
                    a crear soluciones innovadoras que impulsan el éxito empresarial. Nuestro 
                    equipo de desarrolladores y diseñadores expertos trabaja incansablemente 
                    para ofrecer productos que superen las expectativas y transformen la forma en que operan las empresas.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <FaUsers className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Equipo de Expertos</h4>
                      <p className="text-sm text-gray-600">3 professionals</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <FiTarget  className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Proyectos Entregados</h4>
                      <p className="text-sm text-gray-600">2+ successful</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <MdMiscellaneousServices  className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Multiples Servicios</h4>
                      <p className="text-sm text-gray-600">9+ services</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                      <FiZap  className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Años de Experiencia</h4>
                      <p className="text-sm text-gray-600">1+ years strong</p>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <p className="text-gray-600 mb-4">
                    Nuestra misión es conectar las necesidades empresariales complejas con 
                    las soluciones de software intuitivas. Creemos en el poder de la tecnología
                     para transformar las organizaciones y crear valor duradero.
                  </p>
                  <button className="group px-4 py-3  font-medium transition-all cursor-pointer bg-teal-700 text-white shadow-md hover:scale-102 hover:shadow-lg hover:shadow-teal-500/20 text-teal-50 rounded-lg  transition-all duration-300 ease-in-out flex items-center">
                          Leer mas sobre nosotros
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-neutral-200/50  hover:shadow-xl transition-shadow duration-300 group">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <FiTarget  className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Nuestra Vision</h3>
            <p className="text-gray-600">
              Ser el proveedor líder de soluciones de software
              innovadoras que permitan a las empresas alcanzar su máximo potencial en la era digital
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6  border-2 border-neutral-200/50  hover:shadow-xl transition-shadow duration-300 group">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <FaUsers className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Nuestro Valor</h3>
            <p className="text-gray-600">
              La innovación, la integridad y la excelencia impulsan todo lo que hacemos. Nos comprometemos 
              a ofrecer soluciones de calidad manteniendo los más altos estándares éticos.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6  border-2 border-neutral-200/50  hover:shadow-xl transition-shadow duration-300 group">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <FaAward className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Nuestro Enfoque</h3>
            <p className="text-gray-600">
              Combinamos tecnología de vanguardia con una profunda experiencia 
              en la industria para crear soluciones potentes y fáciles de usar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}