"use client";

import React from "react";
import { FaArrowRight } from "react-icons/fa";

const posts = [
  {
    title: "Tendencias en Inteligencia Artificial",
    description: "Cómo la IA está redefiniendo el desarrollo de software en 2025.",
    date: "22 Ago 2025",
    author: "Equipo Dev",
  },
  {
    title: "Buenas prácticas en seguridad",
    description: "Protege tu aplicación desde el inicio con estos consejos clave.",
    date: "15 Ago 2025",
    author: "Seguridad TI",
  },
  {
    title: "Optimización de APIs con Spring Boot",
    description: "Mejora el rendimiento y escalabilidad de tus microservicios.",
    date: "5 Ago 2025",
    author: "Backend Team",
  },
  {
    title: "Tendencias en Inteligencia Artificial",
    description: "Cómo la IA está redefiniendo el desarrollo de software en 2025.",
    date: "22 Ago 2025",
    author: "Equipo Dev",
  },
  {
    title: "Buenas prácticas en seguridad",
    description: "Protege tu aplicación desde el inicio con estos consejos clave.",
    date: "15 Ago 2025",
    author: "Seguridad TI",
  },
  {
    title: "Optimización de APIs con Spring Boot",
    description: "Mejora el rendimiento y escalabilidad de tus microservicios.",
    date: "5 Ago 2025",
    author: "Backend Team",
  },
  {
    title: "Tendencias en Inteligencia Artificial",
    description: "Cómo la IA está redefiniendo el desarrollo de software en 2025.",
    date: "22 Ago 2025",
    author: "Equipo Dev",
  },
  {
    title: "Buenas prácticas en seguridad",
    description: "Protege tu aplicación desde el inicio con estos consejos clave.",
    date: "15 Ago 2025",
    author: "Seguridad TI",
  },
  {
    title: "Optimización de APIs con Spring Boot",
    description: "Mejora el rendimiento y escalabilidad de tus microservicios.",
    date: "5 Ago 2025",
    author: "Backend Team",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-16 bg-gray-50 w-full h-[100vh] px-6 text-center">
      {/* Encabezado */}
      <h2 className="text-3xl font-bold mb-4">Blog</h2>
      <p className="text-lg max-w-2xl mx-auto mb-12 text-gray-600">
        Noticias, artículos de tecnología y tips de desarrollo.
      </p>

      {/* Grid de posts */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {posts.map((post, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 text-left 
                       cursor-pointer transition-transform duration-300 
                       hover:scale-105 hover:shadow-xl"
          >
            <div className="text-sm text-gray-500 mb-2">
              {post.date} • {post.author}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {post.title}
            </h3>
            <p className="text-gray-600 text-sm mb-4">{post.description}</p>
            <div className="flex items-center text-pink-600 font-medium text-sm group">
              Leer más
              <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
