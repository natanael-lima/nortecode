"use client"
import { useState } from "react"

import { 
  FaGlobe, 
  FaDesktop, 
  FaLaptop, 
  FaShoppingCart, 
  FaCreditCard, 
  FaCog, 
  FaFileAlt, 
  FaBolt, 
  FaWrench 
} from "react-icons/fa";

import { Button } from "./Button"

const services = [
  {
    title: "Landing Page",
    subtitle: "Páginas de aterrizaje optimizadas para conversión",
    icon: FaGlobe,
    description: "Diseños atractivos que convierten visitantes en clientes",
  },
  {
    title: "Aplicaciones Web",
    subtitle: "Soluciones web modernas y escalables",
    icon: FaDesktop,
    description: "Aplicaciones web responsivas con tecnología de vanguardia",
  },
  {
    title: "Aplicaciones de Escritorio",
    subtitle: "Software nativo para Windows, Mac y Linux",
    icon: FaLaptop,
    description: "Aplicaciones de escritorio potentes y multiplataforma",
  },
  {
    title: "E-Commerce",
    subtitle: "Tiendas online completas y seguras",
    icon: FaShoppingCart,
    description: "Plataformas de comercio electrónico con gestión integral",
  },
  {
    title: "POS (Punto de Venta)",
    subtitle: "Sistemas de punto de venta inteligentes",
    icon: FaCreditCard,
    description: "Soluciones POS modernas para tu negocio",
  },
  {
    title: "Sistemas de Gestión",
    subtitle: "ERP y CRM personalizados para tu empresa",
    icon: FaCog,
    description: "Sistemas de gestión empresarial a medida",
  },
  {
    title: "CMS & Blogs",
    subtitle: "Gestores de contenido fáciles de usar",
    icon: FaFileAlt,
    description: "Plataformas de contenido intuitivas y potentes",
  },
  {
    title: "Integraciones con APIs",
    subtitle: "Conecta tus sistemas y automatiza procesos",
    icon: FaBolt,
    description: "Integraciones seamless con servicios externos",
  },
  {
    title: "Soporte & Mantenimiento",
    subtitle: "Mantenimiento continuo y soporte técnico",
    icon: FaWrench,
    description: "Soporte 24/7 y mantenimiento preventivo",
  },
]

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
          {services.map((service, index) => {
            const IconComponent = service.icon
            const isOpen = openCard === index

            return (
              <div
                key={index}
                className={`group relative rounded-lg overflow-hidden p-6 transition-all duration-500 ease-out hover:scale-105 hover:bg-sky-100 rounded-lg hover:shadow-sky-100`}
              >
                {/* Header visible siempre */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-sky-100">
                    <IconComponent className="h-8 w-8 text-sky-600" />
                  </div>
                  <div className="text-sm font-medium text-gray-500">0{index + 1}</div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>

                {/* Botón + */}
                <button
                  onClick={() => toggleCard(index)}
                  className="absolute bottom-4 right-4 w-8 h-8 rounded-full  bg-sky-300/30 flex items-center justify-center text-sky-700/70 hover:bg-sky-700/80 hover:text-white transition"
                >
                  {isOpen ? "−" : "+"}
                </button>

                {/* Contenido desplegable */}
                <div
                  className={`transition-all duration-500 overflow-hidden ${
                    isOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-600 mb-3">{service.subtitle}</p>
                  <p className="text-sm text-gray-500 mb-6">{service.description}</p>

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
