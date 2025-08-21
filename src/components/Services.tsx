"use client"


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
import { useState } from "react"
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

  return (
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-left mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
                <p className="text-xl text-gray-600 mt-6  mx-auto">
                  Ofrecemos soluciones tecnológicas completas para impulsar tu negocio al siguiente nivel
                </p>
              </div>
          

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div
                  key={index}
                  className={`group relative rounded-lg overflow-hidden p-6 transition-all duration-500 ease-out cursor-pointer border-border/50 hover:bg-white hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 ${
                    hoveredCard === index ? "scale-105" : "hover:scale-105"
                  }`}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />

                  {/* Header */}
                  <div className="relative z-10 pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                        <IconComponent className="h-8 w-8 text-sky-600 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div className="text-sm font-medium text-muted-foreground opacity-60">0{index + 1}</div>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.subtitle}
                    </p>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 pt-0">
                    <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <button
                      className="w-full  border rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 transform group-hover:translate-y-[-2px]  group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary"
                    >
                     Solicitar Presupuesto
                      <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </button>
                  </div>

                  {/* Animated border */}
                  <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-primary/20 transition-all duration-500" />
                </div>
              )
            })}
          </div>
        </div>
      </section>

  )
}
