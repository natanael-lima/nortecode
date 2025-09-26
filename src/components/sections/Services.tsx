"use client"

import { FaArrowRight } from "react-icons/fa";
import { servicesList} from "../lib/data";

export function Services() {

  return (
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center py-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Nuestros <span className="text-teal-700">Servicios</span>
          </h1>
          <p className="text-lg text-gray-600/70 max-w-2xl mx-auto px-4">
             Ofrecemos soluciones tecnológicas completas para impulsar tu
            negocio al siguiente nivel.
          </p>
        </div>
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {servicesList.map((service, index) => {
            const IconComponent = service.icon

            return (
              <div
                key={index}
                className={`group relative overflow-hidden p-6 transition-all duration-500 ease-out  hover:scale-103 border-2 border-neutral-200/50 rounded-lg bg-neutral-100/40 hover:bg-neutral-200/40 hover:shadow-sky-100  `}
              >
                {/* Header visible siempre */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl  bg-teal-500/15 ">
                    <IconComponent className="h-8 w-8 text-teal-600" />
                  </div>
                  <div className="text-sm font-medium text-neutral-800/40">0{index + 1}</div>
                </div>
                <h3 className="text-xl font-semibold text-teal-950">
                  {service.title}
                </h3>

                {/* Contenido */}
                <div>
                  <p className="text-sm text-neutral-600/80 mb-6">{service.description}</p>

                  <button className="text-sm text-teal-600 hover:text-teal-500 cursor-pointer py-2 font-semibold transition-all duration-300 ease-in-out flex items-center ">
                            Leer Más <FaArrowRight className="ml-2 " />
                  </button>
                </div>

                
              </div>
            )
          })}
        </div>
      </div>
    </section>

  )
}
