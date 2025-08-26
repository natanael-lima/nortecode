import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactSection() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("¡Gracias por suscribirte! Te enviaremos nuestras promociones.");
  };

  return (
    <section id="contact" className="py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        
        {/* Columna izquierda - Newsletter */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Solicita un Servicio
            </h2>
            <p className="text-gray-600 mb-6">
              Completa el formulario y nos pondremos en contacto contigo lo antes posible.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Nombre */}
              <input
                type="text"
                placeholder="Tu nombre completo"
                required
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
              />

              {/* Correo */}
              <input
                type="email"
                placeholder="Tu correo"
                required
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
              />

              {/* Teléfono */}
              <input
                type="tel"
                placeholder="Tu teléfono"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
              />

              {/* Tipo de servicio */}
              <select
                required
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                <option value="">Selecciona un servicio</option>
                <option value="desarrollo-web">Desarrollo Web</option>
                <option value="app-movil">Aplicaciones Móviles</option>
                <option value="consultoria">Consultoría</option>
                <option value="soporte">Soporte Técnico</option>
              </select>

              {/* Mensaje */}
              <textarea
                placeholder="Escribe los detalles de tu solicitud"
                
                required
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
              />

              {/* Botón enviar */}
              <button
                type="submit"
                className="w-full bg-sky-500 text-white py-3 rounded-lg font-bold hover:bg-sky-600 transition"
              >
                Enviar Solicitud
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-4">
              Tus datos serán tratados de forma confidencial y solo para fines de contacto.
            </p>
          </div>
        

        {/* Columna derecha - Información de contacto */}
        <div className="flex flex-col justify-center items-center text-sky-900 text-center space-y-4">
          <h3 className="text-2xl font-semibold">Contáctanos</h3>
          <p className="flex items-center gap-2">
            <FaPhoneAlt /> +54 387 123 4567
          </p>
          <p className="flex items-center gap-2">
            <FaEnvelope /> contacto@mitienda.com
          </p>
          <p className="flex items-center gap-2">
            <FaMapMarkerAlt /> Av. Siempre Viva 742, Tartagal
          </p>
          <p className="max-w-md">
            Nuestro equipo está disponible para responder tus dudas y ayudarte en lo que necesites.
          </p>
        </div>

      </div>
    </section>
  );
}
