"use client"

import { servicesList} from "../lib/data";

export function Services() {

  return (
      <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-left mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 mt-6 mx-auto">
            Ofrecemos soluciones tecnológicas completas para impulsar tu
            negocio al siguiente nivel
          </p>
        </div>
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((service, index) => {
            const IconComponent = service.icon

            return (
              <div
                key={index}
                className={`group relative overflow-hidden p-6 transition-all duration-500 ease-out hover:scale-105 bg-emerald-200 hover:bg-emerald-200/50 hover:shadow-sky-100 border-2 border-teal-200/20 rounded-lg `}
              >
                {/* Header visible siempre */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-sky-100">
                    <IconComponent className="h-8 w-8 text-sky-600" />
                  </div>
                  <div className="text-sm font-medium text-sky-900/30">0{index + 1}</div>
                </div>
                <h3 className="text-xl font-semibold text-sky-950/75">
                  {service.title}
                </h3>

                {/* Contenido */}
                <div>
                  <p className="text-sm text-sky-900/50 mb-6">{service.description}</p>
                  <button className="w-56 border rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 hover:bg-sky-600 hover:text-white hover:border-sky-600">
                    Solicitar Presupuesto →
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
