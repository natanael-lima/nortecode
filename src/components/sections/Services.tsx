"use client"
import { useState } from "react"
import { servicesList} from "../lib/data";

export function Services() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [openCard, setOpenCard] = useState<number | null>(null)

  const toggleCard = (index: number) => {
    setOpenCard(openCard === index ? null : index)
  }
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
            const isOpen = openCard === index

            return (
              <div
                key={index}
                className={`group relative rounded-lg overflow-hidden p-6 transition-all duration-500 ease-out hover:scale-105 hover:bg-sky-200/50 rounded-lg hover:shadow-sky-100`}
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

                {/* Botón + */}
                <button
                  onClick={() => toggleCard(index)}
                  className=" absolute bottom-4 right-4 w-8 h-8 rounded-full   flex items-center justify-center text-sky-700/70 hover:bg-sky-700/75 hover:text-white transition"
                >
                  {isOpen ? "▲" : "▼"}
                </button>

                {/* Contenido desplegable */}
                <div
                  className={`transition-all duration-500 overflow-hidden ${
                    isOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
                  }`}
                >
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
